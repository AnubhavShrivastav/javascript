//lexical scoping: The inner function have the access of outer function variable,but outer function donot have access of inner function.


function outer(){
    let username = "Anubhav";
    //console.log("outer ",secret)
function inner(){
    let secret = "dev";
    console.log("inner ",username);
    console.log("inner ",secret)

}function innerTwo(){
     console.log("innerTwo " + username);
     //console.log("innerTwo ",secret)



    }
     inner()
     innerTwo()
}

outer()
//console.log("too outer",username)

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  