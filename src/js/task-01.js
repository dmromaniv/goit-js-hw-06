const categoriesEl = document.querySelector("#categories");

const categoriesNumber = categoriesEl.children.length;

let resultMsg = [...categoriesEl.children].reduce((acc, category) => {
  acc += `\nCategory: ${category.firstElementChild.textContent}, \n Elements: ${category.lastElementChild.children.length} `;
  return acc;
}, "");

console.log(`Number of categories: ${categoriesNumber}` + resultMsg);
