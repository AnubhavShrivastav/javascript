var countries=["india","south africa","USA","japan"];

var states=["gujrat","delhi","mumbai","assam","punjab"];

// it count the elements in the array
console.log(states.length);

//it repalce the elements in the array
console.log(countries[3])
states[3]="kerla";
console.log(states);

var user=[132,"anubhav","shrianubhav@.com",33,4,true]

//delete the last elements in array

user.pop();
user.pop();

console.log(user)

// add the elements in array at starting point.
user.unshift("dev");
console.log(user)

//remove first elements in array
user.shift()
console.log(user)

//find any elements index position
console.log(user.indexOf("anubhav"))

console.log(user.indexOf("newy"))
 
//break them like a array.

console.log(Array.from("anubhav"))

