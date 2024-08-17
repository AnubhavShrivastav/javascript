var user ={
    name : "",
    getUserName: function (){
     console.log(`user name is ${this.name}`);
    }
}

var anubhav = Object.create(user);
console.log(anubhav)
anubhav.name = "anubhav";
anubhav.getUserName();


//method-2
var sam = Object.create(user,{
    name: {value: "sammy"},
    coursecount: {value: 4},
})

sam.getUserName()