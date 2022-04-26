let userInput = document.getElementById("number-to-convert").innerText
let lenghtP = document.getElementById("Length")
let volumeP = document.getElementById("Volume")
let massP = document.getElementById("Mass")

function meterToFeet () {
    let sum1 = userInput * 3.2808399
    let sum2 = userInput / 3.2808399
    lenghtP.innerText = userInput + " meters = "  + sum1.toFixed(3) + " feet | " + userInput + " feet = " + sum2.toFixed(3) + " meters"
}

function literToGallon () {
    let sum1 = userInput * 0.264172052
    let sum2 = userInput / 0.264172052
    volumeP.innerText = userInput + " liters = "  + sum1.toFixed(3) + " gallons | " + userInput + " gallons = " + sum2.toFixed(3) + " liters"
}

function kilosToPound () {
    let sum1 = userInput * 2.20462262
    let sum2 = userInput / 2.20462262
    massP.innerText = userInput + " kilos = "  + sum1.toFixed(3) + " pounds | " + userInput + " pounds = " + sum2.toFixed(3) + " kilos"
}

meterToFeet()
literToGallon()
kilosToPound()