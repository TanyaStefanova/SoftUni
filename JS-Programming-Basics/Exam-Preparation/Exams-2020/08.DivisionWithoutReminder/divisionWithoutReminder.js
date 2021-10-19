function divisionWithoutReminder(input) {
  let index = 0;
  let count = Number(input[index++]);
  let command = input[index];

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 0; i < count; i++) {
    command = Number(input[index]);
    if (command % 2 === 0) {
      p1++;
    }
    if (command % 3 === 0) {
      p2++;
    }
    if (command % 4 === 0) {
      p3++;
    }
    index++;
    command = input[index];
  }

  console.log(`${((p1 / count) * 100).toFixed(2)}%`);
  console.log(`${((p2 / count) * 100).toFixed(2)}%`);
  console.log(`${((p3 / count) * 100).toFixed(2)}%`);
}
divisionWithoutReminder([
  3, 3, 6, 9
])