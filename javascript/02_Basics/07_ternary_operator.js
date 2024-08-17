//show user a signout button if he is authentication
//if he is not authenticate show him a signin/login page

var authentication

authentication= false;

//method=1
if (authentication) {
    console.log("show signout button")
}else{
    console.log("show login button")
}

//method-2
//ternary_operator
authentication ? console.log("show signout button") : console.log("show login button")

