// Assignment code here
var characterLength = "";
var choiceArray = [];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','+','<','>','?'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];

function generatePassword(){
  var password = '';
  for(var i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters? (8 - 128 characters)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length has to be a number between 8 and 128. Please try again!");
    return false;
  }
  if(confirm("Would you like lowercase letters?")){
    choiceArray = choiceArray.concat(lowerCaseArr);
  }
  if(confirm("Would you like uppercase letters?")){
    choiceArray = choiceArray.concat(upperCaseArr);
  }
  if(confirm("Would you like special characters?")){
    choiceArray = choiceArray.concat(specialCharArr);
  }
  if(confirm("Would you like numbers?")){
    choiceArray = choiceArray.concat(numberArr);
  }
  return true;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  if (correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

