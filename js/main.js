// select elements
const tiles = document.querySelectorAll('.tile')
const restartBtn = document.getElementById('restart')
const chooseText = document.getElementById('choice')
const tileValue = []
// player object
const player = {
    currentChoice: 'playerX'
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
    // check current player and picked square
    if (player.currentChoice == 'playerO' && !event.target.classList.contains('noPlay')) {
        event.target.classList.add('playO','noPlay')
        event.target.classList.add('noPlay')
        event.target.innerText = 'O'
        //switch player
        player.currentChoice = 'playerX'
        chooseText.innerHTML = `X has the board!`
        //else if to not allow player to choose already picked square
    } else if (!event.target.classList.contains('noPlay')){
        event.target.classList.add('playX','noPlay')
        event.target.innerText = 'X'
        player.currentChoice = 'playerO'
        chooseText.innerHTML = `O has the board!`
    }
}

// restart on button click
const restartPlay = function () {
    tiles.forEach(function(tile){
        tile.classList.remove('playO','playX','noPlay')
        tile.innerText = ''
        player.currentChoice = 'playerX'
        chooseText.innerHTML = 'X has the board!'
    })
}

console.log(tiles)
// event listeners
tiles.forEach(function(tile) {
    tile.addEventListener('click',tileSelect)
})
restartBtn.addEventListener('click', restartPlay)