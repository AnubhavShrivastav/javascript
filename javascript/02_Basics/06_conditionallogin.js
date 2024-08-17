//allow user to access course if he is:
//loggedin from facebook
//loggedin from google
//loggedin from instagram

var isLoggedInfacebook= false;
var isLoggedIngoogle= true;
var isLoggedIninstagram= false;

//method-1
if (isLoggedInfacebook){
    console.log("login successfully");
}if (isLoggedIngoogle){
    console.log("login successfully");
}if (isLoggedIninstagram){
    console.log("login successfully")
}




/*method-2
if (isLoggedInfacebook || isLoggedIngoogle ||isLoggedIninstagram){
    console.log("successfully login");    
}else{
    ("unable to success");
}
*/