---
title: "5.5 Pneumatic Control"
date: 2023-02-04
weight: 5
chapter: false
lastmod: 2023-02-26
author: 'Mr. Siefen'
editors: ''
---

Pneumatic control is the process of controlling the flow of air to the pneumatic system. This is done by using solenoids to control cylinders of various shapes and sizes. All of the cylinders are controlled using the same basic hardware. At a minimum, if you have followed along you should have a compressor, a pressure switch, a release valve, and a solenoid. The solenoid is the only part of the system that is controlled by the robot. The compressor and solenoids are controlled by the PCM/PCH. The pressure switch stops the compressor if it detects anything above 125 psi. In case that fails there should ALWAYS be a mechanical safety valve that is properly tuned.

Without diving into the code portion yet, let's look at the hardware. The solenoid is the only part of the system that is controlled by the robot so far. The compressor will just automatically run nonstop until a certain max PSI limit is reached. This assumes there is code for enabling the compressor somewhere in your code. A guide for this including with the changes for 2023 is [here](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html#generating-and-storing-pressure) for Java and C++.

## Controlling the Different Solenoids via Code

There are two different types of solenoids that are used in FRC. The first is the single solenoid. This is the most basic solenoid and is used to control airflow in a single direction. The second is the double solenoid. This is used to control two different directions of airflow. Both have some basic commands for controlling them. [This is an example from wpilib](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html#single-solenoids-in-wpilib) for the single solenoid. An example for the double solenoid is [here](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html#double-solenoids-in-wpilib).

## Operating the Solenoids Manually (Without Full Code)

NOTE: You still need to have the rest of your system enabled and controlled with the PCM/PCH properly. This is just a way to manually control the solenoids without having to write code for it. This is useful for testing and debugging.

Many of the FRC solenoids feature a button on their top. When this is pressed it forces the solenoid to change the direction of the air flow. This should be done with EXTREME CAUTION as you will be right next to the solenoid, and given the laws of space and time, probably near the cylinder you're gonna set off.

![Solenoid Button](/images/pneumatics/manual-solenoid-button.jpeg)
The button on the top of the solenoid is used to manually change the direction of the air flow.

## Controlling the Air Compressor in Code with Better Feedback

By using an analog pressure sensor, teams can get much more detailed information about the pressure in the system. This allows for more accurate control of the system. This is especially important for teams that are using a compressor that is not controlled by the PCM/PCH. This is a guide for [using the analog pressure sensor](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html#pressure-transducers) in Java and C++.
