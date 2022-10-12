// select elements
const tiles = document.querySelectorAll('.tile')
const restartBtn = document.getElementById('restart')
const tileValue = []
// player object
const player = {
    currentChoice: 'player1'
}

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
// player move
const tileSelect = function (event) {
    if (player.currentChoice == 'player0') {
        event.target.classList.add('playO')
        event.target.innerText = 'O'
        player.currentChoice = 'player1'
    } else {
        event.target.classList.add('playX')
        event.target.innerText = 'X'
        player.currentChoice = 'player0'
    }
}
// switch player tile
const playerSwitch = function () {

}
// restart on button click
const restartPlay = function () {
    tiles.forEach(function(tile){
        tile.classList.remove('playO')
        tile.classList.remove('playX')
        tile.innerText = ''
    })
}

console.log(tiles)
// event listeners
tiles.forEach(function(tile) {
    tile.addEventListener('click',tileSelect)
})
restartBtn.addEventListener('click', restartPlay)