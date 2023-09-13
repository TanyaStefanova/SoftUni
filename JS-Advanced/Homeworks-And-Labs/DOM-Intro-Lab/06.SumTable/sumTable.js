function sumTable() {
    let arr = Array.from(document.getElementsByTagName('td'));
    arr.pop();
    let sumElement = document.getElementById('sum');

    let sum = 0;
    arr.map((x, i) => {
        if (i % 2 !== 0) {
            sum += Number(arr[i].innerHTML);
        }
    });

    sumElement.innerHTML = sum;
}