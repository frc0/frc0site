---
date: '2023-2-12'
title: '6.3.5 Control Structures'
weight: 6.3.5
lastmod: '2023-2-12'
---

## What are Control Structures?

Control structures are used to control the flow of a program. They allow you to make decisions and repeat code. There are many different types of control structures, but we will focus on the most common ones. If you want to learn more about control structures in general, you can read more about them [here](https://en.wikipedia.org/wiki/Control_flow). This page will focus on the control structures used in C++ and very very briefly in FRC C++.

## If Statements

These are the most common control structure in programming. They allow you to make decisions based on a condition. If the condition is true, the code inside the if statement will run. If the condition is false, the code inside the if statement will not run. The syntax for an if statement is as follows:

```cpp
if (condition) {
    // Code goes here
}
```

In the example the if statement is declared by the keyword `if`. The condition is in parentheses after the `if` keyword. The code that will run if the condition is true is in curly braces after the condition. The curly braces are used to group code together. The code inside the curly braces is called the body of the if statement.

### Else Statements

If you want to run code if the condition is false, you can use an else statement. The syntax for an else statement is as follows:

```cpp
if (condition) {
    // Code goes here
} else {
    // Code goes here
}
```

The else statement is declared by the keyword `else`. The code that will run if the condition is false is in curly braces after the else statement. The curly braces are used to group code together. If you noticed that the else statement does not have a condition, that is because it is only run if the condition is false. The else statement is only run if everything else is false.

### Else If Statements

If you want to run code if the condition is false and you want to run code if another condition is true, you can use an else if statement. The syntax for an else if statement is as follows:

```cpp
if (condition) {
    // Code goes here
} else if (condition) {
    // Code goes here
} else {
    // Code goes here
}
```

In this example condition is probably no longer just a boolean value, but could be any logical condition. The else if statement is declared by the keyword `else if`. The condition is in parentheses after the `else if` keyword. You can add as many else if statements as you want in between the if and else statements. The else if statement is only checked and run if the previous conditions are false.

### What is an If/Else If/Else statement used in FRC?

In FRC, the if/else if/else statement is used to check if a button is pressed on the controller. The code for this is as follows:

```cpp
if (controller.GetAButton()) {
    motor.Set(1);
} else if (controller.GetBButton()) {
    motor.Set(-1);
} else {
    motor.Set(0);
}
```

## Switch Statements

Switch statements are similar to if statements, but they are used when you have a lot of conditions. The syntax for a switch statement is as follows:

```cpp
switch (variable) {
    case value1:
        // Code goes here
        break;
    case value2:
        // Code goes here
        break;
    default:
        // Code goes here
        break;
}
```

There will always be a default case. The default case is run if none of the other cases are true. The break keyword is used to stop the switch statement from running the rest of the cases. If you do not use the break keyword, the switch statement will run all of the cases after the case that is true. Sometimes this might be what you want the switch to do, but usually its best to break after finding the condition you were after. The switch statement is declared by the keyword `switch`. The variable is the variable that will be checked against the cases. The cases are declared by the keyword `case`. The value is the value that the variable will be compared to. Unlike if statements, the code to run for each condition is **NOT** in curly braces.

### What is an example Switch statement used in FRC?

In FRC, the switch statement is used to check what mode is selected for autonomous. The code for this is as follows:

```cpp
switch (autonomousMode) {
    case 0:
        // Drive forward for 2 seconds
        m_drive.ArcadeDrive(0.5, 0);
        Wait(2);
        break;
    case 1:
        // Drive forward for 5 seconds
        m_drive.ArcadeDrive(0.5, 0);
        Wait(5);
        break;
    case 2:
        // Drive backwards slowly for 10 seconds
        m_drive.ArcadeDrive(-0.25, 0);
        Wait(10);
        break;
    default:
        // Do nothing
        break;
```

## For Loops

For loops are used to repeat code a certain number of times. The syntax for a for loop is as follows:

```cpp
for (int i = 0; i < 10; i++) {
    // Code goes here
}
```

The for loop is declared by the keyword `for`. The first part of the for loop is the initialization. This is where you declare the variable that will be used to keep track of how many times the loop has run. The second part of the for loop is the condition. This is where you declare the condition that will be checked to see if the loop should run again. The third part of the for loop is the increment. This is where you declare how the variable will be changed after each loop. The code that will run each time the loop runs is in curly braces after the for loop.

### Why use i as a variable and what is the ++ operator?

The variable i is used because it is a common variable name to use in for loops. Even though this loop is small, you can nest loops inside of each other. Due to the way code is compiled these small loops still need a proper variable name in their own context. Using lettings like i, j, k, l ... can help programmers understand how far nested they are in their code. Why i? I don't have an answer. The ++ operator is used to increment the variable by 1. The -- operator is used to decrement the variable by 1. The += operator is used to increment the variable by a certain amount. The -= operator is used to decrement the variable by a certain amount.

Here are some examples of nested for loops, and the various ways to increment the variable i:

```cpp
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j++) {
        for (int k = 0; k < 10; k++) {
            // Code goes here
        }
    }
}

for (int i = 0; i < 1000; i += 100) {
    // Code goes here
}
```

Here are some examples of nested for loops, and the various ways to decrement the variable i:

```cpp
for (int i = 10; i > 0; i--) {
    for (int j = 10; j > 0; j--) {
        for (int k = 10; k > 0; k--) {
            // Code goes here
        }
    }
}

for (int i = 1000; i > 0; i -= 100) {
    // Code goes here
}
```

### What is an example For loop used in FRC?

In FRC, the for loop can be used to poll and parse data from all of the analog inputs on the roboRIO and save it to an array. The code for this is as follows:
    
```cpp
// Create an array of AnalogInput objects
AnalogInput analog[8];
// Create an array to store the voltage values
int analogInputs[8];

// Create the AnalogInput objects and store them in the analog array
for (int i = 0; i < 8; i++) {
    analog[i] = new AnalogInput(i);
}

// Get the voltage values from the analog inputs and store them in the analogInputs array
for (int i = 0; i < 8; i++) {
    analogInputs[i] = analog[i].getValue();
}
```

## While Loops

While loops are used to repeat code until a condition is false. The syntax for a while loop is as follows:

```cpp
while (condition) {
    // Code goes here
}
```

The while loop is declared by the keyword `while`. The condition is in parentheses after the `while` keyword. The code that will run each time the loop runs is in curly braces after the while loop. If you want to run code at least once, you can use a do while loop. The syntax for a do while loop is as follows:

```cpp
do {
    // Code goes here
} while (condition);
```

### What is an infinite loop?

An infinite loop is a loop that will never stop running. This is usually caused by a condition that is always true. Here is an example of an infinite loop:

```cpp
while (true) {
    // Code goes here
}
```

This has no way of stopping because the condition is always true. This is why you should always make sure that your conditions are correct. If you are not sure if your condition is correct, you can use the debugger to step through your code and see what is happening. To stop the program from running, you can press the stop button in the debugger in VS Code. You can press `SHIFT + F5` to stop the program & press `F5` to start the debugger again.

### What is an example While loop used in FRC?

In FRC, the while loop can be used to run code until a limit switch is pressed. The code for this is as follows:

```cpp
// Move the arm motor until the limit switch is pressed
while (!m_limitSwitch.get()) {
    // move the motor
    armMotor.set(0.5);
}
// Stop the motor
armMotor.set(0);
```

## Functions

Functions are used to group code together. The syntax for a function is as follows:

```cpp
returnType functionName (parameter1, parameter2, ...) {
    // Code goes here
}
```

The function is declared by the keyword `function`. The return type is the type of data that the function will return. The function name is the name of the function. The parameters are the variables that will be used in the function. The code that will run when the function is called is in curly braces after the function. The return type can be any type of data. The function name can be any name. The parameters can be any type of data. The code that will run when the function is called can be any code. The return type, function name, and parameters are all optional. If you do not want the function to return anything, you can use the keyword `void` as the return type. If you do not want the function to take any parameters, you can leave the parentheses empty. If you do not want the function to do anything, you can leave the curly braces empty. If you do not want the function to return anything, do not take any parameters, and do not do anything, you can declare the function as follows:

```cpp
void functionName () {
}
```

### What is an example function used in FRC?

Here is an example function that is used in FRC:

```cpp
void Drive (double leftSpeed, double rightSpeed) {
    leftMotor.Set(leftSpeed);
    rightMotor.Set(rightSpeed);
}
```