function search() {
   let towns = document.getElementsByTagName('li');
   let input = document.getElementById('searchText');
   let result = document.getElementById('result');
   let matches = 0;

   Array.from(towns).forEach(town => {

      if (town.innerHTML.includes(input.value)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   });

   input.value = '';
   result.innerHTML = `${matches} matches found`;
}
