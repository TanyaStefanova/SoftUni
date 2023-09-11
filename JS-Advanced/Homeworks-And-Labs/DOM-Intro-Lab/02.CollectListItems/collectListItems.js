function extractText() {
    let listItemsElements = document.querySelectorAll('#items li');
    let textElement = document.getElementById('result');

    let listItemsArr = Array.from(listItemsElements);
   
    listItemsArr.forEach(el => {
        textElement.value += el.innerHTML;
        textElement.value += '\n';
    });
}