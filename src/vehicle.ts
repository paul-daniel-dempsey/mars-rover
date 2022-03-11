import { Boundary } from "./boundary";

const DEFAULTXLIMIT = 5;
const DEFAULTVEHICLENAME = 'defaultVehicle';
const DEFAULTVEHICLESTEP = 1;
const ALLHEADINGS = 'NESW';

export class Vehicle {

    private type : string = `${DEFAULTVEHICLENAME}}`;
    private step : number = DEFAULTVEHICLESTEP;
    private x : number;
    private y : number;
    private direction : string;

    // Allow anyone to check Vehicle setup
    validSetup : boolean = false;

    constructor(setup : string, boundary : Boundary, type? : string, distance?: number) {
           
        // SetUp String correct?
        const CODE_PATTERN = new RegExp('^([0-' + DEFAULTXLIMIT + ']{1} [0-' + DEFAULTXLIMIT + ']{1} [N|S|E|W]{1})$'); // NOTE : Align NumMax with DEFAULTXLIMIT
        this.validSetup = CODE_PATTERN.test(setup) && boundary.validSetup;;

        // Parse string to x, y, direction
        if (this.validSetup) {

            // Parse string to x, y, direction
            let params = setup.split(' '); 
            this.x = parseInt(params[0]);
            this.y = parseInt(params[1]);
            this.direction = params[2];
            this.validSetup &&= boundary.validateLocation(this.x,this.y);  
            //console.log(`Vehicle: ${this.type}(${this.x},${this.y}) ${this.direction} ${this.validSetup}`)
        }
    }

    move(commands : string, boundary : Boundary) {
        // Traverse foward moves and rotates
        commands.split('').forEach(cmd => { this.isRotate(cmd) ? this.rotate(cmd) : this.isForward(cmd) ? this.forward(boundary) : 0})
    }

    location() : string {
        return (this.validSetup ) ? `${this.x} ${this.y} ${this.direction}` : ``;
    }

    // Alter direction ('NESW') dependent on rotation (L,R)
    private rotate(rotation : string) {
        let pos = ALLHEADINGS.indexOf(this.direction);
        pos = (rotation === 'L'? ((pos === 0)?ALLHEADINGS.length-1:pos += -1) : ((pos === ALLHEADINGS.length-1)?0:pos += 1));
        this.direction = ALLHEADINGS.substring(pos,pos+1);
        //console.log(`rotate : ${this.x} ${this.y} ${this.direction}`);
    }

    private forward(boundary : Boundary) { 
    }

    private isRotate(cmd : string): Boolean {
        return (cmd === 'L' || cmd === 'R'); }
    
    private isForward(cmd : string): Boolean {
        return (cmd === 'M'); }
}

