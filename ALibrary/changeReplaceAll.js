// В стринга originalString замества всички срещания на oldString със newString
// In the string originalString replaces all occurrences of oldString with newString

function changeAll(originalString, oldString, newString) {
    let pattern = new RegExp(oldString, "g");
    //originalString = originalString.replace(pattern,newString);
    orgMessage = orgMessage.split(oldString).join(newString);
    return originalString;
}