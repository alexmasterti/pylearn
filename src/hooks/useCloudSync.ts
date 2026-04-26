import { useEffect, useCallback, useRef } from 'react';
import type { User } from '@supabase/supabase-js';
import type { UserProgress } from '../types';
import { supabase } from '../lib/supabase';

const SYNC_DEBOUNCE = 2000;
const STORAGE_KEY = 'pylearn_progress';

const defaultProgress: UserProgress = {
  completedLessons: [],
  xp: 0,
  streak: 0,
  lastActiveDate: '',
  level: 1,
};

export function useCloudSync(
  user: User | null,
  progress: UserProgress,
  onLoadCloud: (progress: UserProgress) => void,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastUserId = useRef<string | null>(null);
  const isSyncing = useRef(false);

  // Load user-specific progress on login / user change
  useEffect(() => {
    if (!supabase || !user) {
      // User logged out - reset to default
      if (lastUserId.current !== null) {
        lastUserId.current = null;
        localStorage.removeItem(STORAGE_KEY);
        onLoadCloud(defaultProgress);
      }
      return;
    }

    // Same user, already loaded
    if (lastUserId.current === user.id) return;
    lastUserId.current = user.id;
    isSyncing.current = true;

    (async () => {
      const { data } = await supabase
        .from('user_progress')
        .select('progress_data')
        .eq('user_id', user.id)
        .single();

      if (data?.progress_data) {
        // Always load this user's cloud progress
        onLoadCloud(data.progress_data as UserProgress);
      } else {
        // New user - start fresh, save empty progress
        onLoadCloud(defaultProgress);
        await saveToCloud(user.id, defaultProgress);
      }
      // Small delay to prevent the save effect from overwriting what we just loaded
      setTimeout(() => { isSyncing.current = false; }, 500);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Save to cloud on progress change (debounced)
  useEffect(() => {
    if (!supabase || !user || isSyncing.current) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      saveToCloud(user.id, progress);
    }, SYNC_DEBOUNCE);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [user, progress]);

  const forceSync = useCallback(async () => {
    if (!supabase || !user) return;
    await saveToCloud(user.id, progress);
  }, [user, progress]);

  return { forceSync };
}

async function saveToCloud(userId: string, progress: UserProgress) {
  if (!supabase) return;
  await supabase
    .from('user_progress')
    .upsert(
      {
        user_id: userId,
        progress_data: progress,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
}
