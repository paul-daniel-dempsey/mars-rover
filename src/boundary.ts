const DEFAULTXLIMIT = 5;
const DEFAULTYLIMIT = 5;

export class Boundary {

    private type : string = 'plateau';

    private xLimit : number = DEFAULTXLIMIT;
    private yLimit : number = DEFAULTYLIMIT;

    private xyAllowGrid : string[][];

    constructor(setup : string, type? : string, xyAllowGrid?: string[][]) {
        // Parse string to xlimit, ylimit
        this.xLimit=1;
        this.yLimit=1; 
        
        // Build xyAllowGrid with x,y if xyAllowGrid? not supplied
        // Loop through x, y placing X,O detyrmining allowed point? Craters!
        this.xyAllowGrid = [['OK','OK'],['OK','OK']];
    }

    validateLocation(x : number, y :number) : boolean {
        return (this.xyAllowGrid[x][y] === 'OK');
    }
}