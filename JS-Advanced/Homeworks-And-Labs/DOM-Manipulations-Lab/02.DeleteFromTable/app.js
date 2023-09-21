function deleteByEmail() {
    // let input = document.getElementsByTagName('input')[0];
    let input = document.querySelector('input[name="email"]');
    let output = document.getElementById('result');
    let listOfEmails = document.querySelectorAll('tbody > tr > td:nth-child(2)');


    for (let email of listOfEmails) {
        if (email.textContent == input.value) {
            email.parentElement.remove();
            output.textContent = 'Deleted';
        } else {
            output.textContent = 'Not found.';
        }
    }
}