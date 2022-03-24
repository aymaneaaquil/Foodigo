const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const basePrice = document.getElementById('price').innerHTML;
let value = '0';
let finalPrice;
document.getElementById("qty").value = localStorage.getItem('quantity')
document.getElementById("totalprice").innerHTML = localStorage.getItem('fPrice')

plus.addEventListener('click', e =>{
  value = parseInt(document.getElementById("qty").value, '10');
  value = isNaN(value) ? '0' : value;
  value++;
  document.getElementById("qty").value = value;
  finalPrice = value * basePrice;
  document.getElementById("totalprice").innerHTML=finalPrice.toFixed('2');
  saveToLs();
})
  
minus.addEventListener('click', e =>{
  value = parseInt(document.getElementById("qty").value, '10');
  value = isNaN(value) ? '0' : value;
  value < '1' ? value = '1' : '';
  value--;
  document.getElementById('qty').value = value;
  finalPrice = value * basePrice;
  document.getElementById("totalprice").innerHTML=finalPrice.toFixed('2');
  document.getElementById("qty").value = value;
  saveToLs();
})

function saveToLs(){
  localStorage.setItem('quantity',value)
  localStorage.setItem('fPrice',finalPrice)
  document.getElementById("qty").value = localStorage.getItem('quantity')
  document.getElementById("totalprice").innerHTML = localStorage.getItem('fPrice').toFixed('2')
}

