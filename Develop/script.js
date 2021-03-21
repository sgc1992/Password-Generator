// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passLength = window.prompt("How long do you want your password to be?");
  //now passLength will carry the string of whatever the user typed into the prompt box.
  

  var lowerChars = window.confirm("Do you want lowercase characters?");
  //now lowerChars will have the value of true or false!

  if(lowerChars){ //if the user answered Okay, lowerChars will be true
    console.log("You want lower case letters.")
  } else{
    console.log("You do NOT want lower case letters.")
  }

  //these 3 just ask for information, but don't store the value anywhere.
  window.confirm("Do you want uppercase characters?");
  window.confirm("Do you want numeric characters?");
  window.confirm("Do you want special characters?");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (passLength > 8) ||  (passLength < 128 ) (passLength = '')
