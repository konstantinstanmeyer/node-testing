// for interval, initialize value at 0, instantiating it

// not initializing with a userGrade value, since the updating functions will instead handle the 
class Input {
    constructor(){
        this.repititionNumber = 0; // how many times it has been recalled since last correct
        this.EF = 2.5; // how quickly the interval grows
        this.interval = -1; // measured in days, -1 means that it is a new entry and has not appeared yet, ensuring that it will appear and receive a proper interval value before any pre-existing entries appear
    }

    update(userGrade){
        const previousInterval = this.interval;
        const previousEF = this.EF;

        if (userGrade >= 3){
            switch (this.repititionNumber){
                case 0:
                    this.interval = 0.007;
                    break;
                case 1:
                    this.interval = 6;
                    break;
                default:
                    if (previousInterval === -1){
                        
                    }
                    this.interval = Math.round(previousInterval * previousEF);
            }

            this.repititionNumber++;
            this.EF = previousEF + (0.1 - (5 - userGrade) * (0.08 + (5 - userGrade) * 0.02));
        } else {
            this.repititionNumber = 0;
            this.interval = 1;
        }

        if(previousEF < 1.3){
            this.EF = 1.3;
        }
    }
}

module.exports = Input;