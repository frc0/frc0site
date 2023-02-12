---
date: '2023-2-12'
title: '6.3.3 Data Types'
weight: 6.3.3
lastmod: '2023-2-12'
---

## What are Data Types?

Data types are a way to classify data. They are used to tell the compiler what kind of data is being used so that it can perform operations on the data correctly. For example, if you want to add two numbers, the compiler needs to know that the data is a number and also the type of number data it is. Besides numbers, there are data types for characters, strings, booleans, and more. All of them will be outlined in this section. Data types across many programming languages are similar, but there are some differences from language to language so don't be surprised if you see something different in another language.

## How can we classify data types?

There are two main types of data types: primitive and non-primitive. Primitive data types are the most basic data types and are built into the language. Non-primitive data types are more complex and are built using the primitive data types. For example, a string is a non-primitive data type and is built using the character data type. The primitive data types are:

* Boolean
* Character
* Integer
* Floating Point
* Valueless (void)
* Wide Character

The non-primitive data types are:

* Array (String is an Array of Characters)
* Class
* Enumeration
* Function
* Pointer
* Reference
* Structures
* Union
* Typedef

## What is a Boolean?

A boolean is a data type that can only be true or false. It is used to represent a logical value and is used in control structures. It is also used to represent a bit in memory. The boolean data type is represented by the keyword `bool`. The boolean data type is the smallest data type and is only one bit in size. It is also the fastest data type to process. The boolean data type is used in many places in C++ and is very important to understand. For FRC usage, booleans are commonly used for button feedback, limit switches, and as return values for functions.

An example of a boolean in the context of an FRC style snippet is below:

```cpp
bool isButtonPressed = false;
```

## What is a Character?

A character is a data type that is used to represent a single character. It is used to represent a single letter, number, or symbol. The character data type is represented by the keyword `char`. The character data type is one byte in size and is the smallest data type that can represent a single character. The character data type is used in many places in C++ and is very important to understand. For FRC usage, characters are commonly used for processing strings, handling autonomous side selection (l,c,r) and for many other features. Characters are tied by their byte number to the ASCII table. The ASCII table is a table that contains all of the characters that can be represented by a character data type.


Below is an ascii table that shows the characters that can be represented by a character data type. The table is from [ASCII Table](https://www.asciitable.com/).

![ASCII Table](/images/programming/cpp/asciifull.gif)

An example of a character in the context of an FRC style snippet is below:

```cpp
char autonSelect = 'l';
```

## What is an integer?

An integer is a data type that is used to represent a whole number. While there is a datatype called int, integers right now, in this section is referring to the whole number data type. There are many different sized whole number data types that programmers can use to save memory and to represent different ranges of numbers. The integer data types are represented by the keywords `int`, `short`, `long`, and `long long`. The integer data types are used in many places in C++ and are very important to understand. For FRC usage, integers are commonly used for counting, indexing, and for many other features.

Each of the integer data types have different sizes and ranges. The sizes and ranges are shown in the table below. The table is from [C++ Data Types](https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm).

| Data Type | Size | Range |
|-----------|------|-------|
| short | 2 bytes | -32,768 to 32,767 |
| int | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| long | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| long long | 8 bytes | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |

An example of an integer in the context of an FRC style snippet is below:

```cpp
int encoderCount = 0;
short encoderCount = 0;
long encoderCount = 0;
long long encoderCount = 0;
```

## What is a floating point?

A floating point is a data type that is used to represent a decimal number. There are two different floating point data types that programmers can use to save memory and to represent different ranges of numbers. The floating point data types are represented by the keywords `float` and `double`. The floating point data types are used in many places in C++ and are very important to understand. For FRC usage, floating points are commonly used for representing speeds, distances, and for many other features.

Each of the floating point data types have different sizes and ranges. The sizes and ranges are shown in the table below. The table is from [C++ Data Types](https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm).

| Data Type | Size | Range |
|-----------|------|-------|
| float | 4 bytes | 1.2E-38 to 3.4E+38 |
| double | 8 bytes | 2.3E-308 to 1.7E+308 |

An example of a floating point in the context of an FRC style snippet is below:

```cpp
float wheelRadius = 2.523;
double wheelRadius = 2.523;
```

## What is a Valueless (void)?

A valueless data type is a data type that is used to represent nothing. It is used to represent a value that is not set. The valueless data type is represented by the keyword `void`. The valueless data type is used commonly as a function return type.

An example of a valueless data type in the context of an FRC style snippet is below:

```cpp
void autonomous() {
    // Code here
}
```

## What is a Wide Character?

A wide character is a data type that is used to represent a single character. The wide character data type is represented by the keyword `wchar_t`. The wide character data type is two or four bytes and is used to represent characters that are not in the ASCII table, but instead im the much larger Unicode table. While not commonly used in FRC, it is important to understand.

A copy of the Unicode table is shown below. The table is from [Unicode Table](https://unicode-table.com/en/).

![Unicode Table](/images/programming/cpp/unicodefull.PNG)

An example of a wide character in the context of an FRC style snippet is below:

```cpp
// Wide character for the letter c
wchar_t wideChar = L'c';
```

## What is an Array?

An array is a data type that is used to represent a list of data. The array data type is represented by the keyword `array`. The array data type can be a list of any data type. The array data type is used commonly to represent strings, lists of numbers or even lists of arrays (2d/multidimensional arrays). Arrays are very important to understand and are used in many places in C++, especially in FRC.

An example of an array in the context of an FRC style snippet is below:

```cpp
// Array of 5 integers storing motor controller IDs
int motorControllerIDs[5] = {1, 2, 3, 4, 5};
// Setting the values of all of the elements in the array to 0
motorControllerIDs[0] = 0;
motorControllerIDs[1] = 0;
motorControllerIDs[2] = 0;
motorControllerIDs[3] = 0;
motorControllerIDs[4] = 0;

// The more efficient way to do the same thing, but using a for loop
for (int i = 0; i < 5; i++) {
    motorControllerIDs[i] = 0;
}

```

## What is a Pointer?

A pointer is a data type that is used to represent a memory address. The pointer data type is represented by the keyword `pointer`. The pointer data type is used commonly to represent a memory address. Pointers are a fundamental part of how all computers work and are very important to understand. While not commonly used in FRC, it is important to understand.

An example of a pointer in the context of an FRC style snippet is below:

```cpp
// Pointer to an integer
int* intPointer = nullptr;
// Pointer to a double
double* doublePointer = nullptr;
// Pointer to a character
char* charPointer = nullptr;
```

## What is a class?

A class is a data type that is used to represent a custom data type. The class data type is represented by the keyword `class`. The class data type is used commonly to represent a custom data type created by the programmer or a library. Classes can contain many different data types and functions inside of them. One really common class that I recommend all teams used is a Constants class. This class is used to store all of the constants that are used in the code. This is a really good way to keep track of all of the constants and to make sure that they are all in one place. Classes are very important to understand and are used in many places in C++, especially in FRC.

An example of a Constants class in the context of an FRC style snippet is below:

```cpp
// The constants class used to store driver station constants, motor ids, etc.
class Constants {
    public:
        // Driver station constants
        static const int DRIVER_STATION_ID = 0;
        static const int DRIVER_STATION_PORT = 0;
        // Motor controller constants
        static const int MOTOR_CONTROLLER_ID = 0;
        static const int MOTOR_CONTROLLER_PORT = 0;
};
```

## How can I learn more in depth about data types for C++?

If you want to learn more in depth about data types for C++, I recommend checking out the following resources:

  * [C++ Data Types](https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm)
  * [C++ Data Types](https://www.w3schools.com/cpp/cpp_data_types.asp)
  * [C++ Data Types](https://www.geeksforgeeks.org/c-data-types/)

[-> Back to 6.3 Programming/cpp](/programming/cpp/)