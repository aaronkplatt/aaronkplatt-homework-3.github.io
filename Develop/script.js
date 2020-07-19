// Assignment Code
var showDebugMessages = true;
var generateBtn = document.querySelector("#generate");
var lengthOfPassword = 8;
//lowercase, uppercase, numeric, and/or special characters (choose which criteria)
var useLowercase = false;
var useUppercase = false;
var useNumeric = false;
var useSpecial = false;
var validPasswordValues = [];



// Write password to the #password input
function writePassword() {
    if (getLengthOfPassword() == false)
    {
      return;
    }
    if (getCharacterTypes() == false) 
    {
      return;
    }
    BuildValidPasswordValues();
   var password = generatePassword();
   alert(password);

  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}
function generatePassword() 
{
  var password = "";
  for (var i = 0; i < lengthOfPassword; i++) 
  {
    var l = validPasswordValues.length;
    password = password + validPasswordValues[Math.floor(Math.random() * l)];
  }
  return password;
}

function BuildValidPasswordValues()
{
  validPasswordValues = [];
  if (useLowercase)
  {
    AddPasswordValues(97,122);
  }
  if (useUppercase)
  {
    AddPasswordValues(65,90);
  }
  if (useNumeric)
  {
    AddPasswordValues(48,57);
  }
  if (useSpecial)
  {
    AddPasswordValues(37,47);
  }
}

function AddPasswordValues(start, end)
{
  for(var i = start; i <= end; i++)
  {
    validPasswordValues.push(String.fromCharCode(i));
  }
}

//Length of Password
function getLengthOfPassword()
{
  lengthOfPassword = prompt("Choose a length of at least 8 characters and no more than 128 characters", "8");
  lengthOfPassword = parseInt(lengthOfPassword);
  if (isNaN(lengthOfPassword))
  { 
    alert ("User didn't supply a valid password length");
    return false;
  }
  else if (lengthOfPassword < 8 || lengthOfPassword > 128)
  {
    alert("I said between 8 and 128!!!");
    return false;
  }
  // debug messages
  if (showDebugMessages)
  {
  alert("You password is going to be " + lengthOfPassword + " characters.");
  }
  return true;
}

//character types
function getCharacterTypes() 
{
  useLowercase = confirm("Do you want to use Lowercase Characters?");

  useUppercase = confirm("Do you want to use Uppercase Characters?");

  useNumeric = confirm("Do you want to use Numeric Characters?");

  useSpecial = confirm("Do you want to use Special Characters?");

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial)
  {
    alert ("You need to pick at least one character type");
    return false;
  }
  else 
  {
    if(showDebugMessages)
    {
      var message = "You chose the following option(s) for your password (";
      if (useLowercase)
      {
        message = message + "Lowercase,";
      }
      if (useUppercase)
      {
        message = message + "Uppercase,";
      }
      if (useNumeric)
      {
        message = message + "Numeric,";
      }
      if (useSpecial)
      {
        message = message + "Special Characters,";
      }
      message = message.substr(0,message.length-1) + ")";
      alert(message);
    }
  }
  return true;
}


generateBtn.addEventListener("click", writePassword);