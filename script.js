// Assignment Code
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" special characters
 
var generateBtn = document.querySelector("#generate");

var specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_', '`', '{', '|', '}', '~', '"'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var pwOptions = []

var pwLength = []

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
    pwLength.push(numChar);

  }

  var pwSpecChar = confirm("Click OK to include special characters");
    if (pwSpecChar === true) {
      pwOptions.push(specChar.length);
    }

  var pwUpperCase = confirm("Click OK to include upper case letters");
    if (pwUpperCase === true) {
      pwOptions.push(upperCase.length);
    }

  var pwLowerCase = confirm("Click OK to include lower case letters");
    if (pwLowerCase === true) {
      pwOptions.push(lowerCase.length);
    }

  var pwNumbers = confirm("Click OK to include numbers");
    if (pwNumbers === true) {
      pwOptions.push(numeric.length);
    }

  if (pwSpecChar === false &&
     pwUpperCase === false &&
      pwLowerCase === false &&
       pwNumbers === false) {
    alert("Password must contain at least one character type")

    return;
    
  }
  return pwLength;
}
chooseCriteria()
console.log(pwOptions)
console.log(pwLength)





// include function to get random element from array
// return random element
// function generatePassword() {
//   var options = chooseCriteria();

//   var pWord = [];

//   var charType = [];

//   var charUsed = [];

//   if (options.pwSpecChar) {
//     charType = charType.concat(specChar);
//     charUsed.push(name of random function(specChar))
//   }


// loop over password length for (var = i;...)
// var pwchar = name of random funcion(chartype)
// pword.push(pwchar)
// loop over charUsed for()
// pword[i] = charUsed[i]
// return pWord.join('') 




// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

