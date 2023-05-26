const grabName = (name) => name;

class CreateBoat{
    constructor(length, numTimesHit=0, hasSunk=false){
        this.length= length;
        this.numTimesHit= numTimesHit;
        this.hasSunk= hasSunk;
    };
};

const hit=(boatName) => boatName.numTimesHit++;

const isSunk= (boatName)=> (boatName.length===boatName.numTimesHit) ? true : false;

export { grabName, CreateBoat, hit, isSunk };