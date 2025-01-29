function solve(pass) {
  let isCorrectLen = true,
    isCorrectCon = true,
    isEnoghDigit = true;
  if (!correctLength(pass)) {
    isCorrectLen = false;
    console.log("Password must be between 6 and 10 characters");
  }
  if (!correctConsist(pass)) {
    isCorrectCon = false;
    console.log("Password must consist only of letters and digits");
  }
  if (!enoughDigits(pass)) {
    isEnoghDigit = false;
    console.log("Password must have at least 2 digits");
  }

  if (isCorrectLen && isCorrectCon && isEnoghDigit) {
    console.log("Password is valid");
  }
}

//solve("logIn");
// solve("MyPass123");
 solve("Pa$s$s");

//---
function correctLength(pass) {
  if (pass.length >= 6 && pass.length <= 10) return true;
  return false;
}
//---
function correctConsist(pass) {
  for (let i = 0; i < pass.length; i++) {
    let charCode = pass[i].charCodeAt(0);

    if (!(
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    )) {
      return false;
    }
  }
  return true;
}
//---
function enoughDigits(pass) {
    let numerOfDigits = 0;
    for (let i = 0; i < pass.length; i++) {        
        let charCode = pass[i].charCodeAt(0);
        if (charCode >= 48 && charCode <= 57){
            numerOfDigits++;
        }
    }
    if(numerOfDigits >= 2) return true;
    return false;
}
