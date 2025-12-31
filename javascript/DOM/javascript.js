const container = document.querySelector(".container");

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I’m red!"
para.style.color = "red";
container.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue";
container.appendChild(heading);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
div.appendChild(h1);

const para1  = document.createElement("p");
para1.textContent = "ME TOO!";
div.appendChild(para1);

//events

//methos 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert('enna pandra???');

//method 3
const butn = document.querySelector("#butn");
butn.addEventListener("click", () =>{ 
    alert("Saptiya???") 
});                                         // or we can use seperate funtion to alert. like 
                                            // function alertFunction() {
                                            //     alert("YAY! YOU DID IT!");
                                            //     }

const butn1 = document.querySelector("#butn1");                                           
butn1.addEventListener("click", function (e) {
    alert(e.target);
    e.target.style.backgroundColor = "blue";

});