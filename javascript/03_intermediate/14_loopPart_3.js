//for of loop is mostly used in array.

/*var apps=["instagram","facebook","whatsapp","twitter","tinder","snapchat"];
for (const a of apps){
    console.log(a);
}*/

//for in loop is mostly used in object.
let symbols={
    yt: "youtube",
    fb: "facebook",
    wa: "whatsapp",
    sc: "snapchats",
} 

for(const s in symbols){
    console.log(`key is ${s} and its value is ${symbols[s]}` );
}

