import { Boundary } from "./boundary";

const DEFAULTVEHICLENAME = 'defaultVehicle';
const DEFAULTVEHICLESTEP = 1;

export class Vehicle {

    private type : string = `${DEFAULTVEHICLENAME}}`;
    private step : number = DEFAULTVEHICLESTEP;

    private x : number;
    private y : number;
    private direction : string;

    constructor(setup : string, type? : string, distance?: number) {
        // Parse string to x, y, direction
        this.x=1;
        this.y=1; 
        this.direction = 'N' 
    }

    move(commands : string, boundary : Boundary) {
        // Parse commands loop through
            // Exceute forward or rotate
            this.rotate('L');
            this.forward(boundary)
    }
    private rotate(rotation : string) {

        // Change direction
        this.direction = 'N'    }

    private forward(boundary : Boundary) { 
        // Change x, y based upon direction
        this.x=1;
        this.y=1;
    }

    location() : string {
        // Parse x, y, direction to string
        return '';
    }
}

