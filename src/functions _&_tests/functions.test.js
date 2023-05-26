import { grabName, CreateBoat, hit, isSunk } from "./functions";

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