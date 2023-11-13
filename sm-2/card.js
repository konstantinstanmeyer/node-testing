// for interval, initialize value at 0, instantiating it

// not initializing with a userGrade value, since the updating functions will instead handle the 

function precise(x){
    console.log(x)
    return parseFloat(x.toFixed(3));
}

class Input {
    constructor(){
        this.repititionNumber = 0; // how many times it has been recalled since last correct
        this.EF = 2.5; // how quickly the interval grows
        this.interval = 0; // measured in days, 0 means that it is a new entry and has not appeared yet, ensuring that it will appear and receive a proper interval value before any pre-existing entries appear
    }

    update(userGrade){
        const previousInterval = this.interval;
        const previousEF = this.EF;

        if (userGrade >= 3){
            switch (this.repititionNumber){
                case 0:
                    this.interval = 0.07; // fraction for 10min in a day
                    break;
                case 1:
                    this.interval = 0.1; // slightly more time between testing if already correct once before
                    break;
                default:
                    this.interval = precise(previousInterval * previousEF); // implemented for exponential growth if correct more >= 2 times in a row
            }

            this.repititionNumber++;
        } else {
            this.repititionNumber = 0;
            this.interval = 0.003; // fraction for 5min in a day
        }

        this.EF = previousEF + (0.1 - (5 - userGrade) * (0.08 + (5 - userGrade) * 0.02));

        if(previousEF < 1.3){
            this.EF = 1.3;
        }
    }
}

module.exports = Input;