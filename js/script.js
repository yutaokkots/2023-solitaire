
console.log("initialized")

/*----- constants -----*/
// let suit numerical values?
// e.g. +1 or -1
// let number be card value


const CARD_IMAGES = {
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


const resetArray = [
    ["c0r0","c0r1","c0r2","c0r3","c0r4","c0r5","c0r6","c0r7","c0r8","c0r9","c0r10","c0r11","c0r12","c0r13","c0r14","c0r15","c0r16","c0r17","c0r18"],
    ["c1r0","c1r1","c1r2","c1r3","c1r4","c1r5","c1r6","c1r7","c1r8","c1r9","c1r10","c1r11","c1r12","c1r13","c1r14","c1r15","c1r16","c1r17","c1r18"],
    ["c2r0","c2r1","c2r2","c2r3","c2r4","c2r5","c2r6","c2r7","c2r8","c2r9","c2r10","c2r11","c2r12","c2r13","c2r14","c2r15","c2r16","c2r17","c2r18"],
    ["c3r0","c3r1","c3r2","c3r3","c3r4","c3r5","c3r6","c3r7","c3r8","c3r9","c3r10","c3r11","c3r12","c3r13","c3r14","c3r15","c3r16","c3r17","c3r18"],
    ["c4r0","c4r1","c4r2","c4r3","c4r4","c4r5","c4r6","c4r7","c4r8","c4r9","c4r10","c4r11","c4r12","c4r13","c4r14","c4r15","c4r16","c4r17","c4r18"],
    ["c5r0","c5r1","c5r2","c5r3","c5r4","c5r5","c5r6","c5r7","c5r8","c5r9","c5r10","c5r11","c5r12","c5r13","c5r14","c5r15","c5r16","c5r17","c5r18"],
    ["c6r0","c6r1","c6r2","c6r3","c6r4","c6r5","c6r6","c6r7","c6r8","c6r9","c6r10","c6r11","c6r12","c6r13","c6r14","c6r15","c6r16","c6r17","c6r18"]
    ]


CARD_LIBRARY = {
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


const startingTableau = [
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
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
]  




//suit, color, front/back, name, value, col, row]
const CARD_LIST = [
[3,  2, -1, 'S01',  1, 12, 0],
[3,  2, -1, 'S02',  2, 12, 0],
[3,  2, -1, 'S03',  3, 12, 0],
[3,  2, -1, 'S04',  4, 12, 0],
[3,  2, -1, 'S05',  5, 12, 0],
[3,  2, -1, 'S06',  6, 12, 0],
[3,  2, -1, 'S07',  7, 12, 0],
[3,  2, -1, 'S08',  8, 12, 0],
[3,  2, -1, 'S09',  9, 12, 0],
[3,  2, -1, 'S10', 10, 12, 0],
[3,  2, -1, 'S11', 11, 12, 0],
[3,  2, -1, 'S12', 12, 12, 0],
[3,  2, -1, 'S13', 13, 12, 0],
[5, -2, -1, 'H01',  1, 12, 0],
[5, -2, -1, 'H02',  2, 12, 0],
[5, -2, -1, 'H03',  3, 12, 0],
[5, -2, -1, 'H04',  4, 12, 0],
[5, -2, -1, 'H05',  5, 12, 0],
[5, -2, -1, 'H06',  6, 12, 0],
[5, -2, -1, 'H07',  7, 12, 0],
[5, -2, -1, 'H08',  8, 12, 0],
[5, -2, -1, 'H09',  9, 12, 0],
[5, -2, -1, 'H10', 10, 12, 0],
[5, -2, -1, 'H11', 11, 12, 0],
[5, -2, -1, 'H12', 12, 12, 0],
[5, -2, -1, 'H13', 13, 12, 0],
[7,  2, -1, 'C01',  1, 12, 0],
[7,  2, -1, 'C02',  2, 12, 0],
[7,  2, -1, 'C03',  3, 12, 0],
[7,  2, -1, 'C04',  4, 12, 0],
[7,  2, -1, 'C05',  5, 12, 0],
[7,  2, -1, 'C06',  6, 12, 0],
[7,  2, -1, 'C07',  7, 12, 0],
[7,  2, -1, 'C08',  8, 12, 0],
[7,  2, -1, 'C09',  9, 12, 0],
[7,  2, -1, 'C10', 10, 12, 0],
[7,  2, -1, 'C11', 11, 12, 0],
[7,  2, -1, 'C12', 12, 12, 0],
[7,  2, -1, 'C13', 13, 12, 0],
[9, -2, -1, 'D01',  1, 12, 0],
[9, -2, -1, 'D02',  2, 12, 0],
[9, -2, -1, 'D03',  3, 12, 0],
[9, -2, -1, 'D04',  4, 12, 0],
[9, -2, -1, 'D05',  5, 12, 0],
[9, -2, -1, 'D06',  6, 12, 0],
[9, -2, -1, 'D07',  7, 12, 0],
[9, -2, -1, 'D08',  8, 12, 0],
[9, -2, -1, 'D09',  9, 12, 0],
[9, -2, -1, 'D10', 10, 12, 0],
[9, -2, -1, 'D11', 11, 12, 0],
[9, -2, -1, 'D12', 12, 12, 0],
[9, -2, -1, 'D13', 13, 12, 0]
]




/*----- app's state (variables) -----*/
let boardArray = [];
let shuffledDeck = null
let cardsAtPlay;
let workingDeck;
let cardArray;

/*----- cached element references -----*/


// Makes the card outlines placed on screen (having dashed lines) into objects
const allEmptyCardAreas = document.querySelectorAll(".foundation-origin, .tab-origin, .stock-origin")
// allEmptyCardAreas.forEach((card) => {
//     let cardUrl = CARD_LIBRARY["EMP"]["img"] 
//     card.innerHTML = `<img data-card='EMP' data-inplay='1' src=${cardUrl}>`
//     card.setAttribute("data-card", "EMP")
//     card.setAttribute("data-inplay", "-1")
// })


const mainElement = document.querySelector('main')



/*----- event listeners -----*/

/* ################################################ */
/* ########### DRAG AND DROP OPERATIONS ########### */

//THIS! reads the data-card and data-inplay values that were established when the card was created. 
//console.log(evt.target.getAttribute('data-card'))
//console.log(evt.target.getAttribute('data-inplay'))

// creates an object out of event of initially clicking and dragging, prevents unwanted dragging in non-relevant areas

/* ########### DRAG START ########### */
mainElement.addEventListener('dragstart', (evt) => {
    // guards -> excludes non-playable cards
    let target = evt.target;

    console.log(`origin .alt card-orientation: ${evt.target.alt}`)
    console.log(`origin .id  card-id:          ${evt.target.id}`)

    // add the dragged card into a global variable array. 
    cardAtPlay.unshift(target.id)

    //deletes the contents of this array that holds information about the target card
    deleteArray(cardOnBottom)
    console.log(cardOnBottom)
})



const  deleteArray = (array) =>{
    array.splice(0, array.length)
}


/* ########### DRAG ENTER ########### */
// When something is dragged into an area, the css is modified to show an outline of the drop area, and records information about the current bottom card
mainElement.addEventListener('dragenter', (evt) => {
    // guards -> everything except div elements that contain data
    // if (evt.target.getAttribute('data-card') == "EMP") {
    // }

    if (evt.target.getAttribute('data-inplay') != 1) {
        ;
        return;
    }
    if (evt.target.getAttribute('data-card') == null) {
        return;
    }
    // add an outline to where a card can potentially be dropped
    evt.target.parentNode.classList.add("card-selection");

    // establish this global variable with event object
    currentBottomCardType = evt  
})


/* ########### DRAG LEAVE ########### */
// When something is dragged out of area, the default activity of drag-over is prevented
mainElement.addEventListener('dragleave', (evt) => {
    // guards -> everything except div elements that contain data
    if (evt.target.getAttribute('data-inplay') != 1) {
        return;
    };
    if (evt.target.getAttribute('data-card') == null) {
        return;
    };
    evt.target.parentNode.classList.remove("card-selection");
});  

mainElement.addEventListener('dragover', (evt) => {
    evt.preventDefault()
})

/* ########### DRAG OVER ########### */
// call drag-over event and remove the default. This needs to occure when something is dropped
const deactivateDragOver = () => {
    mainElement.addEventListener('dragover', (evt) => {
        cardOnBottom.unshift(evt.target.id)
        //evt.preventDefault()
    })
}


/* ########### DRAG END ########### */
// At the end of where the card is dragged and released, this function calls the checkDroppable function to see drop can proceed

mainElement.addEventListener('dragend', (evt) => {
    // guards -> everything except div elements that contain data
});


/* ###########   DROP   ########### */
// dropped card event listener, removes the css of any outlined sections to remove the outline
mainElement.addEventListener('drop', (evt) => {
    // guards -> everything except div elements that contain data
    deactivateDragOver()
    let bottomCardTarget = evt.target

    console.log(`destin .alt card-orientation: ${evt.target.alt}`)
    console.log(`destin .id  card-id:          ${evt.target.id}`)

    console.log(cardArray)


    cardOnBottom.unshift(bottomCardTarget.id)

  

    canItBeDropped(bottomCardTarget.id, bottomCardTarget.alt)

    evt.target.parentNode.classList.remove("card-selection")
    //render();
});


/* ################################################ */
/* ############## STANDARD FUNCTIONS ############## */
/* ################                ################ */


/* --- call back functions with delay --- */
const performAnalysis = (cb1, cb2) => {
    setTimeout(cb1, 40)
    setTimeout(cb2, 50)
}

/* --- find the card position --- */
// const findCardPosition = (card) => {
//     let foundPosition = [];
//     boardArray.forEach((potentialColumn, columnIndex) => {
//         potentialColumn.forEach((potentialRow, rowIndex) => {
//             potentialRow.forEach ((item) => {
//                 if (item === card){
//                     console.log(columnIndex)
//                     console.log(rowIndex)
//                 }
//             })
//         })
//     })
//     columnIndex, rowIndex
// }
    //returns undefined if not in tableau


const checkFoundation = () => {
    // in the foundation

}


const canItBeDropped = (card) => {
    

    // establishes the columns of where the cards are coming from and where they are landing
    let topCard = cardArray[cardAtPlay[0]];
    let topCardColumn = cardArray[cardAtPlay[0]][5];
    let bottomCard = cardArray[card];
    let bottomCardColumn = cardArray[card][5];



    console.log(boardArray)
    console.log(topCard)
    console.log(topCardColumn)
    console.log(bottomCard)
    console.log(boardArray[bottomCardColumn]) // this is the arrays of the bottom card at its column

    let testArray
    testArray = boardArray[bottomCardColumn].slice()

    testArray.splice(testArray.length, 0, topCard)
    console.log(testArray)

    let suitColorContainer = 0

    let removedTopCard = boardArray[topCardColumn].pop()
    boardArray[bottomCardColumn].push(removedTopCard)

}


// const canItBeDropped = (card, upOrDown) => {
//     //parameter, card is the id of where the card is being dropped

    
//     let topCard = cardAtPlay[0];
//     let bottomCard = card;



// //     // base-cases
//     if (card === "play" || card === "stock" || card === "waste" || upOrDown === "-1") {
//         console.log("foundation, stock, waste, or carddown!")
//         return
//     }

//     //actions differ between tableau -> columns 0-6, and foundation -> columns 7-10
//     else if (cardArray[card][5] < 7) 
    
    
//     (&& (cardArray[card][1] + cardArray[cardAtPlay[0]][1] === 0) && (cardArray[cardAtPlay[0]][1] - cardArray[card][1] === 1 )){
//             console.log("you can put this down")
        
//     }

//     // calling from cardArray that holds card status, using cardAtPlay list that holds currently dragging card at position 0
   
//     else if ((cardArray[card][5] > 6 && cardArray[card][5] < 11)
//         && (cardArray[card][0] === cardArray[cardAtPlay[0]][0] === 0 && cardArray[cardAtPlay[0]][1] - cardArray[card][1] === -1)){
//             console.log("you can put this down too")
//         }
    
//         console.log(cardArray[cardAtPlay[0]][4])
//         console.log(cardArray[cardAtPlay[0]][4])
    
//         console.log(cardArray[card][4])
//         console.log(cardArray[card][4])

// }



//     // base-cases



//     //cardAtPlay[0] cardOnBottom[0] 

//     console.log(cardAtPlay[0])
//     console.log(cardOnBottom[0])


//     let cardPosition = findCardPosition(cardAtPlay)

    
// }


// // At the end of where the card is dragged and released, this function calls the checkDroppable function to see drop can proceed
// mainElement.addEventListener('dragend', (evt) => {
//     // guards -> everything except div elements that contain data

//     let currentDraggedCardType = evt
//     // console.log(currentDraggedCardType )

//     console.log(checkDroppable(currentDraggedCardType, currentBottomCardType));
//     checkDroppable(currentDraggedCardType, currentBottomCardType);
//     let topCard = currentDraggedCardType.target.getAttribute('data-card')
//     let bottomCard = currentBottomCardType.target.getAttribute('data-card')
//     // console.log(bottomCard)

//     if (checkDroppable(currentDraggedCardType, currentBottomCardType)) {
//         //revealCard(topCard);
//         moveCard(topCard, bottomCard);

//     }
// render()
// });










/* --- functions --- */
init();


/* --- shuffle the cards --- */

function randomShuffle(cardArr) {
    let initialDeck = [...cardArr];
    let newDeck = []
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...initialDeck.splice(n, 1));
    };     
    return newDeck;
};


/* --- shuffle the cards --- */
/* --- shuffle and  --- */
// function randomShuffleInPlace(cardObject) {
//     let newDeck = []
//     let distArray = [0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
//     //shuffles the order
//     for (let i = 52; i > 0; i--) {
//         let n = Math.floor(Math.random() * i);
//         newDeck.push(n)
//     }
//     cardObject.forEach((cardKey) => {
//         cardKey.splice(-2,2)
//         cardKey.push(distArray.unshift)
//         cardKey.push(newDeck.pop)
        
//     })
// return cardObject
// }



// function renderTableauAgain() {
//     let n = 0
//     startingTableau.forEach((columnArr, columnIndex) => {
//         columnArr.forEach((columnCell, rowIndex) => {
//             // name an id name for the div element based on constant array
//             const stackName = `c${columnIndex}r${rowIndex}`
            
//             // draw each shuffled card individually and save into a variable, card
//             workingDeck[n][6]
//             card.splice(5, 1, columnIndex)  //modify the saved col information in the card, position 5
//             card.splice(6, 1, rowIndex)     //modify the saved row information in the card, position 6
//             const stackElement = document.getElementById(stackName);
            
//             // a negative columnCell indicates that it will remain face-down
//             if (columnCell < 0) {;
//                 stackElement.appendChild(getDisplayImage(card))
//             }else if (columnCell > 0){   
//                 // change the card's showing value by splicing  

//                 card.splice(2, 1, 1)   
//                 stackElement.appendChild(getDisplayImage(card))
//             } 

//             startingTableau.splice(rowIndex, 1, card)   
//             boardArray[columnIndex].push(card)
//             workingDeck.push(card) 
//             n++
//         })
//     })
//     //switch, adds an element in front to make the starting tableau inactive
//     startingTableau.unshift("pause")

// }




function renderTableau() {
    startingTableau.forEach((columnArr, columnIndex) => {
        columnArr.forEach((columnCell, rowIndex) => {
            // name an id name for the div element based on constant array
            const stackName = `c${columnIndex}r${rowIndex}`
            
            // draw each shuffled card individually and save into a variable, card
            let card = shuffledDeck.pop()
            card.splice(5, 1, columnIndex)  //modify the saved col information in the card, position 5
            card.splice(6, 1, rowIndex)     //modify the saved row information in the card, position 6
            const stackElement = document.getElementById(stackName);
            
            // a negative columnCell indicates that it will remain face-down
            if (columnCell < 0) {;
                stackElement.appendChild(getDisplayImage(card))
            }else if (columnCell > 0){   
                // change the card's showing value by splicing  

                card.splice(2, 1, 1)   
                stackElement.appendChild(getDisplayImage(card))
            } 

            startingTableau.splice(rowIndex, 1, card)  
            
            cardArray[card[3]] = card
            boardArray[columnIndex].push(card)

        })
    })
    //switch, adds an element in front to make the starting tableau inactive
    startingTableau.unshift("pause")
}



function getDisplayImage (card){
    if (card === undefined) {
        return;
    }
    let newImage = document.createElement('img')
    newImage.className ="cardImg"
    if ('-1' == card[2]){
        
        newImage.src = CARD_LIBRARY[card[3]]['imgBack']

        newImage.alt = card[2]
        newImage.id = card[3]
        //console.log(newImage.alt)
        return newImage

    }
    newImage.src = CARD_LIBRARY[card[3]]['img']
    newImage.alt = card[2]
    newImage.id = card[3]

    //newImage.setData.inplay = card[2]
    return newImage;

}

function grabAndDeleteDisplayImage (divElementObject){
    divElementObject.innerHTML = ""
    // if ('-1' == card[2]){
    //     return;
    // }
    // const newImage = document.createElement('img')
    // newImage.src = CARD_LIBRARY[card[3]]['img']
}


function flipCard(card){
    if (card[2] > 0){
        card.splice(2, 1, 1)
    }
    else {
        card.splice(2, 1, -1)
    }
    return card;
}


function removeImage() {
    let resetArray = [18,18,18,18,18,18,18,12,12,12,12,12,52,52]
    resetArray.forEach((value, idx) => {
        for (let i = value; i >= 0; i--) {
            let cardToRemove = document.getElementById(`c${idx}r${i}`)
            cardToRemove.innerHTML =""
        }
    })
}


// function renderBoard () {

//     boardArray.forEach((columnArr, columnIndex) => {
//         columnArr.forEach((card, rowIndex) => {

//             removeImage(columnIndex, rowIndex)

//             let stackName = `c${columnIndex}r${rowIndex}`
//             let stackElement = document.getElementById(stackName);
//             if (card[2] > 0) {
//                 // // change the card's showing value by splicing   
//                 flipCard(card)  
//                 // // grab the img tag containing src=url of front of the card  
//             }
//             // } else if ([card[2]] < 0) {
//             //     //let cardUrl = CARD_LIBRARY[card[3]]["imgBack"] 
//             //     //stackElement.innerHTML = `<img data-card='${card[3]}' data-inplay='-1' src=${cardUrl}>`
//             // }
        
//                 stackElement.appendChild(getDisplayImage(card))
//                 console.log(image.alt)

//         })
//     })
// }


// function renderBoard () {
//     removeImage()
//     // boardArray.forEach((columnArr, columnIndex) => {
//     //     columnArr.forEach((card, rowIndex) => {
            
//     //     })
//     // })

//     boardArray.forEach((columnArr, columnIndex) => {
//         columnArr.forEach((card, rowIndex) => {
//             let stackName = `c${columnIndex}r${rowIndex}`
//             let stackElement = document.getElementById(stackName);
//             if (card[2] > 0) {
//                 flipCard(card)  
//             }

//             //removeImage(columnIndex, rowIndex)
//             stackElement.appendChild(getDisplayImage(card))

//         })
//     })
// }


function renderBoard () {

    //removes 
    removeImage()

    boardArray.forEach((columnArr, columnIndex) => {
        columnArr.forEach((card, rowIndex) => {
            // //row information 
            // card[5]
            // //col information
            // card[6]

            let stackName = `c${card[5]}r${card[6]}`
            let stackElement = document.getElementById(stackName);
            if (card[2] > 0) {
                flipCard(card)  
            }

            stackElement.appendChild(getDisplayImage(card))

        })
    })
}


// function renderBoard () {

//     removeImage()

//     cardArray.forEach((cardKey) => {
//         cardKey
//             let stackName = `c${cardKey[5]}r${cardKey[6]}`
//             let stackElement = document.getElementById(stackName);
//             if (cardKey[2] > 0) {
//                 cardKey.splice(2, 1, 1) 
//             }

//             stackElement.appendChild(getDisplayImage(card))

//         })

// }




function render() {
    renderTableau()
    renderBoard()
}

function init(){
    cardAtPlay =[]
    cardOnBottom = []
    shuffledDeck = randomShuffle(CARD_LIST);
    //cardArray = randomShuffleInPlace(CARD_LIST);

    
    boardArray = [
        [],                     //tableau-0     [0]
        [],
        [],
        [],
        [],
        [],
        [],                     //tableau-7     [6]
        [],                     //foundation-1  [7]
        [],                     //foundation-2  [8]
        [],                     //foundation-3  [9]
        [],                     //foundation-4  [10]
        [],                     // shown        [11] 
        [],                     // stock        [12] 
        []                      // waste        [13] 
    ]

    cardArray = {}
   

    render();
}


