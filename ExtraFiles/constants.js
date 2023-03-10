/*----- constants -----*/
// let suit numerical values?
// e.g. +1 or -1
// let number be card value



export const CARD_IMAGES = {
    S01: 'images/single_cards/SPADE-1.svg',
    S02: 'images/single_cards/SPADE-2.svg',
    S03: 'images/single_cards/SPADE-3.svg',
    S04: 'images/single_cards/SPADE-4.svg',
    S05: 'images/single_cards/SPADE-5.svg',
    S06: 'images/single_cards/SPADE-6.svg',
    S07: 'images/single_cards/SPADE-7.svg',
    S08: 'images/single_cards/SPADE-8.svg',
    S09: 'images/single_cards/SPADE-9.svg',
    S10: 'images/single_cards/SPADE-10.svg',
    S11: 'images/single_cards/SPADE-11-JACK.svg',
    S12: 'images/single_cards/SPADE-12-QUEEN.svg',
    S13: 'images/single_cards/SPADE-13-KING.svg',
    H01: 'images/single_cards/HEART-1.svg',
    H02: 'images/single_cards/HEART-2.svg',
    H03: 'images/single_cards/HEART-3.svg',
    H04: 'images/single_cards/HEART-4.svg',
    H05: 'images/single_cards/HEART-5.svg',
    H06: 'images/single_cards/HEART-6.svg',
    H07: 'images/single_cards/HEART-7.svg',
    H08: 'images/single_cards/HEART-8.svg',
    H09: 'images/single_cards/HEART-9.svg',
    H10: 'images/single_cards/HEART-10.svg',
    H11: 'images/single_cards/HEART-11-JACK.svg',
    H12: 'images/single_cards/HEART-12-QUEEN.svg',
    H13: 'images/single_cards/HEART-13-KING.svg',
    C01: 'images/single_cards/CLUB-1.svg',
    C02: 'images/single_cards/CLUB-2.svg',
    C03: 'images/single_cards/CLUB-3.svg',
    C04: 'images/single_cards/CLUB-4.svg',
    C05: 'images/single_cards/CLUB-5.svg',
    C06: 'images/single_cards/CLUB-6.svg',
    C07: 'images/single_cards/CLUB-7.svg',
    C08: 'images/single_cards/CLUB-8.svg',
    C09: 'images/single_cards/CLUB-9.svg',
    C10: 'images/single_cards/CLUB-10.svg',
    C11: 'images/single_cards/CLUB-11-JACK.svg',
    C12: 'images/single_cards/CLUB-12-QUEEN.svg',
    C13: 'images/single_cards/CLUB-13-KING.svg',
    D01: 'images/single_cards/DIAMOND-1.svg',
    D02: 'images/single_cards/DIAMOND-2.svg',
    D03: 'images/single_cards/DIAMOND-3.svg',
    D04: 'images/single_cards/DIAMOND-4.svg',
    D05: 'images/single_cards/DIAMOND-5.svg',
    D06: 'images/single_cards/DIAMOND-6.svg',
    D07: 'images/single_cards/DIAMOND-7.svg',
    D08: 'images/single_cards/DIAMOND-8.svg',
    D09: 'images/single_cards/DIAMOND-9.svg',
    D10: 'images/single_cards/DIAMOND-10.svg',
    D11: 'images/single_cards/DIAMOND-11-JACK.svg',
    D12: 'images/single_cards/DIAMOND-12-QUEEN.svg',
    D13: 'images/single_cards/DIAMOND-13-KING.svg',
    BAK: 'images/single_cards/BACK-2.svg',
    EMP: 'images/single_cards/EMPTY.svg'
}

// CARD_IMAGES[S01]
// CARD_IMAGES[S02]
// CARD_IMAGES[S03]
// CARD_IMAGES[S04]
// CARD_IMAGES[S05]
// CARD_IMAGES[S06]
// CARD_IMAGES[S07]
// CARD_IMAGES[S08]
// CARD_IMAGES[S09]
// CARD_IMAGES[S10]
// CARD_IMAGES[S11]
// CARD_IMAGES[S12]
// CARD_IMAGES[S13]
// CARD_IMAGES[H01]
// CARD_IMAGES[H02]
// CARD_IMAGES[H03]
// CARD_IMAGES[H04]
// CARD_IMAGES[H05]
// CARD_IMAGES[H06]
// CARD_IMAGES[H07]
// CARD_IMAGES[H08]
// CARD_IMAGES[H09]
// CARD_IMAGES[H10]
// CARD_IMAGES[H11]
// CARD_IMAGES[H12]
// CARD_IMAGES[H13]
// CARD_IMAGES[C01]
// CARD_IMAGES[C02]
// CARD_IMAGES[C03]
// CARD_IMAGES[C04]
// CARD_IMAGES[C05]
// CARD_IMAGES[C06]
// CARD_IMAGES[C07]
// CARD_IMAGES[C08]
// CARD_IMAGES[C09]
// CARD_IMAGES[C10]
// CARD_IMAGES[C11]
// CARD_IMAGES[C12]
// CARD_IMAGES[C13]
// CARD_IMAGES[D01]
// CARD_IMAGES[D02]
// CARD_IMAGES[D03]
// CARD_IMAGES[D04]
// CARD_IMAGES[D05]
// CARD_IMAGES[D06]
// CARD_IMAGES[D07]
// CARD_IMAGES[D08]
// CARD_IMAGES[D09]
// CARD_IMAGES[D10]
// CARD_IMAGES[D11]
// CARD_IMAGES[D12]
// CARD_IMAGES[D13]


export const CARD_LIBRARY = {
    S01: {suit:'s', color:'b', value:1,  img:CARD_IMAGES['S01'], imgBack:CARD_IMAGES['BAK'], before:-1,  after:2},
    S02: {suit:'s', color:'b', value:2,  img:CARD_IMAGES['S02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    S03: {suit:'s', color:'b', value:3,  img:CARD_IMAGES['S03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    S04: {suit:'s', color:'b', value:4,  img:CARD_IMAGES['S04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    S05: {suit:'s', color:'b', value:5,  img:CARD_IMAGES['S05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    S06: {suit:'s', color:'b', value:6,  img:CARD_IMAGES['S06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    S07: {suit:'s', color:'b', value:7,  img:CARD_IMAGES['S07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    S08: {suit:'s', color:'b', value:8,  img:CARD_IMAGES['S08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    S09: {suit:'s', color:'b', value:9,  img:CARD_IMAGES['S09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    S10: {suit:'s', color:'b', value:10, img:CARD_IMAGES['S10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    S11: {suit:'s', color:'b', value:11, img:CARD_IMAGES['S11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    S12: {suit:'s', color:'b', value:12, img:CARD_IMAGES['S12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    S13: {suit:'s', color:'b', value:13, img:CARD_IMAGES['S13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    H01: {suit:'h', color:'r', value:1,  img:CARD_IMAGES['H01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    H02: {suit:'h', color:'r', value:2,  img:CARD_IMAGES['H02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    H03: {suit:'h', color:'r', value:3,  img:CARD_IMAGES['H03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    H04: {suit:'h', color:'r', value:4,  img:CARD_IMAGES['H04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    H05: {suit:'h', color:'r', value:5,  img:CARD_IMAGES['H05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    H06: {suit:'h', color:'r', value:6,  img:CARD_IMAGES['H06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    H07: {suit:'h', color:'r', value:7,  img:CARD_IMAGES['H07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    H08: {suit:'h', color:'r', value:8,  img:CARD_IMAGES['H08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    H09: {suit:'h', color:'r', value:9,  img:CARD_IMAGES['H09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    H10: {suit:'h', color:'r', value:10, img:CARD_IMAGES['H10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    H11: {suit:'h', color:'r', value:11, img:CARD_IMAGES['H11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    H12: {suit:'h', color:'r', value:12, img:CARD_IMAGES['H12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    H13: {suit:'h', color:'r', value:13, img:CARD_IMAGES['H13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    C01: {suit:'c', color:'b', value:1,  img:CARD_IMAGES['C01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    C02: {suit:'c', color:'b', value:2,  img:CARD_IMAGES['C02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    C03: {suit:'c', color:'b', value:3,  img:CARD_IMAGES['C03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    C04: {suit:'c', color:'b', value:4,  img:CARD_IMAGES['C04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    C05: {suit:'c', color:'b', value:5,  img:CARD_IMAGES['C05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    C06: {suit:'c', color:'b', value:6,  img:CARD_IMAGES['C06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    C07: {suit:'c', color:'b', value:7,  img:CARD_IMAGES['C07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    C08: {suit:'c', color:'b', value:8,  img:CARD_IMAGES['C08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    C09: {suit:'c', color:'b', value:9,  img:CARD_IMAGES['C09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    C10: {suit:'c', color:'b', value:10, img:CARD_IMAGES['C10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    C11: {suit:'c', color:'b', value:11, img:CARD_IMAGES['C11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    C12: {suit:'c', color:'b', value:12, img:CARD_IMAGES['C12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    C13: {suit:'c', color:'b', value:13, img:CARD_IMAGES['C13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    D01: {suit:'d', color:'r', value:1,  img:CARD_IMAGES['D01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    D02: {suit:'d', color:'r', value:2,  img:CARD_IMAGES['D02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    D03: {suit:'d', color:'r', value:3,  img:CARD_IMAGES['D03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    D04: {suit:'d', color:'r', value:4,  img:CARD_IMAGES['D04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    D05: {suit:'d', color:'r', value:5,  img:CARD_IMAGES['D05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    D06: {suit:'d', color:'r', value:6,  img:CARD_IMAGES['D06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    D07: {suit:'d', color:'r', value:7,  img:CARD_IMAGES['D07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    D08: {suit:'d', color:'r', value:8,  img:CARD_IMAGES['D08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    D09: {suit:'d', color:'r', value:9,  img:CARD_IMAGES['D09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    D10: {suit:'d', color:'r', value:10, img:CARD_IMAGES['D10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    D11: {suit:'d', color:'r', value:11, img:CARD_IMAGES['D11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    D12: {suit:'d', color:'r', value:12, img:CARD_IMAGES['D12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    D13: {suit:'d', color:'r', value:13, img:CARD_IMAGES['D13'], imgBack:CARD_IMAGES['BAK'], before:12, after:-1},
    EMP: {suit:'0', color:'0', value:-1, img:CARD_IMAGES['EMP'], imgBack:CARD_IMAGES['EMP'], before:0, after:-1},
} 

export const CARD_LIST = [
'S01',
'S02',
'S03',
'S04',
'S05',
'S06',
'S07',
'S08',
'S09',
'S10',
'S11',
'S12',
'S13',
'H01',
'H02',
'H03',
'H04',
'H05',
'H06',
'H07',
'H08',
'H09',
'H10',
'H11',
'H12',
'H13',
'C01',
'C02',
'C03',
'C04',
'C05',
'C06',
'C07',
'C08',
'C09',
'C10',
'C11',
'C12',
'C13',
'D01',
'D02',
'D03',
'D04',
'D05',
'D06',
'D07',
'D08',
'D09',
'D10',
'D11',
'D12',
'D13']



export const startingTableau = [
    [1],
    [-1,1],
    [-1,-1,1],
    [-1,-1,-1,1],
    [-1,-1,-1,-1,1],
    [-1,-1,-1,-1,-1,1],
    [-1,-1,-1,-1,-1,-1,1],
    [],
    [],
    [],
    [],
    [],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 -1],
    []
]  




//suit, color, front/back, name
export const CARD_LIST = [
[3,  2, -1, 'S01'],
[3,  2, -1, 'S02'],
[3,  2, -1, 'S03'],
[3,  2, -1, 'S04'],
[3,  2, -1, 'S05'],
[3,  2, -1, 'S06'],
[3,  2, -1, 'S07'],
[3,  2, -1, 'S08'],
[3,  2, -1, 'S09'],
[3,  2, -1, 'S10'],
[3,  2, -1, 'S11'],
[3,  2, -1, 'S12'],
[3,  2, -1, 'S13'],
[5, -2, -1, 'H01'],
[5, -2, -1, 'H02'],
[5, -2, -1, 'H03'],
[5, -2, -1, 'H04'],
[5, -2, -1, 'H05'],
[5, -2, -1, 'H06'],
[5, -2, -1, 'H07'],
[5, -2, -1, 'H08'],
[5, -2, -1, 'H09'],
[5, -2, -1, 'H10'],
[5, -2, -1, 'H11'],
[5, -2, -1, 'H12'],
[5, -2, -1, 'H13'],
[7,  2, -1, 'C01'],
[7,  2, -1, 'C02'],
[7,  2, -1, 'C03'],
[7,  2, -1, 'C04'],
[7,  2, -1, 'C05'],
[7,  2, -1, 'C06'],
[7,  2, -1, 'C07'],
[7,  2, -1, 'C08'],
[7,  2, -1, 'C09'],
[7,  2, -1, 'C10'],
[7,  2, -1, 'C11'],
[7,  2, -1, 'C12'],
[7,  2, -1, 'C13'],
[9, -2, -1, 'D01'],
[9, -2, -1, 'D02'],
[9, -2, -1, 'D03'],
[9, -2, -1, 'D04'],
[9, -2, -1, 'D05'],
[9, -2, -1, 'D06'],
[9, -2, -1, 'D07'],
[9, -2, -1, 'D08'],
[9, -2, -1, 'D09'],
[9, -2, -1, 'D10'],
[9, -2, -1, 'D11'],
[9, -2, -1, 'D12'],
[9, -2, -1, 'D13']
]

//suit0, color1, front/back2, name3, value4, col5, row6
const CARD_LIST = [
    [1,     2, -1, 'S01',  1],
    [1,     2, -1, 'S02',  2],
    [1,     2, -1, 'S03',  3],
    [1,     2, -1, 'S04',  4],
    [1,     2, -1, 'S05',  5],
    [1,     2, -1, 'S06',  6],
    [1,     2, -1, 'S07',  7],
    [1,     2, -1, 'S08',  8],
    [1,     2, -1, 'S09',  9],
    [1,     2, -1, 'S10', 10],
    [1,     2, -1, 'S11', 11],
    [1,     2, -1, 'S12', 12],
    [1,     2, -1, 'S13', 13],
    [10,    -2, -1, 'H01',  1],
    [10,    -2, -1, 'H02',  2],
    [10,    -2, -1, 'H03',  3],
    [10,    -2, -1, 'H04',  4],
    [10,    -2, -1, 'H05',  5],
    [10,    -2, -1, 'H06',  6],
    [10,    -2, -1, 'H07',  7],
    [10,    -2, -1, 'H08',  8],
    [10,    -2, -1, 'H09',  9],
    [10,    -2, -1, 'H10', 10],
    [10,    -2, -1, 'H11', 11],
    [10,    -2, -1, 'H12', 12],
    [10,    -2, -1, 'H13', 13],
    [100,     2, -1, 'C01',  1],
    [100,     2, -1, 'C02',  2],
    [100,     2, -1, 'C03',  3],
    [100,     2, -1, 'C04',  4],
    [100,     2, -1, 'C05',  5],
    [100,     2, -1, 'C06',  6],
    [100,     2, -1, 'C07',  7],
    [100,     2, -1, 'C08',  8],
    [100,     2, -1, 'C09',  9],
    [100,     2, -1, 'C10', 10],
    [100,     2, -1, 'C11', 11],
    [100,     2, -1, 'C12', 12],
    [100,     2, -1, 'C13', 13],
    [1000,   -2, -1, 'D01',  1],
    [1000,   -2, -1, 'D02',  2],
    [1000,   -2, -1, 'D03',  3],
    [1000,   -2, -1, 'D04',  4],
    [1000,   -2, -1, 'D05',  5],
    [1000,   -2, -1, 'D06',  6],
    [1000,   -2, -1, 'D07',  7],
    [1000,   -2, -1, 'D08',  8],
    [1000,   -2, -1, 'D09',  9],
    [1000,   -2, -1, 'D10', 10],
    [1000,   -2, -1, 'D11', 11],
    [1000,   -2, -1, 'D12', 12],
    [1000,   -2, -1, 'D13', 13]
    ]   

    const resetArray = [
        ["c0r0","c0r1","c0r2","c0r3","c0r4","c0r5","c0r6","c0r7","c0r8","c0r9","c0r10","c0r11","c0r12","c0r13","c0r14","c0r15","c0r16","c0r17","c0r18"],
        ["c1r0","c1r1","c1r2","c1r3","c1r4","c1r5","c1r6","c1r7","c1r8","c1r9","c1r10","c1r11","c1r12","c1r13","c1r14","c1r15","c1r16","c1r17","c1r18"],
        ["c2r0","c2r1","c2r2","c2r3","c2r4","c2r5","c2r6","c2r7","c2r8","c2r9","c2r10","c2r11","c2r12","c2r13","c2r14","c2r15","c2r16","c2r17","c2r18"],
        ["c3r0","c3r1","c3r2","c3r3","c3r4","c3r5","c3r6","c3r7","c3r8","c3r9","c3r10","c3r11","c3r12","c3r13","c3r14","c3r15","c3r16","c3r17","c3r18"],
        ["c4r0","c4r1","c4r2","c4r3","c4r4","c4r5","c4r6","c4r7","c4r8","c4r9","c4r10","c4r11","c4r12","c4r13","c4r14","c4r15","c4r16","c4r17","c4r18"],
        ["c5r0","c5r1","c5r2","c5r3","c5r4","c5r5","c5r6","c5r7","c5r8","c5r9","c5r10","c5r11","c5r12","c5r13","c5r14","c5r15","c5r16","c5r17","c5r18"],
        ["c6r0","c6r1","c6r2","c6r3","c6r4","c6r5","c6r6","c6r7","c6r8","c6r9","c6r10","c6r11","c6r12","c6r13","c6r14","c6r15","c6r16","c6r17","c6r18"]
        ["c8r0","c8r1","c8r2","c8r3","c8r4","c8r5","c8r6","c8r7","c8r8","c8r9","c8r10","c8r11","c8r12"],
    ["c9r0","c9r1","c9r2","c9r3","c9r4","c9r5","c9r6","c9r7","c9r8","c9r9","c9r10","c9r11","c9r12"],
    ["c10r0","c10r1","c10r2","c10r3","c10r4","c10r5","c10r6","c10r7","c10r8","c10r9","c10r10","c10r11","c10r12"],
    ["c11r0","c11r1","c11r2","c11r3","c11r4","c11r5","c11r6","c11r7","c11r8","c11r9","c11r10","c11r11","c11r12"]
    ["c13r0","c13r1","c13r2","c13r3","c13r4","c13r5","c13r6","c13r7","c13r8","c13r9","c13r10","c13r11","c13r12","c13r13","c13r14","c13r15","c13r16","c13r17","c13r18","c13r19","c13r20","c13r21","c13r22","c13r23","c13r24","c13r25","c13r26","c13r27","c13r28","c13r29","c13r30","c13r31","c13r32","c13r33","c13r34","c13r35","c13r36","c13r37","c13r38","c13r39","c13r40","c13r41","c13r42","c13r43","c13r44","c13r45","c13r46","c13r47","c13r48","c13r49","c13r50","c13r51","c13r52"]
        ]
    

        cardArray ={
            S01:[3,  2, -1,  1, 12, 0],
            S02:[3,  2, -1,  2, 12, 0],
            S03:[3,  2, -1,  3, 12, 0],
            S04:[3,  2, -1,  4, 12, 0],
            S05:[3,  2, -1,  5, 12, 0],
            S06:[3,  2, -1,  6, 12, 0],
            S07:[3,  2, -1,  7, 12, 0],
            S08:[3,  2, -1,  8, 12, 0],
            S09:[3,  2, -1,  9, 12, 0],
            S10:[3,  2, -1, 10, 12, 0],
            S11:[3,  2, -1, 11, 12, 0],
            S12:[3,  2, -1, 12, 12, 0],
            S13:[3,  2, -1, 13, 12, 0],
            H01:[5, -2, -1,  1, 12, 0],
            H02:[5, -2, -1,  2, 12, 0],
            H03:[5, -2, -1,  3, 12, 0],
            H04:[5, -2, -1,  4, 12, 0],
            H05:[5, -2, -1,  5, 12, 0],
            H06:[5, -2, -1,  6, 12, 0],
            H07:[5, -2, -1,  7, 12, 0],
            H08:[5, -2, -1,  8, 12, 0],
            H09:[5, -2, -1,  9, 12, 0],
            H10:[5, -2, -1, 10, 12, 0],
            H11:[5, -2, -1, 11, 12, 0],
            H12:[5, -2, -1, 12, 12, 0],
            H13:[5, -2, -1, 13, 12, 0],
            C01:[7,  2, -1,  1, 12, 0],
            C02:[7,  2, -1,  2, 12, 0],
            C03:[7,  2, -1,  3, 12, 0],
            C04:[7,  2, -1,  4, 12, 0],
            C05:[7,  2, -1,  5, 12, 0],
            C06:[7,  2, -1,  6, 12, 0],
            C07:[7,  2, -1,  7, 12, 0],
            C08:[7,  2, -1,  8, 12, 0],
            C09:[7,  2, -1,  9, 12, 0],
            C10:[7,  2, -1, 10, 12, 0],
            C11:[7,  2, -1, 11, 12, 0],
            C12:[7,  2, -1, 12, 12, 0],
            C13:[7,  2, -1, 13, 12, 0],
            D01:[9, -2, -1,  1, 12, 0],
            D02:[9, -2, -1,  2, 12, 0],
            D03:[9, -2, -1,  3, 12, 0],
            D04:[9, -2, -1,  4, 12, 0],
            D05:[9, -2, -1,  5, 12, 0],
            D06:[9, -2, -1,  6, 12, 0],
            D07:[9, -2, -1,  7, 12, 0],
            D08:[9, -2, -1,  8, 12, 0],
            D09:[9, -2, -1,  9, 12, 0],
            D10:[9, -2, -1, 10, 12, 0],
            D11:[9, -2, -1, 11, 12, 0],
            D12:[9, -2, -1, 12, 12, 0],
            D13:[9, -2, -1, 13, 12, 0]
       }
       