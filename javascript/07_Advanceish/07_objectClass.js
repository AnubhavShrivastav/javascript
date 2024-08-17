const User = require ("./06_class.js");

const Anubhav = new User ("anubhav","shrianubhav@gmail.com");
console.log(Anubhav);
console.log(Anubhav.email);

Anubhav.enrollCourse("React JS course");
Anubhav.enrollCourse("python course ");

console.log(Anubhav.CourseList);

const Courses = Anubhav.getCourseList(); 

Courses.forEach((c) => console.log(c));