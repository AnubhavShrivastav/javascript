//scope chaining
// when one function variable is not defined it give upper one variable as a output,but it cannot give bottom variable as a output.


var name="dev";
console.log(name)

function sayname(){
    //var name="anubhav";
    console.log(name)
    
    sayname2()

function sayname2(){
    var name="MR.A";
    console.log(name)
}
}


sayname()
