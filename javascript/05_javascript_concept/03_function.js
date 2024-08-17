//self executing anonymous function

(function (){
    console.log("I say hello");
    console.log("I say hello again");
})()

//new

let score = 453;

function addbonus(){
    score = score + 45;
    return score;
}
console.log(addbonus())

//functional programming

function addBonus(){
    return score +45;
}
