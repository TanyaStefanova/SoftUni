function solve() {
  let input = document.getElementById('text');
  let currentCase = document.getElementById('naming-convention');
  let output = document.getElementById('result');
  input.value = input.value.toLowerCase();


  if (currentCase.value == 'Camel Case') {
    let arr = input.value.split(' ');
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let word = arr[i];
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result += word;
    }
    output.innerHTML = result;
    input.value = '';
  } else if (currentCase.value == 'Pascal Case') {
    let result = '';
    input.value.split(' ').forEach(word => {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result += word;
    });
    output.innerHTML = result;
    input.value = '';
  } else {
    output.innerHTML = 'Error!';
  }
}