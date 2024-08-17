const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task is compeleted");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
       console.log("async2 is compeleted");
       resolve()
    },1000);
}).then (function(){
    console.log("promise consumed");
})


const promiseThree = new Promise (function (resolve,reject){
       setTimeout(() => {
        resolve({User : "dev", password : 123})
       }, 1000);
}) 

promiseThree.then((user) =>{
     console.log(user);
});


const promiseFour = new Promise (function(resolve,reject){
       setTimeout(() => {
        let Error = false;
        if (!Error){
        resolve ({Username : "anubhav", emaail: "anubhav@gamil.com"})
        }else{
            reject ("ERROR: something went wrong");
        }
       }, 1000);
})

promiseFour.then((User) =>{
    console.log(User);
    return User.Username
}).then((username) => {
    console.log(username);
}).catch((Error) => {
    console.log(Error)
}).finally(() => {
    console.log("The promise is either resolved and reject");
})



const promiseFive = new Promise(function (resolve,reject){
    setTimeout(() => {
    let value = true;
     if (!value){
        resolve({username : "tirth",password : 123})
     }else{
        reject("ERROR :javascript went wrong");
     }
    },1000);
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()