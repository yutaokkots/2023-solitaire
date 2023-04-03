/* ####################################### */
/* ############# CONSTANTS ############### */
/* ####################################### */

const BOARD_INIT = [
[0, 0, 0, 'EMP0',  14, 0,  0],
[0, 0, 0, 'EMP1',  14, 1,  0],
[0, 0, 0, 'EMP2',  14, 2,  0],
[0, 0, 0, 'EMP3',  14, 3,  0],
[0, 0, 0, 'EMP4',  14, 4,  0],
[0, 0, 0, 'EMP5',  14, 5,  0],
[0, 0, 0, 'EMP6',  14, 6,  0],
[0, 0, 0, 'ACE7',  0,  7,  0],
[0, 0, 0, 'ACE8',  0,  8,  0],
[0, 0, 0, 'ACE9',  0,  9,  0],
[0, 0, 0, 'ACE10', 0,  10, 0],
[0, 0, 0, 'SEP11', 15, 11, 0],
[0, 0, 0, 'STK12', 0,  12, 0],
[0, 0, 0, 'WST13', 0,  13, 0]
]

const CARD_LIST = [
    [1,     2, -1, 'S01',  1, 12, 0],
    [1,     2, -1, 'S02',  2, 12, 0],
    [1,     2, -1, 'S03',  3, 12, 0],
    [1,     2, -1, 'S04',  4, 12, 0],
    [1,     2, -1, 'S05',  5, 12, 0],
    [1,     2, -1, 'S06',  6, 12, 0],
    [1,     2, -1, 'S07',  7, 12, 0],
    [1,     2, -1, 'S08',  8, 12, 0],
    [1,     2, -1, 'S09',  9, 12, 0],
    [1,     2, -1, 'S10', 10, 12, 0],
    [1,     2, -1, 'S11', 11, 12, 0],
    [1,     2, -1, 'S12', 12, 12, 0],
    [1,     2, -1, 'S13', 13, 12, 0],

    [10,   -2, -1, 'H01',  1, 12, 0],
    [10,   -2, -1, 'H02',  2, 12, 0],
    [10,   -2, -1, 'H03',  3, 12, 0],
    [10,   -2, -1, 'H04',  4, 12, 0],
    [10,   -2, -1, 'H05',  5, 12, 0],
    [10,   -2, -1, 'H06',  6, 12, 0],
    [10,   -2, -1, 'H07',  7, 12, 0],
    [10,   -2, -1, 'H08',  8, 12, 0],
    [10,   -2, -1, 'H09',  9, 12, 0],
    [10,   -2, -1, 'H10', 10, 12, 0],
    [10,   -2, -1, 'H11', 11, 12, 0],
    [10,   -2, -1, 'H12', 12, 12, 0],
    [10,   -2, -1, 'H13', 13, 12, 0],  

    [100,   2, -1, 'C01',  1, 12, 0],
    [100,   2, -1, 'C02',  2, 12, 0],
    [100,   2, -1, 'C03',  3, 12, 0],
    [100,   2, -1, 'C04',  4, 12, 0],
    [100,   2, -1, 'C05',  5, 12, 0],
    [100,   2, -1, 'C06',  6, 12, 0],
    [100,   2, -1, 'C07',  7, 12, 0],
    [100,   2, -1, 'C08',  8, 12, 0],
    [100,   2, -1, 'C09',  9, 12, 0],
    [100,   2, -1, 'C10', 10, 12, 0],
    [100,   2, -1, 'C11', 11, 12, 0],
    [100,   2, -1, 'C12', 12, 12, 0],
    [100,   2, -1, 'C13', 13, 12, 0],

    [1000, -2, -1, 'D01',  1, 12, 0],
    [1000, -2, -1, 'D02',  2, 12, 0],
    [1000, -2, -1, 'D03',  3, 12, 0],
    [1000, -2, -1, 'D04',  4, 12, 0],
    [1000, -2, -1, 'D05',  5, 12, 0],
    [1000, -2, -1, 'D06',  6, 12, 0],
    [1000, -2, -1, 'D07',  7, 12, 0],
    [1000, -2, -1, 'D08',  8, 12, 0],
    [1000, -2, -1, 'D09',  9, 12, 0],
    [1000, -2, -1, 'D10', 10, 12, 0],
    [1000, -2, -1, 'D11', 11, 12, 0],
    [1000, -2, -1, 'D12', 12, 12, 0],
    [1000, -2, -1, 'D13', 13, 12, 0]
]

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
    EMP: 'images/single_cards/EMPTY.svg',
    ACE: 'images/single_cards/ACE-SPADE.svg',
    SHF: 'images/single_cards/SHUFFLE.svg',
    SEP: 'images/single_cards/SEPARATOR.svg',
    STK: 'images/single_cards/STOCK.svg',
    WST: 'images/single_cards/WASTE.svg',
}

// [[1]total moves, [2]moves since moving card, [3]number of wins, [4]number of losses, [5]total score]
const USER_SCORE = [0, 0, 0, 0, 0]


// -- initialization of variables -- //
let startingTableau;
let shuffledCards;

// global variables for top card and bottom card
let cardAtPlay;
let cardOnBottom;
let theTopCard;
let theBottomCard;
let userScore;

const mainElement = document.querySelector('main')

/* ####################################### */
/* ########### EVENT LISTENERS ########### */
/* ####################################### */

mainElement.addEventListener('click', (evt) => {
    let card = evt.target.id 
    if (card === 'empty') return;
    console.log(evt)
    if (card === "WST13" || card === "STK12" || evt.target.innerText === "Play") clickShuffle();
    if (findCardLocation(card) > 11) return;
    flip(card)
    removeDivs()
    updateCards(startingTableau);
    evt.target.classList.remove("card-selection")
    render();
})

/* ########### DRAG START ########### */
// dragstart -> 
// (1) Add the dragged card into a global variable (array), 'cardAtPlay'; and
// (2) deletes content of the global variable (array), 'cardOnBottom', (thereby resetting it).
mainElement.addEventListener('dragstart', (evt) => {
    let target = evt.target;
    cardAtPlay.unshift(target.id)
    deleteArray(cardOnBottom)
    return false;
})

/* ########### DRAG ENTER ########### */
// dragenter -> 
// (1) Responds only if the 'evt.target.alt' = 1 (which is set by 'getDisplayImage()'); and
// (2) When something is dragged into an area, the css is modified to show an outline of the drop area; and
// (3) the event object is assigned to the global variable, 'cardOnBottom'.
mainElement.addEventListener('dragenter', (evt) => {
    if (evt.target.alt != 1) return;
    if (evt.target.alt == undefined || evt.target.alt == null) return;
    evt.target.classList.add("card-selection");
})

/* ########### DRAG LEAVE ########### */
// dragleave -> 
// (1) When something is dragged out of area, the default activity of drag-over is prevented
mainElement.addEventListener('dragleave', (evt) => {
    if (evt.target.alt != 1) return;
    if (evt.target.alt == undefined || evt.target.alt == null) return;
    evt.target.classList.remove("card-selection");
    });  

mainElement.addEventListener('dragover', (evt) => {
        evt.preventDefault()
})

/* ########### DRAG OVER ########### */
// call drag-over event and remove the default. This needs to occur when something is dropped
const deactivateDragOver = () => {
    mainElement.addEventListener('dragover', (evt) => {
        cardOnBottom.unshift(evt.target.id)
    })
}

/* ###########   DROP   ########### */
// drop ->
// (1) Adds the img id of the bottom image to the global variable, 'cardOnBottom',
// dropped card event listener, removes the css of any outlined sections to remove the outline
mainElement.addEventListener('drop', (evt) => {
    // guards -> everything except div elements that contain data
    deactivateDragOver()
    if (evt.target.id === 'empty'){
        cardOnBottom.unshift(evt.target.id )
        return;
    }
    cardOnBottom.unshift(evt.target.id)
    updateBottomCard(cardOnBottom[0])
    updateTopCard(cardAtPlay[0])

    if (check()) {
        relocateCard()
    }
    removeDivs()
    updateCards(startingTableau);

    evt.target.classList.remove("card-selection")
  
    render();
});


/* ####################################### */
/* ############## FUNCTIONS ############## */
/* ####################################### */

// -- functions-- //
init();

// checkWin() ->
function checkWin(){
    if ((startingTableau[7].length + startingTableau[7].length + startingTableau[7].length + startingTableau[7].length) === 56){
    console.log("Win!")
    }
}

// check() -> checks to see if the card can be placed where it is placed. 
function check(){
    let topCard = theTopCard;
    let bottomCard = theBottomCard
    if (bottomCard[5] < 7){
        console.log('A in tableau')
        // if -> (1) top card is a King && (2) top value - bottom value = -1
        if (topCard[4] === 13 && topCard[4] - bottomCard[4] === -1) {
            console.log('B in tableau and true (K)')
            return true};
        // if -> (1) top + bottom card color = 0 && (2) top value - bottom value = -1
        if (bottomCard[1] + topCard[1] === 0 && topCard[4] - bottomCard[4] === -1) {
            console.log('C in tableau and true (values match)**')
            // if the 'bottomCard' is in the middle of the stack, return false
            if (findCardHasChildren()) return false;
            return true};
        console.log('G- False tableau')
    } else if (bottomCard[5] > 6 && bottomCard[5] < 11){
        // if -> (1) top card is an ace && top value - bottom value = 1
        if (topCard[4] === 1 && topCard[4] - bottomCard[4] === 1) {
            console.log('D in foundation and true (A)')
            return true};
        // if -> (1) top card suite === bottom card suit && (2) top value - bottom value = 1
        if (bottomCard[0] === topCard[0] && topCard[4] - bottomCard[4] === 1){
            console.log('E in tableau and true (values match)')
            return true;
        } 
        console.log('G- False foundation')
    }
    console.log('F- false')
    return false;   
}

// flip(card) => flips card by changing position [2] of the array, if:
// card is on top of stack
// card[6] != 0, 
function flip(card) {
    let cardId
    if (typeof card === 'array') {
        cardId = card[3]
    } else if (typeof card === 'string') {
        cardId = card
    }
    startingTableau.forEach((column, colIndex) => {
        column.forEach((cardArray, rowIndex) => {
            if (cardId === cardArray[3] && cardArray[6] === column.length-1) {
                let status = parseInt(-cardArray[2])
                cardArray.splice(2, 1, status)
            }
        })
    })
}



function clickShuffle(){
    // base-case: If there is only one card in col[12] (just the placeholder)
    if (startingTableau[12].length < 2) {
        // base-case: and if the waste pile is empty, push, and return.  
        if (startingTableau[13].length > 1){
            startingTableau[12].push(...startingTableau[13].splice(1, startingTableau[13].length))
        }
        return;}
    // If there is more than one card in the deal deck, transfer cards from 'deal' [11] deck to 'waste' deck [12]
    if (startingTableau[11].length > 1){
        let noCardsToMove = startingTableau[11].length - 1
        startingTableau[13].push(...startingTableau[11].splice(1, noCardsToMove))
    }
    // If there are 3 cards or less, just push them one-by-one
    if (startingTableau[12].length < 4) {
        startingTableau[11].push(startingTableau[12].pop())
    // otherwise, puth three cards at a time, from 'stock' deck to 'deal' deck 
    } else {
        for (let n=3; n > 0; n--){
            startingTableau[11].push(startingTableau[12].pop())
        }
    }
    turnOverCards()
}

// turnOverCards() -> Turns over the cards so cards are face-down in the 'deal' and 'waste'
function turnOverCards(){
    startingTableau[12].forEach((card) => {
        if (card[2] !== 0) card.splice(2, 1, -1)});
    startingTableau[13].forEach((card) => {
        if (card[2] !== 0) card.splice(2, 1, -1)})
}

// deleteArray() -> deletes the entire contents of an array
function deleteArray(array){
    array.splice(0, array.length)
}

// findCardLocation(card) => returns the column information of the card
function findCardLocation(card){    
    let cardId;
    let cardCol;
    if (typeof card === 'array') cardId = card[3];
    else if (typeof card === 'string') cardId = card;
    startingTableau.forEach((column, colIndex) => {
        column.forEach((array) => {if (array[3] === cardId) cardCol = colIndex;})
    })
    return cardCol
}

// findCardHasChildren(card) => returns boolean, whether there are downstream cards associated with it. 
function findCardHasChildren(){    
    let cardColIdx = theBottomCard[5]
    let cardRowIdx = theBottomCard[6]
    return startingTableau[cardColIdx].length-1 === cardRowIdx ? false : true
}

// 'updateTopCard(card)' -> takes a string parameter, 'card' (e.g. 'H11' => Heart-11)
//  and reassigns the global variable, 'theTopCard' with a slice of that card information. 
// Why? -> to assign the top card info to 'theTopCard' upon addEventListener(drop) activation
function updateTopCard(card){
    deleteArray(theTopCard)
    startingTableau.forEach((column, colIndex) => {
        column.forEach((cardArray, rowIndex) => {
            if (card === cardArray[3]){
                theTopCard = startingTableau[colIndex][rowIndex].slice()
            }
        })
    })
}

// 'updateBottomCard(card)' -> takes a string parameter, 'card' (e.g. 'D12' => Diamond-12)
//  and reassigns the global variable, 'theTopCard' with a slice of that card information. 
// Why? -> to assign the bottom card info to 'theBottomCard' upon addEventListener(drop) activation
function updateBottomCard(card){
    deleteArray(theBottomCard)
    startingTableau.forEach((column, colIndex) => {
        column.forEach((cardArray, rowIndex) => {
            if (card === cardArray[3]){
                theBottomCard = startingTableau[colIndex][rowIndex].slice()
            }
        })
    })
}

// updateCards() -> updates the position information stored inside the cards after moving the card.
// Adjusts discrepencies between its current position and the card[5]->(column) or card[6]->(row) positions
function updateCards(array){
    array.forEach((column, colIndex) => {
        column.forEach((card, rowIndex) => {
            if (card[5] !== colIndex){
                card.splice(5, 1, colIndex)
            }
            if (card[6] !== rowIndex){
                card.splice(6, 1, rowIndex)
            }
        })
    })
}

// relocateCard() -> updates the position information inside the startingTableau. 
// Using pop() and push(), moves the card from where the user dragged the card, to where
// ther user dropped the card. 
function relocateCard(){
    // Base-case: If the card is flipped down, or is a placeholder card, escape.
    if (theTopCard[2] <= 0) return;
    let topCardColIdx = theTopCard[5]
    let topCardRowIdx = theTopCard[6]
    let botCardColIdx = theBottomCard[5]
    // A user drags a card in the middle of stack - 
    // if: dragged card is not top card, splice out the number of cards from that card to top card
    // else : pop and push the top card to the new location
    if (theTopCard[6] !== startingTableau[parseInt(topCardColIdx)].length-1){
        let restack = startingTableau[parseInt(topCardColIdx)].splice(topCardRowIdx, startingTableau[parseInt(topCardColIdx)].length - topCardRowIdx)    
        console.log(restack)
        startingTableau[parseInt(botCardColIdx)].push(...restack)
        console.log("AA - this pathway")
    } else{
        let restack = startingTableau[parseInt(topCardColIdx)].pop()    
        startingTableau[parseInt(botCardColIdx)].push(restack)
        console.log("BB - this else pathway")
    }
}

// getDisplayImage() -> The parameter is a card array. Identifies the type of card ('card[3]'),
// retrieves it from the CARD_IMAGES object, and returns an html <img> object.
// Also attaches an id=cardtype attribute, and alt=+1 or -1 attribute to indicate facing up or down.
function getDisplayImage(card) {
    if (card === undefined) return;
    let newImage = document.createElement('img')
    newImage.className ="cardImg"
    newImage.setAttribute("draggable",'true')
    if ('-1' == card[2]){
        newImage.src = CARD_IMAGES['BAK']
        newImage.alt = card[2]
        newImage.id = card[3]
        return newImage;
    } else if ('1' == card[2]){
        newImage.src = CARD_IMAGES[card[3]]
        newImage.alt = card[2]
        newImage.id = card[3]
        return newImage;
    } else if ('0' == card[2]){
        const cardName = card[3].match(/[A-Z]{3}/gm)
        newImage.src = CARD_IMAGES[cardName]
        newImage.alt = card[2]
        newImage.id = card[3]
        return newImage;
    }
} 

// removeDivs() => clears the board of all cards to reset
function removeDivs() {
    startingTableau.forEach((column, colIndex) => {
        column.forEach((card, rowIndex) => {
            let divElement = document.getElementById(`c${card[5]}r${card[6]}`)
            divElement.remove()
        })
    })
}

// renderBoard() -> Reads through column and row information in all cards in 'startingTableau' array,
// and sets that card in a div that is further appended to the corresponding column div. 
// Works with getDisplayImage() to identify the correct image file. 
function renderBoard() {
    // removes the initial image to render the board correctly.   
    startingTableau.forEach((column, colIndex) => {
        let columnElement = document.getElementById(`c${colIndex}`)
        column.forEach((card, rowIndex) => {
            let cardDiv = document.createElement('div')
            let cardName = `c${card[5]}r${card[6]}`
            cardDiv.setAttribute("id", `${cardName}`)
            cardDiv.appendChild(getDisplayImage(card))
            columnElement.appendChild(cardDiv)
        })
    })
}

// renderFlipTopCard() -> reads through 'startingTableau', and selectively makes top card flip up
function renderFlipTopCard(){
    startingTableau.forEach((column, colIndex) => {
        if (column.length-1 > 0 ){
                if (column[column.length-1][2] === -1 && column[column.length-1][5] < 12){
                    column[column.length-1].splice(2, 1, 1)
                }
        }
    })
}

// shuffle(array) -> Randomizes an array, and returns a new random array. 
function shuffle(array) {
    let newArray = [];
    for (let i = array.length; i > -1; i--){
        let n = Math.floor(Math.random()*i);
        newArray.push(array.splice(n, 1)[0])}
    return newArray
}

//initalizeStartingTableau() -> adds the empty cards into the 'startingTableau' array. 
function initalizeStartingTableau(){
    startingTableau.forEach((column, colIndex) => {
        startingTableau[colIndex].unshift((BOARD_INIT.shift()))
    })
}

// renderInitialBoard() -> Passes the initial deck through the 'startingTableau' array. 
function renderInitialBoard(array) {
    let n = 51
    startingTableau.forEach((column, colIndex) => {
        column.forEach((row, rowIndex) => {
            if (Array.isArray(row)){
                //pass
            } else{
            if (row > 0){
                array[n].splice(2, 1, 1) 
            }
                array[n].splice(5, 1, colIndex); 
                array[n].splice(6, 1, rowIndex); 
                startingTableau[colIndex].splice(rowIndex, 1, array[n]);
            n--;}
        })
    })
}

// render() -> Renders the board.
function render(){
    renderFlipTopCard()
    renderBoard()
    console.log(startingTableau)
    checkWin()
};  


function init() {
    cardAtPlay =[]
    cardOnBottom = []
    theTopCard = []
    theBottomCard = []
    shuffledCards = shuffle(CARD_LIST);
    userScore = USER_SCORE;
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
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        []
    ]  
    initalizeStartingTableau()
    renderInitialBoard(shuffledCards)
    render();
}