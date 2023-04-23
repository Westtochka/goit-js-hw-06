const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIng=document.querySelector('ul')
let array=[];

ingredients.forEach((ing)=>{
const ingItem=document.createElement("li")
ingItem.classList.add('item')
ingItem.textContent=ing
array.push(ingItem);
console.log(array)
})
ulIng.prepend(...array);

// console.log(array)

