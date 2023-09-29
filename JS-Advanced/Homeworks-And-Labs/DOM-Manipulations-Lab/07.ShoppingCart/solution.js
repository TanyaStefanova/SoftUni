function solve() {

   let products = Array.from(document.getElementsByClassName('product'));
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   let uniqueProducts = [];
   let totalMoney = 0;

   products.forEach(product => {
      let button = product.getElementsByClassName('add-product')[0];
      let productName = product.getElementsByClassName('product-title')[0].textContent;
      let productPrice = Number(product.getElementsByClassName('product-line-price')[0].textContent);

      button.addEventListener('click', () => {
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         totalMoney += productPrice;

         if (!uniqueProducts.includes(productName)) {
            uniqueProducts.push(productName);
         }

      })
   })

   checkOutButton.addEventListener('click', () => {
      textArea.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalMoney.toFixed(2)}.`
      checkOutButton.disabled = true;
      Array.from(document.getElementsByClassName('add-product')).map(btn => {
         btn.disabled = true;
      })
   })

}