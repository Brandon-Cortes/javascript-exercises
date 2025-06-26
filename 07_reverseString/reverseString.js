const reverseString = function (text) {
    let newText = text.split("");
    let reverse = "";
    for (let i = newText.length - 1; i >= 0; i--) {
        reverse += newText[i];
        }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;

