# Key Features
Controller object used to create the following items given string setups
Boundary object : Where vehicle is allowed to drive
Vehicle object : The location, direction facing and responds to list of rotate or move commands

# Assumptions
5x5 Grid maximum size
Location 0,0 is bottom left.

# TDD Approach
1. Invalid string setups (incorrect formats)
2. Oversize grid supplied
3. Vehicle initial position outside of grid
4. Vehicle rotate left and right then check direction facing (north/east/south/west)
5. Vehicle move a space forward in the direction facing
6. Limit Vehicle to edges of grid.
7. Multiple Sequential Rovers (return string 'Name X Y D,Name X Y D,...')
{ Jest tests in 'controller.test.ts' }

# Objects/Functions
[Controller]
moveVehicle => Create Grid, Vehicle, Move, Get Location
moveMultipleVehicles => Create Grid, (Vehicle, Move, inValidate Location) x N
[Grid]
setup(x,y)
isLocationValid(x,y)
inValidateLocation(x,y)
[Vehicle]
x,y
setup(x,y,direction)
move(commands) => rotate(cmd) or move(cmd)
distance(step)
locate

# Files
{  './src/controller.ts
	./src/grid.ts
	./src/vehicle.ts' }

# Enhancements
1. Grid of irregular shapes that have obsticles (craters!) in (optional Array[][] where cell='N' vehicle cannot enter, grid string ignored in this case)
2. Vehicle move backwards as well as forwards (optional commands: F=Forward B=Backward or M)
3. Vehicle move multiple steps (optional vehicle setup: 'X Y N/E/S/W STEP' where STEP 1-5)
4. Vehicle & Grid Identification (optional Go Function Identifier Strings for grid and vehicle)

# Installation/Setup
npm install
npm test

# NPM Manual SetUp (Not Required)
npm i ts-node
npm i --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
npm start
package.json =>
  "scripts": {
    "test": "jest",
    "start": "npx jest controller.test.ts"
  },
