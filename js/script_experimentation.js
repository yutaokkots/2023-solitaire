

// How do I simplify renderTableau and elementMaker
// Purpose of elementMaker -> This takes the information stored inside the deck of cards (an array), and pops() from the array, and takes that information to
// create a DOM element. It basically is the function that enables rendering onto the screen (array -> visual)
// So all draws of the card, and all dealing of the card should go through this process. 
// e.g. Should draw from an array, and return something. 

// another aspect would be to determine if the drawn card should be facing up or down. 
// Is this a separate function? 
// e.g. face up or face down as a parameter of a function, and add the actual image source to the div? 



const dealCardFromDeck = () => {
    let nextCard = currentDeck.pop()
    return nextCard
}

// makeDivElementWithCard creates a div element from the information provided
// Takes in cardIdentity information, as well as information on if that card should be up or down

const makeDivElementWithCard = (cardIdentity, cardUpOrDown) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    // let cardUrl = CARD_LIBRARY[`${cardIdentity}`]['img']
    let cardUrl = cardUpOrDown > 0 ? CARD_LIBRARY[cardIdentity]["img"] : CARD_LIBRARY[cardIdentity]["imgBack"];
    newDiv.innerHTML = `<img src=${cardUrl}>;`
    newDiv.setAttribute("data-card", cardIdentity)
    return newDiv
}



function renderTableau(){
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



// elementMaker creates a div element from the information provided
const elementMaker = (cardKey) => {
    let newDiv= document.createElement('div')
    // uses constant CARD_LIBRARY to get the image source
    let cardUrl = CARD_LIBRARY[`${cardKey}`]['img']
    newDiv.innerHTML = `<img src=${cardUrl}>;`
    newDiv.setAttribute("data-card", cardKey)
    return newDiv
}















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



mainElement.addEventListener('dragstart', (evt) => {
    let eventAttribute = evt.target.attributes

    //THIS!
    console.log(evt.target.getAttribute('data-card'))
    console.log(evt.target.getAttribute('data-inplay'))


    console.log(evt)
    evt.dataTransfer.setData("text/plain", `${evt.target.tagName}`)
    console.log(evt.dataTransfer)
    console.log(evt.dataTransferItemList)
    console.log(evt.target.attributes)

})



mainElement.addEventListener('dragenter', (evt) => {
    // guards -> everything except div elements that contain data
    if (evt.target.getAttribute('data-inplay') != 1) {
        //console.log("Not a div, or does not have data-card")

        return;
    }

    console.log(evt.target.parentNode)
//     if (evt.target.getAttribute('data-inplay') === null 
//     && evt.target.tagName === "DIV"
//     || evt.target.getAttribute('data-inplay') == -1
//     || evt.target.tagName === "IMG") {
//     //console.log("Not a div, or does not have data-card")
//     return;
// }

//     if (evt.target.tagName !== "DIV" 
//     && evt.target.getAttribute('data-card') !== null 
//     && evt.target.getAttribute('data-inplay') != -1) {
//     //console.log("Not a div, or does not have data-card")
//     return;
// }

    // if (evt.target.tagName == "DIV" && evt.target.getAttribute('data-inplay') == 1){
    //     console.log(evt.target.id)
    //     console.log("dragging over an object")
    // } else {
    //     return;
    // }

    //evt.preventDefault()
    //console.log(evt)
    // console.log(evt)
    // console.log(evt.target.id)
    // console.log("dragging over an object")
})  




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


// https://discussions.apple.com/thread/4225603#:~:text=Check%20System%20Preferences%20Mouse%20pane,or%20on%20a%20Magic%20Trackpad).



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

