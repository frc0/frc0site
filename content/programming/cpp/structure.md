---
date: '2023-2-10'
title: '6.3.2 Structure'
weight: 2
chapter: false
lastmod: 2023-02-26
author: 'Mr. Siefen'
editors: ''
draft: true
---

## What is Structure?

Structure is the way that C++ is organized. There are many schools of thought and not really one exact way to do it. The way that we will be doing it is the way that is most common in FRC and is the way that most teams will be able to help you with. It is also the way that we will be using in the examples and lessons for consistency. The only language lesson where whitespace is important is in Python. There the structure and whitespace are very important. In C++ the whitespace is not as important but it is still important to have a consistent structure.

### What is a Program?

Starting from the old days of punch cards, a program is a set of instructions that are executed by a computer. The instructions are written in a language that the computer can understand. The computer then executes the instructions in order. The instructions are written in a file that is saved on the computer. We as programmers can make our own lives easier by sticking to a standard structure for our programs. This way we can easily find the code that we need to change and we can easily find the code that we need to debug. This is the same for any programming language. The structure of the program is similar for most programming languages. The syntax of the language is what is different.

#### Is it always the same order?

Without getting into too much detail, the order of the instructions is not always the same. The order of the instructions is determined by the control structures. We will cover control structures in another lesson. The order of the instructions is important because the computer executes the instructions in a logical order. If the order is wrong, the program will not work correctly. This is why it is important to have a standard structure for your programs and to stick to that structure. There was an old common expression called "GOTO 10" which was used to jump to a specific line in a program. This was used to make the program jump to line 10 (the beginning) and essentially start back at the beginning in a loop. Even at this primitive stage there was a top down order lines were executed in.

### What is the structure of a typical C++ program?

The structure of a typical C++ program is as follows:

```cpp
#include <iostream>

using namespace std;

int main()
{
    // Code goes here
    return 0;
}
```

### What is the structure of a typical FRC C++ program?

The structure of a typical FRC C++ program is as follows:
//TODO: THIS IS NOT THE CORRECT STRUCTURE WITH FRC LIBRARIES, IT IS JUST A PLACEHOLDER

```cpp
#include <FRC/TimedRobot.h>
#include <FRC/smartdashboard/SmartDashboard.h>

class Robot : public FRC::TimedRobot {
public:
    void RobotInit() override;
    void RobotPeriodic() override;
    void AutonomousInit() override;
    void AutonomousPeriodic() override;
    void TeleopInit() override;
    void TeleopPeriodic() override;
    void TestPeriodic() override;
};

void Robot::RobotInit() {
    // Code goes here and is run when the robot is first turned on
}

void Robot::RobotPeriodic() {
    // Code goes here and is run every 20ms
}

void Robot::AutonomousInit() {
    // Code goes here and is run when the robot enters autonomous mode
}

void Robot::AutonomousPeriodic() {
    // Code goes here and is run every 20ms while the robot is in autonomous mode
}

void Robot::TeleopInit() {
    // Code goes here and is run when the robot enters teleop mode
}

void Robot::TeleopPeriodic() {
    // Code goes here and is run every 20ms while the robot is in teleop mode
}

void Robot::TestPeriodic() {
    // Code goes here and is run every 20ms while the robot is in test mode
}

```

#### Why is the FRC structure so different?

It's not really different, but actually very similar. The only difference is that the FRC structure uses lots of extra libraries that handle many things for teams. The FRC structure also has a few extra functions that are called at specific timed intervals. The FRC structure is also a class structure which is a little more advanced than the typical C++ structure for something like a "hello world" example. We will cover classes in another lesson.

#### Will the FRC structure be similar for other languages and do regular C++ programs work in the FRC structure?

The FRC TimedRobot structure is very similar across the OOP languages (C++ and Java). Even with CommandBased robots the idea and concepts of subsystems, commands, and a sequential/concurrent scheduler are the same. The FRC structure is still just regular c++ with lots of extra add ons. Anything you can do in regular C++ you can do in the FRC structure. The FRC structure is just a way to make your life easier and to make your code more organized.

### What are the rules and guidelines for the structure of a C++ program?

1. All of the includes must be at the top of the program.
2. All of the using statements must be at the top of the program.
3. All programs will have a main function.
    - Even the FRC programs have a main function, its just not the main place code is written.
4. When defining a function, the function name should start with a lowercase letter and be snake/camel case.
    - Example: `void my_function()` or `void myFunction()`
    - This is a suggestion and not a rule. You can name your functions however you want.
5. Functions will contain all code that is encapsulated between the curly braces. Therefore its good practice to have the opening curly brace on the same line as the function name and the closing curly brace on its own line.
    - Example below is not good practice for readability, even though it is valid C++: 
    ```void my_function() { // Code goes here }```

    - Example below is good practice for readability: 
        ```
        void my_function() { 
                // Code goes here 
            } 
        ```

[-> Back to 6.3 Programming/cpp](/programming/cpp/)