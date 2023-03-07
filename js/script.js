import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES, startingTableau} from "./constants.js";
console.log("initialized")



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

let allCardDivElements = {};


let allCardRefElements = {};


let cardObjectKeyValue = {}




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


/*----- event listeners -----*/

/* ################################################ */
/* ########### DRAG AND DROP OPERATIONS ########### */

//THIS! reads the data-card and data-inplay values that were established when the card was created. 
//console.log(evt.target.getAttribute('data-card'))
//console.log(evt.target.getAttribute('data-inplay'))

// creates an object out of event of initially clicking and dragging, prevents unwanted dragging in non-relevant areas
mainElement.addEventListener('dragstart', (evt) => {
    // guards -> excludes non-playable cards
    let target = evt.target;
    if (target.getAttribute('data-card') == null 
        || target.getAttribute('data-inplay') == -1
        || target.getAttribute('data-card') == 'EMP'){
        evt.preventDefault()
        return;
    }
})

// When something is dragged into an area, the css is modified to show an outline of the drop area, and records information about the current bottom card
mainElement.addEventListener('dragenter', (evt) => {
    // guards -> everything except div elements that contain data
    // if (evt.target.getAttribute('data-card') == "EMP") {
    // }

    if (evt.target.getAttribute('data-inplay') != 1) {
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

// When the something is dragged out of area, the default activity of drag-over is prevented
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

// call drag-over event and remove the default. This needs to occure when something is dropped
const deactivateDragOver = () => {
    mainElement.addEventListener('dragover', (evt) => {
        evt.preventDefault()
    })
}

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

const boardArray = [
    [],         //tableau-0 [0]
    [],
    [],
    [],
    [],
    [],
    [],     //tableau-7 [6]
    [],                    //foundation-0 [7]
    [],
    [],
    [],                    //foundation-4 [10]
    [],                     // shown     [13] 11
    [],                     // stock     [11] 12
    []                      // waste     [12] 13
]



const updateDataObject = () => {
    for (let keys in allCardDivElements){
        let location = document.querySelector(`${keys}`);
        allCardDivElements[keys].forEach((element) => {
            location.append(element);
        });
    } 
}


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

    console.log(boardArray)
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



function flipCard(){};           // changes the variable state of each card to show face
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

/* --- shuffle the cards --- */
const randomShuffle = (cardArr) => {
    let newDeck = [];
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...cardArr.splice(n, 1));
    };     
    return newDeck;
};

currentDeck = randomShuffle(CARD_LIST)


// makeDivElementWithCard creates a new div that contains dataset type attributes (e.g. "data-name" within HTML)
const makeDivElementWithCard = (cardIdentity, cardUpOrDown) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
    newDiv.innerHTML = `<img data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' src=${cardUrl}>`
    newDiv.dataset.card=`${cardIdentity}`
    newDiv.dataset.inplay=`${cardUpOrDown}`
    newDiv.draggable = 'true';                  //is this needed?
    return newDiv
}



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

const renderTableau = () => {
    // create a new div for each column in tableau
    for (let n=1;n<8;n++) {
        let tableauKey = `#tableau-${n-1}`
        allCardDivElements[tableauKey] = []
        allCardRefElements[tableauKey] = []
        startingTableau[n].forEach((isCardUpOrDown) => {
            let nextCard = dealCardFromDeck()
            let nextDiv = makeDivElementWithCard(nextCard, isCardUpOrDown)
            allCardDivElements[tableauKey].push(nextDiv)
            allCardRefElements[tableauKey].push(nextCard)
            cardObjectKeyValue[nextCard] = nextDiv
            boardArray[n-1].push(nextCard)

        })
    }
}




/* ################################################ */
/* ############## STANDARD FUNCTIONS ############## */
/* ################ do not delete  ################ */

const dealCardFromDeck = () => {
    let nextCard = currentDeck.pop()
    return nextCard
}


/* ################################################ */
/* ######### INITIALIZATION AND RENDERING ######### */
/* ################ do not delete  ################ */

// break up render() into smaller renderXxxx(), because it cam get bloated
// Render function should transfer all states to user interface. 

const renderStock = () => {
    allCardDivElements["#stock"] = []
    allCardRefElements["#stock"] = []
    while (currentDeck.length > 0){
        let nextCard = dealCardFromDeck();
        let nextDiv = makeDivElementWithCard(nextCard, -1);
        //stockPile.appendChild(nextDiv);
        allCardDivElements["#stock"].push(nextDiv);
        allCardRefElements["#stock"].push(nextCard);
        cardObjectKeyValue[nextCard] = nextDiv
        boardArray[12].push(nextCard)
    }
}

//WORK ON THIS FOR 3/6

// const renderBoard2 = () => {
//     for (let keys in allCardRefElements){
//         allCardRefElements[keys].forEach((element) => {
            
//         });
//     } 
// }


const renderWaste = () => {
    //let stockPile = document.querySelector(`#stock`)                // later remove to different function
    allCardDivElements["#waste"] = []
    allCardRefElements["#waste"] = []
}

const renderFoundation = () => {
    allCardDivElements["#foundation-0"] = []
    allCardRefElements["#foundation-1"] = []
    allCardRefElements["#foundation-2"] = []
    allCardRefElements["#foundation-3"] = []

}

const updateBoard = () => {
    for (let keys in allCardDivElements){
        let location = document.querySelector(`${keys}`);
        allCardDivElements[keys].forEach((element) => {
            location.append(element);
        });
    } 
}


function render(renderT, renderF, renderS, renderW, updateB, ){
    setTimeout(renderT, 10);
    setTimeout(renderF, 15);
    setTimeout(renderS, 20);
    setTimeout(renderW, 25);
    setTimeout(updateB, 200);

};


function init(){
    render(renderTableau, renderFoundation, renderStock, renderWaste, updateBoard, );
    console.log('This is the init function');
}

init();

