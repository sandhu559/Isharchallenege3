// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
    // below we are defining the prompts
var passwordLength = prompt("Enter the desired password length:");
var includeLower   = confirm("Include lowercase varters?");
var includeUpper   = confirm("Include uppercase varters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecial = confirm("Include special characters?");
// below we are defining the character limits
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+{}:"<>?[];,./\'';
// below we are character type validation
var allowedChars = '';
allowedChars += includeLower ? lowerChars : '';
allowedChars += includeUpper ? upperChars : '';
allowedChars += includeNumbers ? numberChars : '';
allowedChars += includeSpecial ? specialChars : '';

passwordLength = parseInt(passwordLength);
// below we are validating the password length
if (isNaN(passwordLength) || passwordLength <= 7)
{
alert("Please enter a valid password length.");
return '';
}
// below we are checking the character type
if (allowedChars.length === 0)
{
alert("Please select at least one character type.");
return '';
}
// below we are generating the password. 
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