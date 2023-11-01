//syntax classes 
//uses pascal case
//declaring a class
/* class Product{ //class is key word
    constructor(name, price, discount, itemCode) 
    //constructor is a predefined function in class keyword
    {
        this.itemName= name;
        this.price = price;
        this.discount = discount;
        this.itemCode = itemCode;
    } 
}
 */
/* let pencil = new Product('Pencil', 20, 2, "PN");
console.log(pencil); */

/* const Product1 = class Product{ 
    constructor(name, price, discount, itemCode) 
    {
        this.itemName= name;
        this.price = price;
        this.discount = discount;
        this.itemCode = itemCode;
    } 
    //getter and setter method
    get getdiscountValue(){
        return this.discount
    }
    set setDiscount(value){
        this.discount = value;
    }
    //method definition
    discountValue(){
    return this.discount*this.price/100;
}
}
//here we used class to make an object that has the same name as the class
//using class expression
let chair = new Product1('chair', 200, 15, "C10");
console.log(Product1.name);
console.log(chair.name);
console.log(chair);
console.log(chair.getdiscountValue);
chair.setDiscount = 30;
console.log(chair);
console.log(chair.discountValue()); */

//Extending classes
class Product{ //class is key word
    constructor(name) 
    //constructor is a predefined function in class keyword
    {
        this.itemName= name;
    } 
    getItemName(){
        return this.itemName + " is a product"
    }
}
//making subclass of above class
class Funriture extends Product{
    constructor(itemName){
        super(itemName); //is used to call the constructor of the parent
    }
    getItemName(){
        return this.itemName + " is a Furniture"
}
}

let pencil = new Product('pencil', 20, 5, "PNM");
let chair= new Funriture('Chair',500, 20, "CH1");
console.log(pencil.getItemName());
console.log(chair.getItemName());
