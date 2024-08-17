const courses = [
    {name : "compelete python Course",
     price : "6.99",
    },

    {name : "compelete React JS course",
     price : "2.99",
    },

    {name : "compelete Angular course",
     price : "3.69",
    },

    {name : "compelete C++ course",
     price : "1.99",
    },
    
    {name : "compelete Ruby course",
        price : "5.99",
    },
];

/* we create this using javascript 
<li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>*/

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML ="";
courses.forEach(courses => {

    const li =document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(courses.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price =document.createTextNode("$ " + courses.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
}
);
};
generateList()


const button = document.querySelector( ".sort-btn");
button.addEventListener("click", () => {
      courses.sort((a,b) => a.price - b.price);
      generateList()

})

const button2 = document.querySelector( ".sort-btn2");
button2.addEventListener("click", () => {
      courses.sort((a,b) => b.price - a.price);
      generateList()

})






