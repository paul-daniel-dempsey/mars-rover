import { Grid } from "./grid";
 
const DEFAULT_MAXIMUM_X = 5;
const DEFAULT_VEHICLE_STEP = 1;
const HEADINGS = 'NESW';

const ROTATE_COMMANDS = ['L', 'R'] as const;
export type RotateCommand = typeof ROTATE_COMMANDS[number];

const TRAVEL_COMMANDS = ['M','F', 'B'] as const;
export type TravelCommand = typeof TRAVEL_COMMANDS[number];

export class Vehicle {

    private step : number;
    private direction : string;
    //private moveRecord : string;

    // Allow anyone to check Vehicle location & setup correct and identifier
    x : number;
    y : number;
    identifier : string;
    validSetup : boolean; 

    // Custom type checks
    isRotate = (cmd: any): cmd is RotateCommand => ROTATE_COMMANDS.includes(cmd);
    isTravel = (cmd: any): cmd is TravelCommand => TRAVEL_COMMANDS.includes(cmd);

    constructor(setup : string, boundary : Grid, identifier? : string) {
           
        // SetUp String correct?
        //const CODE_PATTERN = new RegExp('^([0-' + DEFAULTXLIMIT + ']{1} [0-' + DEFAULTXLIMIT + ']{1} [N|S|E|W]{1}\s?[0-' + DEFAULTXLIMIT + ']?)$');
        const CODE_PATTERN = new RegExp('^([0-' + DEFAULT_MAXIMUM_X + ']{1} [0-' + DEFAULT_MAXIMUM_X + ']{1} [N|S|E|W]{1}' + 
                                        ((setup.length>6) ? ' [0-' + DEFAULT_MAXIMUM_X + ']?' : '') + ')$');
        this.validSetup = CODE_PATTERN.test(setup) && boundary.validSetup;;

        // Parse string to x, y, direction
        if (this.validSetup) {
            let params = setup.split(' '); 
            this.x = parseInt(params[0]);
            this.y = parseInt(params[1]);
            this.direction = params[2];
            this.step = ((params[3] === undefined) ? DEFAULT_VEHICLE_STEP : parseInt(params[3]));
            //this.moveRecord = `(${this.x} ${this.y})`;
            this.validSetup &&= boundary.isLocationValid(this.x,this.y);  
        }
        this.identifier = (identifier === undefined ? '' : identifier);
    }

    // Traverse foward moves and rotates
    move(commands : string, grid : Grid) : string {
        commands.split('').forEach(cmd => { this.isRotate(cmd) ? this.rotate(cmd) : this.isTravel(cmd) ? this.travel(grid,cmd) : 0})
        return this.location(grid);
    }

    // Retreive location
    location(grid : Grid) : string {
        //console.log(`${this.moveRecord}`)
        return (this.validSetup) ? `${grid.identifier} ${this.identifier} ${this.x} ${this.y} ${this.direction}`.trim() : ``;
    }

    // Modify Vehicle coverage
    distance(stepSize : number) {
        this.step = stepSize;
    }

    // Alter direction ('NESW') dependent on rotation (L,R)
    private rotate(rotation : string) {
        let pos = HEADINGS.indexOf(this.direction);
        pos = (rotation === 'L'? ((pos === 0)?HEADINGS.length-1:pos += -1) : ((pos === HEADINGS.length-1)?0:pos += 1));
        this.direction = HEADINGS.substring(pos,pos+1);
    }
    
    // Change x, y based upon direction
    private travel(grid : Grid, direction : string) {
        const invert = ((direction==='B')? -1 : 1);
        const xStep = ((this.direction==='E')? this.step*invert: ((this.direction==='W')? -this.step*invert: 0)); 
        const yStep = ((this.direction==='N')? this.step*invert: ((this.direction==='S')? -this.step*invert: 0)); 
        if (grid.isLocationValid(this.x + xStep,this.y + yStep)) {
            this.x += xStep;
            this.y += yStep; 
            //this.moveRecord += `(${this.x} ${this.y})`;
        } 
    }  
}

