let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

function renderCart() {
  let list = document.getElementById("cartList");
  list.innerHTML = "";
  total = 0;

  cart.forEach(item => {
    list.innerHTML += `
      <li>${item.name} (${item.size}, ${item.color}) - $${item.price}</li>
    `;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function addToCart(name, price, sizeId, colorId) {
  let size = document.getElementById(sizeId).value;
  let color = document.getElementById(colorId).value;

  cart.push({name, price, size, color});
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let payment = document.getElementById("payment").value;
  alert(
    "Order Successful!\n" +
    "Name: " + name + "\n" +
    "Payment: " + payment + "\n" +
    "Total: $" + total
  );

  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();