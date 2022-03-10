import { Go } from '../src/controller';

describe("Controller", () => {

    test("Initial FrameWork Commit", () => {
        expect(Go('','','')).toEqual('');
    });

//     it.each([['','','',''],
//             ['f','d','s',''],
//             ['A A','G H J','HDQ',''],
//             ['5 5','G H J','HDQ',''],
//             ['5 5','3 3 J','HDQ',''],
//             ['5 5','3 3 N','HDQ',''],])
//            ("Invalid", (boundary, vehicle, commands,result) => {
//                  expect(Go(boundary,vehicle,commands)).toEqual(result);
//              });
//     test("Invalid Grid Max Exceeded >1000000", () => {
//         expect(Go('1000001 1000001','1 1 N','L')).toEqual('');
//     });
//     test("Invalid Start Point Outside Grid", () => {
//         expect(Go('0 0','1 1 N','L')).toEqual('');
//     });
//     test("Invalid Command Length >1000", () => {
//         expect(Go('0 0','1 1 N','L'.repeat(1001))).toEqual('');
//     });

//     it.each([['0 0','0 0 N','L','0 0 E'],
//             ['0 0','0 0 N','R','0 0 W'],
//             ['0 0','0 0 N','LL','0 0 S'],
//             ['0 0','0 0 N','RR','0 0 S'],
//             ['0 0','0 0 N','LLL','0 0 W'],
//             ['0 0','0 0 N','RRR','0 0 E'],
//             ['0 0','0 0 N','LLLL','0 0 N'],
//             ['0 0','0 0 N','RRRR','0 0 N'],])
//            ("Rotate", (boundary, vehicle, commands,result) => {
//                  expect(Go(boundary,vehicle,commands)).toEqual(result);
//              });

//     it.each([['2 2','1 1 N','LM','0 1 E'],
//              ['2 2','1 1 N','ML','1 2 E'],
//              ['2 2','1 1 N','RM','2 1 W'],
//              ['2 2','1 1 N','MR','1 2 W'],
//              ['2 2','1 1 S','LM','2 1 W'],
//              ['2 2','1 1 S','ML','2 1 W'],
//              ['2 2','1 1 S','RM','0 1 E'],
//              ['2 2','1 1 S','MR','2 1 E'],
//             ])
//             ("Single Move Rotate", (boundary, vehicle, commands,result) => {
//                   expect(Go(boundary,vehicle,commands)).toEqual(result);
//               });

//     it.each([['5 5','1 2 N','LMLMLMLMM','1 3 N'],
//             ['5 5','3 3 N','MMRMMRMRRM','5 1 E'],
//     ])
//     ("Multi Move Rotate", (boundary, vehicle, commands,result) => {
//         expect(Go(boundary,vehicle,commands)).toEqual(result);
//     });

//     it.each([['5 5','0 0 S','MM','0 0 S'],
//             ['5 5','0 0 S','MMRR','0 0 N'],
//             ['2 2','1 1 N','MMRM','2 2 E'],
//             ['2 2','1 1 S','MMLM','2 0 W'],
//             ['2 2','1 1 N','MMRRMLL','1 1 N'],
//    ])
//    ("Move Beyond Grid (steer/move from edge if needed)", (boundary, vehicle, commands,result) => {
//          expect(Go(boundary,vehicle,commands)).toEqual(result);
//      });
});