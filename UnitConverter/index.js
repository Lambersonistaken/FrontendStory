let placeholder = document.getElementById("number-to-convert")
let userInput = document.getElementById("user-input")
let btn = document.getElementById("btn")
let lenghtP = document.getElementById("Length")
let volumeP = document.getElementById("Volume")
let massP = document.getElementById("Mass")
let userNum = ""
// changes to names of some variables to make them easier to understand

// added this function to trigger the math, so it doesn't just run when the page loads 
// it also triggers all of your functions to run, which all worked perfectly
btn.addEventListener("click", () => { 
    placeholder.innerText = userInput.value 
    userNum = userInput.value
    meterToFeet()
    literToGallon()
    kilosToPound()
})

function meterToFeet () {
    let sum1 = userNum * 3.2808399
    let sum2 = userNum / 3.2808399
    lenghtP.innerText = userNum + " meters = "  + sum1.toFixed(3) + " feet | " + userNum + " feet = " + sum2.toFixed(3) + " meters"
}

function literToGallon () {
    let sum1 = userNum * 0.264172052
    let sum2 = userNum / 0.264172052
    volumeP.innerText = userNum + " liters = "  + sum1.toFixed(3) + " gallons | " + userNum + " gallons = " + sum2.toFixed(3) + " liters"
}

function kilosToPound () {
    let sum1 = userNum * 2.20462262
    let sum2 = userNum / 2.20462262
    massP.innerText = userNum + " kilos = "  + sum1.toFixed(3) + " pounds | " + userNum + " pounds = " + sum2.toFixed(3) + " kilos"
}

