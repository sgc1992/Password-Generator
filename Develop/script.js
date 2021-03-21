// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
var passLength = window.prompt("Your password length must be between 8 and 128");

if (parseInt(passLength)>=8 &&(passLength)<=128){
  oneValue=passLength
}

else {
  window.alert("Number is not valid. Press'OK' and start again!")
  run()
}

window.confirm("Do you want lowercase characters?");
if (lowerChars)= {

}

else{

}

window.confirm("Do you want uppercase characters?");

if (upperChars)= {

}

else{
  
}
window.confirm("Do you want numeric characters?");

if (numChars)= {

}

else{
  
}
window.confirm("Do you want special characters?");

if (click OK)= {

}

else{
  
}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

