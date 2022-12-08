const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createdIngredientsList = createElement(ingredients);

ingredientsListEl.append(...createdIngredientsList);

function createElement(elementsArr) {
  return elementsArr.reduce((acc, element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    listItem.classList.add("item");
    acc.push(listItem);
    return acc;
  }, []);
}
