//define a function that can answer role of the user.
//a user can have following rules:
//admin - gets full access.
//subadmin - get access to create /delete courses.
//testprep - get access to create/delete tests.
//user - gets access to consume content.
//other- trial user.

//input:getUserRole(name,role)


function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} get full access.`
        break;

        case "subadmin":
            return `${name} get access to create / delete courses .`
        break;

        case "testprep":
            return `${name} get access to create/delete tests.`
        break;

        case "user":
            return `${name} get access to consume content.`
        break;

        case "other":
            return `${name} trial user.`
        break;
    
        default:
            return "bugs"
            break;
    }
}

var userrole= getUserRole("dev","admin")
console.log(userrole)

/*there are four house :
anuraag is leader of Moon house.
Dhruv is a leader of Earth house.
Anubhav is a leader of Sun house.
Param is a leader of Mars house.*/


function groups(name,house){
    switch (house) {
        case "Moon":
            return `${name} is a moon house leader`
        break;

        case "Earth":
            return `${name} is a Earth house leader`
        break;

        case "Sun":
            return `${name} is a Sun house leader`
        break;

        case "Mars":
            return `${name} is a Mars house leader`
        break;

       default:
             return `do not exist`
            break;
    }
}

var user=groups("Dhruv","Earth");
console.log(user)