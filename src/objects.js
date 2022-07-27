//Object examples

//Simple object
const product1 = {
    brand: 'Sony',
    category: 'Electronics',
    price: 100,
    stock: 15
}

// console.log(product1.price) //accessing our properties using dot notation.


// let price = 100 //globally declared price variable. If you were to change this.price below into "price", it would be referring to this variable.

//Object with functions/this keyword
const product2 = {
    brand: 'Sony',
    category: 'Electronics',
    price: 120,
    stock: 15,
    //ES6 syntax
    inventoryValue() { //Method in our object, can be called using dot notation.
        return (this.price * this.stock)
    },
}

// console.log(product2.inventoryValue()) //Remember since this is not a setter or getter, to invoke this method we must use the ().



//Objects with nested structures
const product3 = {
    brand: 'Sony',
    category: 'Electronics',
    price: { //This is an object within our object product3, its properties can be accessed with double dot notation.
        inStore: 100,
        online: 90
    },
    stock: 15,
    stores:['St. Louis', 'Dallas', 'Chicago'], //This is an array inside our object product3.
    storeInventoryValue() { 
        return (this.price.inStore * this.stock) //method to calculate inventory value using this keywords, also shows access of values of the price object.
    },
    onlineInventoryValue() { 
        return (this.price.online * this.stock) //Similar to above just accessing different key value pair in our nested price object.
    },
}

// console.log(product3.price.inStore) //console logging our in store price from our nested object.
// console.log(product3.price.online) //console logging our online price from our nested object.
// console.log(product3.storeInventoryValue()) //Call our method that is inside our object. This method returns a number.
// console.log(product3.onlineInventoryValue()) //Call our method that is inside our object. This method returns a number.

// console.log(product3.stores[0]) //This statement shows how to access individual array elements when we have an array inside an object.



//Accessing a non existent property
// console.log(product3.type) //This doesnt exist, will result in undefined.

// Adding a non existent property
// product1.type = 'Playstation' //This property was not included above in the product1 object declaration, but it will be added when this line executes.
// console.log(product1.type) //Showing that we have access to our newly added property.
// console.log(product1) //Shows that our object now permanently has the "type" prop added above.


//Displaying objects mutability

const student = { //Student object we will use throughout the next few examples.
    studentName: 'Brian',
    grade: 'A++',
    program: 'Computer Science',
}

// console.log(student.studentName) //log before the change
// student.studentName = 'Bob' //This shows that we can change a constant objects property values.
// console.log(student.studentName) //log after the change

const changingProps = (obj) => { //Function that takes in an object and changes the studentName prop to "Jose"
    obj.studentName = 'Jose'
}

// changingProps(student) //Send our student object into the function above, the change made in the function will persist outside of it.
// console.log(student.studentName) //This proves that the change made in the function above will persist after the function call.

// student = { //This will result in an error, cannot re assign a constant object. But we can modify its contents!
//     studentName: 'Jessica',
//     grade: 'A++',
//     program: 'Computer Science',
// }




console.log(`I am outside the function name is ${student.studentName}`) //This will show what the student name is before this function call.

const passByReference = (obj) => { //This function will take in a constant object, re assign it to a different memory location, that also has different values.
    obj = { //Reassignment of the const object that is being passed in. Not allowed outside of the function, as we see on line 87.
        studentName: 'Jessica',
        grade: 'A+',
        program: 'Computer Science',
    }
    console.log(`I am inside the function name is ${obj}`) //Output the different object. At this point this obj is not only pointing to a different memory location, but it has completely different contents. This is not the student object anymore.
}

passByReference(student) //Pass in our student object to the function that will change it.
console.log(`I am outside the function name is ${student.studentName}`) //This line will show that what happened in the passByReference function did not affect our student object.



//Iterating over an object


// for (let x in student){
//     console.log(`${x}: ${student[x]}`) //Must use bracket sytax here so that the value of x will be referring to the current value of x. Cannot use student.x beacuse that would be trying to find a property x in student every time the loop occurs.
// }


//Destructuring 

//This block of code will assign our student object contents to individual variables.

// const student1 = student.studentName
// const grade = student.grade
// const program = student.program

//Shorthand way

// const {studentName, grade} = student //This will create two constant variables, studentName, and grade. Using this sytanx you must name the variables the same thing as the keys in the object you wish to pull out.

// console.log(student1,grade)

// console.log(student)


//Factory functions


const studentFactory = (name, grade, program) => { //Function that returns an object. This is a factory function or function template.
    return {
        studentName: name,
        grade: grade,
        program: program,
    }
}

const student2 = studentFactory('Morgan', 'A++', 'Education') //Create a constant variable student2, and we will assign its value to be what is returned from the factory function above.
//Here we are passing in 3 strings to our factory function, what is returned will be an object and the values will be those 3 strings.
console.log(student2) //log the entire object
