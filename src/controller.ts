import {Boundary} from './boundary';
import {Vehicle} from './vehicle';

export function Go (boundary : string, vehicle : string, commands : string) : string {
    
    let plateau = new Boundary(boundary,'plateauMars');
    let rover = new Vehicle(vehicle,plateau,'roverMars',1);
    rover.move(commands,plateau);
    return rover.location();
}

export function GoCustom (boundaryCustom : string[][], vehicle : string, commands : string) : string {
    

    let plateau = new Boundary('','plateauMars',boundaryCustom);
    let rover = new Vehicle(vehicle,plateau,'roverMars',1);
    rover.move(commands,plateau);
    return rover.location();
}

module.exports = {
    Go,
    GoCustom
};
