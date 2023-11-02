let info = [
    {
        name: "shreya",
        height: 190,
        weight: 90,
        age: 10,
        gender: "other"
    },
    {
        name: "sayan",
        height: 180,
        weight: 46,
        age: 11,
        gender: "female"
    },
    {
        name: "Ananya",
        height: 170,
        weight: 46,
        age: 22,
        gender: "female"
    },
    {
        name: "Shreenath",
        height: 185,
        weight: 60,
        age: 23,
        gender: "male"
    }
]
//Q1. get an array of all names
const names = info.map(ch => ch.name);
console.log(names);

//Q2. get an array of objects with just name and height
const properties = info.map((ch)=>{
    return {name: ch.name,
        height: ch.height}
    }
)
console.log(properties);

//Q3. get total height of all people in info
/* const heightsum= info.map(ch =>{
    for(i=0;i<info.length;i++){
        ch.height += info[i].height}
        console.log(ch.height);
    }) */ //my try
//answer

const totalHeight = info.reduce((previousHeight, info)=> {
    return previousHeight + info.height; //number(info.height) if the height is a string
},0);
console.log(totalHeight);

//Q4. get info with weight greater than 50

const weight =info.filter(ch => ch.weight >50);
console.log(weight)

//Q5. get all male infos
const gender = info.filter(ch => ch.gender ==="male");
console.log(gender);

//Q6. sort by gender 
//sort for primitive values
const sortG= info.sort((char1, char2) =>{
    if(char1.gender<char2.gender){
        return -1
    }
    if(char1.gender>char2.gender){
        return 1
    }
})
console.log(sortG);

//Q7. sort by name
const sortN= info.sort((char1, char2)=>{
    if(char1.name<char2.name){
        return -1
    }
    if(char1.name>char2.name){
        return 1
    }
})
console.log(sortN); //lowercase is given lower preference in hierarchy of sorting

// Q8. does every character have mass more than 40?
console.log(info.every(character=>character.weight> 50)); //every method

//Q9.  is there any male character?

console.log(info.some(char=>char.gender="male"));

//Q10. taller than 200cm?
console.log(info.some(char => char.height>200));
