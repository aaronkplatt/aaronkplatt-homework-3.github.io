// Assignment Code
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");
var lengthOfPassword = 8;
//lowercase, uppercase, numeric, and/or special characters (choose which criteria)
var useLowercase = false;
var useUppercase = false;
var useNumeric = false;
var useSpecial = false;



// Write password to the #password input
function writePassword() {
    if (getLengthOfPassword() == false)
    {
      return;
    }
  // var password = generatePassword();

  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

//Length of Password
function getLengthOfPassword()
{
  lengthOfPassword = prompt("Choose a length of at least 8 characters and no more than 128 characters", "8");
  lengthOfPassword = parseInt(lengthOfPassword);
  if (isNaN(lengthOfPassword)) // || lengthOfPassword < 8 || lengthOfPassword > 128) 
  { 
    alert ("User didn't supply a valid password length");
    return false;
  }
  else if (lengthOfPassword < 8 || lengthOfPassword > 128)
  {
    alert("I said between 8 and 128!!!");
    return false;
  }
  alert("You password is going to be " + lengthOfPassword + " characters.");
  return true;
}

//character types
function getCharacterTypes() 
{
  useLowercase = confirm("Do you want to use Lowercase Characters?");

  useUppercase = confirm("Do you want to use Uppercase Characters?");

  useNumeric = confirm("Do you want to use Numeric Characters?");

  useSpecial = confirm("Do you want to use Special Characters?");
}


