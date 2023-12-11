class Animal{
    constructor(sound, motion){
        this.sound = sound;
        this.motion = motion;
    }
    speak(){
        console.log(`I go ${this.sound}`)
    }
    move(){
        console.log(`I ${this.motion} forward`)
    }
}

class Pet extends Animal{
    constructor(name, sound, motion){
        super(sound, motion)
        this.name = name;
    }
    speak(){//Override the speak method
        console.log(`${this.name} goes ${this.sound}`)
    }
    move(){
        console.log(`${this.name} ${this.motion} forward`)
    }
}

class Cat extends Pet{
    constructor(name){
        super(name, "Meow!", "Saunters")
    }
}
// fish = new Animal("bubble bubble", "swim swishly")

// fish.speak()
// fish.move()

// REDUNDANT - REPEATTING CODE AND VARIABLES
// fish2 = new Animal("bubble bubble", "swim swishly")


pet1 = new Cat("Olive")
// pet1 = new Pet("Olive", "Meow!", "Saunters")
pet1.speak()
pet1.move()

pet2 = new Cat("Skittles")
// pet1 = new Pet("Olive", "Meow!", "Saunters")
pet2.speak()
pet2.move()

class Fish extends Animal{
    constructor(){
        super("bubble bubble", "swim swishly")// CALL PARENT CONSTRUCTOR - LIKE A SUPERVISOR ABOVE 
    }
}
f1 = new Fish()
f2 = new Fish()

f1.speak()
f1.move()

f2.speak()
f2.move()
