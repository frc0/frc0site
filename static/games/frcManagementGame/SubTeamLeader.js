class SubTeamLeader {
    constructor(name, yearsLeft) {
        this.name = name;
        this.yearsLeft = yearsLeft;
    }

    graduate() {
        if (this.yearsLeft > 0) {
            this.yearsLeft--;
        }
    }
}

export default SubTeamLeader; // or Member
