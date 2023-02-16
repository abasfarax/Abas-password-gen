// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardCriteria = document.getElementById("cardCriteria");
var includeUpper = document.getElementById("includeUpper");
var includeLower = document.getElementById("includeLower");
var includeNumbers = document.getElementById("includeNumbers");
var includeSpecial = document.getElementById("includeSpecial");

// Create arrays of characters to choose random characters from
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "£", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ";", ":", ",", ".", "/", "@"];

// // Write password to the #password input

function generatePassword() {
    var availableChars = [];
    var characterNumber = document.getElementById("characterNumber").value;

    if (includeLower.checked == true) {
        availableChars = availableChars.concat(lowerChars);
    } else { }
    if (includeUpper.checked == true) {
        availableChars = availableChars.concat(upperChars);
    } else { }
    if (includeNumbers.checked == true) {
        availableChars = availableChars.concat(numberChars);
    } else { }
    if (includeSpecial.checked == true) {
        availableChars = availableChars.concat(specialChars);
    } else { }

    var password = "";
    for (var i = 0; i < characterNumber; i++) {
        randIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randIndex];
    }
    document.getElementById("password").innerHTML = password;
}

function checkPassword() {

    if ((includeLower.checked == false) && (includeNumbers.checked == false) && (includeSpecial.checked == false) && (includeUpper.checked == false)) {
        alert("Please select at least one character option");
    } else {
        generatePassword();
    }

}

function showCriteria() {
    cardCriteria.removeAttribute("hidden");
    document.getElementById("generate").innerHTML = "Generate Password";
    generateBtn.addEventListener("click", checkPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", showCriteria);