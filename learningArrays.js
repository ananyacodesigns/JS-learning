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
