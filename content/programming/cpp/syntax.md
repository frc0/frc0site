---
date: '2023-2-10'
title: '6.3.1 Syntax'
weight: 6.3.1
lastmod: '2023-2-10'
---

## What is syntax in the context of programming?

Syntax is the set of rules that defines what combinations of high-level language elements (semi-human english/insert your language) can be written in. It also sets rules about whitespace, comments, and other details of the code. Syntax is also refering to how the code can be laid out. For C++ thankfully the whitespace is not important, but it is important to know how to use it to make your code more readable. Below is a code block that shows the syntax of C++.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello  FRC0! This is a program written in C++ to teach you about syntax." << endl;
    return 0;
}
```

### What are some of the syntax rules for C++?

1. The first line of code must be the include statements. Includes are used to include other files into your code. In this case we are including the iostream file which is used for input and output. This is a standard library that is included with C++ and used quite often.
2. The second line is the using namespace std; statement. This is used to tell the compiler that we are using the standard namespace. This is not required, but it is used often to make the code more readable.
    - The namespace line here turns the cout and endl statements into just cout and endl. Without it we would have to use std::cout and std::endl. Why type more than you have to every time you use it?
3. The third line is the main function. This is the entry point for the program. It is the first function that is called when the program is run. It is required for all C++ programs. The reason there is a data type of int is because the main function must return an integer. Dont worry about return statements for now, we will cover them later.
4. The fourth line is the cout statement. This is used to output text to the console. The << is the insertion operator. It is used to insert the text into the cout statement. The endl is used to end the line. Without it the next cout statement would be on the same line as the previous one.
    - For people who come from Arduino or other C based languages, this is similar to the Serial.print() statement vs Serial.println() statement based on if you include the endl or not.
    - We opted to not use the standard "Hello World" text but still wanted to use the cout statement. We also wanted to use the endl statement to show how it is used.
5. The fifth line is the return statement. This is used to return a value from the function. In this case we are returning 0. below is a short table showing common return codes and their meanings (This is super technical stuff and not important besides returning 0 ends the program)
    - 0 - No errors
    - 1 - General error
    - 2 - Misuse of shell builtins
    - 126 - Command invoked cannot execute
    - 127 - "command not found"
    - 128 - Invalid argument to exit
    - 128+n - Fatal error signal "n"
    - 130 - Script terminated by Control-C
    - 255\* - Exit status out of range

## What is a comment?

A comment is a line of code that is not executed when the code is run. It can and should be used to leave notes, reminders, or other information for yourself and others. There are two types of comments in C++.

1. Single line comments - These are comments that are on a single line. They start with // and end at the end of the line. They can be used to comment out a single line of code. They are used for short headers and comments.
2. Multi-line comments - These are comments that are on multiple lines. They start with /* and end with */. They can be used to comment out multiple lines of code. They are used for longer comments and even documentation.

```cpp
// This is a single line comment

/*
This is a multi-line comment
This is a multi-line comment
This is a multi-line comment
This is a multi-line comment
*/
```

## What is a variable and what are its rules?

A variable is a named location in memory that is used to store data. The data can be changed during the execution of the program. The rules for variables are as follows:

1. A variable must be declared before it is used.
2. A variable must be given a type.
3. A variable must be given a unique name.
4. If a variable is not initialized it will be given a default value of Null.
5. A variable can be initialized when it is declared.

```cpp
int myVariable; // This is a variable declaration
int myVariable = 0; // This is a variable declaration and initialization
```

The following are now considered more of suggestions for readability and not rules that will prevent the code from compiling.

1. Variable names should be descriptive.
2. Variable names should be camelCase.
3. Variable names should not start with a number.
4. Variable names should not contain spaces.
5. Variable names should not contain special characters.
6. Variable names should not be a reserved word.

###  What is a reserved word?

A reserved word is a word that is already used by the compiler. It is used to define the syntax of the language. It cannot be used as a variable name. The following is a list of reserved words in C++.

```cpp
alignas
alignof
and
and_eq
asm
auto
bitand
bitor
bool
break
case
catch
char
char16_t
char32_t
class
compl
const
constexpr
const_cast
continue
decltype
default
delete
do
double
dynamic_cast
else
enum
explicit
export
extern
false
float
for
friend
goto
if
inline
int
long
mutable
namespace
new
noexcept
not
not_eq
nullptr
operator
or
or_eq
private
protected
public
register
reinterpret_cast
return
short
signed
sizeof
static
static_assert
static_cast
struct
switch
template
this
thread_local
throw
true
try
typedef
typeid
typename
union
unsigned
using
virtual
void
volatile
wchar_t
while
xor
xor_eq
```

## What is a data type?

A data type is a set of values and operations that can be performed on those values. The following are the most common data types used in C++.

1. int - This is the most common data type used. It is used to store integers (positive whole numbers). This is the default data type for integers.
2. double - This is used to store decimal numbers up to 15 decimal places.
3. bool - This is used to store true or false values.
4. char - This is used to store single characters.
5. string - This is used to store multiple characters. 
6. float - This is used to store decimal numbers up to 7 decimal places.
7. long - This is used to store integers between -2,147,483,648 and 2,147,483,647.
8. short - This is used to store integers between -32,768 and 32,767.
9. byte - This is used to store integers between 0 and 255.

### What is the difference between an int and a double?

An int is used to store whole numbers. A double is used to store decimals. Below is a code block that shows how to use an int and a double.

```cpp
int myInt = 0;
double myDouble = 0.0;
```

### What is the difference between an string and a char?

A string is used to store multiple characters. A char is used to store a single character. Below is a code block that shows how to use a string and a char.

```cpp
string myString = "Hello World";
char myChar = 'H';
```

## What is a constant?

A constant is a variable that cannot be changed. The rules for constants are as follows:

1. A constant must be declared before it is used.
2. A constant must be given a type.
3. A constant must be given a unique name.
4. A constant must be initialized when it is declared.
5. A constant can be declared using the const keyword.
6. A constant can be declared using the #define preprocessor directive.

```cpp
const int myConstant = 0; // This is a constant declaration and initialization using the const keyword
#define myConstant 0 // This is a constant declaration and initialization using the #define preprocessor directive
```

## What is an operator?

An operator is a symbol that tells the compiler to perform a specific mathematical or logical manipulation. The following are the most common operators used in C++.

1. + - This is the addition operator. It adds two values.
2. - - This is the subtraction operator. It subtracts two values.
3. * - This is the multiplication operator. It multiplies two values.
4. / - This is the division operator. It divides two values.
5. % - This is the modulus operator. It returns the remainder of the division of two values.
6. = - This is the assignment operator. It assigns a value to a variable.
7. == - This is the equality operator. It checks if two values are equal.
8. != - This is the inequality operator. It checks if two values are not equal.
9. &#62; - This is the greater than operator. It checks if one value is greater than the other.
10. &#60; - This is the less than operator. It checks if one value is less than the other.
11. &#62;= - This is the greater than or equal to operator. It checks if one value is greater than or equal to the other.
12. &#60;= - This is the less than or equal to operator. It checks if one value is less than or equal to the other.
13. && - This is the and operator. It checks if both values are true.
14. || - This is the or operator. It checks if either value is true.

### What is the difference between the = and == operators?

The = operator is used to assign a value to a variable. The == operator is used to check if two values are equal.

```cpp
int myInt = 0; // This is an assignment
if (myInt == 0) // This is a comparison
{
    // Do something
}
```

## What is an expression?

An expression is a combination of variables, constants, operators, and method calls that the compiler will evaluate to produce a single value. The following is an example of an expression.

```cpp
int myInt = 0;
int myOtherInt = 1;
int myExpression = myInt + myOtherInt;
```

## What is a statement?

A statement is a complete line of code that performs a specific task. The following is an example of a statement.

```cpp
int myInt = 0;
```

## What is a method?

A method is a block of code that performs a specific task. The following is an example of a method.

```cpp
void MyMethod()
{
    // Do something
}
```
These can also be called functions.

## What is a class?

A class is a blueprint for creating objects. The following is an example of a class.

```cpp
class MyClass
{
    // Do something here with a method
    int myInt;

    int MyMethod()
    {
        return myInt + 10;
    }

    // Do something here with a constructor

    MyClass()
    {
        myInt = 10;
    }

    // Do something here with a destructor

    ~MyClass()
    {
        // Do something here
    }
};
```

## What is a constructor?

A constructor is a method that is called when an object is created. The following is an example of a constructor.

```cpp
class MyClass
{
    int myInt;

    MyClass()
    {
        myInt = 10;
    }
};
```

## What is a destructor?

A destructor is a method that is called when an object is destroyed. The following is an example of a destructor.

```cpp
class MyClass
{
    int myInt;

    ~MyClass()
    {
        // Do something here
    }
};
```

