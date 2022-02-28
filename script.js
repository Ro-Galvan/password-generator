// Assignment Code
var generateBtn = document.querySelector("#generate");

//added a function and variable since there wasn't one
function generatePassword() {
  var count = Number(prompt("Please enter the number of characters, between 8 - 128, that you would like in your password."));
  
  if (count < 8 || count >128){
    alert("Out of range.")

    return "";
  }

  generatePassword = "";
  // if confirm("Press a button!\nEither OK or Cancel.");

  // return 
  // }
 // criteria 
  var lowercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  // var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var numbers = "0123456789";
  // var specharactc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  

// Prompts
  var lowercaseLetters = prompt("Would you like to include lowercase characters?");
  var uppercase = prompt("Would you like to include uppercase characters?");
  var numbers = prompt("Would you like to include numbers?");
  var spechar = prompt("Would you like to include special characters?");
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * lowercase.length);
    genPassword += lowercase[random];
  }

  // console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
