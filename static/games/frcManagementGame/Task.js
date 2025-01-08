class Task {
    constructor(name, critical, description, requirements, rewards) {
        this.name = name;
        this.critical = critical;
        this.description = description;
        this.requirements = requirements;
        this.rewards = rewards;
        this.completed = false;
    }
}

export default Task;
