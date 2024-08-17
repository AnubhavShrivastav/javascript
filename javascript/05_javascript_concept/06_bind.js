const user ={
    firstname: "anubhav",
    lastname: "shrivastav",
    role : "sub-admin",
    courseCount: 4,
    getinfo : function (){
        console.log(`
            first name is: ${this.firstname},
            last name is: ${this.lastname},
            his role is: ${this.role},
            he is purchasing ${this.courseCount} courses`
        )
    }
}


const userTwo ={
    firstname: "parth",
    lastname: "shrivastav",
    role : "admin",
    courseCount: 2,
}

//user.getinfo()

var parthInfo = user.getinfo.bind(userTwo)
//parthInfo()


//call method
user.getinfo.call(userTwo)


//call method example

let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

// Objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);

console.log(3 + false)