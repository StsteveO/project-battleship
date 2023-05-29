import { grabName, CreateBoat, hit, isSunk, Gameboard } from "./functions";

test("grab players name", ()=>{
    expect(grabName("john")).toMatch("john");
    expect(grabName("stacy")).toMatch("stacy");
    expect(grabName("john")).not.toMatch("stacy");
});

test("example boat creation", ()=>{
    const exampleBoat = new CreateBoat(4);

    expect(exampleBoat.length).toBe(4);
    expect(exampleBoat.numTimesHit).toBe(0);
    expect(exampleBoat.hasSunk).toBe(false);
});

test("if boat is hit, hit-fxn increases damage", ()=>{
    const exampleBoat = new CreateBoat(4);

    hit(exampleBoat);
    expect(exampleBoat.numTimesHit).toBe(1);

    hit(exampleBoat);
    expect(exampleBoat.numTimesHit).toBe(2);

    hit(exampleBoat);
    expect(exampleBoat.numTimesHit).not.toBe(2);
    expect(exampleBoat.numTimesHit).toBe(3);
});

test("boat sinks if damage is high enough", ()=>{
    const exampleBoat = new CreateBoat(4);

    expect(isSunk(exampleBoat)).toBe(false);
    hit(exampleBoat);
    hit(exampleBoat);
    expect(isSunk(exampleBoat)).toBe(false);
    hit(exampleBoat);
    hit(exampleBoat);
    expect(isSunk(exampleBoat)).toBe(true);
});

test("get gameboard coordinates & status", () => {
  const exampleGameboard = new Gameboard();

  expect(exampleGameboard.coordinates[1][3].x_number).toEqual(1);
  expect(exampleGameboard.coordinates[1][3].y_number).toEqual(3);
  expect(exampleGameboard.coordinates[1][3].status).toMatch("empty");
});

test("gameboard can place a 3 square horizontal ship", ()=>{
  const exampleGameboard = new Gameboard();
  exampleGameboard.place(3, "horizontal", 2, 2);

  expect(exampleGameboard.coordinates[1][2].status).toMatch("empty");
  expect(exampleGameboard.coordinates[2][2].status).toMatch("filled");
  expect(exampleGameboard.coordinates[3][2].status).toMatch("filled");
  expect(exampleGameboard.coordinates[4][2].status).toMatch("filled");
  expect(exampleGameboard.coordinates[5][2].status).toMatch("empty");
});

test("gameboard can place a 3 square vertical ship", ()=>{
  const exampleGameboard = new Gameboard();
  exampleGameboard.place(3, "vertical", 3, 6);

  expect(exampleGameboard.coordinates[3][7].status).toMatch("empty");
  expect(exampleGameboard.coordinates[3][6].status).toMatch("filled");
  expect(exampleGameboard.coordinates[3][5].status).toMatch("filled");
  expect(exampleGameboard.coordinates[3][4].status).toMatch("filled");
  expect(exampleGameboard.coordinates[3][3].status).toMatch("empty");
});

test("gameboard cannot place ship off the board", ()=>{
  const exampleGameboard = new Gameboard();
  
  expect(exampleGameboard.place(3, "vertical", 1, 1)).toMatch(
    "Invalid entry, ship is not within the limits of the board.Try again."
  );
  expect(exampleGameboard.place(3, "horizontal", 9, 1)).toMatch(
    "Invalid entry, ship is not within the limits of the board.Try again."
  );
  expect(exampleGameboard.place(3, "horizontal", 20, 2)).toMatch(
    "Invalid entry, ship is not within the limits of the board.Try again."
  );
  expect(exampleGameboard.place(3, "horizontal", 2, 20)).toMatch(
    "Invalid entry, ship is not within the limits of the board.Try again."
  );
});

test("use the CreateBoat class constructor to help set boat on gameboard", ()=>{
  const exampleGameboard = new Gameboard();
  const exampleBoat = new CreateBoat(4); //length, #times hit, and hasSunk
  // exampleGameboard.place(3, "horizontal", 2, 2);
  exampleGameboard.place(exampleBoat.length, "horizontal", 5, 4);

  expect(exampleGameboard.coordinates[4][4].status).toMatch("empty");
  expect(exampleGameboard.coordinates[5][4].status).toMatch("filled");
  expect(exampleGameboard.coordinates[6][4].status).toMatch("filled");
  expect(exampleGameboard.coordinates[7][4].status).toMatch("filled");
  expect(exampleGameboard.coordinates[8][4].status).toMatch("filled");
  expect(exampleGameboard.coordinates[9][4].status).toMatch("empty");
});

test("if an incoming attack hit the players ship", ()=>{
  const exampleGameboard = new Gameboard();
  const exampleBoat = new CreateBoat(4, "exampleBoat"); //length, #times hit, and hasSunk
  // exampleGameboard.place(3, "horizontal", 2, 2);

  exampleGameboard.place(exampleBoat.length, "horizontal", 5, 4, exampleBoat, exampleBoat.boatName);

  expect(exampleGameboard.receiveAttack(2,2)).toMatch("Missed! No hit on coordinates 2,2");
  expect(exampleGameboard.receiveAttack(3,3)).toMatch("Missed! No hit on coordinates 3,3");
  expect(exampleGameboard.receiveAttack(5,4)).toMatch("Hit! exampleBoat has been hit on coordinates 5,4");
  expect(exampleGameboard.receiveAttack(6,4)).toMatch("Hit! exampleBoat has been hit on coordinates 6,4");
  expect(exampleGameboard.receiveAttack(60,4)).toMatch("Invalid entry, ship is not within the limits of the board.Try again.");
  expect(exampleBoat.numTimesHit).toBe(2);
});

test("player receives a sunk message if their boat has been sunk", ()=>{
  const exampleGameboard = new Gameboard();
  const exampleBoat = new CreateBoat(4, "exampleBoat"); //length, #times hit, and hasSunk

  exampleGameboard.place(exampleBoat.length, "horizontal", 5, 4, exampleBoat, exampleBoat.boatName);

  expect(exampleGameboard.receiveAttack(5,4)).toMatch("Hit! exampleBoat has been hit on coordinates 5,4");
  expect(exampleGameboard.receiveAttack(6,4)).toMatch("Hit! exampleBoat has been hit on coordinates 6,4");
  expect(exampleGameboard.receiveAttack(7,4)).toMatch("Hit! exampleBoat has been hit on coordinates 7,4");
  expect(exampleBoat.numTimesHit).toBe(3);
  expect(exampleGameboard.receiveAttack(8,4)).toMatch("Hit! exampleBoat has been hit on coordinates 8,4, and has been sunk!");
});

test("Player or computer gets an invalid response when they pick an already picked coordinate", ()=>{
  const exampleGameboard = new Gameboard();
  const exampleBoat = new CreateBoat(4, "exampleBoat"); //length, #times hit, and hasSunk

  exampleGameboard.place(exampleBoat.length, "horizontal", 5, 4, exampleBoat, exampleBoat.boatName);

  expect(exampleGameboard.receiveAttack(5,4)).toMatch("Hit! exampleBoat has been hit on coordinates 5,4");
  expect(exampleGameboard.receiveAttack(6,4)).toMatch("Hit! exampleBoat has been hit on coordinates 6,4");
  expect(exampleGameboard.receiveAttack(5,4)).toMatch("Invalid entry, coordinates 5,4 was already attacked.Try again.");
  expect(exampleGameboard.receiveAttack(6,4)).toMatch("Invalid entry, coordinates 6,4 was already attacked.Try again.");
});