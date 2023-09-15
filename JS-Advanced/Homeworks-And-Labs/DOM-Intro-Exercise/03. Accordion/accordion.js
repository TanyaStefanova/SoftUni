function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if (buttonElement.innerHTML == 'More') {
        text.style.display = 'block';
        buttonElement.innerHTML = 'Less';
    } else if (buttonElement.innerHTML == 'Less') {
        text.style.display = 'none';
        buttonElement.innerHTML = 'More';
    }
}