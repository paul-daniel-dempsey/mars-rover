import { Go } from '../src/controller';

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
                 expect(Go(boundary,vehicle,commands)).toEqual(result);
             });
    test("Invalid Grid Max Exceeded >5", () => {
        expect(Go('6 6','1 1 N','L')).toEqual('');
    });
    test("Invalid Start Point Outside Grid", () => {
        expect(Go('0 0','1 1 N','L')).toEqual('');
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
                 expect(Go(boundary,vehicle,commands)).toEqual(result);
             });

//     it.each([['2 2','1 1 N','M','1 2 N'],
//              ['2 2','1 1 N','ML','1 2 W'],
//              ['2 2','1 1 N','LM','0 1 W'],
//              ['2 2','1 1 N','MR','1 2 E'],
//              ['2 2','1 1 N','RM','2 1 E'],
//              ['2 2','1 1 S','M','1 0 S'],
//              ['2 2','1 1 S','LM','2 1 E'],
//              ['2 2','1 1 S','ML','1 0 E'],
//              ['2 2','1 1 S','RM','0 1 W'],
//              ['2 2','1 1 S','MR','1 0 W'],
//              ['2 2','1 1 W','M','0 1 W'],
//              ['2 2','1 1 W','LM','1 0 S'],
//              ['2 2','1 1 W','ML','0 1 S'],
//              ['2 2','1 1 W','RM','1 2 N'],
//              ['2 2','1 1 W','MR','0 1 N'],
//              ['2 2','1 1 E','M','2 1 E'],
//              ['2 2','1 1 E','LM','1 2 N'],
//              ['2 2','1 1 E','ML','2 1 N'],
//              ['2 2','1 1 E','RM','1 0 S'],
//              ['2 2','1 1 E','MR','2 1 S'],
//             ])
//             ("Single Move Rotate : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
//                   expect(Go(boundary,vehicle,commands)).toEqual(result);
//               });

//     it.each([['5 5','1 2 N','LMLMLMLMM','1 3 N'],
//             ['5 5','3 3 E','MMRMMRMRRM','5 1 E'],
//     ])
//     ("Multi Move Rotate : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
//         expect(Go(boundary,vehicle,commands)).toEqual(result);
//     });

//     it.each([['5 5','0 0 S','MM','0 0 S'],
//             ['5 5','0 0 S','MMRR','0 0 N'],
//             ['2 2','1 1 N','MMRM','2 2 E'],
//             ['2 2','1 1 S','MMLM','2 0 E'],
//             ['2 2','1 1 N','MMRRMLL','1 1 N'],
//    ])
//    ("Move Beyond Grid : [%p][%p][%p]=[%p]", (boundary, vehicle, commands,result) => {
//          expect(Go(boundary,vehicle,commands)).toEqual(result);
//      });
});