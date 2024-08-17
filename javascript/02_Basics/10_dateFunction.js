//dates

let mydates= new Date();
//console.log(mydates);
//console.log(mydates.toLocaleDateString());
//console.log(mydates.toISOString())
//console.log(mydates.toDateString())
//console.log(mydates.toLocaleTimeString())
//console.log(mydates.toJSON())
//console.log(mydates.getDay())
//console.log(mydates.getMonth())

//let myCreatedDate=new Date(2023,0,6
//let myCreatedDate=new Date(2023,0,6,15,30)
let myCreatedDate=new Date("01-11-2028")

//console.log(myCreatedDate.toLocaleString());


let mytimestamp= Date.now()
console.log(mytimestamp);

console.log(myCreatedDate.getTime());

//get time in mintues.
console.log(Math.round(Date.now()/1000))

mydates.toLocaleString('default',{
    weekday:"long",
})

console.log(mydates)