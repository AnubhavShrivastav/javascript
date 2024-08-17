/*In summary, this means that the rest operator is used to gather elements into an array,
 while the spread operator is used to spread the content of an array*/

var value = Math.max(2,6,1,2,7,7,3);
//console.log(value);


var myObj = {};

Object.assign(myObj, {a:1,b:2,c:3}, {x:4,y:5,z:6});
//console.log(myObj);

function sumOne(a,b){
 return a + b;
}

//spread operator
let arr = [2,3]
//console.log(sumOne(...arr))  

//Rest operator

function sumTwo(a,b,...args){
   console.log(args)
  let multi = a*b;
   let sum = 0;
  for (const a of args) {
   sum += a;
  }
  return [sum,multi];
}
console.log(sumTwo(2,4,1,5,3,2))