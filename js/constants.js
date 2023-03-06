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
    BAK: 'images/single_cards/BACK-2.svg'
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
    S01: {suit:'s', color:'b', value:1,  img:CARD_IMAGES['S01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    S02: {suit:'s', color:'b', value:2,  img:CARD_IMAGES['S02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    S03: {suit:'s', color:'b', value:3,  img:CARD_IMAGES['S03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    S04: {suit:'s', color:'b', value:4,  img:CARD_IMAGES['S04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    S05: {suit:'s', color:'b', value:5,  img:CARD_IMAGES['S05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    S06: {suit:'s', color:'b', value:6,  img:CARD_IMAGES['S06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    S07: {suit:'s', color:'b', value:7,  img:CARD_IMAGES['S07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    S08: {suit:'s', color:'b', value:8,  img:CARD_IMAGES['S08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    S09: {suit:'s', color:'b', value:9,  img:CARD_IMAGES['S09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:0},
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
    H09: {suit:'h', color:'r', value:9,  img:CARD_IMAGES['H09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:0},
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
    C09: {suit:'c', color:'b', value:9,  img:CARD_IMAGES['C09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:0},
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
    D09: {suit:'d', color:'r', value:9,  img:CARD_IMAGES['D09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:0},
    D10: {suit:'d', color:'r', value:10, img:CARD_IMAGES['D10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    D11: {suit:'d', color:'r', value:11, img:CARD_IMAGES['D11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    D12: {suit:'d', color:'r', value:12, img:CARD_IMAGES['D12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    D13: {suit:'d', color:'r', value:13, img:CARD_IMAGES['D13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
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
