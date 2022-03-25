import {Grid} from './grid';
import {Vehicle} from './vehicle';
 
// Single Rover
export function moveVehicle (boundary : string, 
                            boundaryCustom : string[][], 
                            vehicle : string, 
                            commands : string, 
                            identBoundary? : string, 
                            identVehicle? :string) : string {
    return moveVehicles(boundary,boundaryCustom,[[vehicle,commands,identVehicle]],identBoundary);
}

// Multiple Sequential Rovers
// Vehicles array input (string[][]) => [['startX startY startDirection','moves','VehicleNameA'],['startX startY startDirection','moves','VehicleNameB'],...]
// Vehicles resting place returned (string) => 'VehicleNameA X Y Direction,VehicleNameB X Y Direction,...'
export function moveVehicles (boundary : string, boundaryCustom : string[][], 
                             vehicles : string[][], identBoundary? : string,) : string {

    let plateau = new Grid(boundary,boundaryCustom,identBoundary);
    let vehicleLocation : string = '';

    vehicles.forEach(vehicle => { 
        let rover = new Vehicle(vehicle[0],plateau,vehicle[2]);
        if (rover.move(vehicle[1],plateau) !== '') {
            plateau.inValidateLocation(rover.x,rover.y);
            vehicleLocation += rover.location(plateau) + ',';
        }
    });
    return vehicleLocation.slice(0,vehicleLocation.length-1);
}