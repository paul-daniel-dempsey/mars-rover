Key Features ->
Controller object used to create the following items given string setups
Boundary object : Where vehicle is allowed to drive
Vehicle object : The location, direction facing and responds to list of rotate or move commands

Assumptions ->
5x5 Boundary maximum size
Location 0,0 is bottom left.

Approach (TDD) ->
1. Invalid string setups (incorrect formats)
2. Oversize boundary supplied
3. Vehicle initial position outside of boundary
4. Vehicle rotate left and right then check direction facing (north/east/south/west)
5. Vehicle move a space forward in the direction facing
6. Limit Vehicle to edges of boundary. 
{ Jest tests in 'controller.test.ts' }

Objects/Function ->
[Controller]
Go => Create Boundary, Vehicle, Move, Get Location
[Boundary]
setup(x,y)
isvalidlocation?(x,y)
[Vehicle]
setup(x,y,direction)
move(commands) => rotate(cmd) or move(cmd)
locate
{  './src/controller.ts
	./src/boundary.ts
	./src/vehicle.ts' }

Future Enhancements (provisioned) ->
1. Boundary of irregular shapes that have obsticles (craters!) in.
2. Vehicle move backwards as well as forwards.
3. Vehicle move multiple steps.
4. Vehicle & Boundary Identification.
