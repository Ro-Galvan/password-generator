// Assignment Code
var generateBtn = document.querySelector("#generate");

//added a function and variable since there wasn't one
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters, between 8 - 128, that you would like in your password."));
  console.log(count);
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  console.log(genPassword);

  return genPassword;
}

//
function generatePassword() {
  var type = prompt("Would you like to include lowercase characters
  ?");

  if (type != null) {

  }

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specharactc = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
