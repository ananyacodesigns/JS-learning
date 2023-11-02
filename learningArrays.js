//Arrays
//Declaring arrays
const num =[1,2,3,4,5,6,7,8,9]; //key starts from 0
console.log(num);
console.log(num[4]); //accessing an element at desired index
console.log(num[num.length-1]); //index=array's length

//object
const num1 = new Array(1,2,3,4,6,6,7,8,9); //parenthesis instead of square brackets
console.log(num1);

//push
num.push(10) //pushes at the end of the array

//unshift
num.unshift(0); //pushes at the start of the array and returns new array 
console.log(num);

//pop
num.pop(); //no argument to be passed. it removes the last value and returns it to us simply

//shift
num.shift(); //no argument to be passed. it removes the "first"value and returns it to us simply

num[0]= true; //takes any value from num to obj
console.log(num);

const names = ["ashish","ashish","raman","sonam","priya","dev"];
console.log(names.indexOf("ashish")); //gives minus 1 if a name that doesnt exist in the array is given, only shows one.

console.log(names.lastIndexOf("ashish"));
console.log(names.includes("ashish")); //gives true or false, can also give from a certain index if mentioned in the args
//includes only works on primitive data types.

//for reference we use.find:
let channels=[{
    name: "Ananya",
    subscriber: 10000000
},{name: "taylor",
    subscriber: 10000
},
    {name: "Priya",
    subscriber: 50000}
]
//predicate function:
console.log(channels.find(function(element){
        return element.subscriber===50000
        return element.name==="taylor"
}));
//previously we used callback function
//arrow function: syntactical sugar
let channelss=[{
    name: "Ananya",
    subscriber: 10000000
},{name: "taylor",
    subscriber: 10000
},
    {name: "Priya",
    subscriber: 50000}
];
console.log(channelss.find(elementt => elementt.name === "taylor")
//parenthesis not needed if only one argument is present here: elementt
    //{return elementt.name === "taylor"; }//return keyword is not needed if there is only one line statement and the braces (curly brackets) are also not needed
);

//concat for arrays

let names1= ["ayushi", "shree","priya", "sharan"];
let names2= ["ayushman", "shreenath","priyanka", "shravani"];
console.log(names1.concat(names2));
console.log(names.slice(3,5)); //5 included 3 not included
let names3 = [...names1,...names2]
console.log(names3)


//for loop
for(i=0;i<names.length; i++){
    console.log(names[i]);
}

for(let element of names){
    console.log(element);
}

//for each is not in js but for arrays there's a method which is similar

names.forEach(function(name,index){
    console.log(name)
});

//join common for string and array

let student= ['s','d','f','fd','ds','k'];
console.log(student.join(" ")); //gives coma separated characters if args is empty otherwise we can give space ("  ") or any other separator we wish in the args

//split
let students = student.join(" ");
console.log(students.split("-"));

//filter is similar to method
//find only gives on value
let cities = [
    {name: 'mumbai', pop: 3648327687},
    {name: 'ranchi', pop: 3222687},
    {name: 'goa', pop: 3487687},
    {name: 'delhi', pop: 1212337687},
    {name: 'shimla', pop: 111327687},
    {name: 'bhopal', pop: 2228327687},
];
console.log(cities.filter(city => city.pop >300000777));
console.log(cities.map(city => city.pop*2));
 
