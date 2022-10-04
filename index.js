let homeCount = document.getElementById("home-points")
let homePoints = 0

let guestCount = document.getElementById("guest-points")
let guestPoints = 0



function homepointsPlusone() {
  homePoints += 1
  homeCount.textContent = homePoints
}

function homepointsPlustwo() {
  homePoints += 2
  homeCount.textContent = homePoints
}

function homepointsPlusthree() {
  homePoints += 3
  homeCount.textContent = homePoints
}


function guestpointsPlusone() {
  guestPoints += 1
  guestCount.textContent = guestPoints
}

function guestpointsPlustwo() {
  guestPoints += 2
  guestCount.textContent = guestPoints
}

function guestpointsPlusthree() {
  guestPoints += 3
  guestCount.textContent = guestPoints
}
