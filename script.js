const generateColour = document.getElementById("generateColour");
const colourExample = document.getElementById("colourExample");
const colourExampleText = document.getElementsByClassName("colourExampleText");
const previousColour = document.getElementById("previousColour");

let oldRGB, newRGB;

generateColour.addEventListener("click", generateRGB);
previousColour.addEventListener("click", previousRGB);

/* Variable Declarations */



/* Functions */

function generateRGB() {
    oldRGB = newRGB;
    newRGB = generateNumbers();
    /* Assign the background colour of display to new rgb value */
    colourExample.style.backgroundColor = newRGB;
    /* Assign the RGB value of the background colour to user */
    for(var i = 0; i < colourExampleText.length; i++){
        colourExampleText[i].innerHTML = newRGB;
    }
}

function previousRGB() {
    /* Assign the background colour of display to the previous rgb value */
    colourExample.style.backgroundColor = oldRGB;
    /* Assign the RGB value of the background colour to user */
    for(var i = 0; i < colourExampleText.length; i++){
        colourExampleText[i].innerHTML = oldRGB;
    }
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