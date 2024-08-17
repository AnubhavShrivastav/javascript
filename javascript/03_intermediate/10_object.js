var user={
    Firstname: "Anubhav",
    Lastname: "Shrivastav",
    Role: "Admin",
    Logincount: 44,
    LoginfromInstagram: false,
    lastlogin:["monday","friday"],
}

console.log(user.Firstname);

//you can also print like using this method.
console.log(user["Logincount"]);

user.LoginfromInstagram=true;

console.log(user)

//to print a values in table.
console.table(user)


//

let mobile={
    MobileName: "Iphone 14",
    MobilePrice: "99,999",
    Ram: "8GB",
    Storage: "128GB",
    paymentMethod:"credit-card",
}

mobile.MobilePrice="98,000";

console.table(mobile);

console.log(mobile.MobileName);

