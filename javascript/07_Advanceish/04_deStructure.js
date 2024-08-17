const User = ["Anubhav",3,"admin"];
console.log(User[2]);
var Name = User[0];
var Role = User[2];

//DeStructure of array

var [Name,CourseCount,Role] = User;
console.log(Name);

//DeStructure of Object

const MyUser={
    Name : "anubhav",
    CourseCount : 5,
    Role : "manager",
}

//before Destructure we have access like this:
console.log(MyUser.Name);


// after Destructure we have access like this:
var {Name,CourseCount,Role} = MyUser;
console.log(CourseCount);

