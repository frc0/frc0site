import Team from './Team.js';
import Task from './Task.js';
import TaskList from './TaskList.js';
import NotificationHandler from './NotificationHandler.js';

class GameState {
    constructor() {
        this.version = "1.0.2";
        // Blue Banner and Tabs Update
        /*
            Teams will track their regional and world championship wins.
            Banners will be displayed in the team's profile.

            Tasks were moved from gameState to TaskList.js for better organization.

            Also including some hyperlinks in task descriptions to real FRC resources.

            Adding some new non-critical tasks for the team to complete.

            Finally broke up the UI into tabs for better organization.
        */
        this.notificationHandler = new NotificationHandler();
        this.team = new Team();
        
        const taskList = new TaskList();
        this.week1Tasks = taskList.week1Tasks;
        this.week2Tasks = taskList.week2Tasks;
        this.week3Tasks = taskList.week3Tasks;
        this.week4Tasks = taskList.week4Tasks;
        this.week5Tasks = taskList.week5Tasks;
        this.week6Tasks = taskList.week6Tasks;
        this.week7Tasks = taskList.week7Tasks;
        this.week8Tasks = taskList.week8Tasks;

        this.tutorialModulesToComplete = [
            "Season Information",
            "Week Information",
            "Game UI Information",
            "Team Points Information",
            "Prestige Bonus Information",
            "Team Members Information",
            "Subteam Leaders Information",
            "Materials Information",
            "Money Information",
            "Information Button Test"
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
                    <!-- Responsive table -->
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><span class="fas fa-screwdriver-wrench"></span></th>
                                    <th><span class="fas fa-dollar-sign"></span></th>
                                    <th><span class="fas fa-users"></span></th>
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
                    </div>
                    <p class="card-text">Rewards:</p>
                    <!-- Responsive table -->
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><span class="fas fa-screwdriver-wrench"></span></th>
                                    <th><span class="fas fa-dollar-sign"></span></th>
                                    <th><span class="fas fa-users"></span></th>
                                    <th><span class="fas fa-trophy"></span></th>
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
                    </div>
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
        var teamNumberDiv = document.getElementById("team-number-div");

        if (document.getElementById('team-name') && teamNumberDiv) {
            var teamNameHeight = document.getElementById('team-name').offsetHeight;
            teamNumberDiv.style.height = teamNameHeight + "px";
        }
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
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        const teamNumberElement = document.getElementById('team-number');
        if (brightness > 0.5) {
            teamNumberElement.style.textShadow = "0px 0px 3px black";
        } else {
            teamNumberElement.style.textShadow = "none";
        }
        document.getElementById('prestige-bonus').innerText = `${this.team.prestigeBonus.toFixed(2)}`;
        document.getElementById('team-points').innerText = this.team.teamPoints;
        
        // Add championship banners
        const teamBanners = document.getElementById('team-banners');
        teamBanners.innerHTML = ''; // Clear existing banners

        const createBanner = (type, season) => {
            return `
                <div class="col">
                    <div class="blue-banner">
                        <h5>${type} <span class="fas fa-crown"></span></h5>
                        <p><span class="fas fa-calendar-alt"></span> ${season}</p>
                    </div>
                </div>
            `;
        };

        this.team.regionalChampionships.forEach(season => {
            teamBanners.innerHTML += createBanner('Regional', season);
        });

        this.team.worldsChampionships.forEach(season => {
            teamBanners.innerHTML += createBanner('Worlds', season);
        });

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
        //alert("Please fill out both fields.");
        gameState.notificationHandler.showNotification('danger', 'Please fill out both team number and team name fields.');
        return;
    }

    // Check if they have any tutorial modules to complete
    if (gameState.tutorialModulesToComplete.length > 0) {
        console.log("Tutorial modules to complete:", gameState.tutorialModulesToComplete);
        for (let i = 0; i < gameState.tutorialModulesToComplete.length; i++) {
            gameState.notificationHandler.showNotification('danger', `Please complete the tutorial module: ${gameState.tutorialModulesToComplete[i]}`);
        }
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
    gameState.tutorialModulesToComplete = [
        "Season Information",
        "Week Information",
        "Game UI Information",
        "Team Points Information",
        "Prestige Bonus Information",
        "Team Members Information",
        "Subteam Leaders Information",
        "Materials Information",
        "Money Information",
        "Information Button Test"
    ];
    // Clear the game state
    localStorage.removeItem('gameState');
    // Reload the page
    location.reload();
});

colorTutorialButtons();
handleTutorialClick('season-info-tutorial', 'Season Information');
handleTutorialClick('week-info-tutorial', 'Week Information');
handleTutorialClick('game-ui-info-tutorial', 'Game UI Information');
handleTutorialClick('team-points-info-tutorial', 'Team Points Information');
handleTutorialClick('prestige-bonus-info-tutorial', 'Prestige Bonus Information');
handleTutorialClick('team-members-info-tutorial', 'Team Members Information');
handleTutorialClick('subteam-leaders-info-tutorial', 'Subteam Leaders Information');
handleTutorialClick('materials-info-tutorial', 'Materials Information');
handleTutorialClick('money-info-tutorial', 'Money Information');
handleTutorialClick('i-info-tutorial', 'Information Button Test');

function handleTutorialClick(elementId, moduleName) {
    // List of random congrats messages
    const congratsMessages = [
        'Nice job!',
        'Great work!',
        'Keep it up!',
        'You got it!',
        'Well done!',
        'You are crushing it!',
        'You are a rockstar!',
        'You are on fire!',
        'You are amazing!',
        'You are a superstar!'
    ];

    document.getElementById(elementId).addEventListener('click', () => {
        const moduleIndex = gameState.tutorialModulesToComplete.indexOf(moduleName);
        if (moduleIndex !== -1) {
            // Remove the module from the list
            gameState.tutorialModulesToComplete = gameState.tutorialModulesToComplete.filter(module => module !== moduleName);
            // Give them a success notification
            gameState.notificationHandler.showNotification('success', `${congratsMessages[Math.floor(Math.random() * congratsMessages.length)]} You completed the tutorial module: ${moduleName}`);
            colorTutorialButtons();
        }
    });
}

function updateTutorialButton(elementId, moduleName) {
    const element = document.getElementById(elementId);
    if (gameState.tutorialModulesToComplete.includes(moduleName)) {
        element.classList.add('btn-danger');
        element.classList.add('text-white');
    } else {
        element.classList.remove('btn-danger');
        element.classList.remove('text-white');
    }
}

function colorTutorialButtons() {
    const buttonMapping = {
        "Season Information": 'season-info-tutorial',
        "Week Information": 'week-info-tutorial',
        "Game UI Information": 'game-ui-info-tutorial',
        "Team Points Information": 'team-points-info-tutorial',
        "Prestige Bonus Information": 'prestige-bonus-info-tutorial',
        "Team Members Information": 'team-members-info-tutorial',
        "Subteam Leaders Information": 'subteam-leaders-info-tutorial',
        "Materials Information": 'materials-info-tutorial',
        "Money Information": 'money-info-tutorial',
        "Information Button Test": 'i-info-tutorial'
    };

    Object.keys(buttonMapping).forEach(moduleName => {
        updateTutorialButton(buttonMapping[moduleName], moduleName);
    });
}