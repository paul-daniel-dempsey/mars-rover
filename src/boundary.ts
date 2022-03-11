const DEFAULTXLIMIT = 5;
const DEFAULTYLIMIT = DEFAULTXLIMIT;

export class Boundary {

    private type : string = 'plateau';
    private xLimit : number = DEFAULTXLIMIT;
    private yLimit : number = DEFAULTYLIMIT;
    private xyAllowGrid : string[][];
    
    // Allow anyone to check Boundary setup
    validSetup : boolean = false;

    constructor(setup : string, type? : string, xyAllowGrid?: string[][]) {
        
        // SetUp string correct?
        const CODE_PATTERN = new RegExp('^([0-' + DEFAULTXLIMIT + ']{1} [0-' + DEFAULTXLIMIT + ']{1})$')
        this.validSetup = CODE_PATTERN.test(setup);
        
        // Parse string to xlimit, ylimit (starts at zero so add 1)
        if (this.validSetup) {
            let params = setup.split(' ');
            this.xLimit=parseInt(params[0])+1;
            this.yLimit=parseInt(params[1])+1; 
            this.xyAllowGrid = Array(this.xLimit).fill('Y').map(() => Array(this.yLimit).fill('Y'));
            //console.log(`Boundary ${this.type}:[${this.xLimit},${this.yLimit}] -> ${this.xyAllowGrid}`);
        }
    }

    validateLocation(x : number, y :number) : boolean {
        return (this.validSetup) ? (this.xyAllowGrid[x][y] === 'OK') : false;
    }
}