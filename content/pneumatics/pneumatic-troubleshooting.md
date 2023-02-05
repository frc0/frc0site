---
title: "5.6 Pneumatic Troubleshooting"
date: 2023-02-04T22:27:39-05:00
---

![Sad robot falls down gif](https://i.gifer.com/Vp4d.gif)
Sometimes things dont work as expected. This section will help you troubleshoot your pneumatic system.

## Common Issues with Pneumatics

1. **Pneumatic solenoids are not working**  
- Check the solenoid wiring.  
    1. Is the solenoid wired to the PCM?  
    2. Is the solenoid wired to the correct channel?  
    3. Is the solenoid wired with the correct polarity?  
- Check the solenoid.  
    1. Is the solenoid plugged in?  
    2. Is the solenoid broken?
        - If using a manifold, check the manifold for a proper seal
        - If its a double solenoid, check they are both not firing at the same time
- Check the PCM.  
    1. Is the PCM powered?  
        - The PCM is connected to the PDP and there is a small 20A fuse on the PDP for it and the VRM to share. Check the status of this fuse.
    2. Is the PCM wired to the correctly via CAN?
        - Does it have the proper CAN ID? The PDP and PCM should **ALWAYS ALWAYS ALWAYS have the same CAN ID of 0!** All of the FRC libraries assume this ID setup!
    3. Is the PCM firmware up to date?
        - A guide to updating the PCM firmware can be found [here](https://v5.docs.ctr-electronics.com/en/stable/ch02_PrimerCAN.html) as well as a general primer to CTRE CAN devices.
    4. For more specifics about troubleshooting for the PCM check [here](https://v5.docs.ctr-electronics.com/en/stable/ch09_BringUpPCM.html)
- Is the system enabled?  
    1. Check the code to make sure the system is enabled.  
    2. Check the dashboard to make sure the system is enabled.
    3. Is the Robot Status Light flashing or solid?
        - If flashing, the robot is enabled
        - If solid, the robot is disabled but powered on.
        - If off, the robot is not powered on.
- Is the system full with enough air to move the cylinder?  
    1. Check the pressure gauge to make sure the system is full.  
    2. Check the pressure regulator to make sure the low side level is set to around 60 psi for most teams.

2. **Pneumatic solenoids are not firing at the same time**
- Check the Previoisly mentioned items for the solenoids.
- Check the code to make sure the solenoids are firing at the same time.
    1. If using a double solenoid, only use one `k.direction` command at a time.
    2. Check where the solenoids are being fired from. If they are being fired from different commands they will never truly be firing at the same time. The command scheduler will only run one command at a time for a subsytem. If you want to fire both solenoids at the same time, you will need to fire them from the same command.
    3. If using a timed robot, check that whatever functions are firing the solenoids are not being called seperately. If they are, they will not be firing at the same time.
- Are both solenoids using the same types of fitting and length of tubing?
    1. If not, the solenoids will not be firing at the same time. The solenoids will be firing at different times depending on the length of tubing and the fittings used.
        a. The amount of air needed to move the cylinder is dependent on the length of tubing and the fittings used. There are specifically fittings with screw caps that let you fine tune the pressure for each solenoid or cylinder.
    2. If yes, check for any physical leaks on the solenoids or the tubing connections.
        a. Get an old bottle with a spray nozzle and spray a **SMALL** amount soapy water on the connections. If bubbles appear, there is a leak.

3. **The System is Never "Full" and the Compressor Runs Forever**
- Check the pressure gauges on both sides of the system (high and low pressure)
    1. If the low pressure gauge is reading 0 psi, the pressure regulator may be setup incorrectly.
        - Check the direction of the pressure regulator. The high side is the inlet and the low side is the outlet.
        - Check the low side pressure. It should be around 60 psi for most teams.
    2. If the high pressure gauge is reading 0 psi, the system is not full and has no air stored.
        - Check that all manual valves are closed.
        - Check all pneumatic fittings for leaks.
        - Check the connections to the compressor for the release valve and the pressure switch.
        - Check the pressure switch. If it is broken, the compressor may **NEVER** turn off.

4. **The System is Full but the Compressor Runs Intermittenly at Rest**
NOTE: Some air loss is unavoidable. The compressor will run to keep the system full. If the system is full and the compressor is running anyways, this is NOT normal.
- Check the pressure gauges on both sides of the system (high and low pressure)
- Check for leaks at all connection points.
- Check the connections to the compressor for the release valve and the pressure switch.
    1. If the release valve is not tuned properly it may be letting air out of the system too early.
    2. If the pressure switch has a loose connection or is broken, the compressor may operate intermittently.

5. **The PCM has a Sticky Fault**
- Check the PCM for a sticky fault.
    1. Check the phoenix tuner self test.
        - There is a clear sticky fault button on the self test menu!
        - I have no idea if this can happen to the PCH but phoenix is only for CTRE products so I am assuming not.
    2. Check the status light on the PCM.
- Whats a sticky fault?
    1. A sticky fault is a fault that is not cleared by the code. This means that the code is not telling the PCM to clear the fault.
    2. This can happen if the code is not running or if the code is not telling the PCM to clear the fault.
    3. This can also happen if the PCM is not wired to the CAN bus properly.
- What makes it sticky?
    1. A sticky fault is a fault that is not cleared easily with a reboot.

6. **The PCM is Connected, I Can See it's Proper Firmware version, but the Compressor Doesn't Run**
- Check the status light on the PCM.
    1. If the status light is flashing, the PCM is enabled.
    2. If the status light is solid, the PCM is disabled.
    3. If the status light is off, the PCM is not powered.
- Check the code to make sure the compressor is enabled.
    1. With the introduction of the new PCM firmware, the compressor enable command is NOT the traditional `setClosedLoopControl(true)` command. The new command is `setDigitalEnable(true)` for Java.
    2. Another new deprecated command is `enabled()`. This function checked the status of the compressor. Now it is called isEnabled() for clarity.
    3. Check the WPIlib documentation for more information [here](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html)

7. **The PCM is Connected, I Can See it's Proper Firmware version, but the Solenoids Don't Fire**
- Check the status light on the PCM.
    1. If the status light is flashing, the PCM is enabled.
    2. If the status light is solid, the PCM is disabled.
    3. If the status light is off, the PCM is not powered.
- Check the code to make sure the solenoids are set to the proper port number and `PneumaticsModuleType`.
    1. With the introduction of the new PCM firmware, the commands for setting up the solenoid objects are not the same as the old PCM firmware either. The new commands are `Solenoid exampleSolenoidPCM = new Solenoid(PneumaticsModuleType.CTREPCM, 1);` for a PCM, or `Solenoid exampleSolenoidPH = new Solenoid(PneumaticsModuleType.REVPH, 1);` for a PCH.
    2. With the introduction of the new PCM firmware, the commands for setting up the double solenoids are not the same as the old PCM firmware either. The new commands are `DoubleSolenoid exampleDoublePCM = new DoubleSolenoid(PneumaticsModuleType.CTREPCM, 1, 2);` for a PCM, or `DoubleSolenoid exampleDoublePH = new DoubleSolenoid(9, PneumaticsModuleType.REVPH, 4, 5);` for a PCH.
    3. Check the WPIlib documentation for more information [here](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/pneumatics/pneumatics.html)

