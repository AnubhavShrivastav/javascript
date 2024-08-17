//second method to use object

//const Tinderuser= new object();
const Tinderuser={};

Tinderuser.id="abc123";
Tinderuser.email="dev@gmail.com";
Tinderuser.isloggedin=true;

//console.log(Tinderuser)

//we can also create object inside objects.

const regularuser= {
    email: "dev@gmail.com",
    fullname:{
        userfullname:{
            firstname: "anubhav",
            lastname: "shrivastav",
        }
    }
}

//console.log(regularuser.fullname)
//console.log(regularuser.fullname.userfullname)

const obj1={ 1:"a",2:"b"};
const obj2={ 3:"a",4:"b"};
const obj3={ 5:"a",6:"b"};

//const obj4={obj1,obj2,obj3}
//const obj4= Object.assign({},obj1,obj2,obj3);
 const obj4={...obj1,...obj2,...obj3};
//console.log(obj4)

//console.log(Object.keys(Tinderuser));
//console.log(Object.values(Tinderuser));
//console.log(Object.entries(Tinderuser));

//if we have to find the values in object
//console.log(Tinderuser.hasOwnProperty('isloggedin'));


const course={
    courseName: "react.js",
    price : 999,
    courseInstructor: "dev",
}
//console.log(course.courseInstructor)

//object de-structure
const {courseInstructor:Instructor} = course; 
console.log(Instructor)



