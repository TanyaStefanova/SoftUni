function focused() {
    let inputs = document.querySelectorAll('input[type="text"]');

    for (let input of inputs) {
        input.addEventListener('focus', focused);

        function focused(e) {
            e.currentTarget.parentElement.setAttribute('class', 'focused');
        }

        input.addEventListener('blur', blurred);

        function blurred(e) {
            e.currentTarget.parentElement.removeAttribute('class');
        }
    }
}