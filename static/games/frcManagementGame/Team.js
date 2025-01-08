import Member from "./Member.js";
import SubTeamLeader from "./SubTeamLeader.js";

class Team {
    constructor() {
        this.money = 6000;
        this.members = [];
        this.numCurrentlyAssignedMembers = 0;
        this.subTeamLeaders = [];
        this.numCurrentlyAssignedSubTeamLeaders = 0;
        this.materials = 400;
        this.currentTasks = [];
        this.season = 1;
        this.week = 1;
        this.name = "";
        this.number = -1;
        this.color = [0, 0, 0];
        this.teamPoints = 0;
        this.prestigeBonus = 1.0;
        this.prestigeTotal = 0;
        this.weekStartState = null;
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

    addMember(name, yearsLeft) {
        const member = new Member(name, yearsLeft);
        this.members.push(member);
    }

    promoteToLeader(index) {
        if (index >= 0 && index < this.members.length) {
            const member = this.members[index];
            if (this.money >= 2000) {
                const leader = new SubTeamLeader(member.name, member.yearsLeft);
                this.subTeamLeaders.push(leader);
                this.members.splice(index, 1); // Remove from members
                this.money -= 2000;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    applyTaskRewards(task) {
        if (task.rewards.materials) {
            this.materials += task.rewards.materials;
        }

        if (task.rewards.money) {
            this.money += task.rewards.money;
        }

        if (task.rewards.members) {
            for (let i = 0; i < task.rewards.members; i++) {
                this.addMember(this.generateGibberishName(), 4);
            }
        }

        this.teamPoints += Math.ceil(task.rewards.teamPoints * this.prestigeBonus);
    }

    membersCanPerformTask(task) {
        if (task.requirements.materials && this.materials < task.requirements.materials) {
            return false;
        }
        if (task.requirements.money && this.money < task.requirements.money) {
            return false;
        }
        if (task.requirements.members && this.numCurrentlyAssignedMembers + task.requirements.members > this.members.length) {
            return false;
        }

        return true;
    }

    membersPerform(task) {

        // Use the teams spendMoney and spendMaterials methods to spend the required resources
        if (task.requirements.materials) {
            if (!this.spendMaterials(task.requirements.materials)) {
                return false;
            }
        }
        if (task.requirements.money) {
            if (!this.spendMoney(task.requirements.money)) {
                return false;
            }
        }

        // Use the number of members required to perform the task and add them to the currently assigned members
        this.numCurrentlyAssignedMembers += task.requirements.members;

        // Add the task to the team's current tasks
        this.currentTasks.push(task);

        // Give the team their rewards
        this.applyTaskRewards(task);

        task.completed = true;
        return true;
    }

    subTeamLeaderCanPerformTask(task) {
        if (task.requirements.materials && this.materials < Math.floor(task.requirements.materials * 0.67)) {
            return false;
        }
        if (task.requirements.money && this.money < Math.floor(task.requirements.money * 0.67)) {
            return false;
        }
        // Do we have a free subteam leader?
        if (this.numCurrentlyAssignedSubTeamLeaders >= this.subTeamLeaders.length) {
            return false;
        }
        return true;
    }

    subTeamLeaderPerform(task) {
        // Use the team's spendMoney and spendMaterials methods to spend the required resources
        if (task.requirements.materials) {
            const reducedMaterials = Math.floor(task.requirements.materials * 0.67);
            if (!this.spendMaterials(reducedMaterials)) {
                return false;
            }
        }
        if (task.requirements.money) {
            const reducedMoney = Math.floor(task.requirements.money * 0.67);
            if (!this.spendMoney(reducedMoney)) {
                return false;
            }
        }

        // Count 1 subteam leader into the currently assigned subteam leaders
        this.numCurrentlyAssignedSubTeamLeaders++;

        // Add the task to the team's current tasks
        this.currentTasks.push(task);

        // Give the team their rewards
        this.applyTaskRewards(task);

        task.completed = true;
        return true;
    }

    // spendMoney(amount)
    spendMoney(amount) {
        if (this.money >= amount) {
            this.money -= amount;
            return true;
        } else {
            return false;
        }
    }

    // spendMaterials(amount)
    spendMaterials(amount) {
        if (this.materials >= amount) {
            this.materials -= amount;
            return true;
        } else {
            return false;
        }
    }

    purchaseMaterials() {
        if (this.money >= 500) {
            this.materials += 50;
            this.money -= 500;
            return true;
        } else {
            return false;
        }
    }

    advanceWeek(taskList) {
        return new Promise((resolve, reject) => {
            // Check if there were any critical tasks that were not completed
            const criticalTasks = taskList.filter(task => task.critical && !task.completed);
    
            // We need to check what was done in the currentTasks array
            const criticalTasksInCurrentTasks = this.currentTasks.filter(task => task.critical && task.completed);
    
            // If we have a match in the criticalTasks array and the criticalTasksInCurrentTasks array,
            // remove that from the criticalTasks array
            criticalTasksInCurrentTasks.forEach(task => {
                const index = criticalTasks.findIndex(t => t.name === task.name);
                if (index > -1) {
                    criticalTasks.splice(index, 1);
                }
            });
    
            // If any critical tasks remain incomplete, revert week
            if (criticalTasks.length > 0) {
                alert("Critical task not completed! Restarting this week with the original state...");
    
                // Revert to the stored weekStartState
                this.materials = this.weekStartState.materials;
                this.money = this.weekStartState.money;
                this.members = this.weekStartState.members;
                this.subTeamLeaders = this.weekStartState.subTeamLeaders;
                this.teamPoints = this.weekStartState.teamPoints;
    
                // Reset the number of currently assigned members and subteam leaders
                this.numCurrentlyAssignedMembers = 0;
                this.numCurrentlyAssignedSubTeamLeaders = 0;
    
                // Reset the current tasks
                this.currentTasks = [];
    
                // Reject the Promise so the caller knows the week did not advance
                return reject(new Error("Critical tasks incomplete"));
            }
    
            // If no critical tasks were missed, we advance the week
            this.week++;
    
            // Save the state for the start of this new week
            this.weekStartState = {
                materials: this.materials,
                money: this.money,
                members: this.members,
                subTeamLeaders: this.subTeamLeaders,
                teamPoints: this.teamPoints
            };
    
            // Clear the current tasks
            this.currentTasks = [];
    
            // Reset the number of currently assigned members and subteam leaders
            this.numCurrentlyAssignedMembers = 0;
            this.numCurrentlyAssignedSubTeamLeaders = 0;
    
            // Update button text based on which week it is
            if (this.week === 8) {
                document.getElementById('advance-week-btn').innerText = "End Build Season";
            } else {
                document.getElementById('advance-week-btn').innerText = "Advance Week";
            }
    
            // If we've passed week 8, move to next season
            if (this.week > 8) {
                this.week = 1;
                // Call advanceSeason and return *its* Promise
                // so the chain waits for regionals/world competition to finish
                this.advanceSeason()
                    .then(() => resolve("Season advanced successfully"))
                    .catch(err => reject(err));
            } else {
                // Otherwise, just resolve immediately
                resolve("Week advanced successfully");
            }
        });
    }
    

    graduationCheck() {
        // member has a graduate function, filter by yearsLeft > 0 after calling graduate
        this.members.forEach(m => {
            if (m instanceof Member) {
                m.graduate();
            } else {
                console.error('Invalid member:', m);
            }
        });
        this.members = this.members.filter(m => m.yearsLeft > 0);

        // subTeamLeader has a graduate function, filter by yearsLeft > 0 after calling graduate
        this.subTeamLeaders.forEach(l => l.graduate());
        this.subTeamLeaders = this.subTeamLeaders.filter(l => l.yearsLeft > 0);
    }

    // Function to simulate the regional competition
    regionalCompetition() {
        return new Promise((resolve, reject) => {
            const modal = new bootstrap.Modal(document.getElementById('regionalCompetitionModal'), { keyboard: false, backdrop: 'static' });
            modal.show();
            const regionalResults = document.getElementById('regional-results');

            // Clear out any old rows before appending new ones (optional, if needed)
            regionalResults.innerHTML = '';

            // Create a set to store used IDs
            const usedIds = new Set();
            // Add the player's team to the set
            usedIds.add(this.number);

            // Function to generate a unique ID
            const generateUniqueId = () => {
                let id;
                do {
                    id = Math.floor(Math.random() * 50000);
                } while (usedIds.has(id));
                usedIds.add(id);
                return id;
            };

            // Create 39 other teams with random team points
            const teams = Array.from({ length: 39 }, () => {
                const id = generateUniqueId();
                let newTeamsPoints = Math.floor(Math.random() * 3500 * this.prestigeBonus);
                // Ensure minimum cap
                if (newTeamsPoints < 2200 * this.prestigeBonus) {
                    // Regen in a loop until we get a good value
                    while (newTeamsPoints < 2200 * this.prestigeBonus) {
                        newTeamsPoints = Math.floor(Math.random() * 3500 * this.prestigeBonus);
                    }
                }
                return {
                    id,
                    teamPoints: newTeamsPoints,
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            });

            // Player's W/L/T
            let wins = 0;
            let losses = 0;
            let ties = 0;

            // Combine player's team with the others
            const allTeams = [
                {
                    id: this.number,
                    teamPoints: this.teamPoints,
                    wins,
                    losses,
                    ties
                },
                ...teams
            ];

            // Simulate matches for all teams
            allTeams.forEach(team => {
                while (team.wins + team.losses + team.ties < 10) {
                    const opponentIndex = Math.floor(Math.random() * allTeams.length);
                    const opponent = allTeams[opponentIndex];
                    if (opponent.id === team.id) {
                        continue;
                    }
                    if (opponent.wins + opponent.losses + opponent.ties >= 10) {
                        // Update W/L/T
                        if (team.teamPoints > opponent.teamPoints) {
                            team.wins++;
                        } else if (team.teamPoints < opponent.teamPoints) {
                            team.losses++;
                        } else {
                            team.ties++;
                        }
                    } else {
                        // Update W/L/T
                        if (team.teamPoints > opponent.teamPoints) {
                            opponent.losses++;
                            team.wins++;
                        } else if (team.teamPoints < opponent.teamPoints) {
                            opponent.wins++;
                            team.losses++;
                        } else {
                            opponent.ties++;
                            team.ties++;
                        }
                    }
                }
            });

            // Sort by wins, then ties, then team points
            allTeams.sort((a, b) => {
                if (a.wins !== b.wins) {
                    return b.wins - a.wins;
                }
                if (a.ties !== b.ties) {
                    return b.ties - a.ties;
                }
                return b.teamPoints - a.teamPoints;
            });

            // Populate the regionalResults table
            for (let i = 0; i < allTeams.length; i++) {
                const team = allTeams[i];
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${i + 1}</td>
                <td>${team.id === this.number ? 'Your Team' : `${team.id}`}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.ties}</td>
                <td>${team.teamPoints}</td>
            `;
                if (team.id === this.number) {
                    row.classList.add('table-primary');
                }
                // if its one of the top 5 teams, highlight it
                if (i < 5) {
                    row.classList.add('table-success');
                }
                regionalResults.appendChild(row);
            }

            // When user clicks advance from regional
            document.getElementById('advance-from-regional-btn').addEventListener('click', () => {
                modal.hide();
                // If the player's team was in the top 5, we do the World Championship
                const playerRank = allTeams.findIndex(t => t.id === this.number);
                if (playerRank >= 0 && playerRank < 5) {
                    // Call worldChampionship and wait for it to finish
                    this.worldChampionship()
                        .then(() => {
                            // Once Worlds is done, resolve the regional promise
                            resolve();
                        })
                        .catch(err => reject(err));
                } else {
                    // If not in top 5, just resolve immediately
                    resolve();
                }
            });
        });
    }

    // Function to simulate the world championship
    worldChampionship() {
        return new Promise((resolve, reject) => {
            const worldModal = new bootstrap.Modal(document.getElementById('worldChampionshipModal'), { keyboard: false, backdrop: 'static' });
            worldModal.show();
            const worldChampionshipResults = document.getElementById('world-championship-results');

            // Clear old rows if necessary
            worldChampionshipResults.innerHTML = '';

            // Create a set to store used IDs
            const usedIds = new Set();
            // Add the player's team to the set
            usedIds.add(this.number);

            // Generate unique IDs
            const generateUniqueId = () => {
                let id;
                do {
                    id = Math.floor(Math.random() * 50000);
                } while (usedIds.has(id));
                usedIds.add(id);
                return id;
            };

            // Create teams
            const teams = Array.from({ length: 39 }, () => {
                const id = generateUniqueId();
                let newTeamsPoints = Math.floor(Math.random() * 5000 * this.prestigeBonus);
                if (newTeamsPoints < 3150 * this.prestigeBonus) {
                    while (newTeamsPoints < 3150 * this.prestigeBonus) {
                        newTeamsPoints = Math.floor(Math.random() * 5000 * this.prestigeBonus);
                    }
                }
                return {
                    id,
                    teamPoints: newTeamsPoints,
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            });

            // Player's W/L/T
            let wins = 0;
            let losses = 0;
            let ties = 0;

            // Combined list
            const allTeams = [
                {
                    id: this.number,
                    teamPoints: this.teamPoints,
                    wins,
                    losses,
                    ties
                },
                ...teams
            ];

            // Simulate matches
            allTeams.forEach(team => {
                while (team.wins + team.losses + team.ties < 10) {
                    const opponentIndex = Math.floor(Math.random() * allTeams.length);
                    const opponent = allTeams[opponentIndex];
                    if (opponent.id === team.id) {
                        continue;
                    }
                    if (opponent.wins + opponent.losses + opponent.ties >= 10) {
                        if (team.teamPoints > opponent.teamPoints) {
                            team.wins++;
                        } else if (team.teamPoints < opponent.teamPoints) {
                            team.losses++;
                        } else {
                            team.ties++;
                        }
                    } else {
                        if (team.teamPoints > opponent.teamPoints) {
                            opponent.losses++;
                            team.wins++;
                        } else if (team.teamPoints < opponent.teamPoints) {
                            opponent.wins++;
                            team.losses++;
                        } else {
                            opponent.ties++;
                            team.ties++;
                        }
                    }
                }
            });

            // Sort
            allTeams.sort((a, b) => {
                if (a.wins !== b.wins) {
                    return b.wins - a.wins;
                }
                if (a.ties !== b.ties) {
                    return b.ties - a.ties;
                }
                return b.teamPoints - a.teamPoints;
            });

            // Populate table
            for (let i = 0; i < allTeams.length; i++) {
                const team = allTeams[i];
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${i + 1}</td>
                <td>${team.id === this.number ? 'Your Team' : `${team.id}`}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.ties}</td>
                <td>${team.teamPoints}</td>
            `;
                if (team.id === this.number) {
                    row.classList.add('table-primary');
                }
                if (i === 0) {
                    row.classList.add('table-success');
                }
                if (i === 1) {
                    row.classList.add('table-info');
                }
                worldChampionshipResults.appendChild(row);
            }

            // Bonus points
            if (allTeams[0].id === this.number) {
                this.teamPoints += 1000;
            }
            if (allTeams[1].id === this.number) {
                this.teamPoints += 500;
            }

            // Listener for the advance from world championship button
            document.getElementById('advance-from-world-championship-btn').addEventListener('click', () => {
                worldModal.hide();
                resolve(); // Resolve once the user clicks
            });
        });
    }

    advanceSeason() {
        return new Promise((resolve, reject) => {
            // First, do the regional competition
            this.regionalCompetition()
                .then(() => {
                    // Everything below only happens after
                    // regionalCompetition -> (potentially) worldChampionship is done
    
                    // Advance the season
                    this.season++;
    
                    // Graduation check
                    this.graduationCheck();
    
                    // Add prestige points
                    this.prestigeTotal += this.teamPoints;
    
                    // Recalculate prestige bonus
                    this.prestigeBonus = 1 + this.prestigeTotal / 2150;
    
                    // Add materials
                    this.materials += 100;
    
                    // Add grant money
                    this.money += 6000;
    
                    resolve();
                })
                .catch(err => {
                    console.error('Error in competition chain:', err);
                    reject(err);
                });
        });
    }


    loadFromState(state) {
        try {
            Object.assign(this, state);
            this.members = this.members.map(m => new Member(m.name, m.yearsLeft));
            this.subTeamLeaders = this.subTeamLeaders.map(l => new SubTeamLeader(l.name, l.yearsLeft));
            return true;
        } catch (error) {
            console.error('Error loading from state:', error);
            return false;
        }
    }
}

export default Team;
