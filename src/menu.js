import Beer from "./assets/Beer.png";
import Bread from "./assets/Bread.png";
import Coffee from "./assets/Coffee.png";
import Pizza from "./assets/Pizza.png";
import Salad from "./assets/Salad.png";
import Spaghetti from "./assets/Spaghetti.png";

const menuContent = () => {
    const content = document.getElementById("insideTab");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const menuCard = document.createElement("div");
    menuCard.classList.add("cardGrid");

    const createDishCard = (img,name,price) => {
        const dishCard = document.createElement("div");
        dishCard.classList.add("cards");

        const dishImage = document.createElement("img");
        dishImage.src = img;
        dishImage.alt = name;

        const  dishName = document.createElement("figcaption");
        dishName.textContent = name + " " + price;

        dishCard.appendChild(dishImage);
        dishCard.appendChild(dishName);

        return dishCard;
    }

    const dishes = [
        createDishCard(Beer,"Beer","400g"),
        createDishCard(Salad,"Salad","220g"),
        createDishCard(Bread,"Bread","120g"),
        createDishCard(Spaghetti,"Spaghetti","240g"),
        createDishCard(Pizza,"Pizza","600g"),
        createDishCard(Coffee,"Coffee","400g"),
    ];

    dishes.forEach((value) => {
        menuCard.appendChild(value);
    });
    content.appendChild(menuCard);
    // return menuCard;
}

export default menuContent;
