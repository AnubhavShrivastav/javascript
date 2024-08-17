function sayhello(name){
    console.log("hello,I am anubhav");
    console.log(`hello,I am ${name}`);
}

//sayhello("dev")
//sayhello("dhruv")

//using return

function tata() {
    return "it is a company of cars"
}

var cars= tata()
//console.log(cars)
//console.log(tata())

function hello (greet){
 console.log(`${greet} greeting in india`);
}

//hello("namstey")



function addNumber(Number1,Number2){
    const result = Number1 + Number2;
    return result    
    
}

const addition=addNumber(3,8);
//console.log(addition)



function loginUsermessage(username){
    if (username === undefined){
        console.log("please enter username")
     return
    }
    return `${username} just logged in`  
}
console.log(loginUsermessage("dev"))

