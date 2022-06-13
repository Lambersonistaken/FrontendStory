const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-1")
let passwordTwoEl = document.getElementById("password-2")


function generateMain() {

generatePasswordOne()
generatePasswordTwo()

}

function resetPasswordMain () {
    
resetPassword()
    
    
}


function generatePasswordOne () {
    
    
    for (let i = 0; i<15; i++) {
    let randomNumber = Math.floor(Math.random() * 92 )
    passwordOneEl.textContent += characters[randomNumber]    
    }
    
}

function generatePasswordTwo () {
    
    
    for (let i = 0; i<15; i++) {
    let randomNumber = Math.floor(Math.random() * 92 )
    passwordTwoEl.textContent += characters[randomNumber]    
    }
    
}

function resetPassword () {
    
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
}

