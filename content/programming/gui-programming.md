---
date: '2023-2-28'
title: '6.13 GUI Programming'
weight: 13
lastmod: '2023-3-31'
author: 'UserKorns1202 (Troy Korns)'
authorLink: 'https://github.com/UserKorns1202'
editors: 'Mr. Siefen'
---

## What is GUI Programming?

The GUI (Graphical User Interface) for FRC is called Shuffleboard (or SmartDashboard). Shuffleboard is a dashboard that allows you to view and control data from your robot. It runs on your computer and communicates with your robot over the network, and is a great tool for debugging and testing your robot code.

### What is a widget?

A widget is a component of the Shuffleboard that displays data from your robot. Widgets can be added to Shuffleboard to display data from sensors, motors, and other robot components. Widgets can also be added to display data from the robot code, such as the robot's position on the field.

### What is a tab?

A tab is a collection of widgets that are displayed together. Tabs can be used to organize your Shuffleboard into different sections, such as a tab for each subsystem on your robot.

### What is a layout?

A layout is a collection of widgets that are displayed together. Layouts can be used to organize your Shuffleboard into different sections, such as a layout for each subsystem on your robot.

### Programming Shuffleboard

### Adding Widgets

Widgets are created in Shuffleboard when you output data to Shuffleboard in code. The following code creates a widget that displays the value of a boolean variable named `isArmExtended`:

```java

SmartDashboard.putBoolean("Arm Extended?", isArmExtended);

```

The first argument is a string of what you want the widget to be called when it appears in the dashboard. The second argument is the variable that you want to display in the widget's data spot. This line will display as the following in Shuffleboard:

![SmartDashboard](/images/programming/putBool.png)

The color in the box represents the current boolean value: Green is True and Red is False.

Similarly, the following code creates a widget that displays the value of a double variable named `armAngle`:

```java

SmartDashboard.putNumber("Arm Angle", armAngle);

```

This line will create a similar widget to the one above, but with a different name and number value instead of colors.