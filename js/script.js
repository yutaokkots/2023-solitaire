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
let tableauStatus;           // the various decks in the tableau and what they contain     
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
    console.log(evt)
    evt.dataTransfer.setData("text/plain", `${evt.target.tagName}`)
    console.log(evt.dataTransfer)
    console.log(evt.dataTransferItemList)

})


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
const elementMaker = (cardKey) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    let cardUrl = CARD_LIBRARY[`${cardKey}`]['img']
    newDiv.innerHTML = `<img src=${cardUrl}>;`
    newDiv.setAttribute("data-card", cardKey)
    return newDiv
}

console.log(elementMaker("C08")) 

currentDeck = randomShuffle(CARD_LIST)
const renderStock = () => {
    
}

// const startingTableau = {
//         1:[],
//         2:['BCK', ],
//         3:['BCK','BCK', ],
//         4:['BCK','BCK','BCK', ],
//         5:['BCK','BCK','BCK','BCK',],
//         6:['BCK','BCK','BCK','BCK','BCK', ],
//         7:['BCK','BCK','BCK','BCK','BCK','BCK',]

const startingTableau = {
        1:[1],
        2:[-1,1],
        3:[-1,-1,1],
        4:[-1,-1,-1,1],
        5:[-1,-1,-1,-1,1],
        6:[-1,-1,-1,-1,-1,1],
        7:[-1,-1,-1,-1,-1,-1,1]
}

// let testImg_02 = document.createElement('img');
// testImg_02.src = CARD_IMAGES['BAK']
// let testDiv_02 = document.createElement('div'); 
// testDiv_02.id = 'tab-6-1'
// testDiv_02.ondrop='traggedOnTop(evt)';       // ondrop or ondragenter?
// testDiv_02.appendChild(testImg_02)
// let testEl_02 = document.getElementById('tableau-1')
// testEl_02.appendChild(testDiv_02)


function renderTableau(){

    // create a new div for each column in tableau
    for (let n=1;n<8;n++) {
        let nextTableauCol = document.querySelector(`#tableau-${n-1}`)

        // assign the card to the div
        startingTableau[n].forEach((card) => {
            let nextCard = currentDeck.pop()
            let nextImgElement = document.createElement('img')
            if (card < 0){
                nextImgElement.src = CARD_LIBRARY[nextCard]["imgBack"]
            } else if (card > 0){
                nextImgElement.src = CARD_LIBRARY[nextCard]["img"]
            }
            let nextDiv = document.createElement('div')
            nextDiv.appendChild(nextImgElement)
            nextDiv.setAttribute("data-card", `nextCard`)
            nextTableauCol.appendChild(nextDiv);
        })
        
    }
}

renderTableau()


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


// break up render() into smaller renderXxxx(), because it cam get bloated
// Render function should transfer all states to user interface. 
function render(){
    // renderTableau();
    // renderFoundation();
    // renderStock();
    // renderWaste();
};







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