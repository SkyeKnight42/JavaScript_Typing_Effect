

// Begin the code when the page is loaded.
document.addEventListener("DOMContentLoaded", function() {

    TypeOutText(slowTypingElements[0], 500, "blink")
})

// Element, the speed (milliseconds), normal typing ("typing"), dash ("dash"), or blinking ("blink")
function TypeOutText(element, speed, style) {
    let text = element.textContent
    element.textContent = ""

    switch (style) {
        case "typing":

            for (let x = 0; x < text.length; x++) {
                setTimeout(function() {
                    element.textContent += text.charAt(x)
                }, x * speed)
            }

            break;
        case "dash":

            for (let x = 0; x < text.length; x++) {
                setTimeout(function() {
                    let updatedText = element.textContent
                    text = updatedText.slice(0, updatedText.length - 2)

                }, x * speed)
                setTimeout(function() {
                    element.textContent += text.charAt(x) + " |"
                }, x * speed)
            }

            break;
        case "blink":

            for (let x = 0; x < text.length; x++) {
                setTimeout(function() {
                    if (x % 2 == 0) {
                        element.textContent += text.charAt(x) + "|"
                    } else {
                        element.textContent = element.textContent.slice(0, element.textContent.length - 1)
                        element.textContent += text.charAt(x)
                    }

                }, x * speed)
            }

            break;
        default:

            break;
    }
}