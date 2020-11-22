// Assignment Code
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" special characters
 
var generateBtn = document.querySelector("#generate");

var specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_', '`', '{', '|', '}', '~', '"'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var pwOptions = []

var finalPassword = ""
var numOfChar = []

function chooseCriteria() {
  
  var numChar = parseInt(prompt("Choose how many characters in your password"));
  

    if (isNaN(numChar) === true) {
      alert("Please enter a number");
      return;
    }
    if (numChar < 8) {
        alert("Enter number greater than 7");
    return;
    }
    if (numChar > 128) {
      alert("Password too long (must be fewer than 129)");
      return;
    }
    else {
      numOfChar.push(numChar);
      alert(numChar + " characters included.")
    }
  
  var pwSpecChar = confirm("Click OK to include special characters");
    if (pwSpecChar === true) {
      pwOptions = pwOptions.concat(specChar);
      alert("Special characters included.");
    } else {
      alert("Special characters excluded.")
    }
  
  var pwUpperCase = confirm("Click OK to include upper case letters");
    if (pwUpperCase === true) {
     pwOptions = pwOptions.concat(upperCase);
     alert("Upper case letters included.");
    } else {
      alert("Upper case letters excluded.")
    }
    
  var pwLowerCase = confirm("Click OK to include lower case letters");
    if (pwLowerCase === true) {
      pwOptions = pwOptions.concat(lowerCase);
      alert("Lower case letters included.");
    } else {
      alert("Lower case letters excluded.")
    }
    
  var pwNumbers = confirm("Click OK to include numbers");
    if (pwNumbers === true) {
      pwOptions = pwOptions.concat(numeric);
      alert("Numbers included.");
    } else {
      alert("Numbers excluded.")
    }
    
    if (pwSpecChar === false &&
    pwUpperCase === false &&
    pwLowerCase === false &&
    pwNumbers === false) {
      alert("Password must contain at least one character type")
      
      return;
      
    }
}
function protoPassword () {for (var i = 0; i < numOfChar; i++) {
  finalPassword += pwOptions [Math.floor(Math.random(i) * pwOptions.length)] 
  console.log(finalPassword);
  }
}

// Write password to the #password input
function writePassword() {
  chooseCriteria()
  protoPassword()
  var password = finalPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

