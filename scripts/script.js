// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  if ((localStorage.getItem("products") === null)) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data=> {
      localStorage.setItem("products", JSON.stringify(data));
      localStorage.setItem("prodArray", "");
    });
  }
  
  var productJSON = JSON.parse(localStorage.getItem('products'));
  let prodArray = localStorage.getItem('prodArray').split(",");
  for (var key in productJSON) {
    var x = new ProductItem;
    x.shadowRoot.querySelector("img").setAttribute("src", productJSON[key].image);
    x.shadowRoot.querySelector("img").setAttribute("alt", productJSON[key].title);
    x.shadowRoot.querySelector(".title").innerHTML = productJSON[key].title;
    x.shadowRoot.querySelector(".price").innerHTML = "$" + productJSON[key].price;


    if (prodArray.includes(x.shadowRoot.querySelector(".price").innerHTML)) {
      x.shadowRoot.querySelector("button").innerHTML = "Remove from Cart";
      document.querySelector("#cart-count").innerHTML = parseInt(document.querySelector("#cart-count").innerHTML) + 1;
    }
    document.getElementById("product-list").appendChild(x);
  }
});
