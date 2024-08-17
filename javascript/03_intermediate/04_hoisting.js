/*Execution context type :
1.variable object
2.scope chain
3.this*/

//functions declared are scanned and made available.
tipper(2000)

function tipper(a){
    var bill=a
    console.log(a+100)
}

//variable declared are scanned and made undefined.


var smalltipper= function (b){
    let bill=parseInt(b);
    console.log(bill+20);
}

smalltipper("200")

//
console.log(name)
var name="dev"

function sayname(){
    var name="anubhav"
    console.log(name)
}

sayname()
console.log(name)


