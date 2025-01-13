import Task from './Task.js';

class TaskList {
    constructor() {
        this.week1Tasks = [
            new Task(
                "Read and Analyze Game Manual", 
                true, 
                "Thoroughly read and analyze the <a href='https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system' target='_blank'>game manual</a> to understand the rules and challenges.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 150 } 
            ),
            new Task(
                "Brainstorm Robot Strategies", 
                true, 
                "Hold brainstorming sessions to generate ideas and strategies for the robot's design and functionality. Some team's might use a worksheet like <a href='https://www.firstinspires.org/sites/default/files/uploads/resource_library/frc/team-resources/tca/tca_kickoff_break_down_worksheet.pdf' target='_blank'>this one</a>.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 100 } 
            ),
            new Task(
                "Lookup the FIRST Choice Catalog for new parts",
                false,
                "Look up the <a href='https://firstchoicebyandymark.com/everything' target='_blank'>FIRST Choice Catalog</a> and discuss with the team what parts to order. You only pay for shipping!",
                { materials: 0, money: 80, members: 1 },
                { materials: 250, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Inventory Kit of Parts", 
                false, 
                "Inventory the <a href='https://www.firstinspires.org/robotics/frc/kit-of-parts' target='_blank'>Kit of Parts</a> to ensure all components are present and accounted for.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 100, money: 0, members: 0, teamPoints: 30 } 
            ),
            new Task(
                "Watch Ri3D/Everybot Videos", 
                false, 
                "Watch <a href='https://www.youtube.com/playlist?list=PLDHKoYIxyTgtYDgWfqs6Cy1T_tgyHSWlx' target='_blank'>Ri3D (Robots in 3 Days)</a> or Everybot videos for inspiration and design ideas.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 30 } 
            ),
            new Task(
                "Research Game Specific Mechanisms", 
                false, 
                "Research <a href='https://www.projectb.net.au/resources/robot-mechanisms/' target='_blank'>different mechanisms<a/> that might be useful for this year's game challenge.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 60 } 
            ),
            new Task(
                "Host a Kickoff Open House",
                false,
                "Host a kickoff open house for team members and parents to discuss the upcoming season. Invite current and potential sponsors. You could even <a href='https://www.youtube.com/watch?v=5vNlf2O94wQ' target='_blank'>stream</a> the kickoff event!",
                { materials: 10, money: 100, members: 3 },
                { materials: 0, money: 1000, members: 1, teamPoints: 50 }
            ),
            new Task(
                "Contact Local Machine Shops", 
                false, 
                "Contact local machine shops to inquire about their capabilities and availability for assistance.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 20 } 
            ),
            new Task(
                "Clean and Organize the Workspace",
                false, 
                "Clean and organize the team's workspace, ensuring tools and materials are readily available.", 
                { materials: 0, money: 25, members: 1 }, 
                { materials: 25, money: 0, members: 0, teamPoints: 20 } 
            ),
            new Task(
                "Create a Team Calendar", 
                false, 
                "Create a team calendar to schedule meetings, events, and deadlines.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 20 } 
            )
        ];
        this.week2Tasks = [
            new Task(
                "Gather Kit-Bot Parts",
                true,
                "Gather the additional part, not included in the KOP, to build the Kit-Bot.",
                { materials: 0, money: 500, members: 2 },
                { materials: 50, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Print out Kit-Bot Instructions",
                true,
                "Print out the <a href='https://firstfrc.blob.core.windows.net/frc2025/KitBot/KitBotBuildInstructions.pdf' target='_blank'>Kit-Bot assembly instructions</a>, coding guides, and other resources. Distribute to team members.",
                { materials: 10, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 50 }
            ),
            new Task(
                "Inventory Existing Materials", 
                false, 
                "Take inventory of existing materials and tools, noting any shortages or needs.", 
                { materials: 0, money: 20, members: 2 }, 
                { materials: 50, money: 0, members: 0, teamPoints: 10 } 
            ),
            new Task(
                "Design Team Buttons",
                false,
                "Design the layout for your team buttons. Make sure to include the team number and logo.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Create or Update the Team Website",
                false,
                "Create a new <a href='https://frczero.org/business_marketing/team_website/' target='_blank'>team website</a> or update the existing one with current information, photos, and videos.",
                { materials: 0, money: 10, members: 1 },
                { materials: 0, money: 250, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Research and Contact Sponsors",
                false,
                "Research potential sponsors and contact them to discuss sponsorship opportunities and benefits.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 500, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Brainstorm additional Robot Mechanisms to enhance the Kit-Bot",
                false,
                "Brainstorm additional mechanisms that can be added to the <a href='https://firstfrc.blob.core.windows.net/frc2025/KitBot/KitBotEnhancement_IterationGuide.pdf' target='_blank'>Kit-Bot to enhance</a> its capabilities. The base Kit-Bot is a good starting point, but additional mechanisms may be needed to win more matches or get picked for playoffs!",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 60 }
            ),
            new Task(
                "Clean and Organize the Workspace",
                false,
                "Clean and organize the team's workspace, ensuring tools and materials are readily available.",
                { materials: 0, money: 25, members: 1 },
                { materials: 25, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create or Update the Team Handbook",
                false,
                "Create a new team handbook or update the existing one with current information, policies, and procedures.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Team Building Activity - Laser Tag",
                false,
                "Organize a team building laser Tag Night to strengthen relationships and communication among team members. It was so fun last year, someone even invited a friend to join the team!",
                { materials: 0, money: 50, members: 3 },
                { materials: 0, money: 0, members: 1, teamPoints: 50 }
            ),
            new Task(
                "Create or Update the Team Calendar",
                false,
                "Create a team calendar or update the existing one with meeting dates, events, and deadlines.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            )
        ];
        this.week3Tasks = [
            new Task(
                "Build the Kit-Bot Chassis",
                true,
                "Build the Kit-Bot chassis according to the <a href='https://cdn.andymark.com/media/W1siZiIsIjIwMjUvMDEvMDMvMTYvMTkvMTkvNTY2ZWEyNjMtMTFkMi00MGVjLWI1YzQtZmI0NGM2MzlmMGY3L0FNMTRVNl9Vc2VyR3VpZGVfSzI1IEphbiAyMDI1LnBkZiJdXQ/AM14U6_UserGuide_K25%20Jan%202025.pdf?sha=fb9fa1c154f2fbac' target='_blank'>assembly instructions</a>. Ensure all parts are assembled correctly and securely.",
                { materials: 200, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 200 }
            ),
            new Task(
                "Order Additional Motors, Sensors, and Electronics",
                true,
                "<a href='https://www.findrobotparts.com/' target='_blank'>Order additional motors, sensors, and electronics</a> to enhance the Kit-Bot's capabilities.",
                { materials: 0, money: 1000, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Safety Training",
                false,
                "Conduct <a href='https://www.firstinspires.org/robotics/frc/safety' target='_blank'>safety training</a> for all team members. Review safety rules, procedures, and emergency protocols.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 60 }
            ),
            new Task(
                "Inventory Electronics Components",
                false,
                "Inventory the <a href='https://docs.wpilib.org/en/stable/docs/controls-overviews/control-system-hardware.html' target='_blank'>electronics</a> components and tools to ensure all parts are present and accounted for.",
                { materials: 0, money: 0, members: 1 },
                { materials: 50, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create or Update the Team Logo",
                false,
                "Create a new team logo or update the existing one with current design and branding.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Order extra game pieces",
                false,
                "Order extra game pieces to practice with and test robot mechanisms. Someone broke the last one.",
                { materials: 0, money: 100, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Draft Robot and Mechanism CAD Models",
                false,
                "The Kit-Bot CAD models are provided by FIRST. Draft additional CAD models for mechanisms to be added to the robot.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 80 }
            ),
            new Task(
                "Update the Development Computer",
                false,
                "Update the development computer with the latest <a href='https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/index.html'software, tools, and libraries</a> for robot programming.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Run a recruitment event",
                false,
                "Run a recruitment event to attract new members to the team. Showcase the team's projects and robot(s). Bribe them with snacks, drinks and swag.",
                { materials: 20, money: 250, members: 3 },
                { materials: 0, money: 0, members: 1, teamPoints: 50 }
            ),
            new Task(
                "Document the Team's Progress",
                false,
                "Document the team's progress, challenges, and achievements on a <a href='https://www.chiefdelphi.com/search?q=build%20thread' target='_blank'>Chief Delphi Build Thread</a> or team blog.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            )
        ];
        this.week4Tasks = [
            new Task(
                "Assemble the Kit-Bot Electronics",
                true,
                "Assemble the <a href='https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html'Kit-Bot electronics</a> according to the wiring diagram. Test all connections and ensure proper functionality.",
                { materials: 100, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Assemble Basic Bumpers",
                true,
                "Assemble basic bumpers for the Kit-Bot. Ensure they are sturdy and meet the bumper rules. Maybe use this handy <a href='https://www.firstinspires.org/sites/default/files/uploads/resource_library/frc/technical-resources/frc_bumperguide.pdf?__hstc=147686632.5ab048f3112e2dd69ee235f8cec7103d.1733935109632.1735840937817.1735848749397.35&__hssc=147686632.18.1735848749397&__hsfp=3011104808' target='_blank'>bumper guide</a>.",
                { materials: 50, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Create or Update the Team T-Shirts",
                false,
                "Create new team t-shirts or update the existing ones with current design and branding.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Inventory Pneumatics Components",
                false,
                "Inventory the pneumatics components and tools to ensure all parts are present and accounted for.",
                { materials: 0, money: 0, members: 1 },
                { materials: 50, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create or Update the Team Business Cards",
                false,
                "Create new team business cards or update the existing ones with current contact information and branding.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Order new Controllers",
                false,
                "Order new controllers for the drive team. The old set is covered in cheeto dust and the joystick drifts.",
                { materials: 0, money: 80, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Create or Update the Team's Handouts",
                false,
                "Create new team handouts or update the existing ones with current information, photos, and resources.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Detangle the Wire Box",
                false,
                "Detangle the wire box. It's a mess in there! Why is it even just thrown in a box anyway?",
                { materials: 0, money: 0, members: 1 },
                { materials: 10, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Clean and Organize the Workspace",
                false,
                "Clean and organize the team's workspace, ensuring tools and materials are readily available.",
                { materials: 0, money: 25, members: 1 },
                { materials: 25, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create or Update the Team's Sponsorship Packet",
                false,
                "Create a new team sponsorship packet or update the existing one with current information, benefits, and opportunities. Maybe send it out to some potential sponsors.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 400, members: 0, teamPoints: 40 }
            )
        ];
        this.week5Tasks = [
            new Task(
                "Assemble Kit-Bot Game Specific Mechanisms",
                true,
                "Assemble the game-specific mechanisms for the Kit-Bot. Test functionality and integration with the robot.",
                { materials: 200, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Initial Drive Test of the Kit-Bot chassis",
                true,
                "Conduct an initial drive test of the Kit-Bot to ensure drive systems are working correctly. Make any necessary adjustments.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Create or Update the Team's Social Media",
                false,
                "Create new team social media accounts or update the existing ones with current information, photos, and posts.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Adjust the default code",
                false,
                "Adjust the default code... The drive team wants a 'Turbo' button.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Inventory Tools and Supplies",
                false,
                "Inventory the team's tools and supplies to ensure all items are present and in good condition.",
                { materials: 0, money: 0, members: 1 },
                { materials: 50, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create this season's sponsor banner",
                false,
                "Create a new team sponsor banner or update the existing one with current logos and branding.",
                { materials: 50, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Order LED strips",
                false,
                "Order LED strips to add some pizazz to the robot.",
                { materials: 0, money: 50, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Document the Team's Progress",
                false,
                "Document the team's progress, challenges, and achievements on a <a href='https://www.chiefdelphi.com/search?q=build%20thread' target='_blank'>Chief Delphi Build Thread</a> or team blog.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Create a press release",
                false,
                "Create a press release to announce the team's participation in the upcoming competition. Send it to local media outlets.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 150, members: 1, teamPoints: 40 }
            )
        ];
        this.week6Tasks = [
            new Task(
                "Finalize Robot Design",
                true,
                "Finalize the robot design and make any necessary adjustments based on testing and feedback.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 200 }
            ),
            new Task(
                "Finish wiring the robot",
                true,
                "Finish wiring the robot. Make sure all connections are secure and properly insulated.",
                { materials: 100, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Order Team Buttons",
                false,
                "Order team buttons to give out at competitions and events. Everyone loves buttons!",
                { materials: 0, money: 100, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Inventory Safety Equipment",
                false,
                "Inventory the team's safety equipment and supplies to ensure all items are present and in good condition.",
                { materials: 0, money: 0, members: 1 },
                { materials: 50, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create this seasons competition packing list",
                false,
                "Create a packing list for the competition. Don't forget the batteries!",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Order Extra Batteries",
                false,
                "Order extra batteries for the robot. You can never have too many batteries!",
                { materials: 0, money: 200, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "More code adjustments",
                false,
                "More code adjustments... Make the LEDs flash when the robot scores.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Mock Inspection",
                false,
                "Conduct a mock inspection of the robot to ensure it meets all competition rules and requirements.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 60 }
            ),
            new Task(
                "Research Autonomous Strategies and Other Teams Performance",
                false,
                "Research autonomous strategies and watch videos of other teams' performance to gather ideas and insights.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 80 }
            )
        ];
        this.week7Tasks = [
            new Task(
                "Practice Driving the Robot",
                true,
                "Practice driving the robot to develop the drive team's skills and familiarity with the controls.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Begin Autonomous Programming",
                true,
                "Begin programming the autonomous mode for the robot. Test and refine the code for accuracy and consistency.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Order Team Stickers",
                false,
                "Order team stickers to give out at competitions and events. Everyone loves stickers!",
                { materials: 0, money: 50, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Inventory Tools and Supplies",
                false,
                "Inventory the team's tools and supplies to ensure all items are present and in good condition.",
                { materials: 0, money: 0, members: 1 },
                { materials: 50, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Create an Event Carpool/Transportation Plan",
                false,
                "Create a carpool or transportation plan for team members to get to and from competitions and events.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Order Extra Parts",
                false,
                "Order extra parts for the robot. You never know what might break during competition!",
                { materials: 0, money: 400, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 50 }
            ),
            new Task(
                "Even more code adjustments",
                false,
                "Even more code adjustments... Field-Centric drive mode anyone?",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Document the Team's Progress",
                false,
                "Document the team's progress, challenges, and achievements on a <a href='https://www.chiefdelphi.com/search?q=build%20thread' target='_blank'>Chief Delphi Build Thread</a> or team blog.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Clean and Organize the Workspace",
                false,
                "Clean and organize the team's workspace, ensuring tools and materials are readily available.",
                { materials: 0, money: 25, members: 1 },
                { materials: 25, money: 0, members: 0, teamPoints: 20 }
            )
        ];
        this.week8Tasks = [
            new Task(
                "Finalize Autonomous Programming",
                true,
                "Finalize the autonomous mode programming for the robot. Test and refine the code for accuracy and consistency.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 200 }
            ),
            new Task(
                "Attend a scrimmage",
                true,
                "Attend a scrimmage to test the robot in a competitive environment and gather feedback for improvements.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Create or Update the Team's Pit Display",
                false,
                "Create a new team pit display or update the existing one with current information, photos, and branding.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Buy extra safety glasses",
                false,
                "Buy extra safety glasses for the team. Safety first!",
                { materials: 0, money: 100, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Create a scouting plan",
                false,
                "Create a scouting plan for the competition. What data will you collect and how will you use it?",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            ),
            new Task(
                "Publish code to GitHub",
                false,
                "Publish the team's code to GitHub for version control and collaboration.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 40 }
            ),
            new Task(
                "Create a new team cheer",
                false,
                "Create a new team cheer to pump up the team and show spirit at competitions.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 20 }
            ),
            new Task(
                "Practice Judge Interviews",
                false,
                "Practice judge interviews to prepare for questions about the team, robot, and outreach efforts.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 60 }
            ),
            new Task(
                "Celebrate the end of build season with a team party",
                false,
                "The party should include food, drinks, games, and inviting friends and family to celebrate the end of build season.",
                { materials: 50, money: 200, members: 3 },
                { materials: 0, money: 0, members: 1, teamPoints: 50 }
            )
        ];
    }
}

export default TaskList;