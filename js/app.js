let orderTotal = 0;
limpar ();

function adicionar () {
    let formProducts = document.getElementById ("produto");
    let products = formProducts.value
    const productArray = products.split ("-");
    let productName = productArray[0];
    let productPrice = productArray[1].substring(3);

    console.log (productName);
    console.log (productPrice);

    let quantityId = document.getElementById ("quantidade");
    let productQty = quantityId.value;

    console.log (productQty);

    let cartList = document.getElementById ("lista-produtos");
    cartList.innerHTML = cartList.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${productQty}x</span> ${productName} <span class="texto-azul">R$${productPrice * productQty}</span>
  </section>`;

    orderTotal = orderTotal + (productPrice * productQty);
    let cartTotal = document.getElementById ("valor-total");
    cartTotal.innerHTML = `R$ ${orderTotal}`;
}

function limpar () {
    orderTotal = 0;
    let cartList = document.getElementById ("lista-produtos");
    cartList.innerHTML = "";
    let cartTotal = document.getElementById ("valor-total");
    cartTotal.innerHTML = "R$ 0.00";
    let quantityId = document.getElementById ("quantidade");
    quantityId.value = 1;
}