import {Grid} from './grid';
import {Vehicle} from './vehicle';
import { PositionSetup } from '../shared/setupPosition';
import { VehicleSetUp } from "../shared/setupVehicle"
import { Command, Heading } from "../shared/setupTypes";

// Single Rover
export function moveVehicle (boundary : string, 
                            boundaryCustom : string[][], 
                            vehicle : string, 
                            commands : string, 
                            identBoundary? : string, 
                            identVehicle? :string,
                            step? : number) : string {
return moveVehicles(boundary,boundaryCustom,[[vehicle,commands,identVehicle]],identBoundary,step);
}

// Multiple Rover
export function moveVehicles (grid : string, 
                            gridCustom : string[][], 
                            vehicles : string[][], 
                            identGrid? : string,
                            step? : number) : string {

    let plateau2 = new Grid(grid,gridCustom,identGrid);
    let vehicleLocation : string = '';

    vehicles.forEach(vehicle => {
            let rover = new Vehicle(setupVehicle(vehicle[0],vehicle[1],vehicle[2]?vehicle[2]:'',step?step:1),plateau2);
            if (rover.move(plateau2) !== '') {
                plateau2.inValidateLocation(rover.vehicle.position.x,rover.vehicle.position.y);
                vehicleLocation += rover.location(plateau2) + ',';
            }
    });
    return vehicleLocation.slice(0,vehicleLocation.length-1);
}

// Custom Vehicle Interface Creation From Mars Rover Specifcation SetUp String
function setupVehicle(setupPos : string, cmds : string, identVehicle :string, step : number) : VehicleSetUp {
    return {position : setupPosition(setupPos), 
            commands : cmds.split('').map(item => item as Command ),  // CAST TO TYPE
            identifier : identVehicle,
            step : step };
}
function setupPosition(setup : string) : PositionSetup {
    let params = setup.split(' '); 
    let direct : Heading = params[2] as Heading; // CAST TO TYPE
    let apos = { x : parseInt(params[0]), y : parseInt(params[1]),direction : direct};
    return apos;
}


