/*fill method: 
 In fill method,first:we can write the value we want to change 
second: starting point
third: ending point*/


var number=[2,5,66,88,2,9,10];
console.log(number.fill("a",3,6))

//filter
const mynum=[22,45,88,22,190,4,22,66,35];
const result=mynum.filter((num) =>  num>40)
console.log(result)


//slice method: It like indexing.
var week=["mon","tue","wed","thru","fri"];
console.log(week.slice(2,4))


/*splice method: first:starting point.
second:who many value you want to delete.
third: enter the value you want to enter.*/ 

var month=["jan","feb","mar","apr","may","june","july"];
console.log(month.splice(3,4,"aug","sept","oct","nov","dec"))
console.log(month)