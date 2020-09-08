
// This is the speed in milliseconds (ms) where the text will type to the page.
const typingSpeed = 50

let plainElements = document.getElementsByClassName('typing-plain')
let plainText = []

let dashElements = document.getElementsByClassName('typing-dash')
let dashText = []

let blinkElements = document.getElementsByClassName('typing-blink')
let blinkText= []

// Begin the code when the page is loaded.
document.addEventListener("DOMContentLoaded", function() {
    for (let x = 0; x < plainElements.length; x++) {

        // Get the textContent for each element and add it to plainText with matching index position.
        plainText[x] = plainElements[x].textContent

        // Type the text by calling the asynchronous function. 
        typePlainText(plainText[x], x)
    }
    for (let x = 0; x < dashElements.length; x++) {

        // Get the textContent for each element and add it to dashText with matching index position.
        dashText[x] = dashElements[x].textContent

        // Type the text by calling the asynchronous function. 
        typeDashText(dashText[x], x)
    }
    for (let x = 0; x < blinkElements.length; x++) {

        // Get the textContent for each element and add it to blinkText with matching index position.
        blinkText[x] = blinkElements[x].textContent

        // Type the text by calling the asynchronous function. 
        typeBlinkingText(blinkText[x], x)
    }
})

async function typePlainText(text, index) {

    // Reset the text on the webpage so it can then by typed out.
    plainElements[index].innerHTML = ""

    // Iterate through the saved strings, adding the next character the element, adding ' |', waiting, and then removing ' |' so the next character can be added.
    for (let y = 0; y < plainText[index].length; y++) {

        // Add the next character.
        plainElements[index].innerHTML += plainText[index].charAt(y)

        // Wait
        await sleep(typingSpeed)
    }
}

// Perform the typing asynchronously for each element.
async function typeDashText(text, index) {

    // Reset the text on the webpage so it can then by typed out.
    dashElements[index].innerHTML = ""

    // Iterate through the saved strings, adding the next character the element, adding ' |', waiting, and then removing ' |' so the next character can be added.
    for (let y = 0; y < dashText[index].length; y++) {

        // Add the next character.
        dashElements[index].innerHTML += dashText[index].charAt(y)

        // Add ' |' the text type line.
        dashElements[index].innerHTML += " |"

        // Wait
        await sleep(typingSpeed)

        // Get the current text value.
        let currentText = dashElements[index].innerHTML.toString()

        // Cut the last two characters off ( |).
        let cutText = currentText.substring(0, y+1)

        // Apply the change
        dashElements[index].innerHTML = cutText
    }
}

// Perform the typing asynchronously for each element.
async function typeBlinkingText(text, index) {

    // Reset the text on the webpage so it can then by typed out.
    blinkElements[index].innerHTML = ""

    for (let y = 0; y < blinkText[index].length; y++) {

        blinkElements[index].innerHTML += blinkText[index].charAt(y)

        blinkElements[index].innerHTML += " |"

        await sleep(typingSpeed)

        let currentText = blinkElements[index].innerHTML.toString()

        let cutText = currentText.substring(0, y+1)

        blinkElements[index].innerHTML = cutText

        await sleep(typingSpeed)  
    }
}

// Simple waiting function with a promise.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}