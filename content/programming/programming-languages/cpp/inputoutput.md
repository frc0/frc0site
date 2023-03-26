---
date: '2023-2-12'
title: '6.1.2.4 Input and Output'
weight: 4
chapter: false
lastmod: 2023-02-26
author: 'Mr. Siefen'
editors: ''
draft: true
---

## What is Input and Output?

In many scenarios you will want to get input from the user or output information to the user. In C++ there are a few different ways to do this. The most common way is to use the `std::cin` and `std::cout` objects. These objects are part of the standard library and are really convenient to use. While there are other ways to do this for FRC, when you are beginning to learn C++ it is best to use these objects. These objects will work with a standard console window.

## How to use Input and Output

To use the `std::cin` and `std::cout` objects you will need to include the `iostream` header file. This header file is part of the standard library and is included with the C++ compiler. To use the `cin` and `cout` objects without the need to use the `std::` namespace you can use the `using namespace std;` statement. This can however cause conflicts with other libraries that you may be using. It is best to use the `std::` namespace when you are beginning to learn C++ and not use the `using namespace std;` statement.

### How to use `std::cout`

To use the `std::cout` object you will need to use the `<<` operator. This operator is called the insertion operator. The `<<` operator is used to insert data into the `std::cout` object. The `std::cout` object is used to output data to the console window. The `std::cout` object is used in the following way:

```cpp
std::cout << "Hello World!";
```

There is also a handy `std::endl` object that can be used to output a new line to the console window. This is useful when you want to output multiple lines of text to the console window. The `std::endl` object is used in the following way:

```cpp
std::cout << "Hello World!" << std::endl;
std::cout << "This is a new line!" << std::endl;
```

### How to use `std::cin`

To use the `std::cin` object you will need to use the `>>` operator. This operator is called the extraction operator. The `>>` operator is used to extract data from the `std::cin` object. The `std::cin` object is used to get input from the user. The `std::cin` object is used in the following way:

```cpp
std::cin >> input;
```

The `input` variable can be any type of variable that you would like to get input from the user. The `std::cin` object will get input from the user and store it in the `input` variable. The `std::cin` object will only get input from the user until the user hits the enter key. When the user hits the enter key the `std::cin` object will store the input in the `input` variable and then the program will continue to execute.

## How to use Input and Output in FRC

When you are using C++ for FRC you will need to use the `FRC::SmartDashboard` class to output information to the SmartDashboard. The `FRC::SmartDashboard` class is part of the WPILib library and is used to output information to the SmartDashboard. The `FRC::SmartDashboard` class is used in the following way:

```cpp
FRC::SmartDashboard::PutNumber("MyNumber", 1);
```

The `FRC::SmartDashboard::PutNumber` method is used to output a number to the SmartDashboard. The `FRC::SmartDashboard::PutNumber` method takes two arguments. The first argument is a string that represents the name of the number. The second argument is a number that represents the value of the number. The `FRC::SmartDashboard::PutNumber` method will output the number to the SmartDashboard with the name specified in the first argument.

The `FRC::SmartDashboard` class also has a `GetNumber` method that can be used to get a number from the SmartDashboard. The `FRC::SmartDashboard::GetNumber` method takes one argument. The first argument is a string that represents the name of the number. The `FRC::SmartDashboard::GetNumber` method will get the number from the SmartDashboard with the name specified in the first argument and return it to the program.

### What are the other ways to display data besides the SmartDashboard?

In FRC we have the default driver station, SmartDashboard, Shuffleboard and now also Glass. Each of these tools vary in their design, features and more, but all have the same core function. Anytime you are displaying data to the driver station you are using one of these tools. Below is a table that shows the differences between each of these tools and a link to each of their documentation pages.

Tool | Description | Documentation
--- | --- | ---
Driver Station | The LabVIEW Dashboard is automatically launched by the FRC Driver Station by default. The purpose of the Dashboard is to provide feedback about the operation of the robot using tabbed display with a variety of built in features. | [Driver Station Documentation](https://docs.wpilib.org/en/stable/docs/software/dashboards/labview-dashboard/driver-station-labview-dashboard.html#FRC-labview-dashboard)
SmartDashboard | SmartDashboard allows you to view your robot data by automatically creating customizable indicators specifically for each piece of data sent from your robot. | [SmartDashboard Documentation](https://docs.wpilib.org/en/stable/docs/controls-overviews/control-system-software.html#smartdashboard)
Shuffleboard | Shuffleboard has the same features as SmartDashboard. It also improves on the setup and visualization of your data with new features and a modern design at the cost of being less resource efficient. | [Shuffleboard Documentation](https://docs.wpilib.org/en/stable/docs/controls-overviews/control-system-software.html#shuffleboard)
Glass | Glass is a Dashboard focused on being a programmer’s tool for debugging. The primary advantages are the field view, pose visualization and advanced signal plotting tools. | [Glass Documentation](https://docs.wpilib.org/en/stable/docs/controls-overviews/control-system-software.html#glass)

## Where can I learn more?

If you would like to learn more about the `std::cin` and `std::cout` objects you can check out the following resources:

  * [C++ Input and Output](https://www.w3schools.com/cpp/cpp_user_input.asp)
  * [C++ Input and Output](https://www.tutorialspoint.com/cplusplus/cpp_input_output.htm)
  * [C++ Input and Output](https://www.geeksforgeeks.org/input-output-cpp/)

If you would like to learn more about the `FRC::SmartDashboard` class and other FRC tools you can check out the following resources:

* [FRC Driver Station](https://docs.wpilib.org/en/stable/docs/software/dashboards/labview-dashboard/driver-station-labview-dashboard.html#FRC-labview-dashboard)
* [FRC SmartDashboard](https://docs.wpilib.org/en/stable/docs/software/dashboards/smartdashboard/index.html#smartdashboard)
* [FRC Shuffleboard](https://docs.wpilib.org/en/stable/docs/software/dashboards/shuffleboard/index.html#shuffleboard)
* [FRC Glass](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/index.html#glass)

[-> Back to 6.3 Programming/cpp](/programming/cpp/)