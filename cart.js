const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const plus2 = document.querySelector(".plus2")
const minus2 = document.querySelector(".minus2")
const plus3 = document.querySelector(".plus3")
const minus3 = document.querySelector(".minus3")
quantity1 = 1;
quantity2 = 1;
quantity3 = 1;
const item1 = 4;
const item2 = 3;
const item3 = 4;
let finalprice1;
let finalprice2;
let finalprice3;
let shipping = 5.00;
let subtotal1;
let gst; //GST is 5% of price
let qst; //QST is 10% of price
let total;
let totalItem;


//item1
plus.addEventListener('click', e =>{
    quantity1 = parseInt(document.getElementById("item1").value, '10');
    quantity1 = isNaN(quantity1) ? '0' : quantity1;
    quantity1++;
    document.getElementById("item1").value = quantity1;
    finalPrice1 = quantity1 * item1;
    finalprice1 = finalPrice1.toFixed('2')
    document.getElementById("price1").innerHTML=finalPrice1.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })
minus.addEventListener('click', e =>{
    quantity1 = parseInt(document.getElementById("item1").value, '10');
    quantity1 = isNaN(quantity1) ? '0' : quantity1;
    quantity1 < '1' ? quantity1 = '1' : '';
    quantity1--;
    document.getElementById('item1').value = quantity1;
    finalPrice1 = quantity1 * item1;
    document.getElementById("price1").innerHTML=finalPrice1.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })

  //item2
plus2.addEventListener('click', e =>{
    quantity2 = parseInt(document.getElementById("item2").value, '10');
    quantity2 = isNaN(quantity2) ? '0' : quantity2;
    quantity2++;
    document.getElementById("item2").value = quantity2;
    finalPrice2 = quantity2 * item2;
    document.getElementById("price2").innerHTML=finalPrice2.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })
minus2.addEventListener('click', e =>{
    quantity2 = parseInt(document.getElementById("item2").value, '10');
    quantity2 = isNaN(quantity2) ? '0' : quantity2;
    quantity2 < '1' ? quantity2 = '1' : '';
    quantity2--;
    document.getElementById('item2').value = quantity2;
    finalPrice2 = quantity2 * item2;
    document.getElementById("price2").innerHTML=finalPrice2.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })

//item3
plus3.addEventListener('click', e =>{
    quantity3 = parseInt(document.getElementById("item3").value, '10');
    quantity3 = isNaN(quantity3) ? '0' : quantity3;
    quantity3++;
    document.getElementById("item3").value = quantity3;
    finalPrice3 = quantity3 * item3;
    document.getElementById("price3").innerHTML=finalPrice3.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })

minus3.addEventListener('click', e =>{
    quantity3 = parseInt(document.getElementById("item3").value, '10');
    quantity3 = isNaN(quantity3) ? '0' : quantity3;
    quantity3 < '1' ? quantity3 = '1' : '';
    quantity3--;
    document.getElementById('item3').value = quantity3;
    finalPrice3 = quantity3 * item3;
    document.getElementById("price3").innerHTML=finalPrice3.toFixed('2');
    numberOfItem()
    subtotal()
    taxe()
    totalprice()
  })

    function numberOfItem(){
        totalItem = quantity1+quantity2+quantity3;
        document.getElementById('numberOfItem').innerHTML = totalItem;
    }



function subtotal (){
    let price1 = parseInt(document.getElementById('price1').innerHTML);
    let price2 = parseInt(document.getElementById('price2').innerHTML);
    let price3 = parseInt(document.getElementById('price3').innerHTML);
    subtotal1 = (price1+price2+price3).toFixed(2);
    document.getElementById('subtotal').innerHTML = subtotal1;
}

function taxe(){
  gst = (5/100)*subtotal1;
  qst = (10/100)*subtotal1;
  document.getElementById('qst').innerHTML=qst.toFixed(2);
  document.getElementById('gst').innerHTML=gst.toFixed(2);
}
function totalprice(){
  let subtotal2 = parseFloat(subtotal1)
  total = subtotal2+shipping+gst+qst;
  document.getElementById('total').innerHTML = total.toFixed(2);
}
