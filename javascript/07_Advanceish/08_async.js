let UNO = () => {
    console.log("I am one");
};

let Dos = () => {
    setTimeout (() => {
        console.log("whooooo")
    },3000)
    console.log("I am Two");
}
    
let tres = () => {
    console.log("I am Three");
}

UNO();
Dos();
tres();