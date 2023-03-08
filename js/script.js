
console.log("initialized")

/*----- constants -----*/
// let suit numerical values?
// e.g. +1 or -1
// let number be card value



const CARD_IMAGES = {
    S01: 'images/single_cards/SPADE-1.svg',
    S02: 'images/single_cards/SPADE-2.svg',
    S03: 'images/single_cards/SPADE-3.svg',
    S04: 'images/single_cards/SPADE-4.svg',
    S05: 'images/single_cards/SPADE-5.svg',
    S06: 'images/single_cards/SPADE-6.svg',
    S07: 'images/single_cards/SPADE-7.svg',
    S08: 'images/single_cards/SPADE-8.svg',
    S09: 'images/single_cards/SPADE-9.svg',
    S10: 'images/single_cards/SPADE-10.svg',
    S11: 'images/single_cards/SPADE-11-JACK.svg',
    S12: 'images/single_cards/SPADE-12-QUEEN.svg',
    S13: 'images/single_cards/SPADE-13-KING.svg',
    H01: 'images/single_cards/HEART-1.svg',
    H02: 'images/single_cards/HEART-2.svg',
    H03: 'images/single_cards/HEART-3.svg',
    H04: 'images/single_cards/HEART-4.svg',
    H05: 'images/single_cards/HEART-5.svg',
    H06: 'images/single_cards/HEART-6.svg',
    H07: 'images/single_cards/HEART-7.svg',
    H08: 'images/single_cards/HEART-8.svg',
    H09: 'images/single_cards/HEART-9.svg',
    H10: 'images/single_cards/HEART-10.svg',
    H11: 'images/single_cards/HEART-11-JACK.svg',
    H12: 'images/single_cards/HEART-12-QUEEN.svg',
    H13: 'images/single_cards/HEART-13-KING.svg',
    C01: 'images/single_cards/CLUB-1.svg',
    C02: 'images/single_cards/CLUB-2.svg',
    C03: 'images/single_cards/CLUB-3.svg',
    C04: 'images/single_cards/CLUB-4.svg',
    C05: 'images/single_cards/CLUB-5.svg',
    C06: 'images/single_cards/CLUB-6.svg',
    C07: 'images/single_cards/CLUB-7.svg',
    C08: 'images/single_cards/CLUB-8.svg',
    C09: 'images/single_cards/CLUB-9.svg',
    C10: 'images/single_cards/CLUB-10.svg',
    C11: 'images/single_cards/CLUB-11-JACK.svg',
    C12: 'images/single_cards/CLUB-12-QUEEN.svg',
    C13: 'images/single_cards/CLUB-13-KING.svg',
    D01: 'images/single_cards/DIAMOND-1.svg',
    D02: 'images/single_cards/DIAMOND-2.svg',
    D03: 'images/single_cards/DIAMOND-3.svg',
    D04: 'images/single_cards/DIAMOND-4.svg',
    D05: 'images/single_cards/DIAMOND-5.svg',
    D06: 'images/single_cards/DIAMOND-6.svg',
    D07: 'images/single_cards/DIAMOND-7.svg',
    D08: 'images/single_cards/DIAMOND-8.svg',
    D09: 'images/single_cards/DIAMOND-9.svg',
    D10: 'images/single_cards/DIAMOND-10.svg',
    D11: 'images/single_cards/DIAMOND-11-JACK.svg',
    D12: 'images/single_cards/DIAMOND-12-QUEEN.svg',
    D13: 'images/single_cards/DIAMOND-13-KING.svg',
    BAK: 'images/single_cards/BACK-2.svg',
    EMP: 'images/single_cards/EMPTY.svg'
}

// CARD_IMAGES[S01]
// CARD_IMAGES[S02]
// CARD_IMAGES[S03]
// CARD_IMAGES[S04]
// CARD_IMAGES[S05]
// CARD_IMAGES[S06]
// CARD_IMAGES[S07]
// CARD_IMAGES[S08]
// CARD_IMAGES[S09]
// CARD_IMAGES[S10]
// CARD_IMAGES[S11]
// CARD_IMAGES[S12]
// CARD_IMAGES[S13]
// CARD_IMAGES[H01]
// CARD_IMAGES[H02]
// CARD_IMAGES[H03]
// CARD_IMAGES[H04]
// CARD_IMAGES[H05]
// CARD_IMAGES[H06]
// CARD_IMAGES[H07]
// CARD_IMAGES[H08]
// CARD_IMAGES[H09]
// CARD_IMAGES[H10]
// CARD_IMAGES[H11]
// CARD_IMAGES[H12]
// CARD_IMAGES[H13]
// CARD_IMAGES[C01]
// CARD_IMAGES[C02]
// CARD_IMAGES[C03]
// CARD_IMAGES[C04]
// CARD_IMAGES[C05]
// CARD_IMAGES[C06]
// CARD_IMAGES[C07]
// CARD_IMAGES[C08]
// CARD_IMAGES[C09]
// CARD_IMAGES[C10]
// CARD_IMAGES[C11]
// CARD_IMAGES[C12]
// CARD_IMAGES[C13]
// CARD_IMAGES[D01]
// CARD_IMAGES[D02]
// CARD_IMAGES[D03]
// CARD_IMAGES[D04]
// CARD_IMAGES[D05]
// CARD_IMAGES[D06]
// CARD_IMAGES[D07]
// CARD_IMAGES[D08]
// CARD_IMAGES[D09]
// CARD_IMAGES[D10]
// CARD_IMAGES[D11]
// CARD_IMAGES[D12]
// CARD_IMAGES[D13]


CARD_LIBRARY = {
    S01: {suit:'s', color:'b', value:1,  img:CARD_IMAGES['S01'], imgBack:CARD_IMAGES['BAK'], before:-1,  after:2},
    S02: {suit:'s', color:'b', value:2,  img:CARD_IMAGES['S02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    S03: {suit:'s', color:'b', value:3,  img:CARD_IMAGES['S03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    S04: {suit:'s', color:'b', value:4,  img:CARD_IMAGES['S04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    S05: {suit:'s', color:'b', value:5,  img:CARD_IMAGES['S05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    S06: {suit:'s', color:'b', value:6,  img:CARD_IMAGES['S06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    S07: {suit:'s', color:'b', value:7,  img:CARD_IMAGES['S07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    S08: {suit:'s', color:'b', value:8,  img:CARD_IMAGES['S08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    S09: {suit:'s', color:'b', value:9,  img:CARD_IMAGES['S09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    S10: {suit:'s', color:'b', value:10, img:CARD_IMAGES['S10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    S11: {suit:'s', color:'b', value:11, img:CARD_IMAGES['S11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    S12: {suit:'s', color:'b', value:12, img:CARD_IMAGES['S12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    S13: {suit:'s', color:'b', value:13, img:CARD_IMAGES['S13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    H01: {suit:'h', color:'r', value:1,  img:CARD_IMAGES['H01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    H02: {suit:'h', color:'r', value:2,  img:CARD_IMAGES['H02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    H03: {suit:'h', color:'r', value:3,  img:CARD_IMAGES['H03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    H04: {suit:'h', color:'r', value:4,  img:CARD_IMAGES['H04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    H05: {suit:'h', color:'r', value:5,  img:CARD_IMAGES['H05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    H06: {suit:'h', color:'r', value:6,  img:CARD_IMAGES['H06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    H07: {suit:'h', color:'r', value:7,  img:CARD_IMAGES['H07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    H08: {suit:'h', color:'r', value:8,  img:CARD_IMAGES['H08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    H09: {suit:'h', color:'r', value:9,  img:CARD_IMAGES['H09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    H10: {suit:'h', color:'r', value:10, img:CARD_IMAGES['H10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    H11: {suit:'h', color:'r', value:11, img:CARD_IMAGES['H11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    H12: {suit:'h', color:'r', value:12, img:CARD_IMAGES['H12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    H13: {suit:'h', color:'r', value:13, img:CARD_IMAGES['H13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    C01: {suit:'c', color:'b', value:1,  img:CARD_IMAGES['C01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    C02: {suit:'c', color:'b', value:2,  img:CARD_IMAGES['C02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    C03: {suit:'c', color:'b', value:3,  img:CARD_IMAGES['C03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    C04: {suit:'c', color:'b', value:4,  img:CARD_IMAGES['C04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    C05: {suit:'c', color:'b', value:5,  img:CARD_IMAGES['C05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    C06: {suit:'c', color:'b', value:6,  img:CARD_IMAGES['C06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    C07: {suit:'c', color:'b', value:7,  img:CARD_IMAGES['C07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    C08: {suit:'c', color:'b', value:8,  img:CARD_IMAGES['C08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    C09: {suit:'c', color:'b', value:9,  img:CARD_IMAGES['C09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    C10: {suit:'c', color:'b', value:10, img:CARD_IMAGES['C10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    C11: {suit:'c', color:'b', value:11, img:CARD_IMAGES['C11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    C12: {suit:'c', color:'b', value:12, img:CARD_IMAGES['C12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    C13: {suit:'c', color:'b', value:13, img:CARD_IMAGES['C13'], imgBack:CARD_IMAGES['BAK'], before:12, after:0},
    D01: {suit:'d', color:'r', value:1,  img:CARD_IMAGES['D01'], imgBack:CARD_IMAGES['BAK'], before:0,  after:2},
    D02: {suit:'d', color:'r', value:2,  img:CARD_IMAGES['D02'], imgBack:CARD_IMAGES['BAK'], before:1,  after:3},
    D03: {suit:'d', color:'r', value:3,  img:CARD_IMAGES['D03'], imgBack:CARD_IMAGES['BAK'], before:2,  after:4},
    D04: {suit:'d', color:'r', value:4,  img:CARD_IMAGES['D04'], imgBack:CARD_IMAGES['BAK'], before:3,  after:5},
    D05: {suit:'d', color:'r', value:5,  img:CARD_IMAGES['D05'], imgBack:CARD_IMAGES['BAK'], before:4,  after:6},
    D06: {suit:'d', color:'r', value:6,  img:CARD_IMAGES['D06'], imgBack:CARD_IMAGES['BAK'], before:5,  after:7},
    D07: {suit:'d', color:'r', value:7,  img:CARD_IMAGES['D07'], imgBack:CARD_IMAGES['BAK'], before:6,  after:8},
    D08: {suit:'d', color:'r', value:8,  img:CARD_IMAGES['D08'], imgBack:CARD_IMAGES['BAK'], before:7,  after:9},
    D09: {suit:'d', color:'r', value:9,  img:CARD_IMAGES['D09'], imgBack:CARD_IMAGES['BAK'], before:8,  after:10},
    D10: {suit:'d', color:'r', value:10, img:CARD_IMAGES['D10'], imgBack:CARD_IMAGES['BAK'], before:9,  after:11},
    D11: {suit:'d', color:'r', value:11, img:CARD_IMAGES['D11'], imgBack:CARD_IMAGES['BAK'], before:10, after:12},
    D12: {suit:'d', color:'r', value:12, img:CARD_IMAGES['D12'], imgBack:CARD_IMAGES['BAK'], before:11, after:13},
    D13: {suit:'d', color:'r', value:13, img:CARD_IMAGES['D13'], imgBack:CARD_IMAGES['BAK'], before:12, after:-1},
    EMP: {suit:'0', color:'0', value:-1, img:CARD_IMAGES['EMP'], imgBack:CARD_IMAGES['EMP'], before:0, after:-1},
} 


const startingTableau = [
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
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 -1],
    []
]  




//suit, color, front/back, name
const CARD_LIST = [
[3,  2, -1, 'S01'],
[3,  2, -1, 'S02'],
[3,  2, -1, 'S03'],
[3,  2, -1, 'S04'],
[3,  2, -1, 'S05'],
[3,  2, -1, 'S06'],
[3,  2, -1, 'S07'],
[3,  2, -1, 'S08'],
[3,  2, -1, 'S09'],
[3,  2, -1, 'S10'],
[3,  2, -1, 'S11'],
[3,  2, -1, 'S12'],
[3,  2, -1, 'S13'],
[5, -2, -1, 'H01'],
[5, -2, -1, 'H02'],
[5, -2, -1, 'H03'],
[5, -2, -1, 'H04'],
[5, -2, -1, 'H05'],
[5, -2, -1, 'H06'],
[5, -2, -1, 'H07'],
[5, -2, -1, 'H08'],
[5, -2, -1, 'H09'],
[5, -2, -1, 'H10'],
[5, -2, -1, 'H11'],
[5, -2, -1, 'H12'],
[5, -2, -1, 'H13'],
[7,  2, -1, 'C01'],
[7,  2, -1, 'C02'],
[7,  2, -1, 'C03'],
[7,  2, -1, 'C04'],
[7,  2, -1, 'C05'],
[7,  2, -1, 'C06'],
[7,  2, -1, 'C07'],
[7,  2, -1, 'C08'],
[7,  2, -1, 'C09'],
[7,  2, -1, 'C10'],
[7,  2, -1, 'C11'],
[7,  2, -1, 'C12'],
[7,  2, -1, 'C13'],
[9, -2, -1, 'D01'],
[9, -2, -1, 'D02'],
[9, -2, -1, 'D03'],
[9, -2, -1, 'D04'],
[9, -2, -1, 'D05'],
[9, -2, -1, 'D06'],
[9, -2, -1, 'D07'],
[9, -2, -1, 'D08'],
[9, -2, -1, 'D09'],
[9, -2, -1, 'D10'],
[9, -2, -1, 'D11'],
[9, -2, -1, 'D12'],
[9, -2, -1, 'D13']
]

/*----- app's state (variables) -----*/
let boardArray = null;
let shuffledDeck = null

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










/* --- functions --- */
init();

/* --- shuffle the cards --- */
function randomShuffle(cardArr) {
    let initialDeck = [...cardArr];
    let newDeck = []
    for (let i = 52; i > 0; i--) {
        let n = Math.floor(Math.random() * i);
        newDeck.push(...initialDeck.splice(n, 1));
    };     
    return newDeck;
};

//const shuffledDeck = randomShuffle(CARD_LIST);

// const createStock = () => {
//     while (shuffledDeck.length > 0){
//         let nextCard = shuffledDeck.pop()
//     }    
// }




function renderTableau() {
    startingTableau.forEach((columnArr, columnIndex) => {
        columnArr.forEach((columnCell, rowIndex) => {
            // name an id name for the div element based on constant array
            const stackName = `c${columnIndex}r${rowIndex}`

            // draw each shuffled card individually and save into a variable, card
            let card = shuffledDeck.pop()
            
            console.log(card[3])
            console.log(`c${columnIndex}r${rowIndex}`)
            console.log(`c${columnIndex}r${rowIndex}`)
            const stackElement = document.getElementById(`${stackName}`);
            console.log(stackElement)

            if (columnCell > 0){   
                // change the card's showing value by splicing   
                card.splice(2, 1, 1)   
                // grab the url of the image of the front of the card  
                let image = getDisplayImage(card);
                stackElement.appendChild(image)

                        //stackElement.innerHTML = `<img data-card=${card[3]} data-inplay='1' src=${cardUrl}>`

            } else if (columnCell < 0) {
                let image = getDisplayImage(card);
                stackElement.appendChild(image)
            }
            startingTableau.splice(rowIndex, 1, card)   
            boardArray[columnIndex].push(card)
        })
    })
}


function getDisplayImage (card){
    if ('-1' == card[2]){
        return;
    }
    const newImage = document.createElement('img')
    newImage.src = CARD_LIBRARY[card[3]]['img']
    return newImage;
}

function flipCard(card){
    if (0 < card[2]){
        card.splice(2, 1, 2)
    }
    else {
        card.splice(2, 1, -1)
    }
    return card;
}


function renderBoard (renderTableau) {
    setTimeout(renderTableau, 20)
    boardArray.forEach((columnArr, columnIndex) => {
        columnArr.forEach((columnCell, rowIndex) => {
            let stackName = `c${columnIndex}r${rowIndex}`
            let stackElement = document.getElementById(stackName);
            if (columnCell[3] > 0) {
                // // change the card's showing value by splicing   
                // card.splice(2, 1, 1)   
                // // grab the url of the image of the front of the card  
                let image = getDisplayImage(card);
                stackElement.appendChild(image)

            } else if (columnCell[3] < 0) {
                //let cardUrl = CARD_LIBRARY[card[3]]["imgBack"] 
                //stackElement.innerHTML = `<img data-card='${card[3]}' data-inplay='-1' src=${cardUrl}>`
                let image = getDisplayImage(card);
                stackElement.appendChild(image)
            }

        })
    })
    let stackElement = document.getElementById("c0r2");
    console.log(stackElement)
}



// function render(){
//     renderTableau()
//     renderBoard()
// };

// function init(){
//     render();
// }


function render(renderTableau, renderBoard){
    setTimeout(renderTableau, 50)
    setTimeout(renderBoard, 200)
};

function init(){

    shuffledDeck = randomShuffle(CARD_LIST);
    boardArray = [
        [[3,  2, -1, 'S06'], [3,  2, -1, 'S06']],                     //tableau-0     [0]
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
    render(renderTableau, renderBoard);
}


