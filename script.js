const generateColour = document.getElementById("generateColour");
const colourExample = document.getElementById("colourExample");
const colourExampleText = document.getElementById("colourExampleText");

generateColour.addEventListener("click", generateRGB)


/* functions */

function generateRGB() {
    let x = generateNumbers();
    /* Assign the background colour of display to new rgb value */
    colourExample.style.backgroundColor = x;
    /* Assign the RGB value of the background colour to user */
    colourExampleText.innerHTML = x;
}

function generateNumbers() {
    /* Create a random number between 1-255 */
    let number1 = Math.floor(Math.random() * 255)
    let number2 = Math.floor(Math.random() * 255)
    let number3 = Math.floor(Math.random() * 255)
    /* Create string with rgb values */
    let rgbString = `rgb(${number1}, ${number2}, ${number3})`;
    return rgbString;
}