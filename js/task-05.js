const inputNumb=document.querySelector('#name-input');
const variosInput=document.querySelector('#name-output');

inputNumb.addEventListener("input", (event)=>{

if(inputNumb.value.length>=1){variosInput.textContent=event.currentTarget.value}
else{variosInput.textContent="Anonymous"}

});