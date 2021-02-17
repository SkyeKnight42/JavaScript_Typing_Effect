
let typing = document.getElementById("typing")
let dash = document.getElementById("dash")
let blink = document.getElementById("blink")

let typingElements = []
let classNamesInUse = []

function TypeOutText(element, speed, style, endcharacter) {
    if (FindInArray(element, typingElements) == null) {

        let text = element.textContent
        let customClass = CreateCustomClassName()
        
        if (customClass != null) {

            classNamesInUse.push(customClass)
            element.classList.add(customClass)
            typingElements.push(element)
            element.textContent = ""
            
            switch (style) {
                case "typing":
        
                    for (let x = 0; x <= text.length; x++) {
                        setTimeout(function() {
                            element.textContent += text.charAt(x)
                            if (x == text.length) {
                                element.classList.remove(customClass)
                                RemoveArrayElement(customClass, classNamesInUse)
                                RemoveArrayElement(element, typingElements)
                            }
                        }, x * speed)
                    }

                    break;

                case "dash":
                    
                    for (let x = 0; x <= text.length; x++) {
                        setTimeout(function() {
                            element.textContent = element.textContent.slice(0, element.textContent.length - endcharacter.length)
                            element.textContent += text.charAt(x) + endcharacter
                            if (x == text.length) {
                                element.classList.remove(customClass)
                                RemoveArrayElement(customClass, classNamesInUse)
                                RemoveArrayElement(element, typingElements)

                                if (text.length % 2 == 0) {
                                    element.textContent = text
                                }
                            }

                        }, x * speed)
                    }
        
                    break;

                case "blink":
        
                    for (let x = 0; x <= text.length; x++) {
                        setTimeout(function() {
                            if (x % 2 == 0) {
                                element.textContent += text.charAt(x) + endcharacter
                            } else {
                                element.textContent = element.textContent.slice(0, element.textContent.length - endcharacter.length)
                                element.textContent += text.charAt(x)
                            }

                            if (x == text.length) {
                                element.classList.remove(customClass)
                                RemoveArrayElement(customClass, classNamesInUse)
                                RemoveArrayElement(element, typingElements)

                                if (text.length % 2 == 0) {
                                    element.textContent = text
                                }
                            }
        
                        }, x * speed)
                    }
        
                    break;
                
                default:
        
                    break;
            }
        } 
    } 
}

function FindInArray(value, array) {
    for (let x = 0; x < array.length; x++) {
        if (value === array[x]) {
            return x
        }
    }
    return null
}

function RemoveArrayElement(value, array) {

    for (let x = 0; x < array.length; x++) {

        // console.log("value: " + value)
        // console.log("arrayValue: " + array[x])

        if (array[x] === value) {
            array.splice(x, 1)
            x--
            // console.log(array[x] + "element is found and removed from the array.")
        } else {
            // console.log(array[x] + "element is not the typed element, keep it in the array.")
        }
    }
}

function CreateCustomClassName() {
    
    for (let x = 0; x < 100; x++) {
        let customClassName = "TypingElement_" + x

        if (classNamesInUse[x] != customClassName) {
            return customClassName
        }
    }

    return null
}