/*let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do ou want to draw a new card?')
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
} else {
    console.log("You're out of the game!")
}

let age = 22

if (ge < 22) {
    console.log("You can no enter the club!")
} else {
    console.log("Welcome!")
}*/

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""


if (sum <= 20) {
    message = "Do you want to draw new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack"
    hasBlackjack = true
} else {
    message
    isAlive
}

console.log(message)