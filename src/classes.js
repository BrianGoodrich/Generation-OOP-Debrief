class Animal { //Declares a class called animal

    constructor(name, food, type){ //constructor taking 3 parameters, will be called when we instantiate an object with the "new" keyword
        //These this. statements will create our private variables _type, _name, and _food.
        this._type = type
        this._name = name
        this._food = food
    }
    //getters for our class variables name, food, type
    get type () {return this._type}
    get name () {return this._name}
    get food () {return this._food}
    //setter for food, must take an argument.
    set food (newFood) { this._food = newFood}
    //Static method that will only be accessible using the Animal class name.
    static animalMessage(){
        console.log('This message is for all of the animals!')
    }
    //Method that will describe our animal using our variables created by the constructor.
    description (){
        console.log(`This animal is a ${this._type}, their name is ${this._name} and they like to eat ${this._food}`)
    } 
}

const lion = new Animal('Simba', 'Gazelles', 'Lion') //Create a new instance of our class Animal. This results in an object called lion being created.
// lion.animalMessage() //This will result in an error. Static methods may only be called by the class itself, not individual instances of the class.

// lion.description() //calls our description method.

// console.log(lion.food) //console logging the result of calling our getter for our _food variable.

// Animal.animalMessage() //This will call our static method animalMessage. This is the only way we can call our 


class Dog extends Animal { //Create a class called Dog that extends, or is a subclass of the Animals class defined above.

    constructor(name, food, breed){ //constructor taking 3 parameters, will be called when we instantiate an object with the "new" keyword. 
        //Notice this is taking in only 2 of the same parameters from our superclass. Breed is unique to the dog class

        const type = 'Dog' //Create a constant variable called dog that we can pass to our superclasses constructor. This will be the same for every dog we create.
        super(name, food, type) //calls animal constructor passing in the name, food, and type (which is dog every time.)
        this._breed = breed //create a private variable called _breed assigning it the breed that was passed to the constructor

    }
    //Getters and setters for private _breed var.
    get breed () {return this._breed}
    set breed (newBreed) {this._breed = newBreed}
}


const myDog = new Dog('Max', 'Steak', 'Pitbull') //Create a new instance of the dog class. We are passing the constructor 3 strings.
// const mySecondDog = new Dog('Jax', 'Purina', 'Poodle') //Creating another instance of the dog class, its super easy to keep generating new objects since we have a class!

myDog.description() //Calling a description() method that our dog class inherited from its superclass Animal.

// mySecondDog.description() //Same as line 54 pretty much
// console.log(mySecondDog.breed) //Using our getter for breed.


// module.exports = {Dog} //Node.js syntax
export {Dog} //ES6 syntax

//Important note for exports/imports. This ES6 syntax is what I would suggest using, This example works using both the node runtime environment, as well as in your browser. 
//Remember to specify this script as type = "module" in the index.html
