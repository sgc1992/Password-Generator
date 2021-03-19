// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = [0123456789!"#$%&'()*+,-./:;<=>?@[]^_`{|}~ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = window.prompt("You password must be at least 8 characters and no more than 128 characters");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


