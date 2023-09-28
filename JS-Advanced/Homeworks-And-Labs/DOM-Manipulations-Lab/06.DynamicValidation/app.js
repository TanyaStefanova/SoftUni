function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', validate);

    function validate(e) {
        let currentEmail = e.currentTarget.value;
        // let pattern = /[a-z]+@[a+z]+.[a-z]+/;
        let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

        if (pattern.test(currentEmail)) {
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add('error');
        }
    }
}