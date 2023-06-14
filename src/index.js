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
    console.log("None of these buttons are clicked"); //THIS WORKS!!
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell5.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
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
        actualCell.textContent= "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell5.classList.add("computer-selected");
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