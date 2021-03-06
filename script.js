// Assignment code here

var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers   = "0123456789";
var special   = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordSet = "";

// Password prompt
  var passwordLengthInput = prompt("How many characters would you like your password to contain?");
  console.log(passwordLengthInput)
  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput))
  {
  alert("Please enter a number between 8 and 128");
  return;
  }

// Lowercase prompt
  var lowercaseInput = confirm("Would you like lower letters to be included in your password");
  if (lowercaseInput) {
    passwordSet += lowercase;
  }
// Uppercase prompt
  var uppercaseInput = confirm("Would you like uppercase letters to be included in your password?");

  if (uppercaseInput) {
      passwordSet += uppercase;
  }

// Numbers Prompt
  var numbersInput = confirm("Would you like numbers to be included in your password?");

  if (numbersInput) {
      passwordSet += numbers;
  }

// Special characters prompt
  var specialInput = confirm("Would you like special characters to be included in your password?");

  if (specialInput) {
      passwordSet += special;
  }

// If blank input
  if (passwordSet === "") {
    alert("Please select at least one type of character you would like to include!");
  }

//Password display
  if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (var i = 0; i < passwordLengthInput; i++) {
        password += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    }; 
// Storage
  localStorage.setItem("password", password);
  var passwordStore = localStorage.getItem("password");
  passwordText.textContent = passwordStore;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);