const input=document.querySelector('#font-size-control')
const text=document.querySelector('#text');
text.style.fontSize=`${input.value}px`;
input.addEventListener("input", ()=>{
   console.log(text.fontSize)
   console.dir(text)
   text.style.fontSize=`${input.value}px`;
   

   
})


