//arrow function

//if we use curly brakets in arrow function then we have to use return keyword.
var geteven=(element)=> {
    //if (element%2===0) {
      //  return " true";
        
    //}else{
      //  return "false";
   // }

   return element %2===0;
}

console.log(geteven(66))

var result=[2,4,8,12].every(geteven);
console.log(result)

//arrow function
//but if we use parenthesis bracket then there is no need of return keyword.

const add = (num1,num2) => (num1 + num2);
console.log(add (3,4));



//callback function

var callback=[2,6,34,64].every( (a) => (a%2===0))
console.log(callback)