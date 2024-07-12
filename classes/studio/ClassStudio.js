class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let sum = 0
        let average = 0
        for (let index = 0; index < this.scores.length; index++) {
            sum += this.scores[index];
        }
        average = Math.round((sum / this.scores.length) * 10) / 10;
        return average;
    }
    status() {
        let testAverage = this.average();
        if (testAverage >= 90) {
            return "Accepted";
        } else if (testAverage >= 80) {
            return "Reserve";
        } else if (testAverage >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
    getAccepted() {
        let numTests = 0
        while (this.average() < 90) {
            this.addScore(100);
            numTests++;
        }
        return `${this.name} needs ${numTests} perfect test scores to reach 'Accepted' status.`;
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(gator.average());
console.log(gator.getAccepted());
console.log(gator.status());
console.log(gator.average());

console.log(maltese.getAccepted());
console.log(bear.getAccepted());

// console.log(bear);
// console.log(maltese);
// console.log(gator);

// bear.addScore(83);
// console.log(bear.scores);

// console.log(maltese.average());

// console.log(`${bear.name} earned an average test score of ${bear.average()} and has a status of ${bear.status()}.`);
// console.log(`${maltese.name} earned an average test score of ${maltese.average()} and has a status of ${maltese.status()}.`);
// console.log(`${gator.name} earned an average test score of ${gator.average()} and has a status of ${gator.status()}.`);

// gator.addScore(100);
// console.log(gator.status());

// gator.addScore(100);
// console.log(gator.status());

// gator.addScore(100);
// console.log(gator.status());

// gator.addScore(100);
// console.log(gator.status());

// gator.addScore(100);
// console.log(gator.status());

// gator.addScore(100);
// console.log(gator.status());