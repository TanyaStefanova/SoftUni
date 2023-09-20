function solve() {

    let number = document.getElementById('input');
    let menu = document.getElementById('selectMenuTo');
    let firstMenuOption = document.createElement('option');
    firstMenuOption.value = 'binary';
    firstMenuOption.innerHTML = 'Binary';

    let secondMenuOption = document.createElement('option');
    secondMenuOption.value = 'hexadecimal';
    secondMenuOption.innerHTML = 'Hexadecimal';

    menu.appendChild(firstMenuOption);
    menu.appendChild(secondMenuOption);

    let result = document.getElementById('result');
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', convertNumber);

    function convertNumber() {
        if (menu.value == 'binary') {
            let x = Number(number.value);
            result.value = x.toString(2);
        } else if (menu.value == 'hexadecimal') {
            let y = Number(number.value);
            result.value = y.toString(16).toUpperCase();
        }
    }
}