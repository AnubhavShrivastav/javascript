sayhello();

function sayhello(){
    console.log("hello");
}

if (2==="2"){
   console.log("this is true");
}


//if we write this code on browser console this code run successfully because of global context.
var myname="anubhav";
if (myname===window.myname) {
    console.log("this is again a true statement");
}