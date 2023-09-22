function attachGradientEvents() {
    let output = document.getElementById('result');
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', gradientMove);

    function gradientMove(e) {
        let offset = e.offsetX;
        let width = e.target.clientWidth;

        let percent = (offset / width) * 100;
        output.textContent = `${Math.trunc(percent)}%`;
    }

    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientOut(e) {
        output.textContent = '';
    }
}