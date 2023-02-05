---
title: "5.4 How to Setup a Pneumatic System"
date: 2023-02-04T22:27:39-05:00
---

Setting up a pneumatic system can be a daunting task. This section will cover the basics of setting up a pneumatic system. It will cover the basics of the components and how to connect them. It will also cover the basics of how to setup the compressor and the PCM and how to test the system.

## Gatherings the Components

The first step in setting up a pneumatic system is to gather the components. The components are listed below:

- Compressor
- Release Valve
- Pressure Switch
- Pressure Gauge x2
- Manual Release Valve
- Air Tank
- Pressure Regulator
- Solenoid
- Pneumatic Hose
- Fittings & Connectors
- Pneumatic Control Module (PCM) or Pneumatic Control Hub (PCH)

## Compressor

The air compressor is the heart of the pneumatic system. It is the device that compresses the air and stores it in the air tank. The compressor is connected to the PCM and the PCM controls the compressor. Compressors will automatically run unless the pressure switch is above the set pressure limit. The compressor can also be manually turned on and off from the robot code. The PCM and the compressor are connected with a 12V power cable. The red and black wire spots are marked on the PCM or Hub.

![Close up image of the wiring for the Air Compressor and PCM](/images/pneumatics/compressor-pcm-closeup.jpg)
This is a close up of the wiring for the compressor and the PCM.

## Release Valve

The release valve is used to release the pressure from the system. The release valve is a non-electrical system that will manually go off if the pressure switch is overridden. All excess air pressure over 125psi will be released automatically when tuned properly. This is checked and tested by the inspectors.Don't wait until competition to find out that your release valve is not working. Test it before you get to competition and while initially putting the system together.

![Close up image of the Release Valve](/images/pneumatics/pressure-release-valve-on-a-compressor.jpg)
This is a close up of the release valve.

## Pressure Switch

The pressure switch is used to control the compressor. The pressure switch is connected to the PCM next the compressor. The pressure switch is used to turn the compressor on and off. The pressure switches' air port is connected to the system on the high pressure side. By default the pressure switch is set to 120 psi. The pressure switch should NOT be adjusted. This is checked and tested by the inspectors. If the pressure switch is adjusted, the team will have to replace it with a stock one.

![Close up image of the tubing for the Pressure Switch and High Side](/images/pneumatics/pressure-switch-closeup.jfif)
This is a close up of the tubing and port connection for the pressure switch.

## Pressure Gauge (High Side)

Pressure guages help us (humans) see the current PSI of the system using an analog (not electrical analog) dial indicator. The pressure gauge is connected to the system on the high pressure side. The best way to be able to use it is to put it somewhere that you can see it. Many teams will connect a T fitting to the high pressure side and then connect the pressure gauge and the pressure switch to the T-fitting(s). This allows the pressure gauge to be easily seen and the pressure switch to be easily connected. If it is also located near the manual release valve, it can be used to check the pressure before releasing the valve.

![Close up image of the tubing for the Pressure Gauge and High Side](/images/pneumatics/pressure-gauge-closeup.jpg)
This is a close up of the tubing and port connection for the pressure gauge.

## Manual Release Valve

The manual release valve is used to release the pressure from the system. The manual release valve is a non-electrical system that will manually go off if a lever is pulled or a ball valve is turned. All air pressure from the system will be released when the valve is opened. This is checked and tested by the inspectors. This is a safety feature that is required on all FRC robots that store compressed air. It should be easily accessible and easy to use after a match has ended.

![Close up image of the Manual Release Valve](/images/pneumatics/manual-pressure-release-valve-closeup.jpg)
This is a close up of the manual release valve.

## Air Tank

The air tank(s) are also located on the high side of the system. The tanks with either have a 1/4" NPT port or a threaded port to attach your own connectors. Whenever you are adding a new fitting, or removing an existing one, on a tank you need to:

1. Make sure the tank is empty
2. Wrap the threads with Teflon tape
3. Tighten the fitting (Don't over tighten)
4. Check for leaks with a low pressure fill test before adding to your full system
5. Add soap and water to an old spray bottle and spray the fittings to check for leaks. If you see bubbles, you have a leak.

![Close up image of the tubing for the Air Tank and High Side](/images/pneumatics/pneumatic-tank-with-hose-fitting.jpg)
This is a close up of the tubing and port connection for the air tank.

## Pressure Regulator

The pressure regulator is what sets the PSI level for the low side of the system. Best practice is to set the pressure regulator to 60 psi. Solenoids can operate at more or less pressure by adjusting the regulator. Most regulators have a knob that can be turned to adjust the pressure. In order to adjust it you have to first pull up on the knob and then turn it. Clockwise increases the pressure and counter-clockwise decreases the pressure. The pressure regulator has an input side and an output side. Make sure which is which! The input side is sometimes marked with an triangle like in the picture below. The input side is the side that is connected to the high pressure side of the system. The output side is the side that is connected to the low pressure side of the system.

![Close up image of the Pressure Regulator and High side](/images/pneumatics/pressure-regulator-closeup.jpg)
This is a close up of a pressure regulator.

## Solenoid

In order to control the flow of air we use a special type of valve called a solenoid. Solenoids are controlled by the PCM or PCH. The solenoid has a port on the input side and a port on the output side. The PCM or PCH will send a signal to the solenoid to open or close the valve. The solenoid will open or close the valve depending on the signal it receives. The red and black wire spots are marked on the PCM or Hub. The block underneath the solenoid is called a manifold. The manifold is used to connect the air ports to the solenoid.

![Close up image of the Solenoid and Manifold](/images/pneumatics/solenoid-and-manifold.jpg)
This is a close up of a solenoid and manifold.

## Pneumatic Hose

lorem ipsum

![Close up image of the Pneumatic Hose](/images/pneumatics/pneumatic-hose.jpg)

## Fittings & Connectors

lorem ipsum

![Close up image of the Fittings & Connectors](/images/pneumatics/fittings-connectors.jpg)

## Connecting the PCM or PCH to the RoboRIO and PDP

lorem ipsum

![Close up image of the PCM or PCH to the RoboRIO and PDP](/images/pneumatics/pcm-pch-roborio-pdp.jpg)
