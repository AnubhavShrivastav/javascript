let UNO = () => {
    return "I am one";
};

let Dos = () => {
 return new Promise((resolve,reject) => {
   setTimeout(() => {
    resolve ("I am two")
   }, 2000);
 })
}
    
let tres = () => {
   return "I am Three";
}

const callMe = async() => {
let valueOne = UNO();
console.log(valueOne);

let valueTwo = await Dos();
console.log(valueTwo);

let valueThree = tres();
console.log(valueThree);
}

callMe()