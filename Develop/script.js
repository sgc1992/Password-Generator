// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
window.prompt("How long do you want your password to be?");
window.confirm("Do you want lowercase characters?");
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

