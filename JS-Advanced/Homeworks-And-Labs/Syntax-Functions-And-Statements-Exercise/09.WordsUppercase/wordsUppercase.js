function wordsUppercase(str) {

    let result = str.toUpperCase()
    .match(/\w+/g)
    .join(', ');
    
    console.log(result);

    // let result = str.toUpperCase()
    // .split(/[\W]+/)
    // .filter(word => word.length > 0)
    // .join(', ');

    // console.log(result);

}
wordsUppercase('Hi, how are you?');