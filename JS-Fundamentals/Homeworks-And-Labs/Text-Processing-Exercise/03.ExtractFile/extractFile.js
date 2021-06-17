function extractFile(str) {
    let i = str.lastIndexOf('.');
    let extension = str.substring(i + 1);
    let file = str.slice(str.lastIndexOf('\\') + 1, i);
    
    // let fileIndex = str.lastIndexOf('\\');
    // let fileInfo = str.substring(fileIndex + 1);
    // let arr = fileInfo.split('.');
    // let extension = arr.pop();
    // let file = '';
    // if (arr.length > 1) {
    //     file += arr.join('.');
    // } else {
    //     file += arr[0];
    // }

    // let arr = str.split('\\');
    // let fileInfo = arr.pop().split('.');
    // let extension = fileInfo.pop();
    // let file = '';
    // if (fileInfo.length > 1) {
    //     file += fileInfo.join('.');
    // } else {
    //     file += fileInfo[0];
    // }

    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
// extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');