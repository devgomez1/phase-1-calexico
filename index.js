// Write your code here...
fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    menuDetails(data[0]);
    data.forEach(displayMenuItems);
  });

function displayMenuItems(item) {
  let menuDiv = document.getElementById("menu-items");
  let menuSpan = document.createElement("span");
  menuSpan.textContent = item.name;
  menuDiv.append(menuSpan);

  menuSpan.addEventListener("click", function () {
    menuDetails(item);
  });
}

function menuDetails(item) {
  let img = document.getElementById("dish-image");
  img.src = item.image;

  let name = document.getElementById("dish-name");
  name.textContent = item.name;

  let info = document.getElementById("dish-description");
  info.textContent = item.description;

  let price = document.getElementById("dish-price");
  price.textContent = item.price;
}

let form = document.getElementById("cart-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let number = document.getElementById("number-in-cart");
  let currentNumber = Number(number.textContent);
  let amount = Number(e.target["cart-amount"].value);

  number.textContent = amount + currentNumber;
});
