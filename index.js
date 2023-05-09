let firstCard = 6
let secondCard = 4
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById('cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    console.log("Drawing a new card from the deck")
    let card = 6
    sum += card
    cards.push(card)
    renderGame()
}



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