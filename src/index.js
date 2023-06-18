import "./style.css";
import {
  grabName,
  CreateBoat,
  hit,
  isSunk,
  Gameboard,
} from "../src/functions _&_tests/functions";
import { exampleAdd } from "../src/DOM-interactions/DOM-interactions";


// window.addEventListener("load", ()=>{
// const loader = document.querySelector(".loader");
// loader.classList.add("done-loading");
// });

let scoreboardText = document.querySelector(".scoreboard-text");
let scoreboardComputerText = document.querySelector(".scoreboard-computer-text");

const namePlate = document.querySelector(".name-plate");
const nameSubmit = document.querySelector(".form.player-name");

const boatSelectionSection = document.querySelector(".boat-selection");
const boatOrientationSection = document.querySelector(".boat-orientation");
const computerSection = document.querySelector(".computer-grid");
computerSection.classList.add("small");
const grid = document.querySelector(".grid");


nameSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.composedPath()[0][1].value;
  namePlate.textContent = name;
  nameSubmit.classList.add("hide");
  boatSelectionSection.classList.remove("hide");
  boatOrientationSection.classList.remove("hide");
  grid.classList.remove("hide");
  scoreboardText.textContent="Pick your boat, and boat orientation. Then place it on your grid."
});



let overlayForResults = document.querySelector(".overlay-for-results");
let winBanner = document.querySelector(".win-banner");
let loseBanner = document.querySelector(".lose-banner");

function win(){
  overlayForResults.classList.add("active");
  winBanner.classList.add("active");
  return;
};

function lose(){
  overlayForResults.classList.add("active");
  loseBanner.classList.add("active");
  return;
};


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
  console.log(e.composedPath()[0].dataset.patrolBoatSpaces);
  boatSelectionButtonFunction(patrolBoat);
});

submarine.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.submarineSpaces);
  boatSelectionButtonFunction(submarine);
});

destroyer.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.destroyerSpaces);
  boatSelectionButtonFunction(destroyer);
});

battleship.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.battleshipSpaces);
  boatSelectionButtonFunction(battleship);
});

carrier.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.carrierSpaces);
  boatSelectionButtonFunction(carrier);
});

horizantal.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.boatOrientation);
  boatOrientationButtonFunction(horizantal);
});

vertical.addEventListener("click", (e) => {
  console.log(e.composedPath()[0].dataset.boatOrientation);
  boatOrientationButtonFunction(vertical);
});

//click-btns-modal
const clickBtnsModal = document.querySelector(".click-btns-modal");
const tableClass = document.querySelector(".table-class");

tableClass.addEventListener("mouseenter", () => {
  if (
    (!patrolBoat.getAttribute("class").includes("clicked") &&
      !submarine.getAttribute("class").includes("clicked") &&
      !destroyer.getAttribute("class").includes("clicked") &&
      !battleship.getAttribute("class").includes("clicked") &&
      !carrier.getAttribute("class").includes("clicked")) ||
    (!horizantal.getAttribute("class").includes("clicked") &&
      !vertical.getAttribute("class").includes("clicked"))
  ) {
    // console.log("None of these buttons are clicked"); //THIS WORKS!!
    // patrolBoat.classList.add("no-btn-clicked-error");
    clickBtnsModal.classList.add("show");
    tableClass.classList.add("phased-out");
  }
});

// const cells = document.querySelectorAll("td");
const cells = document.querySelectorAll(".player-cell");

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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell4_horizantal &&
        nextCell4_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell4_vertical &&
        nextCell4_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell3_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell4_horizantal &&
        nextCell4_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell4_horizantal.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell5_horizantal &&
        nextCell5_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell3_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell4_vertical &&
        nextCell4_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell4_vertical.classList.add("outside-grid-error");
        grid.classList.add("outside-grid");
      }
      if (
        nextCell5_vertical &&
        nextCell5_vertical.getAttribute("class").includes("selected")
      ) {
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
    // console.log("None of these buttons are clicked"); //THIS WORKS!!
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell4_horizantal &&
        nextCell4_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell4_vertical &&
        nextCell4_vertical.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_horizantal &&
        nextCell2_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell2_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_horizantal &&
        nextCell3_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell3_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell4_horizantal &&
        nextCell4_horizantal.getAttribute("class").includes("selected")
      ) {
        nextCell4_horizantal.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell5_horizantal &&
        nextCell5_horizantal.getAttribute("class").includes("selected")
      ) {
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
      if (
        nextCell2_vertical &&
        nextCell2_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell2_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell3_vertical &&
        nextCell3_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell3_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell4_vertical &&
        nextCell4_vertical.getAttribute("class").includes("selected")
      ) {
        nextCell4_vertical.classList.remove("outside-grid-error");
        grid.classList.remove("outside-grid");
      }
      if (
        nextCell5_vertical &&
        nextCell5_vertical.getAttribute("class").includes("selected")
      ) {
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
        patrolBoat.disabled = true;
        cell.classList.add("selected");
        cell.classList.add("player-patrol-boat");
        nextCell2_horizantal.classList.add("selected");
        nextCell2_horizantal.classList.add("player-patrol-boat");
      }
      if ((patrolBoat.disabled === true)&&(submarine.disabled === true)&&(destroyer.disabled === true)&&(battleship.disabled === true)&&(carrier.disabled === true)) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
      };
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
        cell.classList.add("player-patrol-boat");
        nextCell2_vertical.classList.add("selected");
        nextCell2_vertical.classList.add("player-patrol-boat");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-submarine");
        nextCell2_horizantal.classList.add("selected");
        nextCell2_horizantal.classList.add("player-submarine");
        nextCell3_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("player-submarine");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-submarine");
        nextCell2_vertical.classList.add("selected");
        nextCell2_vertical.classList.add("player-submarine");
        nextCell3_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("player-submarine");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-destroyer");
        nextCell2_horizantal.classList.add("selected");
        nextCell2_horizantal.classList.add("player-destroyer");
        nextCell3_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("player-destroyer");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-destroyer");
        nextCell2_vertical.classList.add("selected");
        nextCell2_vertical.classList.add("player-destroyer");
        nextCell3_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("player-destroyer");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-battleship");
        nextCell2_horizantal.classList.add("selected");
        nextCell2_horizantal.classList.add("player-battleship");
        nextCell3_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("player-battleship");
        nextCell4_horizantal.classList.add("selected");
        nextCell4_horizantal.classList.add("player-battleship");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-battleship");
        nextCell2_vertical.classList.add("selected");
        nextCell2_vertical.classList.add("player-battleship");
        nextCell3_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("player-battleship");
        nextCell4_vertical.classList.add("selected");
        nextCell4_vertical.classList.add("player-battleship");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent="ATTACK!";
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
        cell.classList.add("player-carrier");
        nextCell2_horizantal.classList.add("selected");
        nextCell2_horizantal.classList.add("player-carrier");
        nextCell3_horizantal.classList.add("selected");
        nextCell3_horizantal.classList.add("player-carrier");
        nextCell4_horizantal.classList.add("selected");
        nextCell4_horizantal.classList.add("player-carrier");
        nextCell5_horizantal.classList.add("selected");
        nextCell5_horizantal.classList.add("player-carrier");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
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
        cell.classList.add("player-carrier");
        nextCell2_vertical.classList.add("selected");
        nextCell2_vertical.classList.add("player-carrier");
        nextCell3_vertical.classList.add("selected");
        nextCell3_vertical.classList.add("player-carrier");
        nextCell4_vertical.classList.add("selected");
        nextCell4_vertical.classList.add("player-carrier");
        nextCell5_vertical.classList.add("selected");
        nextCell5_vertical.classList.add("player-carrier");
      }
      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("all buttons have been clicked");
        boatSelectionSection.classList.add("hide");
        boatOrientationSection.classList.add("hide");
        tableClass.classList.add("inactive");
        computerSection.classList.remove("small");
        scoreboardText.textContent = "ATTACK!";
      }

      if (
        patrolBoat.disabled === true &&
        submarine.disabled === true &&
        destroyer.disabled === true &&
        battleship.disabled === true &&
        carrier.disabled === true
      ) {
        console.log("All boats have been placed");
      }
    }
  })
);

//owkring on computer functionality
function randomNumBetween(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function computerOrientation() {
  let computerOrientation = Math.floor(Math.random() * 2) + 1;
  if (computerOrientation === 1) {
    return "horizantal";
  }
  if (computerOrientation === 2) {
    return "vertical";
  }
}

console.log(computerOrientation());

let usedNumbers = [];
let usedNumbers2 = [];

class ComputerBoat {
  constructor(
    name,
    orientation
    // xValue,
    // yValue,
    // startingCell,
    // nextCell2,
    // nextCell3,
    // nextCell4,
    // nextCell5
  ) {
    this.name = name;
    this.orientation = orientation;
    // this.xValue = randomNumBetween(1, 9);
    // this.yValue = randomNumBetween(1, 10);
    // this.startingCell = document.querySelector(
    //   `[data-computer-code= "${this.xValue}${this.yValue}"]`
    // );
    // this.nextCell2 = document.querySelector(
    //   `[data-computer-code= "${this.xValue + 1}${this.yValue}"]`
    // );
    // this.nextCell3 = nextCell3;
    // this.nextCell4 = nextCell4;
    // this.nextCell5 = nextCell5;
  }
  computerCode() {
    if (this.name === "patrolBoat" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 9);
      let y = randomNumBetween(1, 10);
      let nextCell2= x+1;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let cellCode= xToString + yToString;  
      let nextCell2Code= nextCell2String + yToString;
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("patrol-boat");
        // actualCell.textContent= "p";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("patrol-boat");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
      }
    }
    if (this.name === "submarine" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 8);
      let y = randomNumBetween(1, 10);
      let nextCell2= x+1;
      let nextCell3= x+2;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= nextCell2String + yToString; 
      let nextCell3Code= nextCell3String + yToString; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("submarine");
        // actualCell.textContent= "s";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("submarine");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("submarine");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "destroyer" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 8);
      let y = randomNumBetween(1, 10);
      let nextCell2= x+1;
      let nextCell3= x+2;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= nextCell2String + yToString; 
      let nextCell3Code= nextCell3String + yToString; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("destroyer");
        // actualCell.textContent= "d";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("destroyer");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("destroyer");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "battleship" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 7);
      let y = randomNumBetween(1, 10);
      let nextCell2= x+1;
      let nextCell3= x+2;
      let nextCell4= x+3;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let nextCell4String= nextCell4.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= nextCell2String + yToString; 
      let nextCell3Code = nextCell3String + yToString;
      let nextCell4Code = nextCell4String + yToString; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("battleship");
        // actualCell.textContent= "b";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("battleship");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("battleship");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("battleship");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
      }
    }
    if (this.name === "carrier" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 6);
      let y = randomNumBetween(1, 10);
      let nextCell2= x+1;
      let nextCell3= x+2;
      let nextCell4= x+3;
      let nextCell5= x+4;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let nextCell4String= nextCell4.toString();     
      let nextCell5String= nextCell5.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= nextCell2String + yToString; 
      let nextCell3Code = nextCell3String + yToString;
      let nextCell4Code = nextCell4String + yToString;
      let nextCell5Code = nextCell5String + yToString; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code) || usedNumbers.includes(nextCell5Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        let actualNextCell5 = document.querySelector(`[data-computer-code= "${nextCell5Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("carrier");
        // actualCell.textContent= "c";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("carrier");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("carrier");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("carrier");
        actualNextCell5.classList.add("computer-selected");
        actualNextCell5.classList.add("carrier");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
        usedNumbers.push(nextCell5Code);
      }
    }
    if (this.name === "patrolBoat" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 9);
      let nextCell2 = y + 1;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("patrol-boat");
        // actualCell.textContent= "p";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("patrol-boat");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
      }
    }
    if (this.name === "submarine" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 8);
      let nextCell2= y+1;
      let nextCell3= y+2;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= xToString + nextCell2String; 
      let nextCell3Code= xToString + nextCell3String; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("submarine");
        // actualCell.textContent= "s";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("submarine");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("submarine");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "destroyer" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 8);
      let nextCell2= y+1;
      let nextCell3= y+2;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code= xToString + nextCell2String; 
      let nextCell3Code= xToString + nextCell3String; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("destroyer");
        // actualCell.textContent= "d";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("destroyer");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("destroyer");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "battleship" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 7);
      let nextCell2= y+1;
      let nextCell3= y+2;
      let nextCell4= y+3;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let nextCell4String= nextCell4.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code = xToString + nextCell2String; 
      let nextCell3Code = xToString + nextCell3String;
      let nextCell4Code = xToString + nextCell4String; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("battleship");
        // actualCell.textContent= "b";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("battleship");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("battleship");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("battleship");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
      }
    }
    if (this.name === "carrier" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 6);
      let nextCell2= y+1;
      let nextCell3= y+2;
      let nextCell4= y+3;
      let nextCell5= y+4;
      let xToString= x.toString();      
      let yToString= y.toString();
      let nextCell2String= nextCell2.toString();      
      let nextCell3String= nextCell3.toString();     
      let nextCell4String= nextCell4.toString();     
      let nextCell5String= nextCell5.toString();     
      let cellCode= xToString + yToString;  
      let nextCell2Code = xToString + nextCell2String; 
      let nextCell3Code = xToString + nextCell3String;
      let nextCell4Code = xToString + nextCell4String;
      let nextCell5Code = xToString + nextCell5String; 
      if(usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code) || usedNumbers.includes(nextCell5Code)){
        this.computerCode();
      }else{
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        let actualNextCell5 = document.querySelector(`[data-computer-code= "${nextCell5Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("carrier");
        // actualCell.textContent= "c";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("carrier");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("carrier");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("carrier");
        actualNextCell5.classList.add("computer-selected");
        actualNextCell5.classList.add("carrier");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
        usedNumbers.push(nextCell5Code);
      }
    }
  }
}

let patrolBoatComputer = new ComputerBoat("patrolBoat", computerOrientation());
let submarineComputer = new ComputerBoat("submarine", computerOrientation());
let destroyerComputer = new ComputerBoat("destroyer", computerOrientation());
let battleshipComputer = new ComputerBoat("battleship", computerOrientation());
let carrierComputer = new ComputerBoat("carrier", computerOrientation());

patrolBoatComputer.computerCode();
submarineComputer.computerCode();
destroyerComputer.computerCode();
battleshipComputer.computerCode();
carrierComputer.computerCode();

const computerCells = document.querySelectorAll(".computer-cell");

computerCells.forEach((computerCell)=>{
  computerCell.addEventListener("mouseover", ()=>{
    computerCell.classList.add("computer-clicked");
  });
});

computerCells.forEach((computerCell) => {
  computerCell.addEventListener("mouseleave", () => {
    computerCell.classList.remove("computer-clicked");
  });
});

let computerTotalTally= 0;
let patrolBoatTally=0;
let submarineTally=0;
let destroyerTally=0;
let battleshipTally=0;
let carrierTally=0;


let playerTotalTally = 0;
let playerPatrolBoatTally = 0;
let playerSubmarineTally = 0;
let playerDestroyerTally = 0;
let playerBattleshipTally = 0;
let playerCarrierTally = 0;



computerCells.forEach((computerCell) => {
  computerCell.addEventListener("click", () => {
    computerCell.classList.add("computer-cell-targeted");
    if (computerCell.getAttribute("class").includes("computer-selected")) {
      computerCell.classList.add("hit");
      computerCell.classList.add("inactive");
      // computerCell.textContent = "X";
      setTimeout((()=>{computerCell.textContent = "X"}), 2000);
      computerTotalTally++;
    }else{
      computerCell.classList.add("missed");
      computerCell.classList.add("inactive");
      setTimeout((()=>{scoreboardText.textContent="You missed! No ships hit."}), 2000);
    }

    if(computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally===1){
      // setTimeout((()=>{console.log("HIT! you sunk their Patrol Boat")}), 100);
      setTimeout((()=>{scoreboardText.textContent = "HIT! you sank their Patrol Boat!";}), 2000);
    }else if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally < 1){
      setTimeout((()=>{scoreboardText.textContent="You hit their Patrol Boat!"}), 2000);
      patrolBoatTally++;
    };

    if(computerCell.getAttribute("class").includes("submarine") && submarineTally===2){
      // setTimeout((()=>{console.log("HIT! you sunk their Submarine")}), 100);
      setTimeout((()=>{scoreboardText.textContent = "HIT! you sank their Submarine!";}), 2000);
    }else if (computerCell.getAttribute("class").includes("submarine") && submarineTally < 2){
      setTimeout((()=>{scoreboardText.textContent="You hit their Submarine!"}), 2000);
      submarineTally++;
    };

    if(computerCell.getAttribute("class").includes("destroyer") && destroyerTally===2){
      // setTimeout((()=>{console.log("HIT! you sunk their Destroyer")}), 100);
      setTimeout((()=>{scoreboardText.textContent = "HIT! you sank their Destroyer!";}), 2000);
    }else if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally < 2){
      setTimeout((()=>{scoreboardText.textContent="You hit their Destroyer!"}), 2000);
      destroyerTally++;
    };

    if(computerCell.getAttribute("class").includes("battleship") && battleshipTally===3){
      // setTimeout((()=>{console.log("HIT! you sunk their Battleship")}), 100);
      setTimeout((()=>{scoreboardText.textContent = "HIT! YOU SANK THEIR BATTLESHIP!";}), 2000);
    }else if (computerCell.getAttribute("class").includes("battleship") && battleshipTally < 3){
      setTimeout((()=>{scoreboardText.textContent="You hit their Battleship!"}), 2000);
      battleshipTally++;
    };

    if(computerCell.getAttribute("class").includes("carrier") && carrierTally===4){
      // setTimeout((()=>{console.log("HIT! you sunk their Carrier")}), 100);
      setTimeout((()=>{scoreboardText.textContent = "HIT! you sank their Carrier!";}), 2000);
    }else if (computerCell.getAttribute("class").includes("carrier") && carrierTally < 4){
      setTimeout((()=>{scoreboardText.textContent="You hit their Carrier!"}), 2000);
      carrierTally++;
    };

    if(computerTotalTally===17){
      setTimeout((()=>{console.log("YOU WON!")}), 2000);
      setTimeout(win, 6000);
    }

    

    const overlay= document.querySelector(".overlay");
    overlay.classList.add("show");
    // setTimeout((()=>{overlay.classList.add("show");}), 100);


    // let playersXValue = randomNumBetween(1,10);
    // let playersYValue = randomNumBetween(1, 10);

    function randomPlayerCode() {
      let playersXValue = randomNumBetween(1, 10);
      // console.log("players x value num= "+ playersXValue);
      let playersYValue = randomNumBetween(1, 10);
      // console.log("players y value num= "+ playersYValue);
      let playersXValueString= playersXValue.toString();
      // console.log("players x value str= "+ playersXValueString);
      let playersYValueString= playersYValue.toString();
      // console.log("players y value str= "+ playersYValueString);
      let playerCodeValue = playersXValueString + playersYValueString;

      // console.log(usedNumbers2.length);

      if (usedNumbers2.length===100){
        console.log("No more player spaces");
        return 11;
      }
      if(!usedNumbers2.includes(playerCodeValue)){
        usedNumbers2.push(playerCodeValue);
        // console.log("players code= " + playerCodeValue);
        return playerCodeValue;
      }else{
        // console.log("A coordinate has been repeated");
        return randomPlayerCode();
      };


      // if(usedNumbers2.includes(playerCodeValue)){
      //   console.log("retry")
      //   randomPlayerCode();
      // }else{
      //   usedNumbers2.push(playerCodeValue);
      //   console.log("players code= "+ playerCodeValue);
      //   return playerCodeValue;
      // }
    };



    let computerAttack= document.querySelector(`[data-code= "${randomPlayerCode()}"]`);
    
    console.log(computerAttack);

    // let scoreboardText= document.querySelector(".scoreboard-text");
/////////////////////////////////////////////////
    if (computerAttack.getAttribute("class").includes("selected")) {
      // computerAttack.classList.add("hit");
      setTimeout((()=>{computerAttack.classList.add("hit")}), 6000);
      // computerAttack.textContent = "X";
      setTimeout((()=>{computerAttack.textContent = "X"}), 6000);
      playerTotalTally++;
    }else{
      // computerAttack.classList.add("missed");
      setTimeout((()=>{computerAttack.classList.add("missed");}), 6000);
      // scoreboardText.textContent="Swing and a miss!";
      setTimeout((()=>{scoreboardComputerText.textContent="Computer attacked and missed!"}), 6000);
    }

    if(computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally===1){
      // setTimeout((()=>{console.log("HIT! your Patrol Boat has been sank")}), 100);
      setTimeout((()=>{scoreboardComputerText.textContent = "HIT! your Patrol Boat has been sank";}), 6000);
    }else if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally < 1){
      setTimeout((()=>{scoreboardComputerText.textContent="Your Patrol Boat has been HIT!"}), 6000);
      playerPatrolBoatTally++;
    };

    if(computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally===2){
      // setTimeout((()=>{console.log("HIT! your Submarine has been sank")}), 100);
      setTimeout((()=>{scoreboardComputerText.textContent = "HIT! your Submarine has been sank";}), 6000);
    }else if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally < 2){
      setTimeout((()=>{scoreboardComputerText.textContent="Your Submarine has been HIT!"}), 6000);
      playerSubmarineTally++;
    };

    if(computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally===2){
      // setTimeout((()=>{console.log("HIT! your Destroyer has been sank")}), 100);
      setTimeout((()=>{scoreboardComputerText.textContent = "HIT! your Destroyer has been sank";}), 6000);
    }else if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally < 2){
      setTimeout((()=>{scoreboardComputerText.textContent="Your Destroyer has been HIT!"}), 6000);
      playerDestroyerTally++;
    };

    if(computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally===3){
      // setTimeout((()=>{console.log("HIT! your Battleship has been sank")}), 100);
      setTimeout((()=>{scoreboardComputerText.textContent = "HIT! the computer SUNK YOUR BATTLESHIP!";}), 6000);
    }else if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally < 3) {
      setTimeout((()=>{scoreboardComputerText.textContent="Your Battleship has been HIT!"}), 6000);
      playerBattleshipTally++;
    };

    if(computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally===4){
      // setTimeout((()=>{console.log("HIT! your Carrier has been sank")}), 100);
      setTimeout((()=>{scoreboardComputerText.textContent = "HIT! your Carrier has been sank";}), 6000);
    }else if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally < 4) {
      setTimeout((()=>{scoreboardComputerText.textContent="Your Carrier has been HIT!"}), 6000);
      playerCarrierTally++;
    };

    if(playerTotalTally===17){
      setTimeout((()=>{console.log("You Lost!")}), 6000);
      setTimeout(lose, 6000);
    }

    console.log("players Total tally= "+ playerTotalTally);
    console.log("players patrol boat tally= "+ playerPatrolBoatTally);
    console.log("players submarine tally= "+ playerSubmarineTally);
    console.log("players destroyer tally= "+ playerDestroyerTally);
    console.log("players battleship tally= "+ playerBattleshipTally);
    console.log("players carrier tally= "+ playerCarrierTally);




/////////////////////////////////////////////////
    // computerAttack.classList.add("clicked");
    setTimeout((()=>{computerAttack.classList.add("player-cell-targeted");}), 4000);

    setTimeout((()=>{overlay.classList.remove("show");}), 6000);





   

    // overlayForResults.classList.add("active");
    // winBanner.classList.add("active");
    // return;

    // overlayForResults.classList.add("active");
    // loseBanner.classList.add("active");
    // return;


  });
});

console.log(patrolBoatComputer);