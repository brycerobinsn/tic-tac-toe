// select elements
const tiles = document.querySelectorAll('.tile')
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

console.log('hello world')
// variable declarations
const colors = {
    square: null
}

// functions
const tileSelect = function (tile) {
    console.log('cliocked')
}

// event listeners
tiles.forEach(function(tile) {
    tile.addEventListener('click',tileSelect)
})