
var User = function (firstname,courseCount){
  this.firstname = firstname;
  this.courseCount = courseCount;
  this.getcourseCount = function(){
    console.log(`Course count is : ${courseCount}`);
  };
};


User.prototype.getfirstname = function(){
console.log(`your firstname is: ${this.firstname}`)
}

var dev = new User("dev",2);
dev.getcourseCount()
//console.log(dev);

if (dev.hasOwnProperty("firstname")){
dev.getfirstname()
}


var anubhav = new User("anubhav",1);
//console.log(anubhav)
anubhav.getfirstname()

