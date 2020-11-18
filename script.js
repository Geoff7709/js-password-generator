// Assignment Code
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" special characters
 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt choose password length 8<=n<=128 characters

// promt choose criteria upper/lower case letters

// validate prompt

// choose numeric, and/or special characters

// validate prompt

// generate password

// diplay password