class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
        console.log(
            `${this.name} reduced ${target.name}'s resilience by ${this.power}`
        );
        console.log(target);
    }
}

class Effect extends Card {
    constructor(name, cost, magnitude, stat) {
        super(name, cost);

        this.magnitude = magnitude;
        this.stat = stat;
    }

    play(target) {
        if (target instanceof Unit) {
            
            target[this.stat] += this.magnitude;
            
            let changeIn = "increase";

            if (this.magnitude < 0) {
                changeIn = "reduce";
                
            }

            console.log(
                `${changeIn} target's ${this.stat} by ${Math.abs(this.magnitude)}`
            );
            
            console.log(target);
        }else {
            throw new TypeError("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, 3, "resilience");
const unhandledPromiseRejection = new Effect(
    "Unhandled Promise Rejection", 
    1, 
    -2, 
    "resilience"
    );
const pairProgramming = new Effect("Pair Programming", 3, 2, "power");

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);