---
title: "4.9.4 Falcon 500 Fixes"
date: 2023-02-08T23:34:12-05:00
draft: false
weight: 4.9.4
---

### What is a Falcon 500?

The Falcon 500 is a motor and motor controller combination unit. It is a brushless motor with an integrated motor controller. The motor controller is a Talon FX motor controller. The motor is a brushless motor.

Leaving aside any "Availability, Ethical (IFI Issues), Etc" The new Falcon v3s for the 2023 season have been noted to have a few issues. This page is a collection of fixes for those issues and to cover the basics of troubleshooting the Falcon 500 in the v1 and v2 variants as well.

### Before you start, do you have your Falcon Fixing Kit?

The Falcon Fixing Kit is a collection of tools and parts that you will need to fix the v1/v2 Falcon 500s. A B.O.M. for the v3 will be produced as soon as we get some... The kit includes the following items:

1. Medium Strength Loctite (Loctite 243)
2. New screws for motor housings since the torx heads strip easily:
    - [Button Head Hex Drive Screw, Passivated 18-8 Stainless Steel, M3 x 0.50 mm Thread, 50mm Long McMaster-Carr](https://www.mcmaster.com/92095A475/)
3. Shaft shims
    - [18-8 Stainless Steel Shims, for Shortening 5/16" Diameter Screw Shoulder, 0.02" Thick McMaster-Carr](https://www.mcmaster.com/94773A712/)
4. Hardened T10 Driver for case screws
    - [Bits, 1/4" Hex Shank for Power Tools, T10 Size McMaster-Carr](https://www.mcmaster.com/4584A17/)
5. Extended Hardened T8 bit for shaft screws 
    - [Bits, 1/4" Hex Shank for Power Tools, T8 Size, 3-1/2" Long Overall](https://www.mcmaster.com/7396A38/)

Additional Notes from Chief Delphi User who came up with the B.O.M. above:

I would also highly recommend you keep a bolt extractor set with left-handed drill bits and thread extractors. I had to use those on more than one occasion because the T10 case screws are soft and strip easily, or came out completely bent a few times after I fought them for an hour (hence the replacement screws above). We kept this set of tools and parts in the Falcon Un****** box and used it to QC verify (and fix) every one of the 32+ Falcon’s that passed through our shop last year.[BOM Maker's story from fixing them during the 2022 season](https://www.chiefdelphi.com/t/2021-2022-falcon-issues-loctite-shaft-shims/402712/15)

### Contents for this Section

| Order | Section Title |
| --- | --- |
| 1. | [Wobbly Shaft](#wobbly-shaft) |
| 2. | [Broken Bolts](#broken-bolts) |
| 3. | [Missing Loctite](#missing-loctite) |
| 4. | [Overheating](#overheating) |
| 5. | [Size Changes and Documentation Confusion](#size-changes-and-documentation-confusion) |
| 6. | [Falcon 500 V1 Teardown](#falcon-500-v1-teardown) |
| 7. | [Falcon 500 V2 Teardown](#falcon-500-v2-teardown) |
| 8. | [Falcon 500 V3 Teardown](#falcon-500-v3-teardown) |
| 9. | [Other Fixes](#other-fixes) |

### Wobbly Shaft

Teams who have bought Falcon v3 motors for the 2023 season have been reporting wobbly shafts. This is a result of the shaft tolerances being off and way out of the usual expected specs. It's all a possible consequence of removing the shaft bolts(cuz they were loose cuz of missing loctite) It's certainly not all motors, but teams **ABSOLUTELY** should check any v3 falcon 500s for this issue. [Reddit Post identifying the issue](https://www.reddit.com/r/FRC/comments/10tqytu/the_new_falcons_are_bad_and_the_shaft_is_lose/)

#### Fixes for the wobbly shaft

1. 3d print a spacer to help keep the shaft on place. This can be the same falcon 500 spacers, but oversized by roughly 2mm. This came from the same reddit post, but has not been confirmed for a long term fix.
2. Submit a RMA to VEX/CTRE/WCP for a replacement motor. This is a problem however as there are no parts for spares, vendors are out of stock for the remainder of the 2023 season [https://www.vexrobotics.com/217-6515.html](https://www.vexrobotics.com/217-6515.html) and if there are ones for RMA reserved, they will be subject to the same issue. This is a problem that will need to be addressed by the vendors.
3. Don't use a v3 Falcon 500 unless you dont have any other options. This is absolutely a really subpar option, but if you have no other options, you have no other options.

### Broken Bolts

Teams who have bought Falcon 500s of all variants have been reporting broken bolts. This is a result of the bolts being too soft and stripping out or snapping. This is a problem that has been around for a while, but has been exacerbated by the new v3 falcons. These include longer screws that are too long in some cases and they were over tightened. 

#### Fixes for the broken bolts

1. Replace the bolts with stronger ones. This is a good option, but it is not ideal as Teams paying $220 for a motor should not have to replace the bolts. This is a problem that will need to be addressed by the vendors.
2. If you break a bolt, you can use a bolt extractor to remove the broken bolt. This is a good option, but can lead to damaging the threads if not done correctly.
    - A guide on how to do this can be found [here](https://www.wikihow.com/Use-a-Screw-Extractor)
3. Many teams will not be in a situation that they would need to be removing bolts except for the other issues listed here. If you are in this situation, and you need to remove bolts you should seriously consider the risks involved and the potential damage to the motor.

### Missing Loctite

Teams who have bought Falcon 500s of all variants have been reporting missing loctite. This seems like not a big deal, except the bolts are crucial to the performance of the motor and its overall safety. This is a problem that has been around for a while, but has been fixed/exacerbated by the new v3 falcons. The rush to get the v3 falcons out the door while trying to avoid this has led partially to the wobbly shaft, and this is something seemingly to have been overlooked as a consqeuence of trying to fix it on the v1 and v2s in the past. Without the loctite, the bolts can come loose and cause the motor to fail during a match or practice.

#### Fixes for the missing loctite

1. Replace the bolts with stronger ones. This is a good option, because more than likely you will strip/snap a bolt trying to QA inspect your bolts for loctite. This is a problem that will need to be addressed by the vendors.
2. While I would normally recommend not taking apart a motor, this is a situation where you should take apart the motor and inspect the bolts. If you find a bolt without loctite, you should replace it with a stronger bolt as with all of the bolts and you should add loctite to the bolts. Use the 243 as listed in the BOM above.

### Overheating

The Falcon 500 motors are High-Performance motors, and as such, they are designed to be able to handle a lot of power. However, they are not designed to be able to handle a lot of power for a long period of time. The motors are designed to be able to handle a lot of power for a short period of time, and then they need to be allowed to cool down. This is a problem that has been around for a while, but has possibly been improved by the v3. The jury is still out on this one. The motors feature air cooling ports that can be attached to your pneumatics system. A guide for this is [here](https://link.vex.com/vexpro/falcon-500-user-guide) under the section called "Using the Falcon 500 Cooling Port". Many teams who are not familiar with this, or don't see the benefit of it, will not use it. This is a problem that will lead to burnt out and overheated motors.

#### Fixes for the overheating

1. Use the cooling ports. This is a good option and is what the port is literally made for.
2. Monitor the motors temperature. This is a good option, and it can help you know when you should let air in the ports to conserve air and the motor. This requires some extra work, but the Phoenix Motor controllers using the IMotorController interface have a method called getTemperature() that can be used to get the temperature of the motor. This reports the data in celsius... but whatever. [Java API Doc](https://api.ctr-electronics.com/phoenix/release/java/com/ctre/phoenix/motorcontrol/IMotorController.html#getTemperature())
3. Don't use the cooling ports. This is a bad option, but if you don't have the time to monitor the temperature, or you don't have working pnuematics on the bot you can just not use them. This is a problem that will lead to burnt out and overheated motors. This is done at the risk of the Team choosing to not use the port. Rather silly if you ask me.

### Size Changes and Documentation Confusion

Something that caught many people off guard is the new larger size of the v3 vs the v1/v2 models. The v3 size is correct in the cad model, but the website for the Falcon 500 only has a v2 2D drawing. While most teams would instinctively use the updated 3D model, some teams may grab the 2D v2 in a rush and not notice the size difference until its time to assemble it all. This would mean redesigning things in a hurry or having to use the v2/v1s that are smaller. This is a problem that will need to be addressed by the vendors and they need to update the website to reflect the correct size of the v3.

#### Fixes for the size changes and documentation confusion

1. Use the v3 3D model. This is a good option, and is the correct option. If you are not using a v3 then this is not an issue for you.

### Falcon 500 V1 Teardown

We have a teardown of the Falcon 500 V1 motor. This is a

### Falcon 500 V2 Teardown

We have a teardown of the Falcon 500 V2 motor. This is a

### Falcon 500 V3 Teardown

We have a teardown of the Falcon 500 V3 motor. This is a

### Other Fixes

Did we miss something?

If you have any other issues that you have found with the Falcon 500, please let us know by adding it to the listings or submitting an issue on our github repo. We will be updating this post as we find more issues and fixes.