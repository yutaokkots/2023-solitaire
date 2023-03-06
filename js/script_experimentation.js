


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

