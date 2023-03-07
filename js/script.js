import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES, startingTableau} from "./constants.js";
console.log("initialized")


let image1 = document.querySelector("#discard img")
console.log(image1.contentDocument)
console.log(image1)
let image2 = document.querySelector("#foundation-0 img")
console.log(image2)
console.log(image2.contentDocument)



/*----- constants -----*/
console.log(CARD_IMAGES)
console.log(CARD_LIST)
console.log(CARD_LIBRARY)



/*----- app's state (variables) -----*/
let score;
let currentDeck;                // contains non-repeating card information after randomization //randomShuffle()
let currentDeckObjects;         // contains each card object: {reference to DOM objects, their states of flipped over or not, }
let tableauStatus;              // the various decks in the tableau and what they contain     

//global variable
let currentBottomCardType;    //this variable holds the information about what card the user is currently dragging
// holds master information about 
// 1) card is face or back 
// 2) 

// Where is the information stored? in the DOM element? or in a class instance that can be called upon for information?

// if class:
// constructor() creates information about: 


/*----- cached element references -----*/


/*----- event listeners -----*/

/* ################################################ */
/* ########### DRAG AND DROP OPERATIONS ########### */

const mainElement = document.querySelector('main')

mainElement.addEventListener('dragstart', (evt) => {
    // guards -> excludes non-playable cards
    if (evt.target.getAttribute('data-card') == null || evt.target.getAttribute('data-inplay') == -1){
        return;
    }
    console.log("dragged")
    //THIS! reads the data-card and data-inplay values that were established when the card was created. 
    //console.log(evt.target.getAttribute('data-card'))
    //console.log(evt.target.getAttribute('data-inplay'))
 
})


mainElement.addEventListener('dragenter', (evt) => {
    // guards -> everything except div elements that contain data
    if (evt.target.getAttribute('data-inplay') != 1) {
        return;
    }
    if (evt.target.getAttribute('data-card') == null) {
        return;
    }
    // add an outline to where a card can potentially be dropped
    evt.target.parentNode.style.outline = "1.5px solid rgb(220,236,233)";
    evt.target.parentNode.style.outlineOffset = "-0.5px";
    evt.target.parentNode.style.borderRadius = "0.2rem";

    console.log(evt.target.getAttribute('data-card'))
    currentBottomCardType = evt  
})  

mainElement.addEventListener('dragleave', (evt) => {
    // guards -> everything except div elements that contain data
    if (evt.target.getAttribute('data-inplay') != 1) {
        return;
    }
    if (evt.target.getAttribute('data-card') == null) {
        return;
    }
    // remove the outline when the drag even leaves an area
    evt.target.parentNode.style.outline = null;
    evt.target.parentNode.style.offset = null;
    evt.target.parentNode.style.borderRadius = null;
})  

// call drag-over event and remove the default. This needs to occure when something is dropped
const deactivateDragOver = () => {
    mainElement.addEventListener('dragover', (evt) => {
        evt.preventDefault()
    })
}

const checkDroppable = (draggedCard, bottomCard) => {
    let draggedCardId   = draggedCard.target.getAttribute('data-card')
    let draggedCardColor = CARD_LIBRARY[draggedCardId]['color']
    let draggedCardValue = CARD_LIBRARY[draggedCardId]['value']
    let draggedCardSuit = CARD_LIBRARY[draggedCardId]['suit']
    let draggedCardUpperAdj = CARD_LIBRARY[draggedCardId]['after']
    let bottomCardId     = bottomCard.target.getAttribute('data-card')
    let bottomCardColor = CARD_LIBRARY[bottomCardId]['color']
    let bottomCardValue = CARD_LIBRARY[bottomCardId]['value']
    let bottomCardSuit  = CARD_LIBRARY[bottomCardId]['suit']
    // if the card is in the tableau area, descending order + alternate color

    if (bottomCard.fromElement.id === "tableau") {
        console.log('bottom card is in tableau');
        let result = (draggedCardColor !== bottomCardColor && draggedCardUpperAdj === bottomCardValue) ? true : false
        console.log(result)
        return result;
    } else if (bottomCard.fromElement.id === "foundation"){
        console.log('bottom card is in foundation');
    }


    // console.log(draggedCardColor )
    // console.log(draggedCardValue )
    // console.log(draggedCardSuit  )
    console.log(bottomCard    )
    // console.log(bottomCardColor  )
    // console.log(bottomCardValue  )
    // console.log(bottomCardSuit   )
  
}

// https://discussions.apple.com/thread/4225603#:~:text=Check%20System%20Preferences%20Mouse%20pane,or%20on%20a%20Magic%20Trackpad).


// mainElement.addEventListener('dragend', (evt) => {
//     // guards -> everything except div elements that contain data
//     console.log(evt)
//     console.log("hello drop")
// });


mainElement.addEventListener('dragend', (evt) => {
    // guards -> everything except div elements that contain data
    console.log("hello drop")
    let currentDraggedCardType = evt
    checkDroppable(currentDraggedCardType, currentBottomCardType);

    // the dragged item can be determined by:
    // evt.target.getAttribute('data-card')
    // evt.target.getAttribute('data-inplay')
});


// mainElement.addEventListener('droptarget', (evt) => {
//     // guards -> everything except div elements that contain data
//     console.log(evt)
//     console.log("hello drop")
// });





// via stackoverflow: The dragenter event happens at the moment you drag something in to the target element, and then it stops. The dragover event happens during the time you are dragging something until you drop it.

// mainElement.addEventListener('dragenter', (evt) => {
//     // guards -> everything except div elements that contain data
//     if (evt.target.tagName !== "DIV" || evt.target.getAttribute('data-card') == null || evt.target.getAttribute('data-inplay') == -1){
//         return;
//     }

//     //evt.preventDefault()
//     console.log("Can I be placed?")
// })


// https://blog.openreplay.com/drag-and-drop-events-in-javascript/
// Dragover: This event is fired as a draggable element moves over any valid dropzone’s surface.
// Dragenter: This event is fired when a draggable element intersects the surface of a valid dropzone while going towards it; basically, when a draggable element enters a dropzone
// Dragleave: This event is fired when a draggable element intersects the surface of a valid dropzone while going away from it. Basically, when a draggable element leaves a dropzone.
// Drop: The drop event is the penultimate event fired during a complete drag-and-drop interaction cycle(Dragend is the last). However, two conditions must be met for it to fire. First, the drop event will fire only if the e.preventDefault() is called on the Dragover event. The second condition is that the drop event will only fire when a draggable element is released (dropped) over a valid dropzone.


// possibly useful functions:
// .addEventListener
// .removeEventListener

// https://www.w3schools.com/jsref/dom_obj_event.asp
// event handlers
// .onclick()

// dragover Event:
// https://www.w3schools.com/jsref/event_ondragover.asp
// <p draggable="true">This is a draggable paragraph.</p>
//
// ondragenter Event:
// https://www.w3schools.com/jsref/event_ondragenter.asp
// https://www.w3schools.com/tags/ev_ondragenter.asp#:~:text=Definition%20and%20Usage,or%20leave%20a%20drop%20target.
// Call a function when a draggable element enters a drop target:
// <div ondragenter="myFunction(event)"></div>
// *** https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag_all ***
//
// as with many addEventListeners, perhaps you can use event propogation to listen for dragging on the entire play area

// drag and drop:
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop


/*----- functions -----*/

function flipCard(){};           // changes the variable state of each card to show face
function checkPlacement(){};    // checks to see if dragged card is able to be placed at location


function stockShuffle(){};      // shuffle the waste + stock
function stockDeal(){};         // deal out the stock cards and reveal top three



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

const makeDivElementWithCard = (cardIdentity, cardUpOrDown) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
    newDiv.innerHTML = `<img data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' src=${cardUrl}>`
    newDiv.dataset.card=`${cardIdentity}`
    newDiv.dataset.inplay=`${cardUpOrDown}`
    // data-card='${cardIdentity}' data-inplay='${cardUpOrDown}' 
    newDiv.draggable = 'true'; //is this needed?
    //newDiv.dataset.card = [`{cardIdentity}`, `{cardUpOrDown}`]
    // newDiv.dataset.inplay = 
    //newDiv.setAttribute("data-card", cardIdentity)
    return newDiv
}



const renderTableau = () => {
    // create a new div for each column in tableau
    for (let n=1;n<8;n++) {
        let nextTableauCol = document.querySelector(`#tableau-${n-1}`)

        // assign the card to the div
        startingTableau[n].forEach((isCardUpOrDown) => {
            let nextCard = dealCardFromDeck()
            let nextDiv = makeDivElementWithCard (nextCard, isCardUpOrDown)
            nextTableauCol.appendChild(nextDiv);
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

function render(){
    renderTableau();
    // renderFoundation();
    // renderStock();
    // renderWaste();
};


function init(){
    console.log('This is the init function');
    render();
}



currentDeck = randomShuffle(CARD_LIST)
const renderStock = () => {
    
}


init();







/* ################################################ */
/* ############# TARGET DROP FUNCTIONS ############ */

// DON'T UNDERSTAND THIS YET:
// ondrop="" ondragleave="" ondragover="enableDrop(event)"
// const enableDrop = (evt) => {
//     console.log(evt.style)
//     evt.preventDefault();
// };
// // const enableDrop = (evt) => {
// //     evt.preventDefault();
// // };

// console.log(typeof Window)






// let C02 = document.querySelector(`[data-card="C02"]`)   // select html using data-attribute, and modify css using class selector
// console.log(C02)
// console.log(C02.style)
// C02.style.backgroundColor = 'green';









///// / ////
// let testImg_02 = document.createElement('img');
// testImg_02.src = CARD_IMAGES['BAK']
// let testDiv_02 = document.createElement('div');
// testDiv_02.id = 'tab-6-1'
// testDiv_02.ondrop='traggedOnTop(evt)';       // ondrop or ondragenter?
// testDiv_02.appendChild(testImg_02)
// let testEl_02 = document.getElementById('tableau-1')
// testEl_02.appendChild(testDiv_02)


// console.log(testImg_01)
// console.log(testDiv_01)
// console.log(testEl_01)

// console.log(testImg_02)
// console.log(testDiv_02)
// console.log(testEl_02)