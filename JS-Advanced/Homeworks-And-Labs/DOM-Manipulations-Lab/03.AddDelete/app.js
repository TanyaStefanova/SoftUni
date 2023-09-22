function addItem() {
    let inputElement = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let nextElement = document.createElement('li');
    let deleteElement = document.createElement('span');

    deleteElement.innerHTML = ' <a href="#">[Delete]</a>';
    deleteElement.style.cursor = 'pointer'
    nextElement.innerHTML = inputElement.value;
    nextElement.appendChild(deleteElement);
    list.appendChild(nextElement);
    inputElement.value = '';

    deleteElement.addEventListener('click', removeItem);

    function removeItem(e) {
        let currentChild = e.target.parentElement.parentElement;
        list.removeChild(currentChild);
    }
}