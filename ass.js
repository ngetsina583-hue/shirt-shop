let cart = [];
let total = 0;

function addToCart(name, price, sizeId, colorId) {
  let size = document.getElementById(sizeId).value;
  let color = document.getElementById(colorId).value;

  cart.push({name, price, size, color});
  total += price;

  document.getElementById("cartList").innerHTML +=
    <li>${name} (${size}, ${color}) - $${price}</li>;

  document.getElementById("total").innerText = "Total: $" + total;
}