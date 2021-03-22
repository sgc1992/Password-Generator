// Assignment Code
var generateBtn = document.querySelector("#generate");


var numericCharacters = "0123456789"

var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

var upperCaseCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowerCaseCharacters="abcdefghijklmnopqrstuvwzyz"

var possibleChars=""

function generatePassword(){
var passLength = window.prompt("Your password length must be between 8 and 128");

if (parseInt(passLength)>=8 &&(passLength)<=128){
  oneValue=passLength
}

else {
  window.alert("Number is not valid. Press'OK' and start again!")
  run()
}


var lowerCase = window.confirm("Do you want lowercase characters?");
console.log({possibleChars})
if (lowerCase){
  possibleChars = possibleChars + lowerCaseCharacters
  console.log(possibleChars)
}


var upperCase = window.confirm("Do you want uppercase characters?");
console.log({possibleChars})
if (upperCase){
  possibleChars = possibleChars + upperCaseCharacters
  console.log(possibleChars)
}


var numCase = window.confirm("Do you want numeric characters?");
console.log({possibleChars})
if (numCase){
  possibleChars = possibleChars + numericCharacters
  console.log(possibleChars)
}


var specCase = window.confirm("Do you want special characters?");
console.log({possibleChars})
if (specCase){
  possibleChars = possibleChars + specialCharacters
  console.log(possibleChars)
}

// var password=""
// for loop, loop x length of user choice
for (var i = 0; i < passLength; i++) {
  // for each generate a random number between 0 and the lenght of possibleChars
  // use that random number to pick a character from possibleChars
  // concat the selected character on to password
}


return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

