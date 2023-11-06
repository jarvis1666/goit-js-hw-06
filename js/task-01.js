// `use strict`;
// const elementItem = document.querySelectorAll(".item");
// console.log(`Number of categories: ${elementItem.length}`);

// const categoriesArrey = document.querySelectorAll(".item");
// categoriesArrey.forEach((nameCategories) => {
//   const nameCategoriesArrey = nameCategories.querySelectorAll(`h2`);
//   console.log(`Category: ${nameCategoriesArrey[0].textContent}`);

//   const arrayCategoriesObject = nameCategories.querySelectorAll(`ul li`);
//   const lengthArrayCategoriesObject = arrayCategoriesObject.length;
//   console.log(`Elements: ${lengthArrayCategoriesObject}`);
// });

// Виправлений варіант

"use strict";
const elementItem = document.body.childNodes[3].children;

console.log(`Number of categories: ${elementItem.length}`);
const categoriesArrey = [...elementItem];

categoriesArrey.forEach((nameCategories) => {
  const nameCategoriesArrey = nameCategories.firstElementChild.textContent;
  console.log(`Category: ${nameCategoriesArrey}`);

  const arrayCategoriesObject = [...nameCategories.lastElementChild.children];
  const lengthArrayCategoriesObject = arrayCategoriesObject.length;
  console.log(`Elements: ${lengthArrayCategoriesObject}`);
});
