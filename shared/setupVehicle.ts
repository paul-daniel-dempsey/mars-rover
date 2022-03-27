import { PositionSetup } from "./setupPosition";
import { Command } from "./setupTypes";

export interface VehicleSetUp {
    position : PositionSetup;
    commands : Array<Command>;
    identifier : string;
    step : number;
}