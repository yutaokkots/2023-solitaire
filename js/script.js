import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES} from "./constants.js";
console.log("initialized")


let image1 = document.querySelector("#discard img")
console.log(image1.contentDocument)
console.log(image1)
let image2 = document.querySelector("#foundation-0 img")
console.log(image2)
console.log(image2.contentDocument)

// naturalHeight
// : 
// 333
// naturalWidth
// : 
// 238

/*----- constants -----*/
console.log(CARD_IMAGES)
console.log(CARD_LIST)
console.log(CARD_LIBRARY)



/*----- app's state (variables) -----*/
let score;
let currentDeck;            // contains non-repeating card information after randomization //randomShuffle()
let currentDeckObjects;     // contains each card object: {reference to DOM objects, their states of flipped over or not, }
let tableauState;           // the various decks in the tableau and what they contain

let startingTableau;



/*----- cached element references -----*/


/*----- event listeners -----*/
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


init();

/* ################################################ */
/* ########### INITIALIZATION FUNCTIONS ########### */

/* --- shuffle the cards --- */
function randomShuffle(cardArr){
    let newDeck = [];
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...cardArr.splice(n, 1));
    };     
    return newDeck;
};

/* --- deal the cards into tableau --- */
function dealTableau(){

};


function init(){
    console.log('hello');
    render();
}

// elementMaker creates a div element from the information provided
const elementMaker = () => {
    let newDiv= document.createElement('div')
    newDiv.innerHTML = `<img src=${}>`
}

const renderStock = () => {
    currentDeck = randomShuffle(CARD_LIST)
}
// function renderTableau(){
//     startingTableau = {
//         1:[ , ],
//         2:[ , ],
//         3:[ , ],
//         4:[ , ],
//         5:[ , ],
//         6:[ , ],
//         7:[ , ]
//     }
    
// }


let C02 = document.querySelector(`[data-card="C02"]`)   // select html using data-attribute, and modify css using class selector
console.log(C02)
console.log(C02.style)
C02.style.backgroundColor = 'green';

// break up render() into smaller renderXxxx(), because it cam get bloated
// Render function should transfer all states to user interface. 
function render(){
    // renderTableau();
    // renderFoundation();
    renderStock();
    // renderWaste();
};








//test ////////////////////////////////////////
// test script
const draggedOnTop = (evt) => {
    console.log(evt)
}

//// trying to understand:
// How to self identify the card that is being dragged by the user, and the identity of the card that it is being dragged to, and run a function?

let testImg_01 = document.createElement('img');
testImg_01.src = CARD_IMAGES['H02']
testImg_01.type = "H2"
let testDiv_01 = document.createElement('div');
testDiv_01.id = 'tab-5-1'
testDiv_01.draggable='true';       // make draggable, add this attribute to div

/// starting to drag the card -> change opacity, and should be able to grab the data from the object being dragged
testDiv_01.addEventListener("dragstart", function(evt){
    // evt.dataTransfer.setData()
    console.log(evt)            //possible to edit or save into dataTransferItemList?
    console.log(evt.dataTransfer.dataTransferItemList)
    console.log(evt.dataTransfer); 
    console.log(evt.target)

    // **important -> include a function that modifies the attribute of the <img> element to include card to search: e.g. 'H2'
    // -> https://www.w3schools.com/tags/ref_attributes.asp


    let evtData = evt.dataTransfer          //variable evtData is the evt.dataTransfer property
    //evtData.dataTransferItemList.add()      //adding the data of the current card

    evt.target.style.opacity = "0.5";
});

/// the end of the 'drag' event -> change opacity, and should be able to compare the grabbed data with target data
testDiv_01.addEventListener("dragend", function(evt){
    //
    evt.target.style.removeProperty('opacity');
});


testDiv_01.appendChild(testImg_01)
let testEl_01 = document.getElementById('tableau-0')
testEl_01.appendChild(testDiv_01)



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