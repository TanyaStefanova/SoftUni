function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.querySelector('#searchField');

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));

      rows.forEach(row => {
         let cells = Array.from(row.getElementsByTagName('td'));
         cells.forEach(cell => {
            if (cell.innerHTML.includes(input.value)) {
               row.setAttribute('class', 'select');
            }
         });
      });

      input.value = '';
   }
}