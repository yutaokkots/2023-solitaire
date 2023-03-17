// state information
// CARD_LIST[i] = card;
// card[0]= suit
// card[1]= color
// card[2]= up or down
// card[3]= cardname
// card[4]= value
// card[5]= col position
// card[6]= row position

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


// -- initialization of variables -- //
let startingTableau;
let shuffledCards;


const mainElement = document.querySelector('main')


// -- event listeners -- //

bodyElement.addEventListener('click', (evt) => {

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


// -- functions-- //
init();


// -> moves the card 

// checkMove() -> checks if the move is possible






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// from previous version of the game:


// checks to see if the card can be dropped on foundation (aces)


function droppingOnFoundation (card) {
    // let topCard = cardArray[cardAtPlay[0]];
    // let foundationColNum = card.slice(5, card.length)
    
    // The following checks to see if the bottom card is located in the columns 7->10 (foundation)
    if (bottomCard[5] > 6 && bottomCard[5] < 11){
        if (topCard[4] === 1){
            return true;
        } 
        if (bottomCard[0] === topCard[0] &&  topCard[4] - bottomCard[4] === 1){
            return true;
        } else {
            false
        }
}}


function droppingOnTableau (card){
    // establishes the columns of where the cards are coming from and where they are landing

    let topCard = cardArray[cardAtPlay[0]];
    let bottomCard = cardArray[card];

    if (topCard[4] === 13){
        return true;
    } 
    // The following checks to see if the bottom card is located in the columns 0->6 (tableau)
    if (bottomCard[5] < 7){
        //if the bottom card color and top card color together equal 0, then different colors
        if (bottomCard[1] + topCard[1] === 0 && topCard[4] - bottomCard[4] === -1){
            return true
        } 
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

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

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

//
function moveCards(){

}


// updateCards() -> updates the position information stored inside the cards after moving them.
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

// function renderBoard(){}
function renderBoard () {
    // removes the initial image to render the board correctly.     // do not remove!
    startingTableau.forEach((column, colIndex) => {
        let columnElement = document.getElementById(`c${colIndex}`)
        column.forEach((card, rowIndex) => {
            let cardDiv = document.createElement('div')
            let cardName = `c${card[5]}r${card[6]}`
            let newId = document.createAttribute("id")
            newId.value = cardName
            cardDiv.setAttribute(newId)

        })
    })
    
    
    // removeImage()

    // for (let arrayInfo in cardArray) {
    //     card = cardArray[arrayInfo]

    //     let stackName = `c${card[5]}r${card[6]}`
    //     let stackElement = document.getElementById(stackName);
    //      // adds the images back into the div element  
    //     stackElement.appendChild(getDisplayImage(card))

    // // this function flips up any top card that is facing down
    // for (let arrayInfo in cardArray) {
    //     card = cardArray[arrayInfo]
    // }
}
}


// flipsCards() -> Ensures that cards in the tableau are 
function flipsCards(array){
}

// shuffle(array) -> randomizes an array
function shuffle(array) {
    let newArray = [];
    for (let i = array.length-1; i > -1; i--){
        let n = Math.floor(Math.random()*i);
        newArray.push(array.splice(n, 1)[0])
    }
    return newArray
}

// renderInitialBoard() -> passes the initial deck through the startingTableau
function renderInitialBoard(array) {
    let n = 51
    startingTableau.forEach((column, colIndex) => {
        column.forEach((row, rowIndex) => {
            if (row > 0){
                array[n].splice(2, 1, 1) 
            }
                array[n].splice(5, 1, colIndex); 
                array[n].splice(6, 1, rowIndex); 
                startingTableau[colIndex].splice(rowIndex, 1, array[n]);
            n--;
        })
    })
}

function render(){
    updateCards(array);
};


function init(){
    shuffledCards = (CARD_LIST);
    
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
    renderInitialBoard(shuffledCards)
    console.log(startingTableau)
    render();
}