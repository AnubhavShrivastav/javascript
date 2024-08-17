// types of datatypes

//1.primitive

/*7 types:
1.string
2.number
3.boolean
4.null
5.undefined
6.symbol
7.Bigint
*/

const score= 100;
const scorevalue=100.3;

const isloggedin=false;
const outsidetemp=null;
let userEmail;

const id= Symbol('123')
//const anotherId= symbol('123')

//console.log(id ===anotherId)

const BigNumber=47437844778n;

//2.Non-primitive (reference)

//1.array
//2.object
//3.function


let subjects=["maths","english","hindi"];

let obj={
    name:"dev",
    age: 19,
}

const myFunction= function(){
    console.log("hello world");
}
console.log(myFunction)













