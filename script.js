// Assignment Code
var generateBtn = document.querySelector("#generate");

//added a function and variable since there wasn't one
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password.")
  console.log(count);
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var genPassword = "";
for (var i = 0; i < count; i++)
  gebPassword += letters[Math.floor(Math.random * letters.length)];
}

console.log(genPassword);

  return  genPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
