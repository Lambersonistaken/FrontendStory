let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let home1 = document.getElementById("home1")
let home2 = document.getElementById("home2")
let home3 = document.getElementById("home3")
let guest1 = document.getElementById("guest1")
let guest2 = document.getElementById("guest2")
let guest3 = document.getElementById("guest3")

let homeSum = 0;
let guestSum = 0;


home1.addEventListener("click", function () {
    homeSum += 1;
    homeScore.textContent = homeSum;
})

home2.addEventListener("click", function () {
    homeSum += 2;
    homeScore.textContent = homeSum;
})

home3.addEventListener("click", function () {
    homeSum += 3;
    homeScore.textContent = homeSum;
})

guest1.addEventListener("click", function () {
    guestSum += 1;
    guestScore.textContent = guestSum;
})

guest2.addEventListener("click", function () {
    guestSum += 2;
    guestScore.textContent = guestSum;
})

guest3.addEventListener("click", function () {
    guestSum += 3;
    guestScore.textContent = guestSum;
})


