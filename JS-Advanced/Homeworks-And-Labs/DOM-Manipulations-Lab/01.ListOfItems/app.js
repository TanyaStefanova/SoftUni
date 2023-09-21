function addItem() {
    let inputElement = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let nextElement = document.createElement('li');
    nextElement.textContent = inputElement.value;

    list.appendChild(nextElement);
    inputElement.value = '';
}