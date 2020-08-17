// Assignment Code
var generateBtn = document.querySelector("#generate");

//setup
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "%", "&", ",", "*", "+", "-", "/", "?","~"];
var passTypes;

//confirmations
var confirmLength = '';
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSym;

function generatePassword() {
  var confirmLength = window.prompt("Please enter the number of characters between 8 and 128 that you want the password to contain.")
  
  while(confirmLength <=7 || confirmLength >= 129) {
    window.alert("Please enter a password length between 8 and 128");
    var confirmLength = window.prompt("Please enter the number of characters between 8 and 128 that you want the password to contain.")
  };

  //confirm password parameters/character types
  function types() {
    var confirmLower = window.confirm("Please confirm Ok if you want the password to contain lower case letters.")
    var confirmUpper = window.confirm("Please confirm Ok if you want the password to contain upper case letters.")
    var confirmNum = window.confirm("Please confirm Ok if you want the password to contain numbers.")
    var confirmSym = window.confirm("Please confirm Ok if you want the password to contain special characters.")
  }

  types();
    //if person manages to think that their password may have no characters
    if (confirmLower === false && confirmNum === false && confirmSym === false && confirmUpper === false) {
      window.alert("Stop it. Choose at least one character type.");
      types();
    }

  // apply choices to character types
  else if (confirmSym && confirmNum && confirmUpper && confirmLower) {

      passTypes = sym.concat(number, lower, upper);
  } else if (confirmSym && confirmNum && confirmUpper) {
      passTypes = sym.concat(num, upper);
  }
  else if (confirmSym && confirmNum && confirmLower) {
      passTypes = sym.concat(num, lower);
  }
  else if (confirmSym && confirmLower && confirmUpper) {
      passTypes = sym.concat(lower, upper);
  }
  else if (confirmNum && confirmLower && confirmUpper) {
      passTypes = num.concat(lower, upper);
  }
  // Two choices
  else if (confirmSym && confirmNum) {
      passTypes = sym.concat(num);

  } else if (confirmSym && confirmLower) {
      passTypes = sym.concat(lower);

  } else if (confirmSym && confirmUpper) {
      passTypes = sym.concat(upper);
  }
  else if (confirmLower && confirmNum) {
      passTypes = lower.concat(num);

  } else if (confirmLower && confirmUpper) {
      passTypes = lower.concat(upper);

  } else if (confirmNum && confirmUpper) {
      passTypes = num.concat(upper);
  }
  // Single choice
  else if (confirmSym) {
      passTypes = sym;
  }
  else if (confirmNum) {
      passTypes = num;
  }
  else if (confirmLower) {
      passTypes = lower;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpper) {
      passTypes = upper;
  };

  console.log(passTypes);

  randomPw = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPw = randomPw + passTypes[Math.floor(Math.random() * passTypes.length)];
    console.log(randomPw);
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