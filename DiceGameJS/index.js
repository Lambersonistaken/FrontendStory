
let player1Score = 0
let player2Score = 0
let player1Turn = true
const player1x2 = document.getElementById("player1x2")
const player2x2 = document.getElementById("player2x2")
player1x2.style.display = "none"
player2x2.style.display = "none"


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleBtn = document.getElementById("doubleOrNothingBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    doubleBtn.style.display = "none"
    resetBtn.style.display = "block"
}


 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1x2.style.display = "none"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2x2.style.display = "none"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1x2.style.display = "none"
    player2x2.style.display = "none"
}


doubleBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if(player1Turn) {
        player1Dice.textContent = randomNumber
        player1Score += randomNumber * 2
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1x2.style.display = "block"
        
    }
    else {
        player2Score += randomNumber * 2
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2x2.style.display = "block"
    }
     player1Turn = !player1Turn
     if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    
})