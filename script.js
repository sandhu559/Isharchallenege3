// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
var passwordLength = prompt("Enter the desired password length:");
var includeLower   = confirm("Include lowercase varters?");
var includeUpper   = confirm("Include uppercase varters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecial = confirm("Include special characters?");

const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+{}:"<>?[];,./\'';

var allowedChars = '';
allowedChars += includeLower ? lowerChars : '';
allowedChars += includeUpper ? upperChars : '';
allowedChars += includeNumbers ? numberChars : '';
allowedChars += includeSpecial ? specialChars : '';

passwordLength = parseInt(passwordLength);

if (isNaN(passwordLength) || passwordLength <= 7)
{
alert("Please enter a valid password length.");
return '';
}

if (allowedChars.length === 0)
{
alert("Please select at least one character type.");
return '';
}

var password = '';
for (var i = 0; i < passwordLength; i++)
{
const randomIndex = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[randomIndex];
}

var passwordText = document.querySelector("#password");
passwordText.value = password;

console.log(password, password.length);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);