const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const id = document.querySelector("#ingredients");
id.classList.add("item");
function createMarkup(item) {
  const markup = item.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    return li;
  });
  id.append(...markup);
}
createMarkup(ingredients);
