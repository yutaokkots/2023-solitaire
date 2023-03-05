import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES} from "./constants.js";
console.log("initialized")



/*----- constants -----*/
console.log(CARD_IMAGES)
console.log(CARD_LIST)
console.log(CARD_LIBRARY)



/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function init(){
    console.log(hello)
}

//test 


let testImg = document.createElement('img');
testImg.src = CARD_IMAGES['BAK']
let testDiv = document.createElement('div');
testDiv.id = 'tab-5-1'
testDiv.appendChild(testImg)
let testEl = document.getElementById('tableau-0')
testEl.appendChild(testDiv)


console.log(testImg)
console.log(testDiv)
console.log(testEl)