const product = { //Create an object 
    _brand: 'Sony', //private brand prop
    get brand(){  //Getter for our brand property
        return this._brand
    },
    set brand(newBrand){ //setter for brand property. Even though it has the same name as the function above, which function is called is dependent on if you pass in an argument or not.
        this._brand = newBrand
    },
    _category: 'Electronics', //private category prop
    get category(){
        return this._category
    },
    set category(newCategory){
        this._category = newCategory
    },
    _price: { //private Price object 
        inStore: 100,
        online: 90
    },
    get price () {
        return this._price
    },
    set price (priceObj){ //The setter for price takes in an object, if you call it you need to provide an object for it!
        this._price = priceObj
    },
    _stock: 15, //private Stock prop
    get stock () {
        return this._stock
    },
    set stock (newStock) {
        this._stock = newStock
    },
    _stores:['St. Louis', 'Dallas', 'Chicago'], //private stores array prop
    get stores () {
        return (this._stores)
    },
    set stores (newStores){
        this._stores = newStores
    },
    storeInventoryValue() { 
        return (this._price.inStore * this._stock)
    },
    onlineInventoryValue() { 
        return (this._price.online * this._stock)
    },
}

// console.log(product.brand) //calls getter for name property of product. Important to note here that we cannot use the () after brand. When using getters and setters we treat them like a normal non private variable.

//Using setters

// product.brand = 'Microsoft' //Even though getters and setters are functions we interact with them like a normal object property. This will pass the argument "Microsoft" to the setter for brand. Once again cannot use the () notation here.

// console.log(product.brand) //calling our brand getter.

// console.log(product.stores) //call our stores getter. The stores getter returns an array.

// console.log(...product.stores) //spread operator. This will call the stores getter, and the spread operator "..." will destructure that array into individual elements. 