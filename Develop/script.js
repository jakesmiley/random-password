// Assignment Code
var generateBtn = document.querySelector("#generate");

//setup
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "%", "&", ",", "*", "+", "-", "/", "?","~"];
var passTypes = '';
var randomPw = '';

//confirmations
var confirmLength = '';
var confirmLower = '';
var confirmUpper = '';
var confirmNum = '';
var confirmSym = '';


function generatePassword() {
  var confirmLength = window.prompt("Please enter the number of characters between 8 and 128 that you want the password to contain.")
  
  if (confirmLength <=7 || confirmLength >= 129) {
    window.alert("Please enter a password length between 8 and 128");
    var confirmLength = window.prompt("Please enter the number of characters between 8 and 128 that you want the password to contain.")
  };

  //confirm password parameters/character types
  var confirmLower = function() {
    var confirmLower = window.confirm("Please confirm Ok if you want the password to contain lower case letters.")
    return confirmLower;
  }
  var confirmUpper = function() {
    var confirmUpper = window.confirm("Please confirm Ok if you want the password to contain upper case letters.")
    return confirmUpper;
  }
  var confirmNum = function() {
    var confirmNum = window.confirm("Please confirm Ok if you want the password to contain numbers.")
    return confirmNum;
  }
  var confirmSym = function() {
    var confirmSym = window.confirm("Please confirm Ok if you want the password to contain special characters.")
    return confirmSym;
  }

var confirmLower = confirmLower();
var confirmUpper = confirmUpper();
var confirmNum = confirmNum();
var confirmSym = confirmSym();


    //if person manages to think that their password may have no characters
    if (confirmLower === false && confirmNum === false && confirmSym === false && confirmUpper === false) {
      window.alert("Stop it. Choose at least one character type.");
      types();
    }

  // apply choices to character types
  else if (confirmSym === true && confirmNum === true && confirmUpper === true && confirmLower === true) {

      passTypes = sym.concat(num, lower, upper);
      
  } else if (confirmSym === true && confirmNum === true && confirmUpper=== true) {
      passTypes = sym.concat(num, upper);
  }
  else if (confirmSym === true && confirmNum === true && confirmLower=== true) {
      passTypes = sym.concat(num, lower);
  }
  else if (confirmSym === true && confirmLower === true && confirmUpper === true) {
      passTypes = sym.concat(lower, upper);
  }
  else if (confirmNum === true && confirmLower === true && confirmUpper=== true) {
      passTypes = num.concat(lower, upper);
  }
  // Two choices
  else if (confirmSym === true && confirmNum=== true ) {
      passTypes = sym.concat(num);

  } else if (confirmSym === true && confirmLower === true) {
      passTypes = sym.concat(lower);

  } else if (confirmSym === true && confirmUpper=== true) {
      passTypes = sym.concat(upper);
  }
  else if (confirmLower === true && confirmNum === true) {
      passTypes = lower.concat(num);

  } else if (confirmLower === true && confirmUpper === true) {
      passTypes = lower.concat(upper);

  } else if (confirmNum === true && confirmUpper === true) {
      passTypes = num.concat(upper);
  }
  // Single choice
  else if (confirmSym === true) {
      passTypes = sym;
  }
  else if (confirmNum === true) {
      passTypes = num;
  }
  else if (confirmLower === true) {
      passTypes = lower;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpper === true) {
      passTypes = upper;
  };

  //console.log(passTypes);

  for (var i = 0; i < confirmLength; i++) {
    randomPw = randomPw + passTypes[Math.floor(Math.random() * passTypes.length)];
    //console.log(randomPw);
  }
  return randomPw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);