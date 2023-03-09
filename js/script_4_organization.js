import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES, startingTableau} from "./constants.js";
console.log("initialized file")



/*----- constants -----*/
// see constants.js





/*----- app's state (variables) -----*/

let score;
let currentDeck;                // contains non-repeating card information after randomization //randomShuffle()
let currentDeckObjects;         // contains each card object: {reference to DOM objects, their states of flipped over or not, }
let tableauStatus;              // the various decks in the tableau and what they contain     
let stockCards;


//global variable
let currentBottomCardType;    //this variable holds the information about what card the user is currently dragging
// holds master information about 
// 1) card is face or back 

//should be a key:value pairing of all card information and their DOM objects, used for reference
let allCardObjectKeyValue = {};

let allCardDivElements = {};


let allCardRefElements = {};


let cardObjectKeyValue = {}


const boardArray = [
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
const boardNode = { 
    "tableau0":[],
    "tableau1":[],
    "tableau2":[],
    "tableau3":[],
    "tableau4":[],
    "tableau5":[],
    "tableau6":[],
    "foundation1":[],
    "foundation2":[],
    "foundation3":[],
    "foundation4":[],
    "played":[],
    "stock":[],
    "discard":[]
    }
    
    const stockElement = document.querySelector('#stock')
    
    const tableau1Elements = document.querySelectorAll('#tableau1 div')
    const tableau2Elements = document.querySelectorAll('#tableau2 div')
    const tableau3Elements = document.querySelectorAll('#tableau3 div')
    const tableau0Elements = document.querySelectorAll('#tableau0 div')
    const tableau4Elements = document.querySelectorAll('#tableau4 div')
    const tableau5Elements = document.querySelectorAll('#tableau5 div')
    const tableau6Elements = document.querySelectorAll('#tableau6 div')
    const foundation1Elements = document.querySelectorAll('#foundation1 div')
    const foundation2Elements = document.querySelectorAll('#foundation2 div')
    const foundation3Elements = document.querySelectorAll('#foundation3 div')
    const foundation4Elements = document.querySelectorAll('#foundation4 div')
    const playedElements = document.querySelectorAll('#played div')
    const stockElements = document.querySelectorAll('#stock div')
    const discardElements = document.querySelectorAll('#discard div')
    


/*----- cached element references -----*/

// Makes the card outlines placed on screen (having dashed lines) into objects
const allEmptyCardAreas = document.querySelectorAll(".foundation-origin, .tab-origin, .stock-origin")
allEmptyCardAreas.forEach((card) => {
    let cardUrl = CARD_LIBRARY["EMP"]["img"] 
    card.innerHTML = `<img data-card='EMP' data-inplay='1' src=${cardUrl}>`
    card.setAttribute("data-card", "EMP")
    card.setAttribute("data-inplay", "-1")
})


const mainElement = document.querySelector('main')






//dragged objects are passed through to determine if the top card is compatible with the bottom card
const checkDroppable = (draggedCard, bottomCard) => {
    if (draggedCard.type !== "dragenter" && bottomCard.type !== "dragenter"){
        return false;
    }
    let draggedCardId   = draggedCard.target.getAttribute('data-card')
    let draggedCardColor = CARD_LIBRARY[draggedCardId]['color']
    let draggedCardValue = CARD_LIBRARY[draggedCardId]['value']
    let draggedCardSuit = CARD_LIBRARY[draggedCardId]['suit']
    let draggedCardUpperAdj = CARD_LIBRARY[draggedCardId]['after']
    let draggedCardLowerAdj = CARD_LIBRARY[draggedCardId]['before']
    let bottomCardId     = bottomCard.target.getAttribute('data-card')
    let bottomCardColor = CARD_LIBRARY[bottomCardId]['color']
    let bottomCardValue = CARD_LIBRARY[bottomCardId]['value']
    let bottomCardSuit  = CARD_LIBRARY[bottomCardId]['suit']
    console.log(allCardRefElements) /////// delete
    // if the card is in the tableau area, descending order + alternate color
    if (bottomCard.fromElement.id === "tableau") {
        if (draggedCardValue == 13 && bottomCardValue == -1) {
            // console.log(draggedCardId)      //delete later
            // console.log(bottomCardId)       //delete later
            return true;
        } else {
            let isDiffColorDecreasNum = (draggedCardColor !== bottomCardColor && draggedCardUpperAdj === bottomCardValue) ? true : false;
            // console.log(draggedCardId)      //delete later
            // console.log(bottomCardId)       //delete later
            return isDiffColorDecreasNum;
        }
    } else if (bottomCard.fromElement.id === "foundation"){
        // console.log('bottom card is in foundation');    //delete later
        if (draggedCardValue == 1 && bottomCardValue == -1) {
            // console.log(draggedCardId)      //delete later
            // console.log(bottomCardId)       //delete later
            return true;
        } else {
            let result = (draggedCardSuit === bottomCardSuit && draggedCardLowerAdj === bottomCardValue) ? true : false;
            // console.log(draggedCardId)      //delete later
            // console.log(bottomCardId)       //delete later
            return result;
        }
    }
}   

// dropped card event listener, removes the css of any outlined sections to remove the outline
mainElement.addEventListener('drop', (evt) => {
    // guards -> everything except div elements that contain data
    deactivateDragOver()

    // let currentDraggedCardType = evt
    // console.log(checkDroppable(currentDraggedCardType, currentBottomCardType));

    evt.target.parentNode.classList.remove("card-selection")
});


// At the end of where the card is dragged and released, this function calls the checkDroppable function to see drop can proceed
mainElement.addEventListener('dragend', (evt) => {
    // guards -> everything except div elements that contain data

    let currentDraggedCardType = evt
    // console.log(currentDraggedCardType )

    console.log(checkDroppable(currentDraggedCardType, currentBottomCardType));
    checkDroppable(currentDraggedCardType, currentBottomCardType);
    let topCard = currentDraggedCardType.target.getAttribute('data-card')
    let bottomCard = currentBottomCardType.target.getAttribute('data-card')
    // console.log(bottomCard)

    if (checkDroppable(currentDraggedCardType, currentBottomCardType)) {
        //revealCard(topCard);
        moveCard(topCard, bottomCard);

    }

});

// the dragged item can be determined by:
// evt.target.getAttribute('data-card')
// evt.target.getAttribute('data-inplay')



/*----- functions -----*/

// Find the card at hand




// const revealCard = (topCard) => {

//     console.log(allCardDivElements[topCard].parentNode.lastChild.dataset.inplay)
// }

const moveCard = (topCard, bottomCard) => {
    console.log(topCard);
    console.log(bottomCard);
    for (let keys in allCardRefElements){
        allCardRefElements[keys].forEach((x, i) => {
            if (x === topCard && i === allCardRefElements[keys].length - 1){
                let poppedValue = allCardRefElements[keys].pop()
                for (let keys in allCardRefElements){
                    allCardRefElements[keys].forEach((x, i) => {
                        if (x === bottomCard && i === allCardRefElements[keys].length - 1){
                            allCardRefElements[keys].push(poppedValue)
                        }
                    })
                }
            }
        })} 
    for (let keys in allCardRefElements){
        allCardRefElements[keys].forEach((x, i) => {
            if (x === bottomCard && i === allCardRefElements[keys].length - 1){
                allCardRefElements[keys].push(poppedValue)
            }
        })
    }

    console.log(boardNode.tableau2.lastChild)
    console.log(boardArray)
    // boardNode.forEach((node) => console.log(node))
    // for (let key in cardObjectKeyValue){
    //     console.log(key)
    //     console.log(cardObjectKeyValue[key])
    //     cardObjectKeyValue[key].
    // }
    updateDataObject()
    //console.log(allCardRefElements)
    //console.log(cardObjectKeyValue )
    //allCardDivElements[topCard].parentNode.removeChild(allCardDivElements[topCard])
    //allCardDivElements[bottomCard].parentNode.appendChild(allCardDivElements[topCard])
}



function checkPlacement(){};    // checks to see if dragged card is able to be placed at location


// []                      // shown     [13] 11
// [],                     // stock     [11] 12
// [],                     // waste     [12] 13

function dealCardsFromStock(){
    if (boardArray[11].length > 0) {
        boardArray[1].forEach((card) => {
            let discardedCard = boardArray[11].shift(card)
            // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
            boardArray[13].push(discardedCard )
        })
    }
    if (boardArray[11].length < 3){
        for (let i = boardArray[12].length; i > 0; i--){
            let dealtCard = boardArray[12].pop()
            // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
            boardArray[11].push(dealtCard)
                        
        }
    } else if (boardArray[12].length > 2){
        let dealtCard = boardArray[11].pop()
        // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
        boardArray[11].push(dealtCard)
    }
};         // deal out the stock cards and reveal top three

function resetStockFromWaste(){
    if (boardArray[11].length > 0 || boardArray[12].length > 0){
        dealCardsFromStock()}
    for (let i = boardArray[13].length; i > 0; i--){
        let restockCard = boardArray[13].shift()
        boardArray[13].push(restockCard)
    }    
        
    // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
}





/* ################################################ */
/* ########### INITIALIZATION FUNCTIONS ########### */



// const makeCardO = (cardIdentity, cardUpOrDown) => {
//     let newDiv= document.createElement('div')
//     // uses constant CARD_LIBRARY to get the image source
//     let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
//     newDiv.innerHTML = `<img data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' src=${cardUrl}>`
//     newDiv.dataset.card=`${cardIdentity}`
//     newDiv.dataset.inplay=`${cardUpOrDown}`
//     newDiv.draggable = 'true';                  //is this needed?
//     return newDiv
// }

// this is a copy made on 3/7
// // makeDivElementWithCard creates a new div that contains dataset type attributes (e.g. "data-name" within HTML)
// const makeDivElementWithCard = (cardIdentity, cardUpOrDown) => {
//     let newDiv= document.createElement('div')
//     // uses constant CARD_LIBRARY to get the image source
//     let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
//     newDiv.innerHTML = `<img data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' src=${cardUrl}>`
//     newDiv.dataset.card=`${cardIdentity}`
//     newDiv.dataset.inplay=`${cardUpOrDown}`
//     newDiv.draggable = 'true';                  //is this needed? 
//     return newDiv
// }


// makeDivElementWithCard creates a new div that contains dataset type attributes (e.g. "data-name" within HTML)
const addCardToBoard = (cardObject, cardUpOrDown) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
    newDiv.innerHTML = `<img data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' src=${cardUrl}>`
    newDiv.dataset.card=`${cardIdentity}`
    newDiv.dataset.inplay=`${cardUpOrDown}`
    newDiv.draggable = 'true';                  //is this needed?
    return newDiv
}



const updateDataObject = () => {
    for (let keys in allCardDivElements){
        let location = document.querySelector(`${keys}`);
        allCardDivElements[keys].forEach((element) => {
            location.append(element);
        });
    } 
}



// const renderTableau = () => {
//     // create a new div for each column in tableau
//     for (let n=0;n<8;n++) {
//         let nextTableauCol = document.querySelector(`#tableau-${n-1}`)
//         // assign the card to the div
//         startingTableau[n].forEach((isCardUpOrDown) => {
//             let nextCard = dealCardFromDeck()
//             let nextDiv = makeDivElementWithCard(nextCard, isCardUpOrDown)
//             nextTableauCol.appendChild(nextDiv);
//             allCardDivElements[nextCard] = nextDiv;
//         })
//     }
// }




/* ################################################ */
/* ############## STANDARD FUNCTIONS ############## */
/* ################ do not delete  ################ */

const dealCardFromDeck = () => {
    let nextCard = shuffledDeck.pop()
    return nextCard
}


/* ################################################ */
/* ######### INITIALIZATION AND RENDERING ######### */
/* ################ do not delete  ################ */

// break up render() into smaller renderXxxx(), because it cam get bloated
// Render function should transfer all states to user interface. 

// random-shuffles initial deck 




    // allCardDivElements["#stock"] = []
    // allCardRefElements["#stock"] = []
    // while (currentDeck.length > 0){
    //     let nextCard = dealCardFromDeck();
    //     let nextDiv = makeDivElementWithCard(nextCard, -1);
    //     //stockPile.appendChild(nextDiv);
    //     allCardDivElements["#stock"].push(nextDiv);
    //     allCardRefElements["#stock"].push(nextCard);
//        cardObjectKeyValue[nextCard] = nextDiv
        
// const renderTableau = () => {
//     // create a new div for each column in tableau
//     for (let n=0;n<7;n++) {
//         let tableauKey = `tableau-${n+1}`
//         allCardDivElements[tableauKey] = []
//         allCardRefElements[tableauKey] = []

//         startingTableau[n+1].forEach((isCardUpOrDown) => {

//             let card = boardArray[12].pop()
//             if (isCardUpOrDown == -1){
//                 flipCard(allCardObjectKeyValue[card])
//             }
//             boardArray[n].push(card)
            
//             let nextDiv = addCardToBoard(Card, isCardUpOrDown)
//             allCardDivElements[tableauKey].push(nextDiv)
//             //allCardRefElements[tableauKey].push(nextCard)
//             cardObjectKeyValue[nextCard] = nextDiv
//         })
//     }
// }
    

    






//WORK ON THIS FOR 3/6

// const renderBoard2 = () => {
//     for (let keys in allCardRefElements){
//         allCardRefElements[keys].forEach((element) => {
            
//         });
//     } 
// }



/* --- shuffle the cards --- */
const randomShuffle = (cardArr) => {
    let initialDeck = [...cardArr];
    let newDeck = []
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...initialDeck.splice(n, 1));
    };     
    return newDeck;
};


function dealCardsFromStockNode(){
    if (stockElements.length > 0) {
        stockElements.forEach((card) => {
            let discardedCard = stockElements.shift(card)
            // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
            stockElements.push(discardedCard )
        })
    }
    if (boardArray[11].length < 3){
        for (let i = boardArray[12].length; i > 0; i--){
            let dealtCard = boardArray[12].pop()
            // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
            boardArray[11].push(dealtCard)
                        
        }
    } else if (boardArray[12].length > 2){
        let dealtCard = boardArray[11].pop()
        // INSERT FUNCTION HERE TO CAPTURE THIS INFORMATION AND MODIFY GAME BOARD
        boardArray[11].push(dealtCard)
    }
};         // deal out the stock cards and reveal top three


// // takes a node array (e.g. from the stock pile, and just removes and distributes from that pil)
// const dealCardFromStockInit = (nodeArray) => {
//     return nodeArray.pop()
// }


const flipCardInit = (cardObject, toFlipOrNot) => {
    cardObject.dataset.inplay = toFlipOrNot
    return cardObject
}




/* --- flip  the cards --- */
const flipCardFace = (cardObject) => {
    if (cardObject.dataset.inplay > 0) {
        let cardId = cardObject.dataset.card
        cardObject.innerHTML = ''
        let cardUrl = CARD_LIBRARY[cardId]["img"]
        cardObject.innerHTML = `<img data-card='${cardId}' data-inplay='1' src=${cardUrl}>`

    }}

// const flipCard = (cardObject) => {
//     let currentState = cardObject.dataset.inplay
//     cardObject.dataset.inplay = currentState * -1
// }

const shuffledDeck = randomShuffle(CARD_LIST);

// re-doing function 3/7:
// makeDivElementWithCard creates a new div that contains dataset type attributes (e.g. "data-name" within HTML)

const renderDeck = () => {
    shuffledDeck.forEach((cardId) => {
        let newDiv= document.createElement('div')
        let cardUrl = CARD_LIBRARY[cardId]["imgBack"]
        newDiv.innerHTML = `<img data-card='${cardId}' data-inplay='-1' src=${cardUrl}>`
        newDiv.dataset.card=`${cardId}`
        newDiv.dataset.inplay=`-1`
        allCardObjectKeyValue[cardId] = newDiv;

    })
}




const updateNodes = (card) => {
    allCardObjectKeyValue[card]
}

const renderStock = () => {
    while (shuffledDeck.length > 0){
        let nextCard = shuffledDeck.pop()
        boardArray[12].push(nextCard)
    }    

}



const renderTableau = () => {
    startingTableau.forEach((columnArr, columnIndex) => {
        columnArr.forEach((columnCell, rowIndex) => {
            const stackName= `c${columnIndex}r${rowIndex}`
            console.log(stackName)
            const stackElement = document.getElementById(stackName);
            stackElement.innerHTML = `<img data-card='${cardId}' data-inplay='-1' src=${cardUrl}>`
            let nextDiv = flipCardInit(stackElement, isCardUpOrDown)

        })


        let nextTableauCol = document.querySelector(`#tableau${n-1}`)
        // assign the card to the div
        let stockEls = document.querySelectorAll('#stock div')
        let stockCardNodes = Array.from(stockEls)
        startingTableau[n].forEach((isCardUpOrDown) => {
            let nextCard  = dealCardFromStockInit(stockCardNodes)
            let nextDiv = flipCardInit(nextCard, isCardUpOrDown) // changes the flip data of the card from -1 to 1
            flipCardFace(nextCard)                              // actually flips the card
            nextTableauCol.appendChild(nextDiv);                // adds the object to the divs
            //allCardDivElements[nextCard] = nextDiv;


        })

    })
}


const updateBoardNode = () => {
    boardNode["tableau0"] = Array.from(tableau0Elements)
    boardNode["tableau1"] = Array.from(tableau1Elements)
    boardNode["tableau2"] = Array.from(tableau2Elements)
    boardNode["tableau3"] = Array.from(tableau3Elements)
    boardNode["tableau4"] = Array.from(tableau4Elements)
    boardNode["tableau5"] = Array.from(tableau5Elements)
    boardNode["tableau6"] = Array.from(tableau6Elements)
    boardNode["foundation1"] = Array.from(foundation1Elements)
    boardNode["foundation2"] = Array.from(foundation2Elements)
    boardNode["foundation3"] = Array.from(foundation3Elements)
    boardNode["foundation4"] = Array.from(foundation4Elements)
    boardNode["stock"] = Array.from(stockElements)
    boardNode["discard"] = Array.from(discardElements)
    boardNode["played"] = Array.from(playedElements)
}


const updateBoard = () => {
    for (let keys in allCardDivElements){
        let location = document.querySelector(`${keys}`);
        allCardDivElements[keys].forEach((element) => {
            location.append(element);
        });
    } 
}



// for (let [index, value] of anArray.entries()){}

// const removeChildren

// const assignBoardPlacement = () => {
//     for (const [indexCol, cardList] of boardArray.entries) {
//         for (const [indexRow, card] of cardList.entries){

//         }

//     }

// }


function render(renderDeck, renderStock, renderTableau, updateBoardNode, updateBoard){
    setTimeout(renderDeck, 10)
    setTimeout(renderStock, 20)
    setTimeout(renderTableau, 30)
    setTimeout(updateBoardNode, 40)
    setTimeout(updateBoard, 50)
};

function init(){
    render(renderDeck, renderStock, renderTableau, updateBoardNode, updateBoard);
    console.log('This is the init function');
}

init();

console.log(`shuffledDeck: ${shuffledDeck}`)
console.log(`AllCardObjectKeyValue: ${allCardObjectKeyValue}`)
console.log(allCardObjectKeyValue)
console.log(boardNode)





    // console.log(bottomCardColumn)
    // console.log(boardArray)
    // console.log(topCard)
    // console.log(topCardColumn)
    // console.log(bottomCard)
    // console.log(boardArray[bottomCardColumn]) // this is the arrays of the bottom card at its column





    // const moveTheCard = (card) => {
    //     // establishes the columns of where the cards are coming from and where they are landing
    //     let topCard = cardArray[cardAtPlay[0]];
    //     let bottomCardColumn = cardArray[card][5];
    //     let topCardColumn = cardArray[cardAtPlay[0]][5]
    
    //     console.log(topCard );
    //     console.log(bottomCardColumn);
    //     console.log("it can be dropped!");
    
    //     // Change what is reflected in the cardArray (a 1-d key-value pair) and boardArray (2-D array)
    //     // change the boardArray here
    //     boardArray[bottomCardColumn].push(boardArray[topCardColumn].pop())
    //     // and reflect that change in the information stored in the cardArray
    
    //     //the location of bottom card (in the boardArray), reassigning to cardArray:
    //     console.log(boardArray[bottomCardColumn].length)
    
    //     console.log(cardArray)
    //     cardArray[topCard].pop()
    //     cardArray[topCard].pop()
    //     cardArray[topCard].push(boardArray[bottomCardColumn])
    //     cardArray[topCard].push(boardArray[bottomCardColumn])
    
    //     console.log(cardAtPlay[0])
    
    //     console.log(topCardColumn)
    //     console.log(topCardRow)
    
    //  }
    
    // const canItBeDropped = (card) => {
    //     // establishes the columns of where the cards are coming from and where they are landing
    //     let topCard = cardArray[cardAtPlay[0]];
    //     let bottomCardColumn = cardArray[card][5];
    
    //     //testing how the bottom card's deck will be accepting of the card using slice()
    //     let testArray
    //     testArray = boardArray[bottomCardColumn].slice()
    //     testArray.splice(testArray.length, 0, topCard)
    
    //     let suitTypeTracker = 0 
    //     let suitColorTracker = 0
    //     let suitValueTracker = 0
        
    
    //     if (bottomCardColumn > 10) {
    //         return false
    //     }
    
    //     // only applicable for tableau area
    //     if (bottomCardColumn < 7){
    //     testArray.forEach((cardArray, index) => {
    
    //             // only applies if the card is flipped up (positive)
    //             // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
    //             if (card[2] > 0 && (index - 1) > -1 ){
    //                 // suitColorTracker should be equal to 0 each time (2 + -2)
    //                 suitColorTracker = cardArray[1] + cardArray[index-1][1]; 
    //                 if (suitColorTracker === 0) {
    
    //                     return true
    //                 } else {
    //                     console.log('A')
    //                 }
    
    //                 suitColorTracker = 0
    //                 // suitValueTracker should equal to 1 each time ((n+1) - n)
    //                 suitValueTracker = testArray[index-1][4] - cardArray[4];
    //                 if (suitValueTracker === 1){
    //                     return true
    //                 } else{
    
    //                 }
    //                 suitValueTracker = 0
    //             } else {
    //                 console.log('C')
    //             }
    
    //     })
    //     // only applicable for foundation area
    //     } else if (bottomCardColumn > 6 && bottomCardColumn < 11){
    //         testArray.forEach((cardArray, index) => {
    
    //                 // only applies if the card is the same suit, and the card is flipped up
    //                 // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
    //                 if (cardArray[2] > 0 && (index - 1) > -1 ){
    //                     // suitTypeTracker values after addition n times === division by n 
    //                     suitTypeTracker += cardArray[0]; 
    
    //                     // suitValueTracker should equal to 1 each time ((n+1) - n)
    //                     suitValueTracker = cardArray[4] - testArray[index-1][4];
    //                     if (suitValueTracker !== 1){
    //                         console.log('D')
    //                     } else {
    
    //                     }
    //                 } else{
    //                     console.log('E')
    //                 }
                    
    //             let testTracker = testArray[0][0] * cardArray.length
    //             if (testTracker != suitTypeTracker){
    //                 console.log('NOT OK')
    //                 return 
    //             } else {
    //                 console.log('F')
    //             }
    //         })
    
    //     }
    
    
    // }



// const moveTheCard = (card) => {
//     // establishes the columns of where the cards are coming from and where they are landing
//     let topCard = cardArray[cardAtPlay[0]];
//     let bottomCardColumn = cardArray[card][5];
//     let topCardColumn = cardArray[cardAtPlay[0]][5]

//     console.log(topCard );
//     console.log(bottomCardColumn);
//     console.log("it can be dropped!");

//     // Change what is reflected in the cardArray (a 1-d key-value pair) and boardArray (2-D array)
//     // change the boardArray here
//     boardArray[bottomCardColumn].push(boardArray[topCardColumn].pop())
//     // and reflect that change in the information stored in the cardArray

//     //the location of bottom card (in the boardArray), reassigning to cardArray:
//     console.log(boardArray[bottomCardColumn].length)

//     console.log(cardArray)
//     cardArray[topCard].pop()
//     cardArray[topCard].pop()
//     cardArray[topCard].push(boardArray[bottomCardColumn])
//     cardArray[topCard].push(boardArray[bottomCardColumn])

//     console.log(cardAtPlay[0])

//     console.log(topCardColumn)
//     console.log(topCardRow)

//  }






        // 
    // } else if (bottomCardColumn > 6 && bottomCardColumn < 11){
    //     testArray.forEach((cardArray, index) => {

    //             // only applies if the card is the same suit, and the card is flipped up
    //             // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
    //             if (cardArray[2] > 0 && (index - 1) > -1 ){
    //                 // suitTypeTracker values after addition n times === division by n 
    //                 suitTypeTracker += cardArray[0]; 

    //                 // suitValueTracker should equal to 1 each time ((n+1) - n)
    //                 suitValueTracker = cardArray[4] - testArray[index-1][4];
    //                 if (suitValueTracker !== 1){
    //                     console.log('D')
    //                 } else {

    //                 }
    //             } else{
    //                 console.log('E')
    //             }
                
    //         let testTracker = testArray[0][0] * cardArray.length
    //         if (testTracker != suitTypeTracker){
    //             console.log('NOT OK')




    // //testing how the bottom card's deck will be accepting of the card using slice()
    // let testArray
    // testArray = boardArray[bottomCardColumn].slice()
    // testArray.splice(testArray.length, 0, topCard)

    // let suitTypeTracker = 0 
    // let suitColorTracker = 0
    // let suitValueTracker = 0
    

    // if (bottomCardColumn > 10) {
    //     return false
    // }

    // // only applicable for tableau area
    // if (bottomCardColumn < 7){
    // testArray.forEach((cardArray, index) => {

    //         // only applies if the card is flipped up (positive)
    //         // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
    //         if (card[2] > 0 && (index - 1) > -1 ){
    //             // suitColorTracker should be equal to 0 each time (2 + -2)
    //             suitColorTracker = cardArray[1] + cardArray[index-1][1]; 
    //             if (suitColorTracker === 0) {

    //                 return true
    //             } else {
    //                 console.log('A')
    //             }

    //             suitColorTracker = 0
    //             // suitValueTracker should equal to 1 each time ((n+1) - n)
    //             suitValueTracker = testArray[index-1][4] - cardArray[4];
    //             if (suitValueTracker === 1){
    //                 return true
    //             } else{

    //             }
    //             suitValueTracker = 0
    //         } else {
    //             console.log('C')
    //         }

    // })
    // // only applicable for foundation area
    // } else if (bottomCardColumn > 6 && bottomCardColumn < 11){
    //     testArray.forEach((cardArray, index) => {

    //             // only applies if the card is the same suit, and the card is flipped up
    //             // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
    //             if (cardArray[2] > 0 && (index - 1) > -1 ){
    //                 // suitTypeTracker values after addition n times === division by n 
    //                 suitTypeTracker += cardArray[0]; 

    //                 // suitValueTracker should equal to 1 each time ((n+1) - n)
    //                 suitValueTracker = cardArray[4] - testArray[index-1][4];
    //                 if (suitValueTracker !== 1){
    //                     console.log('D')
    //                 } else {

    //                 }
    //             } else{
    //                 console.log('E')
    //             }
                
    //         let testTracker = testArray[0][0] * cardArray.length
    //         if (testTracker != suitTypeTracker){
    //             console.log('NOT OK')
    //             return 
    //         } else {
    //             console.log('F')
    //         }
    //     })

    // }


//}




// const moveTheCard = (card) => {
//     // establishes the columns of where the cards are coming from and where they are landing
//     let topCard = cardArray[cardAtPlay[0]];
//     let bottomCardColumn = cardArray[card][5];
//     let topCardColumn = cardArray[cardAtPlay[0]][5]

//     console.log(topCard );
//     console.log(bottomCardColumn);
//     console.log("it can be dropped!");

//     // Change what is reflected in the cardArray (a 1-d key-value pair) and boardArray (2-D array)
//     // change the boardArray here
//     boardArray[bottomCardColumn].push(boardArray[topCardColumn].pop())
//     // and reflect that change in the information stored in the cardArray

//     //the location of bottom card (in the boardArray), reassigning to cardArray:
//     console.log(boardArray[bottomCardColumn].length)

//     console.log(cardArray[])
//     cardArray[topCard].pop()
//     cardArray[topCard].pop()
//     cardArray[topCard].push(boardArray[bottomCardColumn])
//     cardArray[topCard].push(boardArray[bottomCardColumn])

//     console.log(cardAtPlay[0])

//     console.log(topCardColumn)
//     console.log(topCardRow)

//  }

// const canItBeDropped = (card) => {
//     // establishes the columns of where the cards are coming from and where they are landing
//     let topCard = cardArray[cardAtPlay[0]];
//     let bottomCardColumn = cardArray[card][5];

//     //testing how the bottom card's deck will be accepting of the card using slice()
//     let testArray
//     testArray = boardArray[bottomCardColumn].slice()
//     testArray.splice(testArray.length, 0, topCard)

//     let suitTypeTracker = 0 
//     let suitColorTracker = 0
//     let suitValueTracker = 0


//     if (bottomCardColumn > 10) {
//         return false
//     }

//     // only applicable for tableau area
//     if (bottomCardColumn < 7){
//     testArray.forEach((cardArray, index) => {

//             // only applies if the card is flipped up (positive)
//             // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
//             if (card[2] > 0 && (index - 1) > -1 ){
//                 // suitColorTracker should be equal to 0 each time (2 + -2)
//                 suitColorTracker = cardArray[1] + cardArray[index-1][1]; 
//                 if (suitColorTracker === 0) {

//                     return true
//                 } else {
//                     console.log('A')
//                 }

//                 suitColorTracker = 0
//                 // suitValueTracker should equal to 1 each time ((n+1) - n)
//                 suitValueTracker = testArray[index-1][4] - cardArray[4];
//                 if (suitValueTracker === 1){
//                     return true
//                 } else{

//                 }
//                 suitValueTracker = 0
//             } else {
//                 console.log('C')
//             }

//     })
//     // only applicable for foundation area
//     } else if (bottomCardColumn > 6 && bottomCardColumn < 11){
//         testArray.forEach((cardArray, index) => {

//                 // only applies if the card is the same suit, and the card is flipped up
//                 // only starts to count if the index of the card is 0 or more (works only if negative index does not exist)
//                 if (cardArray[2] > 0 && (index - 1) > -1 ){
//                     // suitTypeTracker values after addition n times === division by n 
//                     suitTypeTracker += cardArray[0]; 

//                     // suitValueTracker should equal to 1 each time ((n+1) - n)
//                     suitValueTracker = cardArray[4] - testArray[index-1][4];
//                     if (suitValueTracker !== 1){
//                         console.log('D')
//                     } else {

//                     }
//                 } else{
//                     console.log('E')
//                 }
                
//             let testTracker = testArray[0][0] * cardArray.length
//             if (testTracker != suitTypeTracker){
//                 console.log('NOT OK')
//                 return 
//             } else {
//                 console.log('F')
//             }
//         })

//     }
// }


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







// /* --- shuffle the cards --- */
// /* --- shuffle and  --- */
// function randomShuffleInPlace(cardObject) {
//    let newDeck = []
//    let distArray = [0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
//     //shuffles the order
//     for (let i = 52; i > 0; i--) {
//        let n = Math.floor(Math.random() * i);
//        newDeck.push(n)
//     }
//    cardObject.forEach((cardKey) => {
//       cardKey.splice(-2,2)
//        cardKey.push(distArray.unshift)
//        cardKey.push(newDeck.pop)
        
//   })
// return cardObject






// const renderTableau = () => {
//     // create a new div for each column in tableau
//     for (let n=1;n<8;n++) {
//         let nextTableauCol = document.querySelector(`#tableau-${n-1}`)
//         // assign the card to the div
//         startingTableau[n].forEach((isCardUpOrDown) => {
//             let nextCard = dealCardFromDeck()
//             let nextDiv = makeDivElementWithCard(nextCard, isCardUpOrDown)
//             nextTableauCol.appendChild(nextDiv);
//             allCardDivElements[nextCard] = nextDiv;
//         })
//     }
// }







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


// function renderBoard () {
//     // removes the initial image to render the board correctly. 
//     removeImage()
//     // do not remove!

//     boardArray.forEach((columnArr, columnIndex) => {
//         columnArr.forEach((card, rowIndex) => {

//             let stackName = `c${card[5]}r${card[6]}`
//             let stackElement = document.getElementById(stackName);
//             if (card[2] > 0) {
//                 flipCard(card)  
//             }
//             stackElement.appendChild(getDisplayImage(card))

//         })
//     })
// }



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

