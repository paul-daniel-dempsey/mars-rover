SETUP ...



==============================================================================
Initial Plan/Notes ->

Picking Out Aspects Initially->
Item
Description
x
Position
y
Position
n/w/e/s
Direction (type?)
PLATEAU
x, y size (simple), x,y grid supplied (irregular shape setup?)
l/r/m
Commands Left right move [user defined type ? ]
VEHICLE
Rover, multiple/other types? Multiple types/classes later? Movement Steps=1
Input : First String ‘X Y’
Plateau limits (limit size xLimit/yLimit) - simple setup
[string convert] [correct values?]
Input : Second string ‘X Y N’
Start:  x y position, n direction 
[string convert] [correct values?] [user defined type ? ]
Input : Third string ‘LRMMLM’
Instructions: String to array of commands
[correct strings?]
Output: ‘X Y N’
Location: string containing x, y positions and direction
NoteToCheck -> Grid upside down
I.e. lower left 0,0 NOT top left


Outline/Thoughts using above Items:->

Class vehicle {
	X:
Y: 
Direction :
xLimit
yLimit
	Name : rover ? advanced more than one vehicle type ?
	Movelength : 1 ? advanced one square?
gridLimit ?advanced limit replacement?

Function range(xLimit, yLimit) ( [LimitGrid] optional for irregular shapes) {Input String1 “5 5”}

Function start/constructor?(x,y,direction) {Input String2 “3 3 N”}

Function getLocation() -> 
X = Check x < xLimit, x, xLimit
Y = Check y < yLimit, y, yLimit
return x, y, direction  {Output String}

Or Function checkx/checky against [LimitGrid]  optional for irregular shapes)

Function ProcessCommands(commands) -> {Input String3 “LRMMRRM”}
Function rotate (n/w/e/s) -> direction update
Function move (direction,Movelength) -> x, y update
}
	
TDD using above thoughts on framework and how you would progress through it (know this isn't perfect approach but need to pseudo code above to help understand problem first):->

Valid Inputs? : String1
Spacing format? x : +ve, y : +ve, max grid size? 
Valid Inputs? : String2
Spacing format? x : +ve, y : +ve, direction n/w/e/s only chars, < grid size String1
Valid Inputs? : String3
format? commands L/R/M only, max commands size?
Rotate Tests
same location +
Left N 
Left S
Left E
Left W
Right N
Right S
Right E
Right W 
360 = same location RRRR LLLL
Single Move Tests
move=1
N Move (y +move)
S Move (y -move)
E Move(x +move)
W Move(y - move)


Multiple Rotate+Move Tests
LM
RM
LMLM
RMRM
LMRM
Move Beyond Limit Boundaries
4,4
0,0 N MMMMM = 0,4
0,0 N RMMMMM = 4,0
4,4 S MMMMM = 4,0 
4,4 S LMMMMM = 0,4





