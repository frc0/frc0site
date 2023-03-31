---
date: '2023-2-25'
title: '6.4 Command Based Programming'
weight: 6.4
lastmod: '2023-3-31'
author: 'UserKorns1202 (Troy Korns)'
authorLink: 'https://github.com/UserKorns1202'
editors: 'Mr. Siefen'
---

## What is Command Based Programming?

Command Based Programming is a programming structure used by FRC to organize how the code is setup and run in a way similar to function calling. The main difference between the two is that a command is a completely seperate file that gets called in something called a scheduler. With this style though, you can easily run multiple commands, set commands to run as a default state, and even cancel commands. This is a very powerful tool that can be used to make your robot do many things at once.

## Basic Terminology

### Command

A command is a file that contains a set of instructions that can be called by the scheduler. This is the main part of the command based programming structure. Commands can be run in parallel, run as a default state, or even canceled.

### Scheduler

The scheduler is a part of the command based programming structure that runs the commands. It is the main part of the command based programming structure. The scheduler is what runs the commands and makes sure that they are running correctly. This process runs about every 20 milliseconds and checks for mapped button presses, joystick movements, and other inputs.

### Subsystem

A subsystem is a part of the robot that is controlled by a command. This can be the drive train, the intake, or even the shooter. Subsystems are the main part of the command based programming structure. Subsystems are what the commands control given functions created inside of them and contain all of the setup for components (such as motors for wheels in a Drive Train).

### RobotContainer

The robot container is a file that contains all of the commands and subsystems. This is the main part of the command based programming structure. The robot container is what the scheduler runs. This file is where you will map all of the buttons and joysticks to the commands and subsystems, along with all of the other requirements that should be pre-written when a command based project is created.

## How to Use Command Based Programming

### Creating a Command

To create a command, you need to create a new file in the commands folder. The file should be named after the command. For example, if you were to create a command that drives the robot forward, you would name the file DriveForward. An example of a command is shown below.

```java
package frc.robot.commands;

import edu.wpi.first.wpilibj2.command.CommandBase;
import frc.robot.subsystems.DriveTrain;


public class DriveForward extends CommandBase {
  private final DriveTrain m_driveTrain;

  public DriveForward(DriveTrain driveTrain) {
    m_driveTrain = driveTrain;
    addRequirements(m_driveTrain);
  }

  @Override
  public void initialize() {
  }

  @Override
  public void execute() {
    //Code to drive forward
  }

  @Override
  public void end(boolean interrupted) {
  }

  @Override
  public boolean isFinished() {
    return false;
  }
}
```

In the example, the first few lines are imports that will be similar to all the files you will create. The first starts with adding the command type and the other two are specific imports for this file. 
```java 
import edu.wpi.first.wpilibj2.command.CommandBase;
``` 
imports the command base library so the setup beneath it can be called in the scheduler and 
```java
import frc.robot.subsystems.DriveTrain;
```
imports the "DriveTrain" subsystem to the file. This one is slightly different because it is another file that you would have created from within the project instead of an installed library. Importing this allows you to use variables and methods from the subsystem in the command using dot notation.

The next portion starts like a child class in Object Oriented Programming (or OOP). You are creating a new command with whatever name that extends the CommandBase class. The first line inside the brackets creates an object of the DriveTrain subsystem. This is the same as creating a variable in OOP. The second line adds the subsystem to the command as a parameter/argument. This is given to the command from where it is called in the RobotContainer file.

The "public void execute()" method is where you you put the code for what the command should do when run. For example, a driving command could look like this:

```java

    @Override
    public void execute() {
        m_driveTrain.drive(0.5, 0.5);
    }
    
```

In this, the execution calls another meathod from within the DriveTrain subsystem and passes arguments to it. These arguments would most likely be joystick inputs for driving, but the 0.5 is a placeholder for now. All of the other methods inside the brackets are neccessary for the command to run, but they are not used in this example and may not be edited by you in creating your code either.

### Creating a Subsystem

To create a subsystem, you need to create a new file in the subsystems folder. The file should be named after the subsystem. For example, if you were to create a subsystem that controls the drive train, you would name the file DriveTrain. The file should look like this:

```java
package frc.robot.subsystems;

import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.DriveConstants;
import com.ctre.phoenix.motorcontrol.can.WPI_TalonSRX;
import com.ctre.phoenix.motorcontrol.ControlMode;
import edu.wpi.first.wpilibj.drive.DifferentialDrive;


public class DriveTrain extends SubsystemBase {
    //Creates the motors
  private final WPI_TalonSRX m_leftFront = new WPI_TalonSRX(DriveConstants.kLeftFrontPort);
  private final WPI_TalonSRX m_rightFront = new WPI_TalonSRX(DriveConstants.kRightFrontPort);
  private final WPI_TalonSRX m_leftRear = new WPI_TalonSRX(DriveConstants.kLeftRearPort);
  private final WPI_TalonSRX m_rightRear = new WPI_TalonSRX(DriveConstants.kRightRearPort);

//Group the motors to lefts and rights
  public MotorControllerGroup m_leftMotors = new MotorControllerGroup(m_leftFront, m_leftRear);
  public MotorControllerGroup m_rightMotors = new MotorControllerGroup(m_rightFront, m_rightRear);

  //Creates the drive
  private final DifferentialDrive m_drive = new DifferentialDrive(m_leftMotors, m_rightMotors);

  public DriveTrain() {

  }

//Creates the drive method
  public void drive(double leftSpeed, double rightSpeed) {
    m_drive.tankDrive(-rightSpeed * DriveConstants.kNormSpeedMult, leftSpeed * DriveConstants.kNormSpeedMult);
  }
//Creates the stop method
  public void stop() {
    m_drive.tankDrive(0, 0);
  }
}
```

Again, the first few lines are imports that will be similar to all the files you will create. This time we add
```java
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.DriveConstants;
import com.ctre.phoenix.motorcontrol.can.WPI_TalonSRX;
import com.ctre.phoenix.motorcontrol.ControlMode;
import edu.wpi.first.wpilibj.drive.DifferentialDrive;
```
to the imports. The first two are the same as the command imports, with the DriveConstants also being a file you create that holds set values for the whole project. The third is a library that allows you to use the Talon SRX motor controllers (this would be changed to whatever motor controller your team uses). The fourth is a library that allows you to use the ControlMode class. The last one is a library that allows you to use the DifferentialDrive class, which is a tank drive where the wheels move like treads.

The next portion starts like a child class in OOP. You are creating a new subsystem with whatever name that extends the SubsystemBase class (in this example, the DriveTrain). Inside the brackets are a few setup sections.

```java
//Creates the motors
  private final WPI_TalonSRX m_leftFront = new WPI_TalonSRX(DriveConstants.kLeftFrontPort);
  private final WPI_TalonSRX m_rightFront = new WPI_TalonSRX(DriveConstants.kRightFrontPort);
  private final WPI_TalonSRX m_leftRear = new WPI_TalonSRX(DriveConstants.kLeftRearPort);
  private final WPI_TalonSRX m_rightRear = new WPI_TalonSRX(DriveConstants.kRightRearPort);
```

This section creates the motor objects to reference and give movement commands. Each motor is identified by the port set in the DriveConstants file that corresponds to where the motor would be physically wired up to. After the "private final" there is a variable type (like an int, str, or double) and a variable name. The variable name is what you will use to reference the motor in other parts of the code. The variable type is the type of motor controller you are using. In this example, the motor controllers are Talon SRXs. The "new WPI_TalonSRX" is the command that creates the motor object. The "DriveConstants.kLeftFrontPort" is the command that references the port number from the DriveConstants file.

```java
//Group the motors to lefts and rights
  public MotorControllerGroup m_leftMotors = new MotorControllerGroup(m_leftFront, m_leftRear);
  public MotorControllerGroup m_rightMotors = new MotorControllerGroup(m_rightFront, m_rightRear);
```

This section creates the motor groups. The motor groups are used to group the motors together so that they can be controlled as if they were one. This is useful for tank drive, where the left and right sides of the robot are controlled independently. The "MotorControllerGroup" is the variable type, the "m_leftMotors" is the variable name, and "new MotorControllerGroup" is the command that creates the motor group object. The "(m_leftFront, m_leftRear)" is the command that references the motor objects that are to be grouped together under the name "m_leftMotors".

```java
//Creates the drive
  private final DifferentialDrive m_drive = new DifferentialDrive(m_leftMotors, m_rightMotors);
```

This section creates the drive object. The "DifferentialDrive" is the variable type, the "m_drive" is the variable name, and "new DifferentialDrive" is the command that creates the drive object. The "(m_leftMotors, m_rightMotors)" is the command that references the motor groups that are to be used for the drive and sets up the order for the arguments you will pass to the drive in the execution of a command.

```java
//Creates the drive method
  public void drive(double leftSpeed, double rightSpeed) {
    m_drive.tankDrive(-rightSpeed * DriveConstants.kNormSpeedMult, leftSpeed * DriveConstants.kNormSpeedMult);
  }
```

This section creates the drive method. The "m_drive.tankDrive" is the command that references the drive object and the "(-rightSpeed * DriveConstants.kNormSpeedMult, leftSpeed * DriveConstants.kNormSpeedMult)" is the arguments that references the parameters passed to the method. The order must match what you setup in the declaring of the DifferentialDrive object earlier. One (the right motors in this example) of the motor groups is set backwards because they are mounted facing opposite directions. Setting the speed negative to what is sent will reverse which direction the motor spins. The ".tankDrive" is a built in command for DifferentialDrive that sends speeds to the motors given in the arguments. This is also used in the stop method by setting the speeds to 0 for both sides.

### Creating a RobotContainer

To create a robot container, you need to create a new file in the robot folder. The file should be named RobotContainer. The file should be in the robot folder. The file should look like this:

```java
package frc.robot;

import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.CommandScheduler;
import edu.wpi.first.wpilibj2.command.button.JoystickButton;
import edu.wpi.first.wpilibj.Joystick;
import edu.wpi.first.wpilibj.TimedRobot;
import frc.robot.commands.DriveForward;
import frc.robot.subsystems.DriveTrain;


public class RobotContainer extends TimedRobot {
  private final DriveTrain m_driveTrain = new DriveTrain();
  private final DriveForward m_driveForward = new DriveForward(m_driveTrain);
  private final Joystick m_joystick = new Joystick(0);
  private final JoystickButton m_button = new JoystickButton(m_joystick, 1);

  @Override
  public void robotInit() {
    CommandScheduler.getInstance().setDefaultCommand(m_driveTrain, m_driveForward);
    m_button.whenPressed(m_driveForward);
  }

  @Override
  public void robotPeriodic() {
    CommandScheduler.getInstance().run();
  }

  @Override
  public void teleopInit() {
  }

  @Override
  public void teleopPeriodic() {
  }

  @Override
  public void disabledInit() {
  }

  @Override
  public void disabledPeriodic() {
  }

  @Override
  public void autonomousInit() {
  }

  @Override
  public void autonomousPeriodic() {
  }

  @Override
  public void testInit() {
  }

  @Override
  public void testPeriodic() {
  }
}
```

Most of this code is automatically created when you create a new command based project, so explainations will be kept to the important parts.

```java
private final DriveTrain m_driveTrain = new DriveTrain();
```

This line creates the drive train object. The "DriveTrain" is the variable type, the "m_driveTrain" is the variable name, and "new DriveTrain" is the command that creates the drive train object. This is all based on the DriveTrain class that was created earlier.

```java
private final DriveForward m_driveForward = new DriveForward(m_driveTrain);
```

This line creates the command as an object to be used. Specifically, it creates a new DriveForward command called "m_driveForward" and passes the drive train object to it. This is all based on the DriveForward command that was created earlier.

```java
private final Joystick m_joystick = new Joystick(0);
```

This creates a new joystick object called "m_joystick" that is connected to port 0. This is the port that the joystick is connected to on the drive station. We can use this to get button presses and joystick axis as inputs.

```java
private final JoystickButton m_button = new JoystickButton(m_joystick, 1);
```

This creates a new joystick button object called "m_button" that is connected to the joystick object "m_joystick" and button 1. This is the button that we will use to call commands or other functions.

```java
CommandScheduler.getInstance().setDefaultCommand(m_driveTrain, m_driveForward);
```

This sets a default command for the given subsystem. A default command runs whenever another command is not listed for the subsytem in the scheduler when a cycle runs. This is useful for things like drive trains, where you want the robot to drive forward unless another command is called. This is all based on the DriveForward command that was created earlier. A common use is to create a drive command that takes joystick inputs and use that as the default command.

```java
m_button.whenPressed(m_driveForward);
```

This sets a command to be called when the button is pressed. A common use for this when pressing a button is for arms or shooters where a button works for a single action to be performed. Driving more commonly uses the joysitck axis with a default command.