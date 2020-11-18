// Assignment Code
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" special characters
 
var generateBtn = document.querySelector("#generate");
var specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_', '`', '{', '|', '}', '~', '"'];

function chooseCriteria() {
  var pwLength = parseInt(prompt("Choose how many characters in your password"));

  if (isNaN(pwLength) === true) {
    alert("Please enter a number");
    return;
  }
  if (pwLength < 8) {
    alert("Enter number greater than 7");
    return;
  }
  if (pwLength > 128) {
    alert("Password too long");
    return;
  }

  var pwSpecChar = confirm("Click OK to include special characters")

// include upper/lower case, numeric



if (pwSpecChar === false) {
  alert("Password must contain one character type")

  return;
}
 var pwOptions = {
   pwLength: pwLength,
   pwSpecChar: pwSpecChar,
 };


  return pwOptions;
}

// include function to get random element from array
// return random element
function generatePassword() {
  var options = chooseCriteria();

  var pWord = [];

  var charType = [];

  var charUsed = [];

  if (options.pwSpecChar) {
    charType = charType.concat(specChar);
    charUsed.push(name of random function(specChar))
  }


// loop over password length for (var = i;...)
// var pwchar = name of random funcion(chartype)
// pword.push(pwchar)
// loop over charUsed for()
// pword[i] = charUsed[i]
// return pWord.join('') 
}



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