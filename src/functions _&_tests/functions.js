const grabName = (name) => name;

class CreateBoat{
    constructor(length, boatName, numTimesHit=0, hasSunk=false){
        this.length= length;
        this.numTimesHit= numTimesHit;
        this.hasSunk= hasSunk;
        this.boatName=boatName;
    };
};

const hit=(boatName) => boatName.numTimesHit++;

const isSunk= (boatName)=> (boatName.length===boatName.numTimesHit) ? true : false;

class Gameboard{
    constructor(){
        this.coordinates = [
          //0
          [
            { x_number:0, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:0, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //1
          [
            { x_number:1, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:1, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //2
          [
            { x_number:2, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:2, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //3
          [
            { x_number:3, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:3, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //4
          [
            { x_number:4, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:4, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //5
          [
            { x_number:5, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:5, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //6
          [
            { x_number:6, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:6, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //7
          [
            { x_number:7, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:7, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //8
          [
            { x_number:8, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:8, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ],
          //9
          [
            { x_number:9, y_number: 0, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 1, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 2, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 3, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 4, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 5, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 6, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 7, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 8, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
            { x_number:9, y_number: 9, status: "empty", boatName: "none", boatNameObj: "none", wasPicked: false },
          ]
        ];
    };

    place(shipLength, verticalOrHorizontal, xNumber, yNumber, boatNameObj, boatName){
      for (let i = 0; i < shipLength; i++) {
        if(xNumber+i<0 || xNumber+i>9 || yNumber-i<0 || yNumber-i>9){
          return "Invalid entry, ship is not within the limits of the board.Try again.";
        };
        if (verticalOrHorizontal === "horizontal"){
          this.coordinates[xNumber + i][yNumber].status = "filled";
          this.coordinates[xNumber + i][yNumber].boatName = boatName;
          this.coordinates[xNumber + i][yNumber].boatNameObj = boatNameObj;
        };
        if (verticalOrHorizontal === "vertical") {
          this.coordinates[xNumber][yNumber - i].status = "filled";
          this.coordinates[xNumber][yNumber - i].boatName = boatName;
          this.coordinates[xNumber][yNumber - i].boatNameObj = boatNameObj;
        };
      };
    };

    receiveAttack(xNumber, yNumber){
      if (xNumber < 0 || xNumber > 9 || yNumber < 0 || yNumber > 9) {
        return "Invalid entry, ship is not within the limits of the board.Try again.";
      }
      if(this.coordinates[xNumber][yNumber].wasPicked===true){
        return `Invalid entry, coordinates ${xNumber},${yNumber} was already attacked.Try again.`;
      };
      if (this.coordinates[xNumber][yNumber].status === "empty") {
        //PLACEHOLDER: what to do/display with missed attacks
        this.coordinates[xNumber][yNumber].wasPicked = true;
        return `Missed! No hit on coordinates ${xNumber},${yNumber}`;
      }
      if (this.coordinates[xNumber][yNumber].status === "filled") {
        this.coordinates[xNumber][yNumber].wasPicked = true;
        hit(this.coordinates[xNumber][yNumber].boatNameObj);
        if (isSunk(this.coordinates[xNumber][yNumber].boatNameObj)===true) {
          return `Hit! `+(this.coordinates[xNumber][yNumber].boatName)+` has been hit on coordinates ${xNumber},${yNumber}, and has been sunk!`;
        };
        return `Hit! `+(this.coordinates[xNumber][yNumber].boatName)+` has been hit on coordinates ${xNumber},${yNumber}`;
      }
    };
};


export { grabName, CreateBoat, hit, isSunk, Gameboard };