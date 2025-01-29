// function solve(fullFileName) {
//     let [fileName, fileExtension] = fullFileName.split('\\').pop().split('.');
//     console.log(`File name: ${fileName}`);
//     console.log(`File extension: ${fileExtension}`);    
// }

function solve(fullFileName) {
    let fileName = fullFileName.split('\\').pop();
    let index = fileName.lastIndexOf('.');

    let name = fileName.substring(0, index);
    let extention = fileName.substring(index + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);    
}


solve('C:\\Internal\\training-internal\\Template.pptx');
console.log('-------------------------------------------------');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')
console.log('-------------------------------------------------');
solve('C:\\Projects\\Data-Structures\\template.bak.pptx')