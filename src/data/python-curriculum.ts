import type { Course } from '../types';

export const pythonCourse: Course = {
  id: 'python',
  title: 'Python',
  icon: '\uD83D\uDC0D',
  chapters: [
    {
      id: 'ch1-basics',
      title: 'Python Basics',
      description: 'Learn the fundamentals of Python programming',
      icon: '\uD83C\uDF31',
      lessons: [
        {
          id: 'l1-hello-world',
          title: 'Hello, World!',
          type: 'theory',
          xp: 10,
          theory: `# Welcome to Python!

Python is one of the most popular programming languages in the world. It's known for being easy to read and write.

## Your First Program

Every programmer starts with a simple program that displays "Hello, World!" on the screen.

In Python, we use the \`print()\` function to display text:

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function takes whatever you put inside the parentheses and displays it on the screen.

## Key Points
- \`print()\` is a **built-in function** in Python
- Text must be wrapped in **quotes** (single \`'\` or double \`"\`)
- Python executes code **line by line**, from top to bottom`,
        },
        {
          id: 'l2-hello-code',
          title: 'Write Your First Program',
          type: 'code',
          xp: 20,
          codeExercise: {
            instructions: 'Use the `print()` function to display "Hello, World!" on the screen.',
            starterCode: '# Write your first Python program below\n',
            solution: 'print("Hello, World!")',
            tests: [
              {
                expectedOutput: 'Hello, World!',
                description: 'Should print "Hello, World!"',
              },
            ],
            hints: ['Use print() with the text inside quotes', 'Remember to use parentheses after print'],
          },
        },
        {
          id: 'l3-print-quiz',
          title: 'Print Function Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'Which function is used to display output in Python?',
              options: ['echo()', 'print()', 'display()', 'show()'],
              correctIndex: 1,
              explanation: 'The print() function is Python\'s built-in function for displaying output to the screen.',
            },
            {
              question: 'What will print("Hello") display?',
              options: ['"Hello"', 'Hello', 'print(Hello)', 'Nothing'],
              correctIndex: 1,
              explanation: 'print() displays the text between the quotes, without the quotes themselves.',
            },
            {
              question: 'Which of these is correct Python syntax?',
              options: ['print "Hello"', 'Print("Hello")', 'print("Hello")', 'PRINT("Hello")'],
              correctIndex: 2,
              explanation: 'Python is case-sensitive. The correct function name is print (lowercase) and requires parentheses.',
            },
          ],
        },
        {
          id: 'l4-multiple-prints',
          title: 'Multiple Print Statements',
          type: 'code',
          xp: 20,
          codeExercise: {
            instructions: 'Print your name on the first line and your favorite color on the second line.\n\nExpected output:\n```\nAlex\nBlue\n```',
            starterCode: '# Print your name\n\n# Print your favorite color\n',
            solution: 'print("Alex")\nprint("Blue")',
            tests: [
              {
                expectedOutput: 'Alex\nBlue',
                description: 'Should print name and color on separate lines',
              },
            ],
            hints: ['Use two separate print() statements', 'Each print() automatically adds a new line'],
          },
        },
      ],
    },
    {
      id: 'ch2-variables',
      title: 'Variables & Data Types',
      description: 'Store and work with different types of data',
      icon: '\uD83D\uDCE6',
      lessons: [
        {
          id: 'l5-variables-theory',
          title: 'What are Variables?',
          type: 'theory',
          xp: 10,
          theory: `# Variables

Variables are like **labeled boxes** that store data in your program.

## Creating Variables

In Python, you create a variable by giving it a name and a value:

\`\`\`python
name = "Alice"
age = 25
height = 5.6
is_student = True
\`\`\`

## Naming Rules
- Must start with a **letter** or **underscore** (\`_\`)
- Can contain letters, numbers, and underscores
- **Case-sensitive**: \`Name\` and \`name\` are different
- Use **snake_case** for multi-word names: \`first_name\`

## Data Types
| Type | Example | Description |
|------|---------|-------------|
| \`str\` | \`"Hello"\` | Text (string) |
| \`int\` | \`42\` | Whole numbers |
| \`float\` | \`3.14\` | Decimal numbers |
| \`bool\` | \`True\` / \`False\` | Boolean values |

## Using Variables with print()

\`\`\`python
name = "Alice"
print(name)  # Output: Alice
\`\`\``,
        },
        {
          id: 'l6-variables-code',
          title: 'Create Variables',
          type: 'code',
          xp: 20,
          codeExercise: {
            instructions: 'Create a variable called `name` with your name, and a variable called `age` with your age. Then print both using print().\n\nExpected output format:\n```\nAlice\n25\n```',
            starterCode: '# Create your variables\nname = \nage = \n\n# Print them\n',
            solution: 'name = "Alice"\nage = 25\nprint(name)\nprint(age)',
            tests: [
              {
                expectedOutput: 'Alice\n25',
                description: 'Should print name and age on separate lines',
              },
            ],
            hints: [
              'Strings need quotes: name = "Alice"',
              'Numbers don\'t need quotes: age = 25',
              'Use print(variable_name) to display the value',
            ],
          },
        },
        {
          id: 'l7-types-quiz',
          title: 'Data Types Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'What data type is the value 42?',
              options: ['str', 'float', 'int', 'bool'],
              correctIndex: 2,
              explanation: '42 is a whole number, which is an integer (int) in Python.',
            },
            {
              question: 'What data type is "Hello"?',
              options: ['int', 'str', 'char', 'text'],
              correctIndex: 1,
              explanation: 'Text enclosed in quotes is a string (str) in Python.',
            },
            {
              question: 'Which variable name is valid in Python?',
              options: ['2name', 'my-name', 'my_name', 'my name'],
              correctIndex: 2,
              explanation: 'Variable names can\'t start with numbers, contain hyphens, or have spaces. my_name uses valid snake_case.',
            },
          ],
        },
        {
          id: 'l8-fstrings',
          title: 'String Formatting',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Use an f-string to print: "My name is Alice and I am 25 years old."\n\nF-strings let you embed variables inside strings using `f"text {variable} text"`.',
            starterCode: 'name = "Alice"\nage = 25\n\n# Use an f-string to print the message\nprint(f"")\n',
            solution: 'name = "Alice"\nage = 25\nprint(f"My name is {name} and I am {age} years old.")',
            tests: [
              {
                expectedOutput: 'My name is Alice and I am 25 years old.',
                description: 'Should print formatted string with name and age',
              },
            ],
            hints: [
              'Put variable names inside curly braces: {name}',
              'The f before the quotes enables f-string formatting',
            ],
          },
        },
      ],
    },
    {
      id: 'ch3-operators',
      title: 'Operators & Expressions',
      description: 'Do math and compare values',
      icon: '\u2795',
      lessons: [
        {
          id: 'l9-math-theory',
          title: 'Math Operators',
          type: 'theory',
          xp: 10,
          theory: `# Math Operators

Python can work as a powerful calculator!

## Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`10 - 4\` | \`6\` |
| \`*\` | Multiplication | \`3 * 4\` | \`12\` |
| \`/\` | Division | \`15 / 4\` | \`3.75\` |
| \`//\` | Floor Division | \`15 // 4\` | \`3\` |
| \`%\` | Modulo | \`15 % 4\` | \`3\` |
| \`**\` | Exponent | \`2 ** 3\` | \`8\` |

## Order of Operations

Python follows standard math order (PEMDAS):
1. **P**arentheses \`()\`
2. **E**xponents \`**\`
3. **M**ultiplication & **D**ivision \`* / // %\`
4. **A**ddition & **S**ubtraction \`+ -\`

\`\`\`python
result = 2 + 3 * 4    # = 14 (not 20!)
result = (2 + 3) * 4  # = 20 (parentheses first)
\`\`\``,
        },
        {
          id: 'l10-math-code',
          title: 'Calculator Challenge',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Calculate and print the following:\n1. The sum of 15 and 27\n2. The result of 100 divided by 7 (floor division)\n3. 2 to the power of 10\n\nExpected output:\n```\n42\n14\n1024\n```',
            starterCode: '# 1. Sum of 15 and 27\n\n# 2. Floor division of 100 by 7\n\n# 3. 2 to the power of 10\n',
            solution: 'print(15 + 27)\nprint(100 // 7)\nprint(2 ** 10)',
            tests: [
              {
                expectedOutput: '42\n14\n1024',
                description: 'Should print 42, 14, and 1024',
              },
            ],
          },
        },
        {
          id: 'l11-comparison',
          title: 'Comparison Operators',
          type: 'theory',
          xp: 10,
          theory: `# Comparison Operators

Comparison operators compare two values and return \`True\` or \`False\`.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`==\` | Equal to | \`5 == 5\` | \`True\` |
| \`!=\` | Not equal | \`5 != 3\` | \`True\` |
| \`>\` | Greater than | \`5 > 3\` | \`True\` |
| \`<\` | Less than | \`5 < 3\` | \`False\` |
| \`>=\` | Greater or equal | \`5 >= 5\` | \`True\` |
| \`<=\` | Less or equal | \`3 <= 5\` | \`True\` |

## Usage

\`\`\`python
age = 18
print(age >= 18)  # True
print(age == 21)  # False

name = "Alice"
print(name == "Alice")  # True
print(name != "Bob")    # True
\`\`\`

These become very important when we learn about **if statements**!`,
        },
        {
          id: 'l12-operators-quiz',
          title: 'Operators Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'What is the result of 17 // 5?',
              options: ['3.4', '3', '2', '4'],
              correctIndex: 1,
              explanation: 'Floor division (//) divides and rounds down to the nearest whole number. 17 / 5 = 3.4, rounded down = 3.',
            },
            {
              question: 'What is the result of 17 % 5?',
              options: ['3.4', '3', '2', '5'],
              correctIndex: 2,
              explanation: 'The modulo operator (%) returns the remainder. 17 / 5 = 3 remainder 2.',
            },
            {
              question: 'What does 2 ** 4 equal?',
              options: ['8', '6', '16', '24'],
              correctIndex: 2,
              explanation: '** is the exponent operator. 2 ** 4 = 2 * 2 * 2 * 2 = 16.',
            },
          ],
        },
      ],
    },
    {
      id: 'ch4-conditionals',
      title: 'Conditionals',
      description: 'Make decisions in your code',
      icon: '\uD83D\uDD00',
      lessons: [
        {
          id: 'l13-if-theory',
          title: 'If Statements',
          type: 'theory',
          xp: 10,
          theory: `# If Statements

If statements let your program make decisions!

## Basic If

\`\`\`python
age = 18
if age >= 18:
    print("You can vote!")
\`\`\`

## If-Else

\`\`\`python
temperature = 30
if temperature > 25:
    print("It's hot!")
else:
    print("It's cool.")
\`\`\`

## If-Elif-Else

\`\`\`python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")
\`\`\`

## Important Rules
- The condition must end with a **colon** \`:\`
- The code inside must be **indented** (4 spaces)
- \`elif\` is short for "else if"
- \`else\` catches everything that didn't match above`,
        },
        {
          id: 'l14-if-code',
          title: 'Grade Calculator',
          type: 'code',
          xp: 30,
          codeExercise: {
            instructions: 'Write a program that assigns a letter grade based on a score:\n- 90 or above: "A"\n- 80-89: "B"\n- 70-79: "C"\n- Below 70: "F"\n\nThe variable `score` is already set to 85. Print the grade.',
            starterCode: 'score = 85\n\n# Write your if/elif/else statements\n',
            solution: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")',
            tests: [
              {
                expectedOutput: 'B',
                description: 'Score 85 should print "B"',
              },
            ],
            hints: [
              'Start with: if score >= 90:',
              'Use elif for the next conditions',
              'Don\'t forget to indent the print statements',
            ],
          },
        },
        {
          id: 'l15-conditionals-quiz',
          title: 'Conditionals Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'What keyword is used for "otherwise if" in Python?',
              options: ['else if', 'elsif', 'elif', 'elseif'],
              correctIndex: 2,
              explanation: 'Python uses "elif" as a shorthand for "else if".',
            },
            {
              question: 'What will this print?\n\nx = 10\nif x > 5:\n    print("A")\nelif x > 8:\n    print("B")',
              options: ['A', 'B', 'A and B', 'Nothing'],
              correctIndex: 0,
              explanation: 'Once a condition is True, Python executes that block and skips all remaining elif/else blocks. Since x > 5 is True, it prints "A" and stops.',
            },
          ],
        },
        {
          id: 'l16-even-odd',
          title: 'Even or Odd Challenge',
          type: 'challenge',
          xp: 35,
          codeExercise: {
            instructions: 'Write a program that checks if a number is even or odd.\n\nIf the number is even, print "Even". If odd, print "Odd".\n\nHint: Use the modulo operator `%`. A number is even if `number % 2 == 0`.',
            starterCode: 'number = 7\n\n# Check if even or odd\n',
            solution: 'number = 7\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
            tests: [
              {
                expectedOutput: 'Odd',
                description: '7 should be Odd',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ch5-loops',
      title: 'Loops',
      description: 'Repeat actions efficiently',
      icon: '\uD83D\uDD01',
      lessons: [
        {
          id: 'l17-for-theory',
          title: 'For Loops',
          type: 'theory',
          xp: 10,
          theory: `# For Loops

Loops let you repeat code without writing it multiple times!

## Looping with range()

\`\`\`python
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

## range() Variations

\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(2, 6)     # 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8
\`\`\`

## Looping Through Strings

\`\`\`python
for char in "Python":
    print(char)
# Prints each letter on a new line
\`\`\`

## Looping Through Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

## Key Points
- The loop variable (\`i\`, \`char\`, \`fruit\`) takes a new value each iteration
- Code inside the loop must be **indented**
- The loop runs until all items are processed`,
        },
        {
          id: 'l18-for-code',
          title: 'Counting with Loops',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Use a for loop to print the numbers 1 through 5, each on a new line.\n\nExpected output:\n```\n1\n2\n3\n4\n5\n```',
            starterCode: '# Use a for loop to print 1 through 5\n',
            solution: 'for i in range(1, 6):\n    print(i)',
            tests: [
              {
                expectedOutput: '1\n2\n3\n4\n5',
                description: 'Should print numbers 1 through 5',
              },
            ],
            hints: ['range(1, 6) gives you numbers 1, 2, 3, 4, 5', 'Remember: the end number in range() is excluded'],
          },
        },
        {
          id: 'l19-while-theory',
          title: 'While Loops',
          type: 'theory',
          xp: 10,
          theory: `# While Loops

A \`while\` loop repeats as long as a condition is True.

## Basic While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
# Output: 0, 1, 2, 3, 4
\`\`\`

## Important: Avoid Infinite Loops!

Always make sure the condition will eventually become False:

\`\`\`python
# BAD - infinite loop!
while True:
    print("forever")

# GOOD - has an exit condition
x = 10
while x > 0:
    print(x)
    x -= 1
\`\`\`

## Break and Continue

\`\`\`python
# break - exit the loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0-4

# continue - skip to the next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4
\`\`\``,
        },
        {
          id: 'l20-sum-challenge',
          title: 'Sum Challenge',
          type: 'challenge',
          xp: 35,
          codeExercise: {
            instructions: 'Calculate the sum of all numbers from 1 to 10 using a for loop. Print the final sum.\n\nExpected output:\n```\n55\n```',
            starterCode: '# Calculate the sum of 1 to 10\ntotal = 0\n\n# Write your loop here\n\nprint(total)\n',
            solution: 'total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)',
            tests: [
              {
                expectedOutput: '55',
                description: 'Sum of 1 to 10 should be 55',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ch6-lists',
      title: 'Lists & Collections',
      description: 'Work with groups of data',
      icon: '\uD83D\uDCCB',
      lessons: [
        {
          id: 'l21-lists-theory',
          title: 'Introduction to Lists',
          type: 'theory',
          xp: 10,
          theory: `# Lists

Lists store multiple items in a single variable.

## Creating Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]
empty = []
\`\`\`

## Accessing Items (Indexing)

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple (first item)
print(fruits[1])   # banana
print(fruits[-1])  # cherry (last item)
\`\`\`

## Modifying Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]

fruits.append("mango")      # Add to end
fruits.insert(1, "grape")   # Insert at index
fruits.remove("banana")     # Remove by value
popped = fruits.pop()       # Remove & return last
\`\`\`

## Useful Properties

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(len(fruits))           # 3 (length)
print("apple" in fruits)     # True (membership)
fruits.sort()                # Sort alphabetically
\`\`\``,
        },
        {
          id: 'l22-lists-code',
          title: 'List Operations',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Given the list `colors`, do the following:\n1. Add "purple" to the end\n2. Print the length of the list\n3. Print the first item\n4. Print the last item\n\nExpected output:\n```\n4\nred\npurple\n```',
            starterCode: 'colors = ["red", "green", "blue"]\n\n# Add "purple" to the list\n\n# Print the length\n\n# Print first item\n\n# Print last item\n',
            solution: 'colors = ["red", "green", "blue"]\ncolors.append("purple")\nprint(len(colors))\nprint(colors[0])\nprint(colors[-1])',
            tests: [
              {
                expectedOutput: '4\nred\npurple',
                description: 'Should print 4, red, purple',
              },
            ],
          },
        },
        {
          id: 'l23-lists-quiz',
          title: 'Lists Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'What is the index of the first element in a Python list?',
              options: ['1', '0', '-1', 'first'],
              correctIndex: 1,
              explanation: 'Python uses zero-based indexing. The first element is at index 0.',
            },
            {
              question: 'What does fruits[-1] return?',
              options: ['An error', 'The first element', 'The last element', 'Nothing'],
              correctIndex: 2,
              explanation: 'Negative indexing starts from the end. -1 gives you the last element.',
            },
            {
              question: 'Which method adds an item to the end of a list?',
              options: ['add()', 'push()', 'append()', 'insert()'],
              correctIndex: 2,
              explanation: 'The append() method adds an item to the end of a list. insert() can add at a specific position.',
            },
          ],
        },
        {
          id: 'l24-list-challenge',
          title: 'List Filter Challenge',
          type: 'challenge',
          xp: 40,
          codeExercise: {
            instructions: 'Given a list of numbers, print only the even numbers, each on a new line.\n\nExpected output:\n```\n2\n4\n6\n8\n10\n```',
            starterCode: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Print only even numbers\n',
            solution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nfor n in numbers:\n    if n % 2 == 0:\n        print(n)',
            tests: [
              {
                expectedOutput: '2\n4\n6\n8\n10',
                description: 'Should print even numbers 2, 4, 6, 8, 10',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ch7-functions',
      title: 'Functions',
      description: 'Create reusable blocks of code',
      icon: '\u2699\uFE0F',
      lessons: [
        {
          id: 'l25-functions-theory',
          title: 'Defining Functions',
          type: 'theory',
          xp: 10,
          theory: `# Functions

Functions are reusable blocks of code that perform a specific task.

## Defining a Function

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
greet("Bob")    # Hello, Bob!
\`\`\`

## Return Values

\`\`\`python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")            # Hello, Alice!
greet("Bob", "Hey")       # Hey, Bob!
\`\`\`

## Why Use Functions?
- **Reusability**: Write once, use many times
- **Organization**: Break complex problems into smaller pieces
- **Readability**: Give meaningful names to blocks of code
- **Testing**: Easier to test small, isolated pieces`,
        },
        {
          id: 'l26-functions-code',
          title: 'Create a Function',
          type: 'code',
          xp: 30,
          codeExercise: {
            instructions: 'Create a function called `square` that takes a number and returns its square (number * number). Then print the result of calling square(5).\n\nExpected output:\n```\n25\n```',
            starterCode: '# Define the square function\n\n\n# Call it and print the result\n',
            solution: 'def square(n):\n    return n * n\n\nprint(square(5))',
            tests: [
              {
                expectedOutput: '25',
                description: 'square(5) should return 25',
              },
            ],
            hints: [
              'Use def to define a function',
              'Use return to send back a value',
              'return n * n (or n ** 2)',
            ],
          },
        },
        {
          id: 'l27-functions-quiz',
          title: 'Functions Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            {
              question: 'What keyword is used to define a function in Python?',
              options: ['function', 'func', 'def', 'define'],
              correctIndex: 2,
              explanation: 'The "def" keyword is used to define functions in Python.',
            },
            {
              question: 'What does a function return if there is no return statement?',
              options: ['0', '""', 'None', 'Error'],
              correctIndex: 2,
              explanation: 'If a function has no return statement, it implicitly returns None.',
            },
          ],
        },
        {
          id: 'l28-fizzbuzz',
          title: 'FizzBuzz Challenge',
          type: 'challenge',
          xp: 50,
          codeExercise: {
            instructions: 'Create a function called `fizzbuzz` that takes a number n and:\n- Prints "FizzBuzz" if divisible by both 3 and 5\n- Prints "Fizz" if divisible by 3\n- Prints "Buzz" if divisible by 5\n- Prints the number otherwise\n\nCall it for numbers 1 through 15.\n\nExpected output:\n```\n1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n```',
            starterCode: 'def fizzbuzz(n):\n    # Your code here\n    pass\n\n# Call fizzbuzz for 1 to 15\n',
            solution: 'def fizzbuzz(n):\n    if n % 3 == 0 and n % 5 == 0:\n        print("FizzBuzz")\n    elif n % 3 == 0:\n        print("Fizz")\n    elif n % 5 == 0:\n        print("Buzz")\n    else:\n        print(n)\n\nfor i in range(1, 16):\n    fizzbuzz(i)',
            tests: [
              {
                expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
                description: 'FizzBuzz for 1-15',
              },
            ],
          },
        },
      ],
    },
    // ==================== INTERMEDIATE ====================
    {
      id: 'ch8-dictionaries',
      title: 'Dictionaries',
      description: 'Store data in key-value pairs',
      icon: '\uD83D\uDCD5',
      lessons: [
        {
          id: 'l29-dict-theory',
          title: 'Dictionaries Explained',
          type: 'theory',
          xp: 10,
          theory: `# Dictionaries

Dictionaries store data as **key-value pairs** \u2014 like a real dictionary maps words to definitions.

## Creating Dictionaries

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
\`\`\`

## Accessing Values

\`\`\`python
print(person["name"])       # Alice
print(person.get("age"))    # 25
print(person.get("job", "N/A"))  # N/A (default)
\`\`\`

## Modifying Dictionaries

\`\`\`python
person["age"] = 26           # Update
person["job"] = "Developer"  # Add new key
del person["city"]           # Delete key
\`\`\`

## Useful Methods

\`\`\`python
person.keys()    # dict_keys(["name", "age"])
person.values()  # dict_values(["Alice", 26])
person.items()   # dict_items([("name","Alice"), ...])
\`\`\`

## Looping

\`\`\`python
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\``,
        },
        {
          id: 'l30-dict-code',
          title: 'Build a Contact Card',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Create a dictionary called `contact` with keys "name", "email", and "phone". Then loop through it and print each key-value pair.\n\nExpected output:\n```\nname: Alice\nemail: alice@example.com\nphone: 555-1234\n```',
            starterCode: '# Create the contact dictionary\ncontact = {}\n\n# Loop and print each key: value\n',
            solution: 'contact = {"name": "Alice", "email": "alice@example.com", "phone": "555-1234"}\nfor key, value in contact.items():\n    print(f"{key}: {value}")',
            tests: [{ expectedOutput: 'name: Alice\nemail: alice@example.com\nphone: 555-1234', description: 'Should print all contact fields' }],
          },
        },
        {
          id: 'l31-dict-quiz',
          title: 'Dictionaries Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'How do you safely access a key that might not exist?', options: ['dict[key]', 'dict.get(key)', 'dict.find(key)', 'dict.access(key)'], correctIndex: 1, explanation: '.get(key) returns None (or a default) instead of raising a KeyError.' },
            { question: 'What does dict.items() return?', options: ['Only keys', 'Only values', 'Key-value pairs as tuples', 'A new dictionary'], correctIndex: 2, explanation: '.items() returns pairs of (key, value) you can loop through.' },
          ],
        },
        {
          id: 'l32-word-count',
          title: 'Word Counter Challenge',
          type: 'challenge',
          xp: 40,
          codeExercise: {
            instructions: 'Count how many times each word appears in the list and print the counts.\n\nExpected output:\n```\napple: 3\nbanana: 2\ncherry: 1\n```',
            starterCode: 'words = ["apple", "banana", "apple", "cherry", "banana", "apple"]\n\n# Count words and print results\n',
            solution: 'words = ["apple", "banana", "apple", "cherry", "banana", "apple"]\ncounts = {}\nfor word in words:\n    counts[word] = counts.get(word, 0) + 1\nfor word, count in counts.items():\n    print(f"{word}: {count}")',
            tests: [{ expectedOutput: 'apple: 3\nbanana: 2\ncherry: 1', description: 'Should count word frequencies' }],
          },
        },
      ],
    },
    {
      id: 'ch9-strings',
      title: 'String Methods',
      description: 'Manipulate text like a pro',
      icon: '\uD83D\uDCDD',
      lessons: [
        {
          id: 'l33-string-theory',
          title: 'String Operations',
          type: 'theory',
          xp: 10,
          theory: `# String Methods

Strings in Python have many built-in methods for manipulation.

## Common Methods

\`\`\`python
text = "Hello, World!"
text.upper()        # "HELLO, WORLD!"
text.lower()        # "hello, world!"
text.strip()        # Remove whitespace from edges
text.replace("Hello", "Hi")  # "Hi, World!"
text.split(", ")    # ["Hello", "World!"]
text.startswith("Hello")  # True
text.endswith("!")        # True
text.find("World")        # 7 (index)
text.count("l")           # 3
\`\`\`

## Slicing

\`\`\`python
text = "Python"
text[0:3]    # "Pyt"
text[2:]     # "thon"
text[:4]     # "Pyth"
text[-3:]    # "hon"
text[::-1]   # "nohtyP" (reversed)
\`\`\`

## String Joining

\`\`\`python
words = ["Hello", "World"]
" ".join(words)  # "Hello World"
"-".join(["2024", "01", "15"])  # "2024-01-15"
\`\`\`

## Checking Content

\`\`\`python
"abc123".isalnum()    # True
"abc".isalpha()       # True
"123".isdigit()       # True
"hello".islower()     # True
\`\`\``,
        },
        {
          id: 'l34-string-code',
          title: 'String Manipulation',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Given a sentence, do the following:\n1. Print it in uppercase\n2. Print the number of words\n3. Print the sentence reversed\n\nExpected output:\n```\nTHE QUICK BROWN FOX\n4\nxof nworb kciuq eht\n```',
            starterCode: 'sentence = "the quick brown fox"\n\n# 1. Print uppercase\n\n# 2. Print word count\n\n# 3. Print reversed\n',
            solution: 'sentence = "the quick brown fox"\nprint(sentence.upper())\nprint(len(sentence.split()))\nprint(sentence[::-1])',
            tests: [{ expectedOutput: 'THE QUICK BROWN FOX\n4\nxof nworb kciuq eht', description: 'String operations should match' }],
          },
        },
        {
          id: 'l35-palindrome',
          title: 'Palindrome Checker',
          type: 'challenge',
          xp: 35,
          codeExercise: {
            instructions: 'Write a function `is_palindrome` that checks if a string reads the same forwards and backwards (ignore case). Print True or False.\n\nExpected output:\n```\nTrue\nFalse\nTrue\n```',
            starterCode: 'def is_palindrome(text):\n    # Your code here\n    pass\n\nprint(is_palindrome("Racecar"))\nprint(is_palindrome("Hello"))\nprint(is_palindrome("Level"))\n',
            solution: 'def is_palindrome(text):\n    t = text.lower()\n    return t == t[::-1]\n\nprint(is_palindrome("Racecar"))\nprint(is_palindrome("Hello"))\nprint(is_palindrome("Level"))',
            tests: [{ expectedOutput: 'True\nFalse\nTrue', description: 'Palindrome checks should be correct' }],
          },
        },
      ],
    },
    {
      id: 'ch10-tuples-sets',
      title: 'Tuples & Sets',
      description: 'More collection types',
      icon: '\uD83D\uDD17',
      lessons: [
        {
          id: 'l36-tuples-sets-theory',
          title: 'Tuples and Sets',
          type: 'theory',
          xp: 10,
          theory: `# Tuples & Sets

## Tuples - Immutable Sequences

Tuples are like lists, but they **cannot be modified** after creation.

\`\`\`python
point = (3, 5)
rgb = (255, 128, 0)
single = (42,)  # Note the comma for single-element tuple

x, y = point  # Unpacking: x=3, y=5
print(point[0])  # 3
\`\`\`

## When to Use Tuples
- Data that shouldn't change (coordinates, RGB colors)
- Dictionary keys (lists can't be keys!)
- Returning multiple values from functions

## Sets - Unique Collections

Sets store **unique** items with **no duplicates**.

\`\`\`python
colors = {"red", "blue", "green", "red"}
print(colors)  # {"red", "blue", "green"}

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}
\`\`\``,
        },
        {
          id: 'l37-sets-code',
          title: 'Remove Duplicates',
          type: 'code',
          xp: 25,
          codeExercise: {
            instructions: 'Given a list with duplicates, use a set to find unique items, then print them sorted.\n\nExpected output:\n```\n[1, 2, 3, 4, 5]\n```',
            starterCode: 'numbers = [3, 1, 4, 1, 5, 2, 3, 5, 2, 4]\n\n# Remove duplicates and print sorted\n',
            solution: 'numbers = [3, 1, 4, 1, 5, 2, 3, 5, 2, 4]\nprint(sorted(set(numbers)))',
            tests: [{ expectedOutput: '[1, 2, 3, 4, 5]', description: 'Should print sorted unique numbers' }],
          },
        },
        {
          id: 'l38-tuples-quiz',
          title: 'Tuples & Sets Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What happens if you try to modify a tuple?', options: ['It works fine', 'TypeError is raised', 'It creates a new tuple', 'Nothing happens'], correctIndex: 1, explanation: 'Tuples are immutable. Attempting to change them raises a TypeError.' },
            { question: 'What is the result of {1,2,3} & {2,3,4}?', options: ['{1,2,3,4}', '{2,3}', '{1,4}', 'Error'], correctIndex: 1, explanation: 'The & operator gives the intersection \u2014 elements common to both sets.' },
          ],
        },
      ],
    },
    {
      id: 'ch11-error-handling',
      title: 'Error Handling',
      description: 'Handle errors gracefully with try/except',
      icon: '\uD83D\uDEE1\uFE0F',
      lessons: [
        {
          id: 'l39-errors-theory',
          title: 'Try/Except',
          type: 'theory',
          xp: 10,
          theory: `# Error Handling

Errors (exceptions) happen. Good code handles them gracefully.

## Common Errors

\`\`\`python
# ZeroDivisionError
10 / 0

# ValueError
int("hello")

# KeyError
d = {}; d["missing"]

# IndexError
lst = [1,2]; lst[5]

# TypeError
"2" + 2
\`\`\`

## Try/Except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Multiple Except Blocks

\`\`\`python
try:
    value = int(input("Number: "))
    result = 100 / value
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Finally Block

\`\`\`python
try:
    f = open("data.txt")
    data = f.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("This always runs")
\`\`\`

## Raising Exceptions

\`\`\`python
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
\`\`\``,
        },
        {
          id: 'l40-errors-code',
          title: 'Safe Division',
          type: 'code',
          xp: 30,
          codeExercise: {
            instructions: 'Write a function `safe_divide(a, b)` that returns a/b, but returns "Error: Division by zero" if b is 0, and "Error: Invalid input" if inputs are not numbers.\n\nExpected output:\n```\n5.0\nError: Division by zero\nError: Invalid input\n```',
            starterCode: 'def safe_divide(a, b):\n    # Your code here\n    pass\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide("ten", 2))\n',
            solution: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Error: Division by zero"\n    except TypeError:\n        return "Error: Invalid input"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide("ten", 2))',
            tests: [{ expectedOutput: '5.0\nError: Division by zero\nError: Invalid input', description: 'Should handle all error cases' }],
          },
        },
        {
          id: 'l41-errors-quiz',
          title: 'Error Handling Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'Which block always executes, whether or not an error occurs?', options: ['try', 'except', 'finally', 'else'], correctIndex: 2, explanation: 'The finally block always runs, regardless of whether an exception occurred.' },
            { question: 'What does the "raise" keyword do?', options: ['Catches an error', 'Ignores an error', 'Triggers an error intentionally', 'Logs an error'], correctIndex: 2, explanation: '"raise" deliberately triggers an exception, useful for input validation.' },
          ],
        },
      ],
    },
    {
      id: 'ch12-comprehensions',
      title: 'Comprehensions',
      description: 'Write concise, powerful one-liners',
      icon: '\u26A1',
      lessons: [
        {
          id: 'l42-comp-theory',
          title: 'List Comprehensions',
          type: 'theory',
          xp: 10,
          theory: `# Comprehensions

Comprehensions are a concise way to create lists, dicts, and sets.

## List Comprehension

\`\`\`python
# Traditional way
squares = []
for x in range(10):
    squares.append(x ** 2)

# Comprehension (one line!)
squares = [x ** 2 for x in range(10)]
\`\`\`

## With Conditions

\`\`\`python
# Even numbers only
evens = [x for x in range(20) if x % 2 == 0]

# Transform + filter
big_words = [w.upper() for w in words if len(w) > 3]
\`\`\`

## Dict Comprehension

\`\`\`python
# Square mapping
sq = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Swap keys and values
flipped = {v: k for k, v in original.items()}
\`\`\`

## Set Comprehension

\`\`\`python
unique_lengths = {len(word) for word in words}
\`\`\`

## Nested Comprehensions

\`\`\`python
matrix = [[i*j for j in range(4)] for i in range(4)]
flat = [x for row in matrix for x in row]
\`\`\``,
        },
        {
          id: 'l43-comp-code',
          title: 'Comprehension Practice',
          type: 'code',
          xp: 30,
          codeExercise: {
            instructions: 'Using list comprehensions, create and print:\n1. Squares of 1-5: [1, 4, 9, 16, 25]\n2. Even numbers from 1-10: [2, 4, 6, 8, 10]\n3. A dict mapping numbers 1-5 to their cubes\n\nExpected output:\n```\n[1, 4, 9, 16, 25]\n[2, 4, 6, 8, 10]\n{1: 1, 2: 8, 3: 27, 4: 64, 5: 125}\n```',
            starterCode: '# 1. Squares of 1-5\n\n# 2. Even numbers from 1-10\n\n# 3. Number to cube mapping\n',
            solution: 'print([x**2 for x in range(1, 6)])\nprint([x for x in range(1, 11) if x % 2 == 0])\nprint({x: x**3 for x in range(1, 6)})',
            tests: [{ expectedOutput: '[1, 4, 9, 16, 25]\n[2, 4, 6, 8, 10]\n{1: 1, 2: 8, 3: 27, 4: 64, 5: 125}', description: 'All comprehensions should match' }],
          },
        },
        {
          id: 'l44-matrix-challenge',
          title: 'Matrix Transpose',
          type: 'challenge',
          xp: 45,
          codeExercise: {
            instructions: 'Transpose a matrix (swap rows and columns) using a nested list comprehension.\n\nExpected output:\n```\n[1, 4, 7]\n[2, 5, 8]\n[3, 6, 9]\n```',
            starterCode: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# Transpose and print each row\n',
            solution: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\ntransposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\nfor row in transposed:\n    print(row)',
            tests: [{ expectedOutput: '[1, 4, 7]\n[2, 5, 8]\n[3, 6, 9]', description: 'Matrix should be transposed' }],
          },
        },
      ],
    },
    {
      id: 'ch13-file-io',
      title: 'File I/O',
      description: 'Read and write files',
      icon: '\uD83D\uDCC1',
      lessons: [
        {
          id: 'l45-file-theory',
          title: 'Working with Files',
          type: 'theory',
          xp: 10,
          theory: `# File I/O

Python makes reading and writing files simple.

## Reading Files

\`\`\`python
# Read entire file
with open("data.txt", "r") as f:
    content = f.read()

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines into a list
with open("data.txt", "r") as f:
    lines = f.readlines()
\`\`\`

## Writing Files

\`\`\`python
# Write (overwrites existing)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Append to existing file
with open("output.txt", "a") as f:
    f.write("Appended line\\n")
\`\`\`

## The \`with\` Statement

The \`with\` statement automatically closes the file when done:

\`\`\`python
# Good - file auto-closes
with open("file.txt") as f:
    data = f.read()

# Without with - must close manually
f = open("file.txt")
data = f.read()
f.close()  # Don't forget!
\`\`\`

## File Modes
| Mode | Description |
|------|-------------|
| \`"r"\` | Read (default) |
| \`"w"\` | Write (overwrites) |
| \`"a"\` | Append |
| \`"x"\` | Create (fails if exists) |
| \`"b"\` | Binary mode |`,
        },
        {
          id: 'l46-file-quiz',
          title: 'File I/O Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What does the "with" statement do when working with files?', options: ['Makes files read-only', 'Automatically closes the file', 'Creates a backup', 'Encrypts the file'], correctIndex: 1, explanation: '"with" is a context manager that automatically closes the file when the block ends, even if an error occurs.' },
            { question: 'What mode should you use to add data without erasing existing content?', options: ['"r"', '"w"', '"a"', '"x"'], correctIndex: 2, explanation: 'Append mode ("a") adds new data to the end of the file without erasing existing content.' },
            { question: 'What happens if you open a file with mode "w" that already has content?', options: ['It appends to the end', 'It raises an error', 'It erases all existing content', 'It creates a backup first'], correctIndex: 2, explanation: 'Write mode ("w") erases all existing content before writing. Use "a" to preserve existing data.' },
          ],
        },
      ],
    },
    {
      id: 'ch14-lambda',
      title: 'Lambda & Higher-Order Functions',
      description: 'Functional programming patterns',
      icon: '\u03BB',
      lessons: [
        {
          id: 'l47-lambda-theory',
          title: 'Lambda Functions',
          type: 'theory',
          xp: 10,
          theory: `# Lambda & Higher-Order Functions

## Lambda - Anonymous Functions

A lambda is a small, one-line function without a name:

\`\`\`python
# Regular function
def double(x):
    return x * 2

# Lambda equivalent
double = lambda x: x * 2

print(double(5))  # 10
\`\`\`

## map() - Transform Every Item

\`\`\`python
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
# [2, 4, 6, 8, 10]
\`\`\`

## filter() - Keep Items That Match

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4, 6, 8]
\`\`\`

## sorted() with key

\`\`\`python
words = ["banana", "apple", "cherry", "date"]
by_length = sorted(words, key=lambda w: len(w))
# ["date", "apple", "banana", "cherry"]

students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
# [("Bob", 92), ("Alice", 85), ("Charlie", 78)]
\`\`\`

## reduce() - Accumulate Values

\`\`\`python
from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
# 15
\`\`\``,
        },
        {
          id: 'l48-lambda-code',
          title: 'Functional Transformations',
          type: 'code',
          xp: 30,
          codeExercise: {
            instructions: 'Use map, filter, and sorted with lambda functions:\n1. Double all numbers in the list\n2. Filter only numbers greater than 5\n3. Sort words by their last letter\n\nExpected output:\n```\n[2, 4, 6, 8, 10]\n[6, 7, 8, 9, 10]\n["banana", "apple", "date", "cherry"]\n```',
            starterCode: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nwords = ["cherry", "banana", "date", "apple"]\n\n# 1. Double all numbers\n\n# 2. Filter > 5\n\n# 3. Sort by last letter\n',
            solution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nwords = ["cherry", "banana", "date", "apple"]\nprint(list(map(lambda x: x * 2, numbers[:5])))\nprint(list(filter(lambda x: x > 5, numbers)))\nprint(sorted(words, key=lambda w: w[-1]))',
            tests: [{ expectedOutput: '[2, 4, 6, 8, 10]\n[6, 7, 8, 9, 10]\n[\'banana\', \'apple\', \'date\', \'cherry\']', description: 'Functional operations should match' }],
          },
        },
        {
          id: 'l49-lambda-quiz',
          title: 'Lambda Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What is a lambda function?', options: ['A named function', 'A small anonymous function', 'A class method', 'A built-in function'], correctIndex: 1, explanation: 'Lambda functions are small, anonymous (unnamed) functions defined with the lambda keyword.' },
            { question: 'What does filter() return?', options: ['All items transformed', 'Only items where the function returns True', 'A single accumulated value', 'A sorted list'], correctIndex: 1, explanation: 'filter() keeps only items for which the provided function returns True.' },
          ],
        },
      ],
    },
    // ==================== ADVANCED ====================
    {
      id: 'ch15-oop',
      title: 'Object-Oriented Programming',
      description: 'Build with classes and objects',
      icon: '\uD83C\uDFD7\uFE0F',
      lessons: [
        {
          id: 'l50-oop-theory',
          title: 'Classes & Objects',
          type: 'theory',
          xp: 15,
          theory: `# Object-Oriented Programming

OOP lets you model real-world things as code using **classes** and **objects**.

## Defining a Class

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} says Woof!"

    def __str__(self):
        return f"{self.name} ({self.breed})"

rex = Dog("Rex", "German Shepherd")
print(rex.bark())  # Rex says Woof!
print(rex)         # Rex (German Shepherd)
\`\`\`

## Key Concepts
- **Class**: A blueprint for creating objects
- **Object**: An instance of a class
- **\`__init__\`**: Constructor, runs when creating an object
- **\`self\`**: Reference to the current instance
- **Attributes**: Variables belonging to an object (\`self.name\`)
- **Methods**: Functions belonging to a class

## Class vs Instance Variables

\`\`\`python
class Cat:
    species = "Feline"  # Class variable (shared)

    def __init__(self, name):
        self.name = name  # Instance variable (unique)
\`\`\``,
        },
        {
          id: 'l51-oop-code',
          title: 'Create a Class',
          type: 'code',
          xp: 35,
          codeExercise: {
            instructions: 'Create a `BankAccount` class with:\n- `__init__` that takes `owner` and starts `balance` at 0\n- `deposit(amount)` method\n- `withdraw(amount)` method (don\'t allow negative balance)\n- `__str__` that returns "Owner: $balance"\n\nExpected output:\n```\nAlice: $100\nAlice: $70\nInsufficient funds\nAlice: $70\n```',
            starterCode: 'class BankAccount:\n    # Your code here\n    pass\n\nacc = BankAccount("Alice")\nacc.deposit(100)\nprint(acc)\nacc.withdraw(30)\nprint(acc)\nacc.withdraw(100)\nprint(acc)\n',
            solution: 'class BankAccount:\n    def __init__(self, owner):\n        self.owner = owner\n        self.balance = 0\n    \n    def deposit(self, amount):\n        self.balance += amount\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds")\n        else:\n            self.balance -= amount\n    \n    def __str__(self):\n        return f"{self.owner}: ${self.balance}"\n\nacc = BankAccount("Alice")\nacc.deposit(100)\nprint(acc)\nacc.withdraw(30)\nprint(acc)\nacc.withdraw(100)\nprint(acc)',
            tests: [{ expectedOutput: 'Alice: $100\nAlice: $70\nInsufficient funds\nAlice: $70', description: 'BankAccount should work correctly' }],
          },
        },
        {
          id: 'l52-oop-quiz',
          title: 'OOP Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What is __init__ in a Python class?', options: ['A destructor', 'A constructor that initializes the object', 'A static method', 'A class variable'], correctIndex: 1, explanation: '__init__ is the constructor method. It runs automatically when you create a new object.' },
            { question: 'What does "self" refer to in a method?', options: ['The class itself', 'The current instance of the class', 'The parent class', 'A global variable'], correctIndex: 1, explanation: '"self" refers to the specific object instance the method is being called on.' },
          ],
        },
      ],
    },
    {
      id: 'ch16-inheritance',
      title: 'Inheritance & Polymorphism',
      description: 'Build class hierarchies',
      icon: '\uD83C\uDF33',
      lessons: [
        {
          id: 'l53-inherit-theory',
          title: 'Inheritance',
          type: 'theory',
          xp: 15,
          theory: `# Inheritance

Inheritance lets a class **inherit** attributes and methods from another class.

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Rex")
cat = Cat("Whiskers")
print(dog.speak())  # Rex says Woof!
print(cat.speak())  # Whiskers says Meow!
\`\`\`

## super() - Call Parent Methods

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department
\`\`\`

## Polymorphism

\`\`\`python
animals = [Dog("Rex"), Cat("Luna"), Dog("Max")]
for animal in animals:
    print(animal.speak())  # Each calls its own version
\`\`\`

## isinstance() and issubclass()

\`\`\`python
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True
print(issubclass(Dog, Animal))  # True
\`\`\``,
        },
        {
          id: 'l54-inherit-code',
          title: 'Shape Hierarchy',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Create a shape hierarchy:\n- `Shape` base class with a `name` attribute\n- `Rectangle(Shape)` with `width` and `height`, and an `area()` method\n- `Square(Rectangle)` that takes one `side` and passes it as both width and height\n\nExpected output:\n```\nRectangle: 50\nSquare: 25\n```',
            starterCode: 'class Shape:\n    pass\n\nclass Rectangle(Shape):\n    pass\n\nclass Square(Rectangle):\n    pass\n\nr = Rectangle("Rectangle", 10, 5)\ns = Square("Square", 5)\nprint(f"{r.name}: {r.area()}")\nprint(f"{s.name}: {s.area()}")\n',
            solution: 'class Shape:\n    def __init__(self, name):\n        self.name = name\n\nclass Rectangle(Shape):\n    def __init__(self, name, width, height):\n        super().__init__(name)\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n\nclass Square(Rectangle):\n    def __init__(self, name, side):\n        super().__init__(name, side, side)\n\nr = Rectangle("Rectangle", 10, 5)\ns = Square("Square", 5)\nprint(f"{r.name}: {r.area()}")\nprint(f"{s.name}: {s.area()}")',
            tests: [{ expectedOutput: 'Rectangle: 50\nSquare: 25', description: 'Shape hierarchy should work' }],
          },
        },
      ],
    },
    {
      id: 'ch17-decorators',
      title: 'Decorators',
      description: 'Modify function behavior elegantly',
      icon: '\uD83C\uDF80',
      lessons: [
        {
          id: 'l55-deco-theory',
          title: 'Understanding Decorators',
          type: 'theory',
          xp: 15,
          theory: `# Decorators

Decorators wrap a function to extend its behavior without modifying it.

## Functions as First-Class Objects

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

# Functions can be assigned to variables
say_hello = greet
print(say_hello("Alice"))  # Hello, Alice!

# Functions can be passed as arguments
def call_func(func, arg):
    return func(arg)

print(call_func(greet, "Bob"))  # Hello, Bob!
\`\`\`

## Creating a Decorator

\`\`\`python
def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"hello, {name}"

print(greet("alice"))  # HELLO, ALICE
\`\`\`

## Practical Decorators

\`\`\`python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "done"
\`\`\`

## Decorators with Arguments

\`\`\`python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")
\`\`\``,
        },
        {
          id: 'l56-deco-code',
          title: 'Build a Decorator',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Create a `@log_call` decorator that prints "Calling: function_name" before a function runs and "Done: function_name" after.\n\nExpected output:\n```\nCalling: add\nDone: add\n8\nCalling: multiply\nDone: multiply\n15\n```',
            starterCode: '# Create the log_call decorator\n\n\n@log_call\ndef add(a, b):\n    return a + b\n\n@log_call\ndef multiply(a, b):\n    return a * b\n\nprint(add(3, 5))\nprint(multiply(3, 5))\n',
            solution: 'def log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling: {func.__name__}")\n        result = func(*args, **kwargs)\n        print(f"Done: {func.__name__}")\n        return result\n    return wrapper\n\n@log_call\ndef add(a, b):\n    return a + b\n\n@log_call\ndef multiply(a, b):\n    return a * b\n\nprint(add(3, 5))\nprint(multiply(3, 5))',
            tests: [{ expectedOutput: 'Calling: add\nDone: add\n8\nCalling: multiply\nDone: multiply\n15', description: 'Decorator should log calls' }],
          },
        },
        {
          id: 'l57-deco-quiz',
          title: 'Decorators Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What does the @decorator syntax do?', options: ['Defines a new class', 'Wraps a function with another function', 'Creates a generator', 'Imports a module'], correctIndex: 1, explanation: '@decorator is syntactic sugar for func = decorator(func). It wraps the function.' },
            { question: 'What does *args and **kwargs allow in a decorator wrapper?', options: ['Only positional arguments', 'Only keyword arguments', 'Any combination of arguments', 'No arguments'], correctIndex: 2, explanation: '*args captures positional arguments and **kwargs captures keyword arguments, making the decorator work with any function signature.' },
          ],
        },
      ],
    },
    {
      id: 'ch18-generators',
      title: 'Generators & Iterators',
      description: 'Memory-efficient data processing',
      icon: '\uD83C\uDF00',
      lessons: [
        {
          id: 'l58-gen-theory',
          title: 'Generators',
          type: 'theory',
          xp: 15,
          theory: `# Generators

Generators produce values **lazily** \u2014 one at a time, only when needed. Perfect for large datasets.

## Generator Functions (yield)

\`\`\`python
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for num in count_up(5):
    print(num)  # 0, 1, 2, 3, 4
\`\`\`

## yield vs return
- \`return\` ends the function and sends back a value
- \`yield\` pauses the function and sends back a value; the function can resume

## Generator Expressions

\`\`\`python
# List comprehension (all in memory)
squares_list = [x**2 for x in range(1000000)]

# Generator expression (lazy, memory efficient)
squares_gen = (x**2 for x in range(1000000))
\`\`\`

## Practical Example: Reading Large Files

\`\`\`python
def read_large_file(filepath):
    with open(filepath) as f:
        for line in f:
            yield line.strip()

# Processes one line at a time - never loads entire file
for line in read_large_file("huge_data.txt"):
    process(line)
\`\`\`

## next() and StopIteration

\`\`\`python
gen = count_up(3)
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2
# next(gen) would raise StopIteration
\`\`\``,
        },
        {
          id: 'l59-gen-code',
          title: 'Fibonacci Generator',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Create a generator function `fibonacci(n)` that yields the first n Fibonacci numbers.\n\nFibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...\n\nExpected output:\n```\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n```',
            starterCode: 'def fibonacci(n):\n    # Your generator here\n    pass\n\nfor num in fibonacci(10):\n    print(num)\n',
            solution: 'def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(10):\n    print(num)',
            tests: [{ expectedOutput: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34', description: 'Should generate first 10 Fibonacci numbers' }],
          },
        },
      ],
    },
    {
      id: 'ch19-magic-methods',
      title: 'Magic Methods',
      description: 'Customize how objects behave',
      icon: '\u2728',
      lessons: [
        {
          id: 'l60-magic-theory',
          title: 'Dunder Methods',
          type: 'theory',
          xp: 15,
          theory: `# Magic (Dunder) Methods

Magic methods (double underscore methods) let you customize how objects behave with operators and built-in functions.

## Common Magic Methods

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)

    def __getitem__(self, index):
        if index == 0: return self.x
        if index == 1: return self.y
        raise IndexError

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)      # Vector(4, 6)
print(v1 == v2)      # False
print(len(v1))       # 5
print(v1[0])         # 3
\`\`\`

## Key Magic Methods
| Method | Triggered By |
|--------|-------------|
| \`__init__\` | \`MyClass()\` |
| \`__str__\` | \`str(obj)\`, \`print(obj)\` |
| \`__repr__\` | \`repr(obj)\`, debugger |
| \`__add__\` | \`obj + other\` |
| \`__sub__\` | \`obj - other\` |
| \`__mul__\` | \`obj * other\` |
| \`__eq__\` | \`obj == other\` |
| \`__lt__\` | \`obj < other\` |
| \`__len__\` | \`len(obj)\` |
| \`__getitem__\` | \`obj[key]\` |
| \`__contains__\` | \`item in obj\` |
| \`__iter__\` | \`for x in obj\` |`,
        },
        {
          id: 'l61-magic-code',
          title: 'Custom Collection',
          type: 'challenge',
          xp: 50,
          codeExercise: {
            instructions: 'Create a `Stack` class with magic methods:\n- `push(item)` to add items\n- `pop()` to remove and return the top item\n- `__len__` for `len(stack)`\n- `__repr__` showing contents\n- `__contains__` for `in` operator\n\nExpected output:\n```\nStack([1, 2, 3])\n3\nTrue\nFalse\n2\nStack([1])\n```',
            starterCode: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    # Add your methods here\n\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\nprint(repr(s))\nprint(len(s))\nprint(2 in s)\nprint(5 in s)\nprint(s.pop())\nprint(s.pop())\nprint(repr(s))\n',
            solution: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        return self.items.pop()\n    \n    def __len__(self):\n        return len(self.items)\n    \n    def __repr__(self):\n        return f"Stack({self.items})"\n    \n    def __contains__(self, item):\n        return item in self.items\n\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\nprint(repr(s))\nprint(len(s))\nprint(2 in s)\nprint(5 in s)\nprint(s.pop())\nprint(s.pop())\nprint(repr(s))',
            tests: [{ expectedOutput: 'Stack([1, 2, 3])\n3\nTrue\nFalse\n3\n2\nStack([1])', description: 'Stack should support all operations' }],
          },
        },
      ],
    },
    {
      id: 'ch20-context-managers',
      title: 'Context Managers',
      description: 'Manage resources safely',
      icon: '\uD83D\uDD10',
      lessons: [
        {
          id: 'l62-ctx-theory',
          title: 'Context Managers',
          type: 'theory',
          xp: 15,
          theory: `# Context Managers

Context managers ensure resources are properly set up and cleaned up using the \`with\` statement.

## Creating a Context Manager (class-based)

\`\`\`python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Elapsed: {elapsed:.4f}s")
        return False  # Don't suppress exceptions

with Timer():
    total = sum(range(1000000))
# Output: Elapsed: 0.0234s
\`\`\`

## Using contextlib (decorator-based)

\`\`\`python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Setting up {name}")
    try:
        yield name
    finally:
        print(f"Cleaning up {name}")

with managed_resource("database") as r:
    print(f"Using {r}")
# Setting up database
# Using database
# Cleaning up database
\`\`\`

## When to Use Context Managers
- File operations
- Database connections
- Network sockets
- Lock acquisition/release
- Temporary state changes`,
        },
        {
          id: 'l63-ctx-code',
          title: 'Build a Context Manager',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Create a context manager class `Indenter` that tracks indentation level. Each nested `with` block should increase indent by 2 spaces. It should have a `print(text)` method.\n\nExpected output:\n```\nHello\n  World\n    Deep\n  Back\nDone\n```',
            starterCode: 'class Indenter:\n    def __init__(self):\n        self.level = 0\n    \n    # Add __enter__, __exit__, and print_line methods\n\nind = Indenter()\nind.print_line("Hello")\nwith ind:\n    ind.print_line("World")\n    with ind:\n        ind.print_line("Deep")\n    ind.print_line("Back")\nind.print_line("Done")\n',
            solution: 'class Indenter:\n    def __init__(self):\n        self.level = 0\n    \n    def __enter__(self):\n        self.level += 1\n        return self\n    \n    def __exit__(self, *args):\n        self.level -= 1\n        return False\n    \n    def print_line(self, text):\n        print("  " * self.level + text)\n\nind = Indenter()\nind.print_line("Hello")\nwith ind:\n    ind.print_line("World")\n    with ind:\n        ind.print_line("Deep")\n    ind.print_line("Back")\nind.print_line("Done")',
            tests: [{ expectedOutput: 'Hello\n  World\n    Deep\n  Back\nDone', description: 'Indentation should increase with each context' }],
          },
        },
      ],
    },
    {
      id: 'ch21-dataclasses',
      title: 'Dataclasses & Type Hints',
      description: 'Modern Python patterns',
      icon: '\uD83D\uDCCA',
      lessons: [
        {
          id: 'l64-dataclass-theory',
          title: 'Dataclasses & Typing',
          type: 'theory',
          xp: 15,
          theory: `# Dataclasses & Type Hints

## Type Hints

Type hints document what types your code expects:

\`\`\`python
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

age: int = 25
names: list[str] = ["Alice", "Bob"]
scores: dict[str, int] = {"Alice": 95, "Bob": 87}
\`\`\`

## Dataclasses

Dataclasses automatically generate \`__init__\`, \`__repr__\`, \`__eq__\`, etc.:

\`\`\`python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

    def distance(self) -> float:
        return (self.x**2 + self.y**2) ** 0.5

p = Point(3.0, 4.0)
print(p)              # Point(x=3.0, y=4.0)
print(p.distance())   # 5.0
print(p == Point(3.0, 4.0))  # True
\`\`\`

## Advanced Dataclass Features

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    grades: list[int] = field(default_factory=list)

    @property
    def average(self) -> float:
        return sum(self.grades) / len(self.grades) if self.grades else 0.0

@dataclass(frozen=True)  # Immutable
class Color:
    r: int
    g: int
    b: int
\`\`\``,
        },
        {
          id: 'l65-dataclass-code',
          title: 'Student Records',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Create a `Student` dataclass with `name`, `grades` (list of ints), and an `average` property. Create two students and print their info.\n\nExpected output:\n```\nStudent(name=\'Alice\', grades=[90, 85, 92])\nAlice average: 89.0\nStudent(name=\'Bob\', grades=[78, 82, 88])\nBob average: 82.67\n```',
            starterCode: 'from dataclasses import dataclass, field\n\n# Create the Student dataclass\n\n\nalice = Student("Alice", [90, 85, 92])\nbob = Student("Bob", [78, 82, 88])\nprint(alice)\nprint(f"{alice.name} average: {alice.average}")\nprint(bob)\nprint(f"{bob.name} average: {bob.average}")\n',
            solution: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Student:\n    name: str\n    grades: list[int] = field(default_factory=list)\n    \n    @property\n    def average(self) -> float:\n        return round(sum(self.grades) / len(self.grades), 2) if self.grades else 0.0\n\nalice = Student("Alice", [90, 85, 92])\nbob = Student("Bob", [78, 82, 88])\nprint(alice)\nprint(f"{alice.name} average: {alice.average}")\nprint(bob)\nprint(f"{bob.name} average: {bob.average}")',
            tests: [{ expectedOutput: "Student(name='Alice', grades=[90, 85, 92])\nAlice average: 89.0\nStudent(name='Bob', grades=[78, 82, 88])\nBob average: 82.67", description: 'Student records should display correctly' }],
          },
        },
      ],
    },
    {
      id: 'ch22-algorithms',
      title: 'Algorithms & Problem Solving',
      description: 'Classic algorithmic challenges',
      icon: '\uD83E\uDDE0',
      lessons: [
        {
          id: 'l66-algo-theory',
          title: 'Algorithm Thinking',
          type: 'theory',
          xp: 15,
          theory: `# Algorithms & Problem Solving

## What is an Algorithm?

An algorithm is a step-by-step procedure to solve a problem. Good algorithms are:
- **Correct** \u2014 produce the right answer
- **Efficient** \u2014 use minimal time and memory
- **Clear** \u2014 easy to understand and implement

## Big O Notation

Describes how runtime grows with input size:

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n\u00B2) | Quadratic | Bubble sort |

## Common Patterns

**Two Pointers**:
\`\`\`python
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target: return [left, right]
        elif s < target: left += 1
        else: right -= 1
\`\`\`

**Sliding Window**:
\`\`\`python
def max_sum_subarray(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i-k]
        best = max(best, window)
    return best
\`\`\``,
        },
        {
          id: 'l67-binary-search',
          title: 'Binary Search',
          type: 'code',
          xp: 40,
          codeExercise: {
            instructions: 'Implement binary search that returns the index of a target in a sorted list, or -1 if not found.\n\nExpected output:\n```\n4\n-1\n0\n```',
            starterCode: 'def binary_search(arr, target):\n    # Your code here\n    pass\n\nnums = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search(nums, 9))\nprint(binary_search(nums, 6))\nprint(binary_search(nums, 1))\n',
            solution: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nnums = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search(nums, 9))\nprint(binary_search(nums, 6))\nprint(binary_search(nums, 1))',
            tests: [{ expectedOutput: '4\n-1\n0', description: 'Binary search should find correct indices' }],
          },
        },
        {
          id: 'l68-sorting',
          title: 'Implement Merge Sort',
          type: 'challenge',
          xp: 60,
          codeExercise: {
            instructions: 'Implement merge sort \u2014 a divide-and-conquer sorting algorithm.\n\nExpected output:\n```\n[1, 2, 3, 4, 5, 6, 7, 8]\n```',
            starterCode: 'def merge_sort(arr):\n    # Your code here\n    pass\n\nresult = merge_sort([8, 3, 1, 5, 2, 7, 4, 6])\nprint(result)\n',
            solution: 'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nresult = merge_sort([8, 3, 1, 5, 2, 7, 4, 6])\nprint(result)',
            tests: [{ expectedOutput: '[1, 2, 3, 4, 5, 6, 7, 8]', description: 'Should sort the array correctly' }],
          },
        },
        {
          id: 'l69-algo-quiz',
          title: 'Algorithms Quiz',
          type: 'quiz',
          xp: 15,
          quiz: [
            { question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n\u00B2)', 'O(log n)', 'O(1)'], correctIndex: 2, explanation: 'Binary search halves the search space each step, giving O(log n) time complexity.' },
            { question: 'What is the time complexity of merge sort?', options: ['O(n)', 'O(n\u00B2)', 'O(n log n)', 'O(log n)'], correctIndex: 2, explanation: 'Merge sort divides the array (log n levels) and merges (n work per level), giving O(n log n).' },
          ],
        },
      ],
    },
    {
      id: 'ch23-advanced-patterns',
      title: 'Advanced Patterns',
      description: 'Closures, recursion, and more',
      icon: '\uD83D\uDE80',
      lessons: [
        {
          id: 'l70-recursion-theory',
          title: 'Recursion',
          type: 'theory',
          xp: 15,
          theory: `# Recursion

A function that calls itself to solve smaller subproblems.

## Anatomy of Recursion

Every recursive function needs:
1. **Base case** \u2014 when to stop
2. **Recursive case** \u2014 call itself with a smaller problem

\`\`\`python
def factorial(n):
    if n <= 1:        # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # 120 (5*4*3*2*1)
\`\`\`

## Visualizing the Call Stack

\`\`\`
factorial(5)
  5 * factorial(4)
    4 * factorial(3)
      3 * factorial(2)
        2 * factorial(1)
          return 1
        return 2
      return 6
    return 24
  return 120
\`\`\`

## Recursion vs Iteration

\`\`\`python
# Recursive
def sum_list(lst):
    if not lst:
        return 0
    return lst[0] + sum_list(lst[1:])

# Iterative (usually more efficient)
def sum_list_iter(lst):
    total = 0
    for item in lst:
        total += item
    return total
\`\`\`

## Memoization

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
\`\`\``,
        },
        {
          id: 'l71-recursion-code',
          title: 'Recursive Challenges',
          type: 'challenge',
          xp: 50,
          codeExercise: {
            instructions: 'Write a recursive function `flatten(lst)` that takes a nested list and returns a flat list.\n\nExpected output:\n```\n[1, 2, 3, 4, 5, 6, 7, 8]\n```',
            starterCode: 'def flatten(lst):\n    # Your code here\n    pass\n\nnested = [1, [2, 3], [4, [5, 6]], [7, 8]]\nprint(flatten(nested))\n',
            solution: 'def flatten(lst):\n    result = []\n    for item in lst:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result\n\nnested = [1, [2, 3], [4, [5, 6]], [7, 8]]\nprint(flatten(nested))',
            tests: [{ expectedOutput: '[1, 2, 3, 4, 5, 6, 7, 8]', description: 'Should flatten nested list' }],
          },
        },
        {
          id: 'l72-closures-code',
          title: 'Closures & Memoization',
          type: 'challenge',
          xp: 55,
          codeExercise: {
            instructions: 'Create a `memoize` function that caches results of any function. Use it to create a memoized Fibonacci.\n\nExpected output:\n```\n55\n6765\n```',
            starterCode: 'def memoize(func):\n    # Your code here\n    pass\n\n@memoize\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))\nprint(fib(20))\n',
            solution: 'def memoize(func):\n    cache = {}\n    def wrapper(*args):\n        if args not in cache:\n            cache[args] = func(*args)\n        return cache[args]\n    return wrapper\n\n@memoize\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))\nprint(fib(20))',
            tests: [{ expectedOutput: '55\n6765', description: 'Memoized Fibonacci should work' }],
          },
        },
      ],
    },
    {
      id: 'ch24-final-project',
      title: 'Final Project',
      description: 'Put it all together',
      icon: '\uD83C\uDFC6',
      lessons: [
        {
          id: 'l73-final-theory',
          title: 'Project Overview',
          type: 'theory',
          xp: 10,
          theory: `# Final Project: Mini Data Pipeline

You've learned everything from \`print("Hello")\` to decorators and algorithms. Now let's combine it all!

## What You'll Build

A mini data processing pipeline that:
1. Defines data using **dataclasses**
2. Processes data using **generators** and **comprehensions**
3. Uses **decorators** for logging
4. Handles **errors** gracefully
5. Applies **OOP** patterns

## Skills You'll Use
- Classes & dataclasses
- List comprehensions & generators
- Decorators
- Error handling
- Lambda & higher-order functions
- String formatting
- Dictionaries

## Ready?

The next challenge will test everything you've learned. Take your time and use what you know!`,
        },
        {
          id: 'l74-final-challenge',
          title: 'Data Pipeline Challenge',
          type: 'challenge',
          xp: 100,
          codeExercise: {
            instructions: 'Build a student grade analyzer:\n1. Create a list of student dicts with "name" and "grades" keys\n2. Write a function to calculate each student\'s average\n3. Filter students with average >= 80\n4. Sort them by average (highest first)\n5. Print formatted results\n\nExpected output:\n```\nHonor Roll:\n1. Alice - 92.33\n2. Charlie - 86.00\n```',
            starterCode: 'students = [\n    {"name": "Alice", "grades": [95, 88, 94]},\n    {"name": "Bob", "grades": [70, 65, 72]},\n    {"name": "Charlie", "grades": [85, 90, 83]},\n    {"name": "Diana", "grades": [60, 55, 68]},\n]\n\n# Your code here\n',
            solution: 'students = [\n    {"name": "Alice", "grades": [95, 88, 94]},\n    {"name": "Bob", "grades": [70, 65, 72]},\n    {"name": "Charlie", "grades": [85, 90, 83]},\n    {"name": "Diana", "grades": [60, 55, 68]},\n]\n\ndef average(grades):\n    return sum(grades) / len(grades)\n\nhonor_roll = sorted(\n    [s for s in students if average(s["grades"]) >= 80],\n    key=lambda s: average(s["grades"]),\n    reverse=True\n)\n\nprint("Honor Roll:")\nfor i, s in enumerate(honor_roll, 1):\n    print(f"{i}. {s["name"]} - {average(s["grades"]):.2f}")',
            tests: [{ expectedOutput: 'Honor Roll:\n1. Alice - 92.33\n2. Charlie - 86.00', description: 'Honor roll should be correctly filtered and sorted' }],
          },
        },
        {
          id: 'l75-final-quiz',
          title: 'Python Mastery Quiz',
          type: 'quiz',
          xp: 25,
          quiz: [
            { question: 'What is the difference between a list and a tuple?', options: ['Lists are faster', 'Tuples are mutable, lists are not', 'Lists are mutable, tuples are not', 'No difference'], correctIndex: 2, explanation: 'Lists can be modified (mutable) while tuples cannot (immutable).' },
            { question: 'What does @lru_cache do?', options: ['Encrypts the function', 'Limits function calls', 'Caches function results for repeated inputs', 'Logs function calls'], correctIndex: 2, explanation: '@lru_cache memoizes function results, avoiding redundant computation for the same inputs.' },
            { question: 'What is a closure?', options: ['A way to close files', 'A function that remembers its enclosing scope', 'A type of loop', 'A class destructor'], correctIndex: 1, explanation: 'A closure is a function that captures and remembers variables from its enclosing scope, even after that scope has finished executing.' },
            { question: 'When should you use a generator instead of a list?', options: ['When you need random access', 'When data fits in memory', 'When processing large datasets lazily', 'Never, lists are always better'], correctIndex: 2, explanation: 'Generators are ideal for large datasets because they produce values one at a time (lazily) instead of loading everything into memory.' },
            { question: 'What does the yield keyword do?', options: ['Returns a value and ends the function', 'Pauses the function and produces a value', 'Raises an exception', 'Imports a module'], correctIndex: 1, explanation: 'yield pauses the function, saves its state, and produces a value. The function can be resumed later.' },
          ],
        },
      ],
    },
  ],
};
