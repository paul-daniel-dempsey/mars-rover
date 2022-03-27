import { Grid } from "./grid";
import { VehicleSetUp } from "../shared/setupVehicle"
import { RotateCommand,TravelCommand,Heading,ROTATE_COMMANDS,TRAVEL_COMMANDS, HEADINGS,  } from "../shared/setupTypes";


export class Vehicle {

    // Allow anyone to check Vehicle location & setup correct and identifier
    vehicle : VehicleSetUp;
    
    // Custom type checks
    isRotate = (cmd: any): cmd is RotateCommand => ROTATE_COMMANDS.includes(cmd);
    isTravel = (cmd: any): cmd is TravelCommand => TRAVEL_COMMANDS.includes(cmd);
    isHeading =  (cmd: any): cmd is Heading => HEADINGS.includes(cmd);

    constructor(vehicle : VehicleSetUp, grid : Grid) {
        if (grid.isLocationValid(vehicle.position.x,vehicle.position.y) &&
            this.isHeading(vehicle.position.direction)) {
            this.vehicle = vehicle;
        }
    }

    // Traverse foward moves and rotates
    move(grid : Grid) : string {
        if (this.vehicle) {
            this.vehicle.commands.forEach(cmd => { this.isRotate(cmd) ? this.rotate(cmd) : this.isTravel(cmd) ? this.travel(grid,cmd) : 0})
        }
        return this.location(grid);
    }

    // Retreive location
    location(grid : Grid) : string {
        //console.log(`${this.moveRecord}`)
        return (this.vehicle) ? (`${grid.identifier} ${this.vehicle.identifier} ${this.vehicle.position.x} ${this.vehicle.position.y} ${this.vehicle.position.direction}`).trim() : ``;
    }

    // Modify Vehicle coverage
    distance(stepSize : number) {
        if (this.vehicle) {
            this.vehicle.step = stepSize; 
        }
    }

    // Alter direction ('NESW') dependent on rotation (L,R)
    private rotate(rotation : string) {
        let pos = HEADINGS.join('').indexOf(this.vehicle.position.direction);
        pos = (rotation === 'L'? ((pos === 0)?HEADINGS.length-1:pos += -1) : ((pos === HEADINGS.length-1)?0:pos += 1));
        this.vehicle.position.direction = HEADINGS.join('').substring(pos,pos+1) as Heading;
    }
    
    // Change x, y based upon direction
    private travel(grid : Grid, direction : string) {
        const invert = ((direction==='B')? -1 : 1);
        const xStep = ((this.vehicle.position.direction==='E')? this.vehicle.step*invert: ((this.vehicle.position.direction==='W')? -this.vehicle.step*invert: 0)); 
        const yStep = ((this.vehicle.position.direction==='N')? this.vehicle.step*invert: ((this.vehicle.position.direction==='S')? -this.vehicle.step*invert: 0)); 
        if (grid.isLocationValid(this.vehicle.position.x + xStep,this.vehicle.position.y + yStep)) {
            this.vehicle.position.x += xStep;
            this.vehicle.position.y += yStep; 
            //this.moveRecord += `(${this.vehicle.position.x} ${this.vehicle.position.y})`;
        } 
    }  
}

