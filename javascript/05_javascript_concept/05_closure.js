//closure: when we return a function, it lexical scope also return.

/*function makefunc(){
    let name = "firefox";
function displayName(){
    console.log(name);
}
return displayName; 
}

const myfunc = makefunc();
myfunc();*/


function init(){
    var firstname = "anubhav";
    console.log("I am init");
    
function sayfirstname(){
    console.log(firstname);
    }
    return sayfirstname
}

var value = init();
value()


function addition(x){
    return function(y){
        return x + y;
    }
}
    var result = addition(2);
    console.log(result(3));

    console.log(addition(2)(2))

    
