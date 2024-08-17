var user={
    Firstname: "Anubhav",
    Lastname: "Shrivastav",
    Role: "Admin",
    Logincount: 44,
    LoginfromInstagram: true,
    courselist:[],
    buycourse: function (coursename){
        this.courselist.push(coursename);
    },
    getcoursecount: function (){
        return `${this.Firstname} is enrolled in total of ${this.courselist.length} courses`;
    },
    getuserinfo: function (){
     return{
        Firstname:this.Firstname,
        Lastname:this.Lastname,
        Role:this.Role,
        Logincount:this.Logincount,
        LoginfromInstagram:this.LoginfromInstagram,
        courselist:this.courselist,    
    }
    }
    
};


var courselist= true;
console.log(user.Firstname);
console.log(user.getcoursecount());
user.buycourse("React JS course")
user.buycourse("C++ course")
console.log(user.getcoursecount());

console.table(user.getuserinfo());


