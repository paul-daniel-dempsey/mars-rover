import { moveVehicle, moveVehicles } from '../src/controller';
 
describe("Controller", () => {

    it.each([
            ['','','',''],
            ['f','d','s',''],
            ['A A','G H J','HDQ',''],
            ['5 5','','',''],
            ['5 5','G H J','HDQ',''],
            ['5 5','3 3 J','HDQ',''],
            ['5 5','3 3 N','HDQ','3 3 N'],
            ['6 6','6 6 N','HDQ',''],
            ])
           ("Invalid : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
                 expect(moveVehicle(boundary,undefined,vehicle,commands)).toEqual(result);
             });
    test("Invalid Grid Max Exceeded >5", () => {
        expect(moveVehicle('6 6',undefined,'1 1 N','L')).toEqual('');
    });
    test("Invalid Start Point Outside Grid", () => {
        expect(moveVehicle('0 0',undefined,'1 1 N','L')).toEqual('');
    });

    it.each([['0 0','0 0 N','L','0 0 W'],
            ['0 0','0 0 N','R','0 0 E'],
            ['0 0','0 0 N','LL','0 0 S'],
            ['0 0','0 0 N','RR','0 0 S'],
            ['0 0','0 0 N','LLL','0 0 E'],
            ['0 0','0 0 N','RRR','0 0 W'],
            ['0 0','0 0 N','LLLL','0 0 N'],
            ['0 0','0 0 N','RRRR','0 0 N'],
            ['0 0','0 0 S','L','0 0 E'],
            ['0 0','0 0 S','R','0 0 W'],
            ['0 0','0 0 S','LL','0 0 N'],
            ['0 0','0 0 S','RR','0 0 N'],
            ['0 0','0 0 S','LLL','0 0 W'],
            ['0 0','0 0 S','RRR','0 0 E'],
            ['0 0','0 0 S','LLLL','0 0 S'],
            ['0 0','0 0 S','RRRR','0 0 S'],
            ['0 0','0 0 E','L','0 0 N'],
            ['0 0','0 0 E','R','0 0 S'],
            ['0 0','0 0 E','LL','0 0 W'],
            ['0 0','0 0 E','RR','0 0 W'],
            ['0 0','0 0 E','LLL','0 0 S'],
            ['0 0','0 0 E','RRR','0 0 N'],
            ['0 0','0 0 E','LLLL','0 0 E'],
            ['0 0','0 0 E','RRRR','0 0 E'],
            ['0 0','0 0 W','L','0 0 S'],
            ['0 0','0 0 W','R','0 0 N'],
            ['0 0','0 0 W','LL','0 0 E'],
            ['0 0','0 0 W','RR','0 0 E'],
            ['0 0','0 0 W','LLL','0 0 N'],
            ['0 0','0 0 W','RRR','0 0 S'],
            ['0 0','0 0 W','LLLL','0 0 W'],
            ['0 0','0 0 W','RRRR','0 0 W'],
        ])
           ('Rotate : [%p][%p][%p]=[%p]', (boundary, vehicle, commands,result) => {
                 expect(moveVehicle(boundary,undefined,vehicle,commands)).toEqual(result);
             });

    it.each([['2 2','1 1 N','M','1 2 N'],
             ['2 2','1 1 N','ML','1 2 W'],
             ['2 2','1 1 N','LM','0 1 W'],
             ['2 2','1 1 N','MR','1 2 E'],
             ['2 2','1 1 N','RM','2 1 E'],
             ['2 2','1 1 S','M','1 0 S'],
             ['2 2','1 1 S','LM','2 1 E'],
             ['2 2','1 1 S','ML','1 0 E'],
             ['2 2','1 1 S','RM','0 1 W'],
             ['2 2','1 1 S','MR','1 0 W'],
             ['2 2','1 1 W','M','0 1 W'],
             ['2 2','1 1 W','LM','1 0 S'],
             ['2 2','1 1 W','ML','0 1 S'],
             ['2 2','1 1 W','RM','1 2 N'],
             ['2 2','1 1 W','MR','0 1 N'],
             ['2 2','1 1 E','M','2 1 E'],
             ['2 2','1 1 E','LM','1 2 N'],
             ['2 2','1 1 E','ML','2 1 N'],
             ['2 2','1 1 E','RM','1 0 S'],
             ['2 2','1 1 E','MR','2 1 S'],
            ])
            ("Single Move Rotate : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
                  expect(moveVehicle(boundary,undefined,vehicle,commands)).toEqual(result);
              });

    it.each([['5 5','1 2 N','LMLMLMLMM','1 3 N'],
            ['5 5','3 3 E','MMRMMRMRRM','5 1 E'],
    ])
    ("Multi Move Rotate : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
        expect(moveVehicle(boundary,undefined,vehicle,commands)).toEqual(result);
    });
    
const xOkyInvertCheck=[
                ['0 5','1 5','2 5','3 5','4 5','5 5'],
                ['0 4','1 4','2 4','3 4','4 4','5 4'],
                ['0 3','1 3','2 3','3 3','4 3','5 3'],
                ['0 2','1 2','2 2','3 2','4 2','5 2'],
                ['0 1','1 1','2 1','3 1','4 1','5 1'],
                ['0 0','1 0','2 0','3 0','4 0','5 0']];
it.each([
        [xOkyInvertCheck,'1 2 N','LMLMLMLMM','1 3 N'],
        [xOkyInvertCheck,'3 3 E','MMRMMRMRRM','5 1 E'],
])
("Check Inverted Y Co-ordinate", (xOkyInvertCheck, vehicle, commands, result) => {
    expect(moveVehicle('',xOkyInvertCheck,vehicle,commands)).toEqual(result);
});

    it.each([['5 5','0 0 S','MM','0 0 S'],
            ['5 5','0 0 S','MMRR','0 0 N'],
            ['2 2','1 1 N','MMRM','2 2 E'],
            ['2 2','1 1 S','MMLM','2 0 E'],
            ['2 2','1 1 N','MMRRMLL','1 1 N'],
   ])
   ("Move Beyond Grid : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
         expect(moveVehicle(boundary,undefined,vehicle,commands)).toEqual(result);
     });

    const crater=[  ['Y','Y','Y','Y','Y'],
                    ['Y','N','N','N','Y'],
                    ['Y','N','N','N','Y'],
                    ['Y','N','N','N','Y'],
                    ['Y','Y','Y','Y','Y']]; 
    it.each([
            [crater,'0 0 N','MR','0 1 E'],
            [crater,'0 0 N','MMMMMRMML','2 4 N'],
            [crater,'0 0 N','MRMRMLL','0 0 N'],
    ])
    ("Custom Crater Test", (crater, vehicle, commands, result) => {
        expect(moveVehicle(undefined,crater,vehicle,commands)).toEqual(result);
    });
    const irregular=[['0 4','1 4','2 4','3 4','4 4'],
                    ['0 3','1 3','2 3','3 3','4 3'],
                    ['N','1 2','2 2','N','N'],
                    ['N','1 1','2 1','N','4 1'],
                    ['0 0','1 0','2 0','N','4 0']];
    it.each([
            [irregular,'2 2 W','MMRRMM','2 2 E'],
            [irregular,'2 2 W','MM','1 2 W'],
            [irregular,'2 2 W','LMMMLM','2 0 E'],
            [irregular,'0 0 N','MMMMMRMML','2 0 N'],
    ])
    ("Custom Irregular Test", (irregular, vehicle, commands, result) => {
        expect(moveVehicle(undefined,irregular,vehicle,commands)).toEqual(result);
    });
    const backwards=[   ['0 4','1 4','2 4','3 4','4 4'],
                        ['N','1 3','2 3','3 3','4 3'],
                        ['0 2','1 2','2 2','3 2','4 2'],
                        ['0 1','1 1','2 1','3 1','N'],
                        ['0 0','1 0','2 0','3 0','4 0']];
    it.each([
        [backwards,'0 0 N','MMBB','0 0 N'],
        [backwards,'0 0 N','FFBB','0 0 N'],
        [backwards,'4 4 S','MMBB','4 4 S'],
        [backwards,'4 4 S','FFBB','4 4 S'],
        [backwards,'0 0 N','RMMBB','0 0 E'],
        [backwards,'0 0 N','RFFBB','0 0 E'],
        [backwards,'4 0 N','LMMBB','4 0 W'],
        [backwards,'4 0 N','LFFBB','4 0 W'],
        [backwards,'0 0 N','FFFBB','0 0 N'],
        [backwards,'4 4 S','FFFBB','4 4 S'],
        [backwards,'0 0 N','FFFBBBB','0 0 N'],
        [backwards,'4 4 S','FFFBBBB','4 4 S'],
    ])
    ("Vehicle move backwards+forwards", (backwards, vehicle, commands, result) => {
    expect(moveVehicle(undefined,backwards,vehicle,commands)).toEqual(result);
    });
    const moveBigSteps=[    ['0 4','1 4','2 4','3 4','4 4'],
                            ['0 3','1 3','2 3','3 3','4 3'],
                            ['0 2','1 2','2 2','3 2','4 2'],
                            ['0 1','1 1','2 1','3 1','4 1'],
                            ['0 0','1 0','2 0','3 0','4 0']];
    it.each([
         [moveBigSteps,'0 0 N','FF',2,'0 4 N'],
         [moveBigSteps,'4 4 S','FF',2,'4 0 S'],
         [moveBigSteps,'0 0 N','FF',3,'0 3 N'],
         [moveBigSteps,'4 4 S','FF',3,'4 1 S'],
        ])
    ("Vehicle move in bigger steps", (moveBigSteps, vehicle, commands, step, result) => {
    expect(moveVehicle(undefined,moveBigSteps,vehicle,commands,undefined,undefined,step)).toEqual(result);
    });
    const identifiers=[ ['0 4','1 4','2 4','3 4','4 4'],
                        ['0 3','1 3','2 3','3 3','4 3'],
                        ['0 2','1 2','2 2','3 2','4 2'],
                        ['0 1','1 1','2 1','3 1','4 1'],
                        ['0 0','1 0','2 0','3 0','4 0']];
    it.each([
    [identifiers,'0 0 N','FF','','','0 2 N'],
    [identifiers,'0 0 N','FF','surfaceMars','','surfaceMars  0 2 N'],
    [identifiers,'0 0 N','FF','','roverMars','roverMars 0 2 N'],
    [identifiers,'0 0 N','FF','surfaceMars','roverMars','surfaceMars roverMars 0 2 N'],
    ])
    ("Vehicle move in bigger steps", (identifiers, vehicle, commands, identBoundary, identVehicle, result) => {
    expect(moveVehicle(undefined,identifiers,vehicle,commands,identBoundary,identVehicle)).toEqual(result);
    });

    it.each([['5 5',undefined,[['0 0 N','MMRM','RoverA'],['0 0 N','MMMRM','RoverB']],'RoverA 1 2 E,RoverB 1 3 E'],
             ['5 5',undefined,[['0 0 N','MMRM','RoverA'],['0 0 N','MMRM','RoverB']],'RoverA 1 2 E,RoverB 0 2 E'],
    ])
    ("Sequential Rovers on same Plateau will go around each other : [%p][%p][%o]=[%p]", (boundary, customboundary, vehicles,result) => {
    expect(moveVehicles(boundary,customboundary,vehicles)).toEqual(result);
    });
});