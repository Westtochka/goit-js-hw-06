const input=document.querySelector('#font-size-control')
const text=document.querySelector('#text');
input.addEventListener("input", ()=>{
   input.value===text.fontSize;
   console.log(text.fontSize)
   text.style.fontSize=`${input.value}px`;
   

   
})


