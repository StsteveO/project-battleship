import "./style.css";
import { grabName, CreateBoat, hit, isSunk, Gameboard } from "../src/functions _&_tests/functions";
import { exampleAdd } from "../src/DOM-interactions/DOM-interactions"

const nameSubmit = document.querySelector(".form.player-name");
nameSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e.composedPath()[0][1].value);
    return (e.composedPath()[0][1].value);
});