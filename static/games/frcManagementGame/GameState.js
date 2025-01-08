import Team from './Team.js';
import Task from './Task.js';
import NotificationHandler from './NotificationHandler.js';

class GameState {
    constructor() {
        this.version = "1.0.0";
        // KICKOFF 2025 Version
        this.notificationHandler = new NotificationHandler();
        this.team = new Team();
        this.week1Tasks = [
            new Task(
                "Read and Analyze Game Manual", 
                true, 
                "Thoroughly read and analyze the game manual to understand the rules and challenges.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 150 } 
            ),
            new Task(
                "Brainstorm Robot Strategies", 
                true, 
                "Hold brainstorming sessions to generate ideas and strategies for the robot's design and functionality.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 100 } 
            ),
            new Task(
                "Inventory Kit of Parts", 
                false, 
                "Inventory the Kit of Parts to ensure all components are present and accounted for.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 100, money: 0, members: 0, teamPoints: 30 } 
            ),
            new Task(
                "Watch Ri3D/Everybot Videos", 
                false, 
                "Watch Ri3D (Robots in 3 Days) or Everybot videos for inspiration and design ideas.", 
                { materials: 0, money: 0, members: 1 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 30 } 
            ),
            new Task(
                "Research Game Specific Mechanisms", 
                false, 
                "Research different mechanisms that might be useful for this year's game challenge.", 
                { materials: 0, money: 0, members: 2 }, 
                { materials: 0, money: 0, members: 0, teamPoints: 60 } 
            ),
            new Task(
                "Host a Kickoff Open House",
                false,
                "Host a kickoff open house for team members and parents to discuss the upcoming season. Invite current and potential sponsors.",
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
                "Print out the Kit-Bot assembly instructions, coding guides, and other resources. Distribute to team members.",
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
                "Create or Update the Team Website",
                false,
                "Create a new team website or update the existing one with current information, photos, and videos.",
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
                "Brainstorm additional mechanisms that can be added to the Kit-Bot to enhance its capabilities. The base Kit-Bot is a good starting point, but additional mechanisms may be needed to win more matches or get picked for playoffs!",
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
                "Build the Kit-Bot chassis according to the assembly instructions. Ensure all parts are assembled correctly and securely.",
                { materials: 200, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 200 }
            ),
            new Task(
                "Order Additional Motors, Sensors, and Electronics",
                true,
                "Order additional motors, sensors, and electronics to enhance the Kit-Bot's capabilities.",
                { materials: 0, money: 1000, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 100 }
            ),
            new Task(
                "Safety Training",
                false,
                "Conduct safety training for all team members. Review safety rules, procedures, and emergency protocols.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 60 }
            ),
            new Task(
                "Inventory Electronics Components",
                false,
                "Inventory the electronics components and tools to ensure all parts are present and accounted for.",
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
                "Draft Robot and Mechanism CAD Models",
                false,
                "The Kit-Bot CAD models are provided by FIRST. Draft additional CAD models for mechanisms to be added to the robot.",
                { materials: 0, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 80 }
            ),
            new Task(
                "Update the Development Computer",
                false,
                "Update the development computer with the latest software, tools, and libraries for robot programming.",
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
                "Document the team's progress, challenges, and achievements on a Chief Delphi build thread or team blog.",
                { materials: 0, money: 0, members: 1 },
                { materials: 0, money: 0, members: 0, teamPoints: 30 }
            )
        ];

        this.week4Tasks = [
            new Task(
                "Assemble the Kit-Bot Electronics",
                true,
                "Assemble the Kit-Bot electronics according to the wiring diagram. Test all connections and ensure proper functionality.",
                { materials: 100, money: 0, members: 2 },
                { materials: 0, money: 0, members: 0, teamPoints: 150 }
            ),
            new Task(
                "Assemble Basic Bumpers",
                true,
                "Assemble basic bumpers for the Kit-Bot. Ensure they are sturdy and meet the bumper rules.",
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
                "Document the team's progress, challenges, and achievements on a Chief Delphi build thread or team blog.",
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
                "Document the team's progress, challenges, and achievements on a Chief Delphi build thread or team blog.",
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

    initializeGame() {
        document.getElementById('game-version').innerText = this.version;
        if (!localStorage.getItem('gameState')) {
            this.notificationHandler.showNotification('info', 'No saved game state found. Initializing new game.');

            // load the modal that exists in the HTML file
            // This is the initial team info modal
            const initialTeamInfoModal = new bootstrap.Modal(document.getElementById('initialTeamInfoModal'), { keyboard: false, backdrop: 'static' });
            initialTeamInfoModal.show();

        } else {
            this.notificationHandler.showNotification('info', 'Loading saved game state.');
            this.loadGameState();
            // Update the UI
            this.updateUI();
        }
    }

    generateGibberishName() {
        const consonants = "bcdfghjklmnpqrstvwxyz";
        const vowels = "aeiou";
        const suffixes = ["on", "en", "an", "ar", "us", "ik", "in", "or", "er"];
        const prefixes = ["Ka", "Li", "Ma", "Ta", "Ra", "Fa", "Jo", "Zo", "Qu"];
        const maxSyllables = Math.floor(Math.random() * 2) + 2; // 2-3 syllables
        let name = "";

        if (Math.random() > 0.5) {
            name += prefixes[Math.floor(Math.random() * prefixes.length)];
        }

        for (let i = 0; i < maxSyllables; i++) {
            const consonant = consonants.charAt(Math.floor(Math.random() * consonants.length));
            const vowel = vowels.charAt(Math.floor(Math.random() * vowels.length));
            name += consonant + vowel;
        }

        if (Math.random() > 0.5) {
            name += suffixes[Math.floor(Math.random() * suffixes.length)];
        }

        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    advanceWeek(weeklyTasks) {
        this.team.advanceWeek(weeklyTasks)
            .then(() => {
                this.saveGameState();
                this.updateUI();
            })
            .catch(error => {
                console.error('Error advancing week:', error);
            });
    }

    saveGameState() {
        localStorage.setItem('gameState', JSON.stringify(this.team));
    }

    loadGameState() {
        if (!localStorage.getItem('gameState')) {
            this.notificationHandler.showNotification('danger', 'No saved game state found. Please refresh the page or reset the game.');
            return;
        }

        try {
            const parsedState = JSON.parse(localStorage.getItem('gameState'));
            if (this.team.loadFromState(parsedState)) {
                this.notificationHandler.showNotification('success', 'Game state loaded successfully!');
            } else {
                this.notificationHandler.showNotification('danger', 'Error loading game state. Deleting saved game state.');
                localStorage.removeItem('gameState');
                window.location.reload();
            }
        } catch (error) {
            console.error("Error loading saved game state.");
            this.notificationHandler.showNotification('danger', 'Error parsing saved game state. Deleting saved game state.');
            localStorage.removeItem('gameState');
            window.location.reload();
        }
    }

    populateRosterModal() {
        const rosterModalBody = document.getElementById('roster-modal-body');
        rosterModalBody.innerHTML = ""; // Clear existing content

        // Add Members as ID badges
        const membersTitle = document.createElement('h5');
        membersTitle.className = "blue-bumper";
        membersTitle.textContent = "Team Members";
        rosterModalBody.appendChild(membersTitle);

        this.team.members.forEach(member => {
            const badge = document.createElement('div');
            badge.className = "member-badge text-white mb-2 p-3";
            badge.style.display = "inline-block";
            badge.textContent = `${member.name} (Years Left: ${member.yearsLeft})`;
            rosterModalBody.appendChild(badge);
        });

        // Add Subteam Leaders as ID badges
        const leadersTitle = document.createElement('h5');
        leadersTitle.className = "red-bumper";
        leadersTitle.textContent = "Subteam Leaders";
        rosterModalBody.appendChild(leadersTitle);

        this.team.subTeamLeaders.forEach(leader => {
            const badge = document.createElement('div');
            badge.className = "subteam-leader-badge text-white mb-2 p-3";
            badge.style.display = "inline-block";
            badge.textContent = `${leader.name} (Years Left: ${leader.yearsLeft})`;
            rosterModalBody.appendChild(badge);
        });
    }

    populateMemberSelectionModal() {
        const memberList = document.getElementById('member-selection-list');
        memberList.innerHTML = ""; // Clear existing content

        if (this.team.members.length === 0) {
            memberList.innerHTML = "<p class='text-muted'>No members available to promote.</p>";
            return;
        }

        this.team.members.forEach((member, index) => {
            const memberCard = document.createElement('div');
            memberCard.className = "card mb-2";
            memberCard.innerHTML = `
                <div class="card-body d-flex justify-content-between align-items-center">
                    <span>${member.name} (Years Left: ${member.yearsLeft})</span>
                    <button class="btn btn-primary" data-index="${index}">Promote</button>
                </div>
            `;

            // Add event listener for promote button
            memberCard.querySelector('button').addEventListener('click', () => {
                this.promoteToSubteamLeader(index);
            });

            memberList.appendChild(memberCard);
        });
    }

    promoteToSubteamLeader(memberIndex) {
        if (this.team.promoteToLeader(memberIndex)) {
            this.saveGameState();
            this.updateUI();

            const modal = bootstrap.Modal.getInstance(document.getElementById('unlockSubteamLeaderModal'));
            modal.hide();
        }
    }

    purchaseMaterials() {
        if (this.team.purchaseMaterials()) {
            this.saveGameState();
            this.updateUI();
        }
    }

    addWeekTasks() {
        this.clearTasks();
    
        // Define tasks for all weeks in one object
        const weeklyTasks = {
            1: this.week1Tasks,
            2: this.week2Tasks,
            3: this.week3Tasks,
            4: this.week4Tasks,
            5: this.week5Tasks,
            6: this.week6Tasks,
            7: this.week7Tasks,
            8: this.week8Tasks
        };
    
        const tasks = weeklyTasks[this.team.week];
    
        if (!tasks) {
            this.notificationHandler.showNotification('danger', 'Week tasks not found.');
            return;
        }

        // Put all critical tasks first by sorting
        tasks.sort((a, b) => {
            if (a.critical && !b.critical) {
                return -1;
            } else if (!a.critical && b.critical) {
                return 1;
            } else {
                return 0;
            }
        });
    
        // Iterate through tasks and render them
        tasksLoop:
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
    
            // Check if the task is already completed in the currentTasks
            for (const currentTask of this.team.currentTasks) {
                if (currentTask.name === task.name && currentTask.completed) {
                    // Skip rendering this task
                    continue tasksLoop;
                }
            }
    
            const taskList = document.getElementById('tasks-list');
            const taskCard = document.createElement('div');
            taskCard.className = "card";
            taskCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${task.name}</h5>
                    <p class="card-text">${task.description}</p>
                    <p class="card-text">Requirements:</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Materials</th>
                                <th>Money</th>
                                <th>Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${task.requirements.materials}</td>
                                <td>$${task.requirements.money}</td>
                                <td>${task.requirements.members}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="card-text">Rewards:</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Materials</th>
                                <th>Money</th>
                                <th>Members</th>
                                <th>Team Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${task.rewards.materials}</td>
                                <td>$${task.rewards.money}</td>
                                <td>${task.rewards.members}</td>
                                <td>${task.rewards.teamPoints}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="btn-group" role="group" aria-label="Task Actions">
                        <button class="btn btn-primary" id="members-perform-task-btn-${i}">Members Perform Task</button>
                        <button class="btn btn-warning" id="subteam-leader-perform-task-btn-${i}">Subteam Leader Perform Task</button>
                    </div>
                </div>
            `;
            taskList.appendChild(taskCard);

            // Disable member button if conditions are not met
            if (!this.team.membersCanPerformTask(task)) {
                const membersPerformTaskBtn = document.getElementById(`members-perform-task-btn-${i}`);
                membersPerformTaskBtn.disabled = true;
            }
    
            // Disable subteam leader button if conditions are not met
            if (!this.team.subTeamLeaderCanPerformTask(task)) {
                const subteamLeaderPerformTaskBtn = document.getElementById(`subteam-leader-perform-task-btn-${i}`);
                subteamLeaderPerformTaskBtn.disabled = true;
            }
    
            // Highlight critical tasks
            if (task.critical) {
                taskCard.style.border = "5px solid gold";
            }
    
            // Add event listener for "Members Perform Task" button
            taskCard.querySelector('button').addEventListener('click', () => {
                if (this.team.membersCanPerformTask(task)) {
                    this.team.membersPerform(task);
                    this.saveGameState();
                    this.updateUI();
                }
            });
    
            // Add event listener for "Subteam Leader Perform Task" button
            taskCard.querySelector('button:nth-of-type(2)').addEventListener('click', () => {
                if (this.team.subTeamLeaderCanPerformTask(task)) {
                    this.team.subTeamLeaderPerform(task);
                    this.saveGameState();
                    this.updateUI();
                }
            });
        }
    }

    clearTasks() {
        const taskList = document.getElementById('tasks-list');
        taskList.innerHTML = ""; // Clear existing content
    }

    updateUI() {
        document.getElementById('team-name').innerText = this.team.name.toUpperCase();
        document.getElementById('team-number').innerText = this.team.number;
        document.getElementById('team-members').innerText = `${this.team.members.length} (${this.team.numCurrentlyAssignedMembers})`;
        document.getElementById('subteam-leaders').innerText = `${this.team.subTeamLeaders.length} (${this.team.numCurrentlyAssignedSubTeamLeaders})`;
        document.getElementById('materials').innerText = `${this.team.materials} Units`;
        document.getElementById('money').innerText = `$${this.team.money}`;
        document.getElementById('season-number').innerText = `Season ${this.team.season}`;
        document.getElementById('week-number').innerText = `Week ${this.team.week}`;
        document.getElementById('team-number-div').style.background = `rgb(${this.team.color[0]}, ${this.team.color[1]}, ${this.team.color[2]})`;
        const r = this.team.color[0] / 255;
        const g = this.team.color[1] / 255;
        const b = this.team.color[2] / 255;

        // Calculate brightness
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

        const teamNumberElement = document.getElementById('team-number');

        // Apply text shadow based on brightness
        if (brightness > 0.5) {
            teamNumberElement.style.textShadow = "0px 0px 3px black";
        } else {
            teamNumberElement.style.textShadow = "none";
        }
        document.getElementById('prestige-bonus').innerText = `${this.team.prestigeBonus.toFixed(2)}`;
        document.getElementById('team-points').innerText = this.team.teamPoints;
        this.addWeekTasks();

        // If its the last week, update the button text
        if (this.team.week === 8) {
            document.getElementById('advance-week-btn').innerText = "End Build Season";
        }
    }
}

// Initialize the game
const gameState = new GameState();
gameState.initializeGame();

// Add event listeners
document.getElementById('view-roster-btn').addEventListener('click', () => {
    gameState.populateRosterModal();
    const rosterModal = new bootstrap.Modal(document.getElementById('rosterModal'), { keyboard: false });
    rosterModal.show();
});

document.getElementById('unlock-subteam-leader-btn').addEventListener('click', () => {
    gameState.populateMemberSelectionModal();
    const modal = new bootstrap.Modal(document.getElementById('unlockSubteamLeaderModal'), { keyboard: false });
    modal.show();
});

document.getElementById('purchase-materials-btn').addEventListener('click', () => {
    gameState.purchaseMaterials();
});

document.getElementById('advance-week-btn').addEventListener('click', () => {
    switch (gameState.team.week) {
        case 1:
            gameState.advanceWeek(gameState.week1Tasks);
            break;
        case 2:
            gameState.advanceWeek(gameState.week2Tasks);
            break;
        case 3:
            gameState.advanceWeek(gameState.week3Tasks);
            break;
        case 4:
            gameState.advanceWeek(gameState.week4Tasks);
            break;
        case 5:
            gameState.advanceWeek(gameState.week5Tasks);
            break;
        case 6:
            gameState.advanceWeek(gameState.week6Tasks);
            break;
        case 7:
            gameState.advanceWeek(gameState.week7Tasks);
            break;
        case 8:
            gameState.advanceWeek(gameState.week8Tasks);
            break;
        default:
            gameState.notificationHandler.showNotification('danger', 'Week tasks not found.');
    }
});

document.getElementById('submit-team-info-btn').addEventListener('click', () => {
    const teamNumber = document.getElementById('team-number-input').value;
    const teamName = document.getElementById('team-name-input').value;
    const teamColor = document.getElementById('team-color-input').value;

    // Check for empty inputs
    if (teamNumber === "" || teamName === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Hide the modal
    const initialTeamInfoModal = bootstrap.Modal.getInstance(document.getElementById('initialTeamInfoModal'));
    initialTeamInfoModal.hide();

    // Show the "Generating Rookie Team" modal
    const loadingRookieTeamModal = new bootstrap.Modal(document.getElementById('loadingRookieTeamModal'), { keyboard: false });
    const newMembersList = document.getElementById('new-members-list');
    const newTeamMembersHeader = document.createElement('h5');
    newTeamMembersHeader.className = "btn-success";
    newTeamMembersHeader.textContent = "New Team Members!";
    newMembersList.appendChild(newTeamMembersHeader);
    newMembersList.style.opacity = 0;
    // Set a time to fade the list in after 3 seconds
    setTimeout(() => {
        newMembersList.style.opacity = 1;
    }, 3000);
    if (newMembersList === null) {
        console.error("Could not find new-members-list element.");
        return;
    }
    for (let i = 0; i < 7; i++) {
        const name = gameState.team.generateGibberishName();
        gameState.team.addMember(name, 4);

        // Show the new team member in the modal
        const memberBadge = document.createElement('div');
        memberBadge.className = "member-badge text-white mb-2 p-3";
        memberBadge.style.display = "inline-block";
        memberBadge.textContent = `${name} (Years Left: 4)`;
        newMembersList.appendChild(memberBadge);
    }
    
    // Set the team name and number
    gameState.team.name = teamName;
    gameState.team.number = teamNumber;

    // Set the team color
    const color = [
        parseInt(teamColor.substring(1, 3), 16),
        parseInt(teamColor.substring(3, 5), 16),
        parseInt(teamColor.substring(5, 7), 16)
    ];
    gameState.team.color = color;

    const teamInfo = document.getElementById('new-team-info');
    teamInfo.innerHTML = `
        <h5 class="blue-bumper">Team Info</h5>
        <p>Team Name: ${teamName}</p>
        <p>Team Number: ${teamNumber}</p>
        <p>Team Color: <span style="display: inline-block; width: 20px; height: 20px; background-color: ${teamColor};"></span></p>
    `;

    // Save the current state of the week
    gameState.team.weekStartState = {
        materials: gameState.team.materials,
        money: gameState.team.money,
        members: gameState.team.members,
        subTeamLeaders: gameState.team.subTeamLeaders,
        teamPoints: gameState.team.teamPoints
    };

    const loadingFooter = document.getElementById('loading-footer');
    const loadingCountdown = document.getElementById('loading-countdown');
    // Load in the footer after 7 seconds
    setTimeout(() => {
        loadingFooter.style.opacity = 1;
    }, 6000);

    const countdownNumber = document.getElementById('countdown-number');
    const loadingCountdownBtn = document.getElementById('loading-countdown-btn');

    // Save the game state and show the modal
    gameState.saveGameState();
    loadingRookieTeamModal.show();

    // Initialize countdown
    let countdown = 15;
    countdownNumber.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown -= 1;
        countdownNumber.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            loadingRookieTeamModal.hide();
            gameState.notificationHandler.showNotification('success', 'Rookie team generation complete.');
            gameState.updateUI();
        }
    }, 1000);

    // Skip button functionality
    loadingCountdownBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        loadingRookieTeamModal.hide();
        gameState.notificationHandler.showNotification('success', 'Rookie team generation complete.');
        gameState.updateUI();
    });
});

// random-team-number-btn
document.getElementById('random-team-number-btn').addEventListener('click', () => {
    document.getElementById('team-number-input').value = Math.floor(Math.random() * 50000);
});

// random-team-name-btn
document.getElementById('random-team-name-btn').addEventListener('click', () => {
    document.getElementById('team-name-input').value = gameState.team.generateGibberishName() + " " + gameState.team.generateGibberishName();
});

// random-team-color-btn
document.getElementById('random-team-color-btn').addEventListener('click', () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.getElementById('team-color-input').value = randomColor;
});

// If they double click on the team-number-div they can change the color
document.getElementById('team-number-div').addEventListener('dblclick', () => {
    // Show the modal
    const changeTeamColorModal = new bootstrap.Modal(document.getElementById('changeTeamColorModal'), { keyboard: false });
    changeTeamColorModal.show();
});

// change-team-color-btn
document.getElementById('change-team-color-btn').addEventListener('click', () => {
    const newColor = document.getElementById('team-color-picker').value;
    const color = [
        parseInt(newColor.substring(1, 3), 16),
        parseInt(newColor.substring(3, 5), 16),
        parseInt(newColor.substring(5, 7), 16)
    ];
    gameState.team.color = color;
    gameState.saveGameState();
    gameState.updateUI();

    // Hide the modal
    const changeTeamColorModal = bootstrap.Modal.getInstance(document.getElementById('changeTeamColorModal'));
    changeTeamColorModal.hide();
});

// If they double click on the team-name they can change the name
document.getElementById('team-name').addEventListener('dblclick', () => {
    // Show the modal
    const changeTeamNameModal = new bootstrap.Modal(document.getElementById('changeTeamNameModal'), { keyboard: false });
    // Update the change-team-name-input with the current team name
    document.getElementById('change-team-name-input').value = gameState.team.name;
    changeTeamNameModal.show();
});

// change-team-name-btn
document.getElementById('change-team-name-btn').addEventListener('click', () => {
    const newName = document.getElementById('change-team-name-input').value;
    // If it is empty, don't change it
    if (newName === "") {
        this.notificationHandler.showNotification('danger', 'Team name cannot be empty.');
        return;
    }
    gameState.team.name = newName;
    gameState.saveGameState();
    gameState.updateUI();

    // Hide the modal
    const changeTeamNameModal = bootstrap.Modal.getInstance(document.getElementById('changeTeamNameModal'));
    changeTeamNameModal.hide();
});

//resetGameModal and reset-game-btn
document.getElementById('reset-game-btn').addEventListener('click', () => {
    // Show the modal
    const resetGameModal = new bootstrap.Modal(document.getElementById('resetGameModal'), { keyboard: false });
    resetGameModal.show();
});
document.getElementById('confirm-reset-game-btn').addEventListener('click', () => {
    // Clear the game state
    localStorage.removeItem('gameState');
    // Reload the page
    location.reload();
});