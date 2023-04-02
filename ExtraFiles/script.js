console.log("initialized")

/*----- constants -----*/


const CARDLIST = ['S01','S02','S03','S04','S05','S06','S07','S08','S09','S10','S11','S12','S13','H01','H02','H03','H04','H05','H06','H07','H08','H09','H10','H11','H12','H13','C01','C02','C03','C04','C05','C06','C07','C08','C09','C10','C11','C12','C13','D01','D02','D03','D04','D05','D06','D07','D08','D09','D10','D11','D12','D13']

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

// let suit numerical values?
// e.g. +1 or -1
// let number be card value

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



// constants, in the following order. 
// all suits should be the same
// when colors, black and red add up together, should equal 0
// front and back  are +1 and -1 respectively
// name of card in three digits
// the number value of the card
// the col position
// the row position
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
let cardsAtPlay;
let cardOnBottom;
let shuffledDeck = null
let cardArray;
let boardArray = [];
let startingTableau = [];

/*----- cached element references -----*/

// Makes the card outlines placed on screen (having dashed lines) into objects
const allEmptyCardAreas = document.querySelectorAll(".foundation-origin, .tab-origin, .stock-origin")

const shuffleElement = document.querySelector('#shuffle')
const bodyElement = document.querySelector('body')
const buttonElement = document.querySelector('#button')
const mainElement = document.querySelector('main')

/*----- event listeners -----*/

/* ################################################ */
/* ########### DRAG AND DROP OPERATIONS ########### */


// creates an object out of event of initially clicking and dragging, prevents unwanted dragging in non-relevant areas

buttonElement.addEventListener('click', (evt) => {
    // guards
    if (evt.target.id !== "button"){
        return
    }
    if (evt.target.getAttribute('data-card') == play) {
        return;
    }

    shuffleDeck()
    render()
})


bodyElement.addEventListener('click', (evt) => {
    // if (evt.target.){
    // if (evt.target.id !== "button" ){
    //     return
    // }

    if (evt.target.id ==="shuffle" || evt.target.id ==="stock"){
        shuffleDeck()
        return
    }

    //let isCardonTop = isCardTopAndDown(evt.target.id)
    //references array library through is CardTopAndDown; if card is on top, flip
    if (isCardTopAndDown(evt.target.id) === true){
        flipCard(cardArray[evt.target.id])
    }

    render()
})





/* ########### DRAG START ########### */
mainElement.addEventListener('dragstart', (evt) => {
    let target = evt.target;

    // add the dragged card into a global variable array. 
    cardAtPlay.unshift(target.id)

    //deletes the contents of this array that holds information about the target card(bottom card)
    deleteArray(cardOnBottom)
})



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
// call drag-over event and remove the default. This needs to occur when something is dropped
const deactivateDragOver = () => {
    mainElement.addEventListener('dragover', (evt) => {
        cardOnBottom.unshift(evt.target.id)
        //evt.preventDefault()
    })
}


/* ########### DRAG END ########### */
// At the end of where the card is dragged and released, this function calls the checkDroppable function to see drop can proceed

// mainElement.addEventListener('dragend', (evt) => {
//     // guards -> everything except div elements that contain data
// });


/* ###########   DROP   ########### */
// dropped card event listener, removes the css of any outlined sections to remove the outline
mainElement.addEventListener('drop', (evt) => {
    // guards -> everything except div elements that contain data
    deactivateDragOver()
    let bottomCardTarget = evt.target

    cardOnBottom.unshift(bottomCardTarget.id)

    if (!evt.target.id.includes("found") ){
        canItBeDropped(bottomCardTarget.id)
    }
    if (!evt.target.id.includes("tab") ){
    }

    droppingOnFoundation(bottomCardTarget.id)

    evt.target.parentNode.classList.remove("card-selection")
    render();
});


/* ################################################ */
/* ############## STANDARD FUNCTIONS ############## */
/* ################                ################ */

const deleteArray = (array) =>{
    array.splice(0, array.length)
}

/* --- call back functions with delay --- */
const performAnalysis = (cb1, cb2) => {
    setTimeout(cb1, 40)
    setTimeout(cb2, 50)
}

/* --- find the card position and output results as a list that is ordered --- */
/* --- takes the column number, and ouputs a list of cards--- */
const findListOfCardsUnderneath = (searchColumn) => {
    const arrayOfLists = []
    for (const key in cardArray){
        if (cardArray[key][5] === searchColumn){
            arrayOfLists.push(cardArray[key])
        }
    }
    // this returns the list sorted in order, with the top most card at the last index
    arrayOfLists.sort(function(a, b) {
        return a[5] - b[5]
    })
    return arrayOfLists
}


const removeInPlayCard = () =>{
        //remove the cards that are in play, and place in bottom of stock card
    //seeks out cards that are from stock, in order
    let stockCardsArrayBeforeDealing = findListOfCardsUnderneath(12)
    let inPlayCardsArrayBeforeDealing = findListOfCardsUnderneath(11)
    if (inPlayCardsArrayBeforeDealing.length > 0){
        inPlayCardsArrayBeforeDealing.forEach((card) =>{
            flipCard(card)
             // moves the cards to stock
             card.splice(5, 2, 12)
            // moves the cards to a row
            stockCardsArrayBeforeDealing.push(card[6])
            console.log(card)
        })
    }
}

const isCardTopAndDown = (card) => {
    let cardCol = cardArray[card][5]
    let arrayList = findListOfCardsUnderneath(cardCol)
    if (arrayList[arrayList.length -1][3] === card)
    return true;
}


const updateStartingTableau = () => {
    // access the name of the card from StartingTableau, acecss the corresponding name from cardArray,
    // and modify the StartingTableau's position
    startingTableau.forEach((column, colIndex) =>{
        column.forEach((array, rowIndex) => {

            // as the startinTableau is scanned, the name of the card is recorded
            let cardRef = String(array[3])
            // and pulls up the corresponding name in the cardArray
            let arrayOfCard = cardArray[`${cardRef}`]
            // access the values for the row and column
            let updatedCol = arrayOfCard[5]
            let updatedRow = arrayOfCard[6]
            // add this information back into StartingTableau
            array.splice(5, 2, updatedCol)
            array.push(updatedRow)
        })
    })
}


function flipTheCardAfterDrawing (card) {
    let topCard = cardArray[cardAtPlay[0]];
    let topCardCol = topCard[5]
    let topCardRow = topCard[6]-1

    underTopCard.splice(5, 2, topCardCol) 
    underTopCard.push(topCardRow)
}


// checks to see if the card can be dropped on foundation (aces)
function droppingOnFoundation (card) {
    let topCard = cardArray[cardAtPlay[0]];
    let foundationColNum = card.slice(5, card.length)

    //unary plus operator! Here changing the column position of the card that is being dropped on (particularly the blank "ace" images in the foundation area as having a new column number. )
    bottomCard = [0, 5, 0, 'found', -1, +foundationColNum, 0]
    

    // only applicable for foundation area
    if (bottomCard[5] > 6 && bottomCard[5] < 11){
        
        // the top card having, at position [4], the value of the card being 1,
        if (topCard[4] === 1){ 
           // updates the topCard's position to that of the bottom card 
            topCard.splice(5, 2, bottomCard[5]) 
            topCard.push(bottomCard[6])
        }
        // if the suit position [0] are the same, and the cards are in ascending order, then put down
        if (bottomCard[0] === topCard[0] &&  topCard[4] - bottomCard[4] === 1){

            let bottomCardCol = bottomCard[5]
            let bottomCardRow = bottomCard[6] + 1

            topCard.splice(5, 2, bottomCardCol) 
            topCard.push(bottomCardRow)            
    }
}
}

function canItBeDropped (card){
    // establishes the columns of where the cards are coming from and where they are landing

    let topCard = cardArray[cardAtPlay[0]];
    let bottomCard = cardArray[card];

    //base case
    // if the card is already flipped upside down, return
    if (bottomCard[2] === -1){
        return;
    }

    // only applicable for tableau area
    if (bottomCard[5] < 7){

        //if the bottom card color and top card color together equal 0, then different colors
        if (bottomCard[1] + topCard[1] === 0 && topCard[4] - bottomCard[4] === -1){
            //then modify position of the top card
            let bottomCardCol = bottomCard[5]
            let bottomCardRow = bottomCard[6]+1

            topCard.splice(5, 2, bottomCardCol) 
            topCard.push(bottomCardRow)
        } 
    }
}    


function resetStockFromWaste(){
    if (boardArray[11].length > 0 || boardArray[12].length > 0){
        dealCardsFromStock()}
    for (let i = boardArray[13].length; i > 0; i--){
        let restockCard = boardArray[13].shift()
        boardArray[13].push(restockCard)
    }     
}


/* --- functions --- */
init();


function win () {
    let number = 0
    for (let key in cardArray) {
        card = cardArray[key]
        if (card[5] > 6 && card[5] < 11){
            number += 1
        }
    if (number == 52){
        alert("you win!")
    }
} 
}


/* --- shuffle the cards --- */
// takes CARD_LIST array and adds random row coordinates, by splicing a random numbered card from one array to another
function randomShuffle(cardArr) {
    let initialDeck = [...cardArr];
    let newDeck = []
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...initialDeck.splice(n, 1));
    };     
    return newDeck;
};


/*-- shuffle the cards of the 'cardArray' object variable ---*/
function shuffleDeck() {

    const arrayOfLists = findListOfCardsUnderneath(12)
    let newList = []
    for (let i = arrayOfLists.length; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newList.unshift(n)   
    }
    const arrayOfCardNames = []
    arrayOfLists.forEach((card) => {
        arrayOfCardNames.push(card[3])
    })
  
    arrayOfCardNames.map((cardName) => { 
        let tempList = cardArray[cardName]
        tempList.splice(6,1,newList.pop())
        cardArray[cardName] = tempList
    })
}


// initiates the first step of rendering the initial gameboard, using a template called
// startingTableau. StartingTableu becomes the basis for other functions
function renderTableau() {
// startingTableau. 
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
                // change the card's showing value by splicing, change from -1 to 1
                card.splice(2, 1, 1)   
                stackElement.appendChild(getDisplayImage(card))
            } 
            
            cardArray[card[3]] = card
            startingTableau[columnIndex].splice(rowIndex, 1, card)  
        })  
    })
}


// // isEmptyStack() -> returns boolean if the stack is empty (true) or not (false). 
// function isEmptyStack(){

// }

// function checkAddEmpty(){
//     if (cardOnBottom[0] === empty){
//     }
// }



// receives the array of card information, and returns an img tag containing information.
function getDisplayImage(card) {
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


// flips card by changing the status of the object, cardArray
function flipCard (card){
    if (card[2] > 0){
        card.splice(2, 1, -1)
    }
    else {
        card.splice(2, 1, 1)
    }
    return card;
}


function removeImage () {
    let resetArray = [18,18,18,18,18,18,18,12,12,12,12,12,52,52]
    resetArray.forEach((value, idx) => {
        for (let i = value; i >= 0; i--) {
            let cardToRemove = document.getElementById(`c${idx}r${i}`)
            cardToRemove.innerHTML =""
        }
    })
}


//renderboard reads through the cardArray <- (a javascript object and updates html elements)
function renderBoard () {
    // removes the initial image to render the board correctly.     // do not remove!
    removeImage()

    for (let arrayInfo in cardArray) {
        card = cardArray[arrayInfo]

        let stackName = `c${card[5]}r${card[6]}`
        let stackElement = document.getElementById(stackName);
         // adds the images back into the div element  
        stackElement.appendChild(getDisplayImage(card))

    // this function flips up any top card that is facing down
    for (let arrayInfo in cardArray) {
        card = cardArray[arrayInfo]
    }
}
}


function render() {
    renderBoard()
    win()
}


function init(){
    cardAtPlay =[]
    cardOnBottom = []
    shuffledDeck = randomShuffle(CARD_LIST); // each item in the shuffled Deck is a list
    cardArray = {}
   
    startingTableau = [
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
    renderTableau()

    render();
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// from previous version of the game:


// checks to see if the card can be dropped on foundation (aces)

// checkAddFoundation() -> Returns true if the card can be dropped on the foundation area (top area)

// function checkAddFoundation() {
//     let topCard = theTopCard;
//     let bottomCard = theBottomCard
//     // The following checks to see if the bottom card is located in the columns 7->10 (foundation)
//     if (bottomCard[5] > 6 && bottomCard[5] < 11){
//         // if -> (1) top card is an ace && top value - bottom value = 1
//         if (topCard[4] === 1 && topCard[4] - bottomCard[4] === 1) return true;
//         // if -> (1) top card suite === bottom card suit && (2) top value - bottom value = 1
//         if (bottomCard[0] === topCard[0] && topCard[4] - bottomCard[4] === 1){
//             return true;
//         } 
//     } else return false;
// }


// // checkAddTableau() -> Checks to see if the card can be placed in the tableau area (bottom area)
// // 'can card be placed' ? true : false
// function checkAddTableau(){
//     let topCard = theTopCard;
//     let bottomCard = theBottomCard
//     if (bottomCard[5] < 7){
//         // if -> (1) top card is a King && (2) top value - bottom value = -1
//         if (topCard[4] === 1 && topCard[4] - bottomCard[4] === -1) return true;
//         // if -> (1) top + bottom card color = 0 && (2) top value - bottom value = -1
//         if (bottomCard[1] + topCard[1] === 0 && topCard[4] - bottomCard[4] === -1) return true ;
//     } else return false       
// }

// state information
// CARD_LIST[i] = card;
// card[0]= suit
// card[1]= color
// card[2]= up or down
// card[3]= cardname
// card[4]= value
// card[5]= col position
// card[6]= row position
