// const {Dog} = require('./classes.js') //Node runtime syntax
import {Dog} from './classes.js' //ES6 syntax 
//Once again I would suggest using the ES6 syntax as it is working in this example in its current state in both the node runtime environment as well as the browser.

const myThirdDog = new Dog('Ava', 'Kibble', 'Golden Retriever') //Create a new instance of the Dog class that we imported from a different file.

myThirdDog.description() //Call our inherited method that comes along with this import.

