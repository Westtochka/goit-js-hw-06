const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach((ing)=>{
const ingItem=document.createElement("li")
ingItem.classList.add('item')
ingItem.textContent=ing
const ulIng=document.querySelector('ul')
ulIng.appendChild(ingItem)
})
;



