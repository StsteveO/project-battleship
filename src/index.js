import "./style.css";

console.log("hello world");

let div= document.createElement("div");
div.textContent="Hello World";
div.style.color= "blue";

let h1= document.querySelector("h1");
h1.appendChild(div);