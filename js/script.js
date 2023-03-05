console.log("initialized")


/*----- constants -----*/
// let suit numerical values?
// e.g. +1 or -1
// let number be card value

const cardImages = {
    S1:{suit:'s', color:'b', value:1, img:'images/single_cards/SPADE-1.svg', before:0, after:2},
    S2:{suit:'s', color:'b', value:2, img:'images/single_cards/SPADE-2.svg', before:1, after:3},
    S3:{suit:'s', color:'b', value:3, img:'images/single_cards/SPADE-3.svg', before:2, after:4},
    S4:{suit:'s', color:'b', value:4, img:'images/single_cards/SPADE-4.svg', before:3, after:5},
    S5:{suit:'s', color:'b', value:5, img:'images/single_cards/SPADE-5.svg', before:4, after:6},
    S6:{suit:'s', color:'b', value:6, img:'images/single_cards/SPADE-6.svg', before:5, after:7},
    S7:{suit:'s', color:'b', value:7, img:'images/single_cards/SPADE-7.svg', before:6, after:8},
    S8:{suit:'s', color:'b', value:8, img:'images/single_cards/SPADE-8.svg', before:7, after:9},
    S9:{suit:'s', color:'b', value:9, img:'images/single_cards/SPADE-9.svg', before:8, after:0},
    S10:{suit:'s', color:'b', value:10, img:'images/single_cards/SPADE-10.svg', before:9, after:11},
    S11:{suit:'s', color:'b', value:11, img:'images/single_cards/SPADE-11-JACK.svg', before:10, after:12},
    S12:{suit:'s', color:'b', value:12, img:'images/single_cards/SPADE-12-QUEEN.svg', before:11, after:13},
    S13:{suit:'s', color:'b', value:13, img:'images/single_cards/SPADE-13-KING.svg', before:12, after:0},
    H1:{suit:'h', color:'r', value:1, img:'images/single_cards/HEART-1.svg', before:0, after:2},
    H2:{suit:'h', color:'r', value:2, img:'images/single_cards/HEART-2.svg', before:1, after:3},
    H3:{suit:'h', color:'r', value:3, img:'images/single_cards/HEART-3.svg', before:2, after:4},
    H4:{suit:'h', color:'r', value:4, img:'images/single_cards/HEART-4.svg', before:3, after:5},
    H5:{suit:'h', color:'r', value:5, img:'images/single_cards/HEART-5.svg', before:4, after:6},
    H6:{suit:'h', color:'r', value:6, img:'images/single_cards/HEART-6.svg', before:5, after:7},
    H7:{suit:'h', color:'r', value:7, img:'images/single_cards/HEART-7.svg', before:6, after:8},
    H8:{suit:'h', color:'r', value:8, img:'images/single_cards/HEART-8.svg', before:7, after:9},
    H9:{suit:'h', color:'r', value:9, img:'images/single_cards/HEART-9.svg', before:8, after:0},
    H10:{suit:'h', color:'r', value:10, img:'images/single_cards/HEART-10.svg', before:9, after:11},
    H11:{suit:'h', color:'r', value:11, img:'images/single_cards/HEART-11-JACK.svg', before:10, after:12},
    H12:{suit:'h', color:'r', value:12, img:'images/single_cards/HEART-12-QUEEN.svg', before:11, after:13},
    H12:{suit:'h', color:'r', value:13, img:'images/single_cards/HEART-13-KING.svg', before:12, after:0},
    C1:{suit:'c', color:'b', value:1, img:'images/single_cards/CLUB-1.svg', before:0, after:2},
    C2:{suit:'c', color:'b', value:2, img:'images/single_cards/CLUB-2.svg', before:1, after:3},
    C3:{suit:'c', color:'b', value:3, img:'images/single_cards/CLUB-3.svg', before:2, after:4},
    C4:{suit:'c', color:'b', value:4, img:'images/single_cards/CLUB-4.svg', before:3, after:5},
    C5:{suit:'c', color:'b', value:5, img:'images/single_cards/CLUB-5.svg', before:4, after:6},
    C6:{suit:'c', color:'b', value:6, img:'images/single_cards/CLUB-6.svg', before:5, after:7},
    C7:{suit:'c', color:'b', value:7, img:'images/single_cards/CLUB-7.svg', before:6, after:8},
    C8:{suit:'c', color:'b', value:8, img:'images/single_cards/CLUB-8.svg', before:7, after:9},
    C9:{suit:'c', color:'b', value:9, img:'images/single_cards/CLUB-9.svg', before:8, after:0},
    C10:{suit:'c', color:'b', value:10, img:'images/single_cards/CLUB-10.svg', before:9, after:11},
    C11:{suit:'c', color:'b', value:11, img:'images/single_cards/CLUB-11-JACK.svg', before:10, after:12},
    C12:{suit:'c', color:'b', value:12, img:'images/single_cards/CLUB-12-QUEEN.svg', before:11, after:13},
    C12:{suit:'c', color:'b', value:13, img:'images/single_cards/CLUB-13-KING.svg', before:12, after:0},
    D1:{suit:'d', color:'r', value:1, img:'images/single_cards/DIAMOND-1.svg', before:0, after:2},
    D2:{suit:'d', color:'r', value:2, img:'images/single_cards/DIAMOND-2.svg', before:1, after:3},
    D3:{suit:'d', color:'r', value:3, img:'images/single_cards/DIAMOND-3.svg', before:2, after:4},
    D4:{suit:'d', color:'r', value:4, img:'images/single_cards/DIAMOND-4.svg', before:3, after:5},
    D5:{suit:'d', color:'r', value:5, img:'images/single_cards/DIAMOND-5.svg', before:4, after:6},
    D6:{suit:'d', color:'r', value:6, img:'images/single_cards/DIAMOND-6.svg', before:5, after:7},
    D7:{suit:'d', color:'r', value:7, img:'images/single_cards/DIAMOND-7.svg', before:6, after:8},
    D8:{suit:'d', color:'r', value:8, img:'images/single_cards/DIAMOND-8.svg', before:7, after:9},
    D9:{suit:'d', color:'r', value:9, img:'images/single_cards/DIAMOND-9.svg', before:8, after:0},
    D10:{suit:'d', color:'r', value:10, img:'images/single_cards/DIAMOND-10.svg', before:9, after:11},
    D11:{suit:'d', color:'r', value:11, img:'images/single_cards/DIAMOND-11-JACK.svg', before:10, after:12},
    D12:{suit:'d', color:'r', value:12, img:'images/single_cards/DIAMOND-12-QUEEN.svg', before:11, after:13},
    D12:{suit:'d', color:'r', value:13, img:'images/single_cards/DIAMOND-13-KING.svg', before:12, after:0},
}







/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init()