import "./style.css";
import {
  grabName,
  CreateBoat,
  hit,
  isSunk,
  Gameboard,
} from "../src/functions _&_tests/functions";
import { exampleAdd } from "../src/DOM-interactions/DOM-interactions";

const namePlate = document.querySelector(".name-plate");
const nameSubmit = document.querySelector(".form.player-name");

nameSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.composedPath()[0][1].value;
  namePlate.textContent = name;
});

const grid = document.querySelector(".grid");

grid.addEventListener("click", (e) => {
  const xValue = e.composedPath()[0].dataset.xValue;
  const yValue = e.composedPath()[0].dataset.yValue;

  if (xValue !== undefined) {
    // console.log(xValue);
    // console.log(yValue);
  }
});

const patrolBoat = document.querySelector(".patrol-boat-btn");
const submarine = document.querySelector(".submarine-btn");
const destroyer = document.querySelector(".destroyer-btn");
const battleship = document.querySelector(".battleship-btn");
const carrier = document.querySelector(".carrier-btn");
const horizantal = document.querySelector(".horizantal-btn");
const vertical = document.querySelector(".vertical-btn");

function boatSelectionButtonFunction(
  btnClicked,
  btnArr = [patrolBoat, submarine, destroyer, battleship, carrier]
) {
  btnClicked.classList.add("clicked");
  let remainingBtns = btnArr.filter((btn) => btn !== btnClicked);
  remainingBtns.forEach((btn) => btn.classList.remove("clicked"));
}

function boatOrientationButtonFunction(
  btnClicked,
  btnArr = [horizantal, vertical]
) {
  btnClicked.classList.add("clicked");
  let remainingBtns = btnArr.filter((btn) => btn !== btnClicked);
  remainingBtns.forEach((btn) => btn.classList.remove("clicked"));
}

patrolBoat.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.patrolBoatSpaces);
  boatSelectionButtonFunction(patrolBoat);
});

submarine.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.submarineSpaces);
  boatSelectionButtonFunction(submarine);
});

destroyer.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.destroyerSpaces);
  boatSelectionButtonFunction(destroyer);
});

battleship.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.battleshipSpaces);
  boatSelectionButtonFunction(battleship);
});

carrier.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.carrierSpaces);
  boatSelectionButtonFunction(carrier);
});

horizantal.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.boatOrientation);
  boatOrientationButtonFunction(horizantal);
});

vertical.addEventListener("click", (e) => {
  console.log(e.path[0].dataset.boatOrientation);
  boatOrientationButtonFunction(vertical);
});

//click-btns-modal
const clickBtnsModal= document.querySelector(".click-btns-modal");
const tableClass= document.querySelector(".table-class");

tableClass.addEventListener("mouseenter", ()=>{
  if (
    (!patrolBoat.getAttribute("class").includes("clicked") &&
    !submarine.getAttribute("class").includes("clicked") &&
    !destroyer.getAttribute("class").includes("clicked") &&
    !battleship.getAttribute("class").includes("clicked") &&
    !carrier.getAttribute("class").includes("clicked")) ||
    (!horizantal.getAttribute("class").includes("clicked") &&
    !vertical.getAttribute("class").includes("clicked"))
  ) {
    console.log("None of these buttons are clicked"); //THIS WORKS!!
    // patrolBoat.classList.add("no-btn-clicked-error");
    clickBtnsModal.classList.add("show");
    tableClass.classList.add("phased-out");
  }
});

const cells = document.querySelectorAll("td");

cells.forEach((cell) =>
  cell.addEventListener("mouseover", () => {
    const xNum = Number(cell.dataset.xValue);
    const yNum = Number(cell.dataset.yValue);

    const nextCell2_horizantal = document.querySelector(
      `[data-code= "${xNum + 1}${yNum}"]`
    );
    const nextCell3_horizantal = document.querySelector(
      `[data-code= "${xNum + 2}${yNum}"]`
    );
    const nextCell4_horizantal = document.querySelector(
      `[data-code= "${xNum + 3}${yNum}"]`
    );
    const nextCell5_horizantal = document.querySelector(
      `[data-code= "${xNum + 4}${yNum}"]`
    );

    const nextCell2_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 1}"]`
    );
    const nextCell3_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 2}"]`
    );
    const nextCell4_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 3}"]`
    );
    const nextCell5_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 4}"]`
    );

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal) {
        nextCell2_horizantal.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (!nextCell2_horizantal) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical) {
        nextCell2_vertical.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (!nextCell2_vertical) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal && nextCell3_horizantal) {
        nextCell3_horizantal.classList.add("clicked");
        nextCell2_horizantal.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (nextCell2_horizantal && !nextCell3_horizantal) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (!nextCell2_horizantal && !nextCell3_horizantal) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical) {
        nextCell3_vertical.classList.add("clicked");
        nextCell2_vertical.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (nextCell2_vertical && !nextCell3_vertical) {
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal && nextCell3_horizantal) {
        nextCell3_horizantal.classList.add("clicked");
        nextCell2_horizantal.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (nextCell2_horizantal && !nextCell3_horizantal) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (!nextCell2_horizantal && !nextCell3_horizantal) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
     if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical) {
        nextCell3_vertical.classList.add("clicked");
        nextCell2_vertical.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (nextCell2_vertical && !nextCell3_vertical) {
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal
      ) {
        nextCell4_horizantal.classList.add("clicked");
        nextCell3_horizantal.classList.add("clicked");
        nextCell2_horizantal.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        nextCell3_horizantal.classList.add("outside-grid-error");
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        !nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")){
        nextCell4_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical) {
        nextCell4_vertical.classList.add("clicked");
        nextCell3_vertical.classList.add("clicked");
        nextCell2_vertical.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical) {
        nextCell3_vertical.classList.add("outside-grid-error");
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")){
        nextCell4_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal &&
        nextCell5_horizantal
      ) {
        nextCell5_horizantal.classList.add("clicked");
        nextCell4_horizantal.classList.add("clicked");
        nextCell3_horizantal.classList.add("clicked");
        nextCell2_horizantal.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell4_horizantal.classList.add("outside-grid-error");
        nextCell3_horizantal.classList.add("outside-grid-error");
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell3_horizantal.classList.add("outside-grid-error");
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        !nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")){
        nextCell4_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell5_horizantal && nextCell5_horizantal.getAttribute("class").includes("selected")){
        nextCell5_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        nextCell4_vertical &&
        nextCell5_vertical
      ) {
        nextCell5_vertical.classList.add("clicked");
        nextCell4_vertical.classList.add("clicked");
        nextCell3_vertical.classList.add("clicked");
        nextCell2_vertical.classList.add("clicked");
        cell.classList.add("clicked");
      }
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell4_vertical.classList.add("outside-grid-error");
        nextCell3_vertical.classList.add("outside-grid-error");
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell3_vertical.classList.add("outside-grid-error");
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell2_vertical &&
        !nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell2_vertical.classList.add("outside-grid-error");
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        !nextCell2_vertical &&
        !nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
     if (cell.getAttribute("class").includes("selected")) {
        cell.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")){
        nextCell4_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (nextCell5_vertical && nextCell5_vertical.getAttribute("class").includes("selected")){
        nextCell5_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
    }
  })
);

tableClass.addEventListener("mouseleave", () => {
  if (
    (!patrolBoat.getAttribute("class").includes("clicked") &&
      !submarine.getAttribute("class").includes("clicked") &&
      !destroyer.getAttribute("class").includes("clicked") &&
      !battleship.getAttribute("class").includes("clicked") &&
      !carrier.getAttribute("class").includes("clicked")) ||
    (!horizantal.getAttribute("class").includes("clicked") &&
      !vertical.getAttribute("class").includes("clicked"))
  ) {
    console.log("None of these buttons are clicked"); //THIS WORKS!!
    // patrolBoat.classList.remove("no-btn-clicked-error");
    clickBtnsModal.classList.remove("show");
    tableClass.classList.remove("phased-out");
  }
});

cells.forEach((cell) =>
  cell.addEventListener("mouseout", () => {
    const xNum = Number(cell.dataset.xValue);
    const yNum = Number(cell.dataset.yValue);

    const nextCell2_horizantal = document.querySelector(
      `[data-code= "${xNum + 1}${yNum}"]`
    );
    const nextCell3_horizantal = document.querySelector(
      `[data-code= "${xNum + 2}${yNum}"]`
    );
    const nextCell4_horizantal = document.querySelector(
      `[data-code= "${xNum + 3}${yNum}"]`
    );
    const nextCell5_horizantal = document.querySelector(
      `[data-code= "${xNum + 4}${yNum}"]`
    );

    const nextCell2_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 1}"]`
    );
    const nextCell3_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 2}"]`
    );
    const nextCell4_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 3}"]`
    );
    const nextCell5_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 4}"]`
    );

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal) {
        nextCell2_horizantal.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (!nextCell2_horizantal) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical) {
        nextCell2_vertical.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (!nextCell2_vertical) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal && nextCell3_horizantal) {
        nextCell3_horizantal.classList.remove("clicked");
        nextCell2_horizantal.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (nextCell2_horizantal && !nextCell3_horizantal) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (!nextCell2_horizantal && !nextCell3_horizantal) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical) {
        nextCell3_vertical.classList.remove("clicked");
        nextCell2_vertical.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (nextCell2_vertical && !nextCell3_vertical) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_horizantal && nextCell3_horizantal) {
        nextCell3_horizantal.classList.remove("clicked");
        nextCell2_horizantal.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (nextCell2_horizantal && !nextCell3_horizantal) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (!nextCell2_horizantal && !nextCell3_horizantal) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical) {
        nextCell3_vertical.classList.remove("clicked");
        nextCell2_vertical.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (nextCell2_vertical && !nextCell3_vertical) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal
      ) {
        nextCell4_horizantal.classList.remove("clicked");
        nextCell3_horizantal.classList.remove("clicked");
        nextCell2_horizantal.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        nextCell3_horizantal.classList.remove("outside-grid-error");
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        !nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal
      ) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")){
        nextCell4_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical) {
        nextCell4_vertical.classList.remove("clicked");
        nextCell3_vertical.classList.remove("clicked");
        nextCell2_vertical.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical) {
        nextCell3_vertical.classList.remove("outside-grid-error");
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")){
        nextCell4_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal &&
        nextCell5_horizantal
      ) {
        nextCell5_horizantal.classList.remove("clicked");
        nextCell4_horizantal.classList.remove("clicked");
        nextCell3_horizantal.classList.remove("clicked");
        nextCell2_horizantal.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell4_horizantal.classList.remove("outside-grid-error");
        nextCell3_horizantal.classList.remove("outside-grid-error");
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell3_horizantal.classList.remove("outside-grid-error");
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        !nextCell2_horizantal &&
        !nextCell3_horizantal &&
        !nextCell4_horizantal &&
        !nextCell5_horizantal
      ) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")){
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")){
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")){
        nextCell4_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell5_horizantal && nextCell5_horizantal.getAttribute("class").includes("selected")){
        nextCell5_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked")
    ) {
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        nextCell4_vertical &&
        nextCell5_vertical
      ) {
        nextCell5_vertical.classList.remove("clicked");
        nextCell4_vertical.classList.remove("clicked");
        nextCell3_vertical.classList.remove("clicked");
        nextCell2_vertical.classList.remove("clicked");
        cell.classList.remove("clicked");
      }
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell4_vertical.classList.remove("outside-grid-error");
        nextCell3_vertical.classList.remove("outside-grid-error");
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell2_vertical &&
        nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell3_vertical.classList.remove("outside-grid-error");
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell2_vertical &&
        !nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        !nextCell2_vertical &&
        !nextCell3_vertical &&
        !nextCell4_vertical &&
        !nextCell5_vertical
      ) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (cell.getAttribute("class").includes("selected")) {
        cell.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")){
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")){
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")){
        nextCell4_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (nextCell5_vertical && nextCell5_vertical.getAttribute("class").includes("selected")){
        nextCell5_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
    }
  })
);




cells.forEach((cell) =>
  cell.addEventListener("click", () => {
    const xNum = Number(cell.dataset.xValue);
    const yNum = Number(cell.dataset.yValue);

    const nextCell2_horizantal = document.querySelector(
      `[data-code= "${xNum + 1}${yNum}"]`
    );
    const nextCell3_horizantal = document.querySelector(
      `[data-code= "${xNum + 2}${yNum}"]`
    );
    const nextCell4_horizantal = document.querySelector(
      `[data-code= "${xNum + 3}${yNum}"]`
    );
    const nextCell5_horizantal = document.querySelector(
      `[data-code= "${xNum + 4}${yNum}"]`
    );

    const nextCell2_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 1}"]`
    );
    const nextCell3_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 2}"]`
    );
    const nextCell4_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 3}"]`
    );
    const nextCell5_vertical = document.querySelector(
      `[data-code= "${xNum}${yNum + 4}"]`
    );

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_horizantal.getAttribute("class").includes("selected")
        ) {
          patrolBoat.classList.remove("clicked");
          patrolBoat.disabled=true;
          cell.classList.add("selected");  
          nextCell2_horizantal.classList.add("selected");
      }
    }

    if (
      patrolBoat.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        patrolBoat.classList.remove("clicked");
        patrolBoat.disabled = true;
        cell.classList.add("selected");
        nextCell2_vertical.classList.add("selected");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_horizantal.getAttribute("class").includes("selected") &&
        !nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        submarine.classList.remove("clicked");
        submarine.disabled = true;
        cell.classList.add("selected");
        nextCell2_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("selected");
      }
    }

    if (
      submarine.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_vertical.getAttribute("class").includes("selected") &&
        !nextCell3_vertical.getAttribute("class").includes("selected") &&
        !grid.getAttribute("class").includes("outside-grid")
      ) {
        submarine.classList.remove("clicked");
        submarine.disabled = true;
        cell.classList.add("selected");
        nextCell2_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("selected");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_horizantal.getAttribute("class").includes("selected") &&
        !nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        destroyer.classList.remove("clicked");
        destroyer.disabled = true;
        cell.classList.add("selected");
        nextCell2_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("selected");
      }
    }

    if (
      destroyer.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_vertical.getAttribute("class").includes("selected") &&
        !nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
        destroyer.classList.remove("clicked");
        destroyer.disabled = true;
        cell.classList.add("selected");
        nextCell2_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("selected");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_horizantal.getAttribute("class").includes("selected") &&
        !nextCell3_horizantal.getAttribute("class").includes("selected") &&
        !nextCell4_horizantal.getAttribute("class").includes("selected") &&
        !grid.getAttribute("class").includes("outside-grid")
      ) {
        battleship.classList.remove("clicked");
        battleship.disabled = true;
        cell.classList.add("selected");
        nextCell2_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("selected");
        nextCell4_horizantal.classList.add("selected");
      }
    }

    if (
      battleship.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_vertical.getAttribute("class").includes("selected") &&
        !nextCell3_vertical.getAttribute("class").includes("selected") &&
        !nextCell4_vertical.getAttribute("class").includes("selected") &&
        !grid.getAttribute("class").includes("outside-grid")
      ) {
        battleship.classList.remove("clicked");
        battleship.disabled = true;
        cell.classList.add("selected");
        nextCell2_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("selected");
        nextCell4_vertical.classList.add("selected");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      horizantal.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_horizantal.getAttribute("class").includes("selected") &&
        !nextCell3_horizantal.getAttribute("class").includes("selected") &&
        !nextCell4_horizantal.getAttribute("class").includes("selected") &&
        !nextCell5_horizantal.getAttribute("class").includes("selected")
      ) {
        carrier.classList.remove("clicked");
        carrier.disabled = true;
        cell.classList.add("selected");
        nextCell2_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("selected");
        nextCell4_horizantal.classList.add("selected");
        nextCell5_horizantal.classList.add("selected");
      }
    }

    if (
      carrier.getAttribute("class").includes("clicked") &&
      vertical.getAttribute("class").includes("clicked") &&
      !grid.getAttribute("class").includes("outside-grid")
    ) {
      if (
        !cell.getAttribute("class").includes("selected") &&
        !nextCell2_vertical.getAttribute("class").includes("selected") &&
        !nextCell3_vertical.getAttribute("class").includes("selected") &&
        !nextCell4_vertical.getAttribute("class").includes("selected") &&
        !nextCell5_vertical.getAttribute("class").includes("selected")
      ) {
        carrier.classList.remove("clicked");
        carrier.disabled = true;
        cell.classList.add("selected");
        nextCell2_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("selected");
        nextCell4_vertical.classList.add("selected");
        nextCell5_vertical.classList.add("selected");
      }
    }
  })
);
