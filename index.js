// Write your code here...
fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((data) => data.forEach(displayMenuItems, console.log(data)));

function displayMenuItems(item) {
  let menuDiv = document.getElementById("menu-items");
  let menuSpan = document.createElement("span");
  menuSpan.textContent = item.name;
  menuDiv.append(menuSpan);

  menuSpan.addEventListener("click", function () {
    let img = document.getElementById("dish-image");
    img.src = item.image;

    let name = document.getElementById("dish-name");
    name.textContent = item.name;

    let info = document.getElementById("dish-description");
    info.textContent = item.description;

    let price = document.getElementById("dish-price");
    price.textContent = item.price;
  });
}
