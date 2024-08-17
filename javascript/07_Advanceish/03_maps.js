var MyMaps = new Map();

MyMaps.set(1, "one");
MyMaps.set(2, "two");
MyMaps.set(3, "three");
MyMaps.set(4, "four");

//console.log(MyMaps)

/*for (const key of MyMaps.keys()) {
    console.log(`key is ${key}`)
}

for (const value of MyMaps.values()) {
    console.log(`value is ${value}`)

    for (const [key,value] of MyMaps) {
        console.log(`key is ${key} and value is ${value}`)
    }
}*/ 

MyMaps.forEach((values,keys) => (console.log(`${values} and key is ${keys}` )));

console.log(MyMaps.delete(3))
console.log(MyMaps);

//if we want to print one key or value
console.log(MyMaps.get(1))
console.log(MyMaps.get(4))

//find the size of maps
console.log(MyMaps.size)

//if we want to print all key and value of maps.
console.log(MyMaps.entries())

