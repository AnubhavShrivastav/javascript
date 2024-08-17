//constructor : A JavaScript constructor method is a special type of method which is used to initialize and create an object. 

class User {
    constructor(name,email){
      this.name = name;
      this.email = email;
    }                                                                                            
   //private props
    #CourseList = [];

    getInfo() {
     return {name: this.name,email: this.email};
    }
                                        
    enrollCourse(name){
     return this.#CourseList.push(name);
    }

    getCourseList(){
     return this.#CourseList;
    }
     
    //using Static keyword,any child cannot access it.
    // static login (){
    //   return  "you are loggedIn";
    // }


     login (){
       return  "you are loggedIn";
     }
    }    

module.exports = User;


var dev = new User ("dev","dev@gmail.com");
//console.log(dev.getInfo());

dev.enrollCourse("C++ course");
dev.enrollCourse("java course");

//console.log(dev.getCourseList());
//console.log(dev.CourseList);


//Inheritance
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class subAdmin extends User{
  constructor(name,email){
   super (name,email);
  }
  getAdminInfo(){

     return "I am SubAdmin";
  }
  
  //overriding
  login(){
    return "only SubAdmin can LoggedIn";
  }

}

const Tom = new subAdmin("Tom","Tom.Jerry@gamil.com");
console.log(Tom.getAdminInfo());
console.log(Tom.getInfo());
console.log(Tom.login());


