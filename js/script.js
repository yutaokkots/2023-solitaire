import {CARD_LIST, CARD_LIBRARY, CARD_IMAGES} from "./constants.js";
console.log("initialized")



/*----- constants -----*/
console.log(CARD_IMAGES)
console.log(CARD_LIST)
console.log(CARD_LIBRARY)



/*----- app's state (variables) -----*/


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


/*----- functions -----*/

function init(){
    console.log(hello)
}

//test 
// test script
const draggedOnTop = (evt) => {
    console.log(evt)
}



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
let testImg_02 = document.createElement('img');
testImg_02.src = CARD_IMAGES['BAK']
let testDiv_02 = document.createElement('div');
testDiv_02.id = 'tab-6-1'
testDiv_02.ondrop='traggedOnTop(evt)';       // ondrop or ondragenter?
testDiv_02.appendChild(testImg_02)
let testEl_02 = document.getElementById('tableau-1')
testEl_02.appendChild(testDiv_02)


console.log(testImg_01)
console.log(testDiv_01)
console.log(testEl_01)

console.log(testImg_02)
console.log(testDiv_02)
console.log(testEl_02)