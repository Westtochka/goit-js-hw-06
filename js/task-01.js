const categoriesList=document.querySelectorAll('li.item');
// const categoriesTitle=document.querySelectorAll('h2');
// console.log(categoriesTitle)
console.log(`Numbers of categories: ${categoriesList.length}`);
categoriesList.forEach(element=>{
    console.log(`Category:${element.firstElementChild.textContent}`)
    console.log(`Elements:${element.querySelectorAll('li').length}`)
})

