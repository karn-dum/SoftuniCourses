function solve(text) {
  let textArr = text.split(" ");
  let workArr = textArr.slice();
  for( let i = 0; i < textArr.length; i++) {
    if ( textArr[i][0] === '#' && textArr[i].slice(1).includes('#')){
      workArr.splice(i,1);
    }
  } 
  workArr = workArr
    .filter((x) => x[0] == "#" && x.length > 1)
    .map((y) => {
      y = y.split("#");
      if ( isValidSWord(y[1])) return y[1];
      return '';
    });
    workArr.forEach( x => {
      if( x !== '') {
        console.log(x);
      }
    });  
     
}

/*-----------------------------------------------------------------------------------------------------------------*/


function isValidSWord ( word ) {
  let valid = true;
  for ( let x of word ) {
    if ( !isValidLetter(x) ){
      valid = false;
      break;
    }
  }

  return valid;
}

function isValidLetter(str) {
  // 65 -  90 Capital letters
  // 97 - 122 Small letters
  let letterCode = str.charCodeAt(0);
  if ( (letterCode >= 65 && letterCode <= 90) || (letterCode >= 97 && letterCode <= 122) )
  return true;
  return false;
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
