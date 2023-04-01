// state information
// CARD_LIST[i] = card;
// card[0]= suit
// card[1]= color
// card[2]= up or down
// card[3]= cardname
// card[4]= value
// card[5]= col position
// card[6]= row position

const BOARD_INIT = [
[0, 0, 0, 'EMP', 14, 0, 0],
[0, 0, 0, 'EMP', 14, 1, 0],
[0, 0, 0, 'EMP', 14, 2, 0],
[0, 0, 0, 'EMP', 14, 3, 0],
[0, 0, 0, 'EMP', 14, 4, 0],
[0, 0, 0, 'EMP', 14, 5, 0],
[0, 0, 0, 'EMP', 14, 6, 0],
[0, 0, 0, 'ACE',  0, 7, 0],
[0, 0, 0, 'ACE',  0, 8, 0],
[0, 0, 0, 'ACE',  0, 9, 0],
[0, 0, 0, 'ACE', 0, 10, 0],
[0, 0, 0, 'EMP', 0, 11, 0],
[0, 0, 0, 'EMP', 0, 12, 0]
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
        ACE: 'images/single_cards/ACE.svg'
    }

// -- initialization of variables -- //
let startingTableau;
let shuffledCards;

// global variables for top card and bottom card
let cardAtPlay;
let cardOnBottom;
let theTopCard;
let theBottomCard;


const mainElement = document.querySelector('main')

/* ####################################### */
/* ########### EVENT LISTENERS ########### */
/* ####################################### */

mainElement.addEventListener('click', (evt) => {

    // if (evt.target.id ==="shuffle" || evt.target.id ==="stock"){
    //     shuffleDeck()
    //     return
    // }

    //let isCardonTop = isCardTopAndDown(evt.target.id)
    //references array library through is CardTopAndDown; if card is on top, flip
    if (isCardTopAndDown(evt.target.id) === true){
        flipCard(cardArray[evt.target.id])
    }
    render()
})

/* ########### DRAG START ########### */
// dragstart -> 
// (1) Add the dragged card into a global variable (array), 'cardAtPlay'; and
// (2) deletes content of the global variable (array), 'cardOnBottom', (thereby resetting it).
mainElement.addEventListener('dragstart', (evt) => {
    let target = evt.target;
    cardAtPlay.unshift(target.id)
    deleteArray(cardOnBottom)
})

/* ########### DRAG ENTER ########### */
// dragenter -> 
// (1) Responds only if the 'evt.target.alt' = 1 (which is set by 'getDisplayImage()'); and
// (2) When something is dragged into an area, the css is modified to show an outline of the drop area; and
// (3) the event object is assigned to the global variable, 'cardOnBottom'.
mainElement.addEventListener('dragenter', (evt) => {
    if (evt.target.alt != 1) return;
    if (evt.target.alt == undefined || evt.target.alt == null) return;
    evt.target.parentNode.classList.add("card-selection");
})

/* ########### DRAG LEAVE ########### */
// dragleave -> 
// (1) When something is dragged out of area, the default activity of drag-over is prevented
mainElement.addEventListener('dragleave', (evt) => {
    if (evt.target.alt != 1) return;
    if (evt.target.alt == undefined || evt.target.alt == null) return;
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
        console.log(cardOnBottom)

        return;
    }
    cardOnBottom.unshift(evt.target.id)
    updateBottomCard(cardOnBottom[0])
    updateTopCard(cardAtPlay[0])

    //moveCards()
    
    relocateCard()
    removeDivs()
    updateCards(startingTableau);

    console.log(checkAddFoundation())
    console.log(checkAddTableau())


    evt.target.parentNode.classList.remove("card-selection")
  
    render();
});







// -- functions-- //
init();


// -> moves the card 

// checkMove() -> checks if the move is possible






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// from previous version of the game:


// checks to see if the card can be dropped on foundation (aces)

// checkAddFoundation() -> Returns true if the card can be dropped on the foundation area (top area)
// 
function checkAddFoundation() {
    let topCard = theTopCard;
    let bottomCard = theBottomCard
    // The following checks to see if the bottom card is located in the columns 7->10 (foundation)
    if (bottomCard[5] > 6 && bottomCard[5] < 11){
        // if -> (1) top card is an ace && top value - bottom value = 1
        if (topCard[4] === 1 && topCard[4] - bottomCard[4] === 1) return true;
        // if -> (1) top card suite === bottom card suit && (2) top value - bottom value = 1
        if (bottomCard[0] === topCard[0] && topCard[4] - bottomCard[4] === 1){
            return true;
        } else return false;
    }
}


// checkAddTableau() -> Checks to see if the card can be placed in the tableau area (bottom area)
// 
function checkAddTableau(){
    let topCard = theTopCard;
    let bottomCard = theBottomCard
    if (bottomCard[5] < 7){
        // if -> (1) top card is a King && (2) top value - bottom value = -1
        if (topCard[4] === 1 && topCard[4] - bottomCard[4] === -1) return true;
        // if -> (1) top + bottom card color = 0 && (2) top value - bottom value = -1
        if (bottomCard[1] + topCard[1] === 0 && topCard[4] - bottomCard[4] === -1) return true ;
    }
    return false       
}

function checkAddEmpty(){
    if (cardOnBottom[0] === empty){
    }
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

// isEmptyStack() -> returns boolean if the stack is empty (true) or not (false). 
function isEmptyStack(){

}

/* ####################################### */
/* ############## FUNCTIONS ############## */
/* ####################################### */

// deleteArray() -> deletes the entire contents of an array
function deleteArray(array){
    array.splice(0, array.length)
}


//function  (bottomCard, topCard) 
// unfinished, untested
// returns the card column and row as array [col, row]
function findCardLocation(card){
    //card is a string or array. 
    let cardId;
    let cardColRow = []
    if (typeof card === array){
        cardId = card[3]
    } else if (typeof card === string){
        cardId = card
    }
    startingTableau.forEach((column, colIndex) => {
        column.forEach((cardArray, rowIndex) => {
            if (cardId === cardArray[3]){
                cardColRow.push(cardArray[5])
                cardColRow.push(cardArray[6])
                return cardColRow;
            }
        })
    })
}


// 'outputCard(card)' -> takes a string parameter, 'card', and returns the array of the card 
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


// 'outputCard(card)' -> takes a string parameter, 'card', and returns the array of the card 
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


// //
// function moveCards(){
//     let topCard = theTopCard;
//     let bottomCard = theBottomCard
//     topCard.splice(5, 1, bottomCard[5])
//     topCard.splice(6, 1, bottomCard[6]+1)
//     console.log(topCard)
//     console.log(bottomCard)
//     console.log(startingTableau)
// }
// // [1, 2, 1, 'S07', 7, 3, 4] // top card
// // [10, -2, 1, 'H08', 8, 5, 6] // bottom card


// updateCards() -> updates the position information stored inside the cards after moving the card.
// Adjusts discrepencies between its current position and the card[5]->(column) or card[6]->(row) positions
function updateCards(array){
    array.forEach((column, colIndex) => {
        column.forEach((card, rowIndex) => {
            if (card[5] !== colIndex){
                card.splice(5, 1, colIndex)
                console.log("triggered")
            }
            if (card[6] !== rowIndex){
                card.splice(6, 1, rowIndex)
                console.log("triggered")
            }
        })
    })
}

// relocateCard() -> updates the position information stored inside the cards after moving the card.
// Adjusts discrepencies between its current position and the card[5]->(column) or card[6]->(row) positions
function relocateCard(){
    let topCardColIdx = theTopCard[5]
    let botCardColIdx = theBottomCard[5]
    let restack = startingTableau[parseInt(topCardColIdx)].pop()    
    startingTableau[parseInt(botCardColIdx)].push(restack)
}

// getDisplayImage() -> The parameter is a card array. Identifies the type of card ('card[3]'),
// retrieves it from the CARD_IMAGES object, and returns an html <img> object.
// Also attaches an id=cardtype attribute, and alt=+1 or -1 attribute to indicate facing up or down.
function getDisplayImage(card) {
    if (card === undefined) return;
    let newImage = document.createElement('img')
    newImage.className ="cardImg"
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
        newImage.src = CARD_IMAGES[card[3]]
        newImage.alt = card[2]
        newImage.id = card[3]
        return newImage;
    }
} 

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
    

// flipsCards() -> Ensures that cards in the tableau are 
function flipsCards(array){
}

// shuffle(array) -> Randomizes an array, and returns a new random array. 
function shuffle(array) {
    let newArray = [];
    for (let i = array.length-1; i > -1; i--){
        let n = Math.floor(Math.random()*i);
        newArray.push(array.splice(n, 1)[0])
    }
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
            n--;
        }
        })
    })
}

// render() -> Renders the board.
function render(){

    renderBoard()
    console.log(startingTableau)
};


function init() {
    cardAtPlay =[]
    cardOnBottom = []
    theTopCard = []
    theBottomCard = []
    shuffledCards = shuffle(CARD_LIST);
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
    initalizeStartingTableau()
    renderInitialBoard(shuffledCards)
    render();
}