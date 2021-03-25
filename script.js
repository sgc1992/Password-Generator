// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created a variable for all the characters and an empty variable for possible characters
var numericCharacters = "0123456789"

var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

var upperCaseCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowerCaseCharacters="abcdefghijklmnopqrstuvwzyz"

var possibleChars=""

//It will run the function to generate the password
function generatePassword(){
//It will request the user to input the number of characters for the password
var passLength = window.prompt("Your password length must be between 8 and 128");
//Creating the if condition for the password requirement
if (parseInt(passLength)>=8 &&(passLength)<=128){
  
}
//This is the else statment which will give a window altert if the input will not meet the password length requirement
else {
  window.alert("Please choose the correct length for the password. Press'OK' and start again!")
  return
}

//Created a variable for the lowercase characters and giving a windows.confirm for true and false
var lowerCase = window.confirm("Do you want lowercase characters?");
console.log({possibleChars})
if (lowerCase){
  possibleChars = possibleChars + lowerCaseCharacters
  console.log(possibleChars)
}

//Created a variable for the uppercase characters and giving a windows.confirm for true and false
var upperCase = window.confirm("Do you want uppercase characters?");
console.log({possibleChars})
if (upperCase){
  possibleChars = possibleChars + upperCaseCharacters
  console.log(possibleChars)
}

//Created a variable for the number characters and giving a windows.confirm for true and false
var numCase = window.confirm("Do you want numeric characters?");
console.log({possibleChars})
if (numCase){
  possibleChars = possibleChars + numericCharacters
  console.log(possibleChars)
}

//Created a variable for the special characters and giving a windows.confirm for true and false
var specCase = window.confirm("Do you want special characters?");
console.log({possibleChars})
if (specCase){
  possibleChars = possibleChars + specialCharacters
  console.log(possibleChars)
}
 if (lowerCase || upperCase || numCase || specCase){


 }
 else{window.alert("Please select the atleast one the charater")
 generatePassword()
 }
//Createa an empty new variable
  var password = '';
//Running a for loop to generate the password
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length)
    console.log(randomNumber)
    console.log(possibleChars[randomNumber])
    
    password = password + possibleChars[randomNumber]
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

