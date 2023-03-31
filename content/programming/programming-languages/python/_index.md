---
date: '2023-2-28'
title: '6.1.4 Python'
weight: 5
lastmod: '2023-3-31'
author: 'UserKorns1202 (Troy Korns)'
authorLink: 'https://github.com/UserKorns1202'
editors: 'Mr. Siefen'
---

## Basics of Python

Python is a high-level, general-purpose programming language. It is a very popular language for beginners because it is easy to learn and read. It is also a very powerful language that can be used to create complex programs. Beginner teams can use it to start controlling simple parts of the robot in an easy to understand way. More advanced teams usually use java or C++.

### Syntax

Python uses indentation to define code blocks, instead of brackets. The standard indentation is four spaces, although tabs and any other space size will work, as long as it is consistent. Each logical line of code must have the same indentation. The following code is an example of proper indentation.
```python
    def function():
        if True:
            print("Hello World")
            if False:
                print("This won't run")
        print("This will run")
```

The following code is an example of improper indentation.
```python
    def function():
        if True:
            print("Hello World")
        if False:
            print("This won't run")
        print("This will run")
```
### Variables

Variables are used to store data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. Variables do not need to be declared with any particular type, and can even change type after they have been set.
```python
    x = 5
    y = "John"
    print(x)
    print(y)
```
### Comments

Comments can be used to explain Python code. Comments can be used to make the code more readable. They can also be used to prevent execution when testing code.
```python
    #This is a comment.
    print("Hello, World!") #This is also a comment.
```
### Data Types

Python has the following data types built-in by default, in these categories:

* Text Type: `str`
* Numeric Types: `int`, `float`, `complex`
* Sequence Types: `list`, `tuple`, `range`
* Mapping Type: `dict`
* Set Types: `set`, `frozenset`
* Boolean Type: `bool`
* Binary Types: `bytes`, `bytearray`, `memoryview`

### Strings

Strings in Python are surrounded by either single quotation marks, or double quotation marks.
```python
    x = "Hello World"
    # is the same as
    x = 'Hello World'
```

Strings can be output to screen using the `print()` function.
```python
    x = "Hello World"
    print(x)
```

### Numbers

Python supports two types of numbers - integers and floating point numbers. (It also supports complex numbers, which will not be explained in this document.) To define an integer, use the following syntax:
```python
    x = 1
    y = 35656222554887711
    z = -3255522
```

To define a floating point number, you may use one of the following notations:
```python
    x = 1.10
    y = 1.0
    z = -35.59
    a = 35e3
    b = 12E4
    c = -87.7e100
```

### Booleans

Booleans represent one of two values: `True` or `False`.
```python
    print(10 > 9)
    print(10 == 9)
    print(10 < 9)
```

### Casting

If you want to specify the data type of a variable, this can be done with casting.
```python
    x = str(3)    # x will be '3'
    y = int(3)    # y will be 3
    z = float(3)  # z will be 3.0
```

### Getting the Type

You can get the data type of a variable with the `type()` function.
```python
    x = 5
    y = "John"
    print(type(x))
    print(type(y))
```

### Setting the Specific Type

You can specify the data type with the following constructor functions:
```python
    x = str("s1") # x will be 's1'
    y = int(2)    # y will be 2
    z = float(3.0)# z will be 3.0
```

## RobotPy

RobotPy is a python library that is used to control the robot. It is a very powerful library that can be used to control the robot in many different ways. It is also very easy to use and understand. It is the recommended library for teams to use to control the robot.

### Installation

To install RobotPy, you must first install python. You can download python from [here](https://www.python.org/downloads/). After you have installed python, you must install RobotPy. You can do this by opening a command prompt and typing `pip install robotpy`. This will install RobotPy and all of its dependencies.

### Importing

To use RobotPy, you must import it. You can do this by typing `import robotpy`. This will import the entire library. You can also import specific parts of the library by typing `from robotpy import *`. This will import all of the parts of the library. You can also import specific parts of the library by typing `from robotpy import specificpart`. This will import the specific part of the library.

### Robot Class

The Robot class is the main class of the library. It is used to control the robot. It is used to control the robot in many different ways. It is also very easy to use and understand. It is the recommended class for teams to use to control the robot.

### Robot Class Functions

The Robot class has many functions that can be used to control the robot. These functions are listed below.

#### `Robot.start()`

The `start()` function is used to start the robot. It must be called before the robot can be controlled. It is called automatically when the robot is turned on.

#### `Robot.stop()`

The `stop()` function is used to stop the robot. It must be called before the robot can be turned off. It is called automatically when the robot is turned off.

#### `Robot.setMotorSpeed(motor, speed)`

The `setMotorSpeed()` function is used to set the speed of a motor. The first argument is the motor that you want to set the speed of. The second argument is the speed that you want to set the motor to. The speed must be a number between -1 and 1.

#### `Robot.getMotorSpeed(motor)`

The `getMotorSpeed()` function is used to get the speed of a motor. The first argument is the motor that you want to get the speed of. The function will return the speed of the motor.

#### `Robot.setMotorPosition(motor, position, speed)`

The `setMotorPosition()` function is used to set the position of a motor. The first argument is the motor that you want to set the position of. The second argument is the position that you want to set the motor to. The third argument is the speed that you want to set the motor to. The position must be a number between -1 and 1. The speed must be a number between -1 and 1.

#### `Robot.getMotorPosition(motor)`

The `getMotorPosition()` function is used to get the position of a motor. The first argument is the motor that you want to get the position of. The function will return the position of the motor.

#### `Robot.getMotorEncoder(motor)`

The `getMotorEncoder()` function is used to get the encoder of a motor. The first argument is the motor that you want to get the encoder of. The function will return the encoder of the motor.

#### `Robot.setMotorEncoder(motor, encoder)`

The `setMotorEncoder()` function is used to set the encoder of a motor. The first argument is the motor that you want to set the encoder of. The second argument is the encoder that you want to set the motor to. The encoder must be a number between -1 and 1.

#### `Robot.setMotorBrake(motor, brake)`

The `setMotorBrake()` function is used to set the brake of a motor. The first argument is the motor that you want to set the brake of. The second argument is the brake that you want to set the motor to. The brake must be a boolean.

#### `Robot.getMotorBrake(motor)`

The `getMotorBrake()` function is used to get the brake of a motor.

#### `Robot.setMotorDirection(motor, direction)`

The `setMotorDirection()` function is used to set the direction of a motor. The first argument is the motor that you want to set the direction of. The second argument is the direction that you want to set the motor to. The direction must be a boolean.

#### `Robot.getMotorDirection(motor)`

The `getMotorDirection()` function is used to get the direction of a motor.

#### `Robot.setMotorMode(motor, mode)`

The `setMotorMode()` function is used to set the mode of a motor. The first argument is the motor that you want to set the mode of. The second argument is the mode that you want to set the motor to. The mode must be a number between 0 and 2.

#### `Robot.getMotorMode(motor)`

The `getMotorMode()` function is used to get the mode of a motor.

#### `Robot.setMotorLimit(motor, limit)`

The `setMotorLimit()` function is used to set the limit of a motor. The first argument is the motor that you want to set the limit of. The second argument is the limit that you want to set the motor to. The limit must be a number between -1 and 1.

#### `Robot.getMotorLimit(motor)`

The `getMotorLimit()` function is used to get the limit of a motor.

#### `Robot.setMotorPID(motor, p, i, d)`

The `setMotorPID()` function is used to set the PID of a motor. The first argument is the motor that you want to set the PID of. The second argument is the P value that you want to set the motor to. The third argument is the I value that you want to set the motor to. The fourth argument is the D value that you want to set the motor to. The P, I, and D values must be numbers.

#### `Robot.getMotorPID(motor)`

The `getMotorPID()` function is used to get the PID of a motor. The first argument is the motor that you want to get the PID of. The function will return the PID of the motor.

#### `Robot.setMotorPIDEnabled(motor, enabled)`

The `setMotorPIDEnabled()` function is used to set the PID enabled of a motor. The first argument is the motor that you want to set the PID enabled of. The second argument is the PID enabled that you want to set the motor to. The PID enabled must be a boolean.

#### `Robot.getMotorPIDEnabled(motor)`

The `getMotorPIDEnabled()` function is used to get the PID enabled of a motor. The first argument is the motor that you want to get the PID enabled of. The function will return the PID enabled of the motor.

#### `Robot.setMotorPIDTarget(motor, target)`

The `setMotorPIDTarget()` function is used to set the PID target of a motor. The first argument is the motor that you want to set the PID target of. The second argument is the PID target that you want to set the motor to. The PID target must be a number.

#### `Robot.getMotorPIDTarget(motor)`

The `getMotorPIDTarget()` function is used to get the PID target of a motor. The first argument is the motor that you want to get the PID target of. The function will return the PID target of the motor.

#### `Robot.setMotorPIDTolerance(motor, tolerance)`

The `setMotorPIDTolerance()` function is used to set the PID tolerance of a motor. The first argument is the motor that you want to set the PID tolerance of. The second argument is the PID tolerance that you want to set the motor to. The PID tolerance must be a number.

#### `Robot.getMotorPIDTolerance(motor)`

The `getMotorPIDTolerance()` function is used to get the PID tolerance of a motor. The first argument is the motor that you want to get the PID tolerance of. The function will return the PID tolerance of the motor.

#### `Robot.setMotorPIDError(motor, error)`

The `setMotorPIDError()` function is used to set the PID error of a motor. The first argument is the motor that you want to set the PID error of. The second argument is the PID error that you want to set the motor to. The PID error must be a number.

#### `Robot.getMotorPIDError(motor)`

The `getMotorPIDError()` function is used to get the PID error of a motor. The first argument is the motor that you want to get the PID error of. The function will return the PID error of the motor.

#### `Robot.setMotorPIDOutput(motor, output)`

The `setMotorPIDOutput()` function is used to set the PID output of a motor. The first argument is the motor that you want to set the PID output of. The second argument is the PID output that you want to set the motor to. The PID output must be a number.

#### `Robot.getMotorPIDOutput(motor)`

The `getMotorPIDOutput()` function is used to get the PID output of a motor. The first argument is the motor that you want to get the PID output of. The function will return the PID output of the motor.

#### `Robot.setMotorPIDErrorSum(motor, errorSum)`

The `setMotorPIDErrorSum()` function is used to set the PID error sum of a motor. The first argument is the motor that you want to set the PID error sum of. The second argument is the PID error sum that you want to set the motor to. The PID error sum must be a number.

#### `Robot.getMotorPIDErrorSum(motor)`

The `getMotorPIDErrorSum()` function is used to get the PID error sum of a motor. The first argument is the motor that you want to get the PID error sum of. The function will return the PID error sum of the motor.

#### `Robot.setMotorPIDLastInput(motor, lastInput)`

The `setMotorPIDLastInput()` function is used to set the PID last input of a motor. The first argument is the motor that you want to set the PID last input of. The second argument is the PID last input that you want to set the motor to. The PID last input must be a number.

#### `Robot.getMotorPIDLastInput(motor)`

The `getMotorPIDLastInput()` function is used to get the PID last input of a motor. The first argument is the motor that you want to get the PID last input of. The function will return the PID last input of the motor.

### `Robot.Sensors`

The `Robot.Sensors` object is used to control the sensors on a robot. The sensors are used to get information from the field.

#### `Robot.Sensors.getSensorValue(sensor)`

The `getSensorValue()` function is used to get the value of a sensor. The first argument is the sensor that you want to get the value of. The function will return the value of the sensor.

#### `Robot.Sensors.getSensorRawValue(sensor)`

The `getSensorRawValue()` function is used to get the raw value of a sensor. The first argument is the sensor that you want to get the raw value of. The function will return the raw value of the sensor.

#### `Robot.Sensors.getSensorRawMin(sensor)`

The `getSensorRawMin()` function is used to get the raw min of a sensor. The first argument is the sensor that you want to get the raw min of. The function will return the raw min of the sensor.

#### `Robot.Sensors.getSensorRawMax(sensor)`

The `getSensorRawMax()` function is used to get the raw max of a sensor. The first argument is the sensor that you want to get the raw max of. The function will return the raw max of the sensor.

#### `Robot.Sensors.getSensorMin(sensor)`

The `getSensorMin()` function is used to get the min of a sensor. The first argument is the sensor that you want to get the min of. The function will return the min of the sensor.

#### `Robot.Sensors.getSensorMax(sensor)`

The `getSensorMax()` function is used to get the max of a sensor. The first argument is the sensor that you want to get the max of. The function will return the max of the sensor.

#### `Robot.Sensors.getSensorUnits(sensor)`

The `getSensorUnits()` function is used to get the units of a sensor. The first argument is the sensor that you want to get the units of. The function will return the units of the sensor.

#### `Robot.Sensors.getSensorType(sensor)`

The `getSensorType()` function is used to get the type of a sensor. The first argument is the sensor that you want to get the type of. The function will return the type of the sensor.

#### `Robot.Sensors.getSensorName(sensor)`

The `getSensorName()` function is used to get the name of a sensor. The first argument is the sensor that you want to get the name of. The function will return the name of the sensor.

#### `Robot.Sensors.getSensorPort(sensor)`

The `getSensorPort()` function is used to get the port of a sensor. The first argument is the sensor that you want to get the port of. The function will return the port of the sensor.

#### `Robot.Sensors.getSensorMode(sensor)`

The `getSensorMode()` function is used to get the mode of a sensor. The first argument is the sensor that you want to get the mode of. The function will return the mode of the sensor.

#### `Robot.Sensors.getSensorModes(sensor)`

The `getSensorModes()` function is used to get the modes of a sensor. The first argument is the sensor that you want to get the modes of. The function will return the modes of the sensor.

#### `Robot.Sensors.getSensorModeCount(sensor)`

The `getSensorModeCount()` function is used to get the mode count of a sensor. The first argument is the sensor that you want to get the mode count of. The function will return the mode count of the sensor.

