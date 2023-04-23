let counterValue=0;
const  counterCurrent=document.querySelector("#value");
// counterCurrent.textContent=counterValue;
const  minusBtn=document.querySelector('button[data-action="decrement"]');
const minus=()=>{
    counterValue-=1;
    counterCurrent.textContent=counterValue;
    };
minusBtn.addEventListener("click", minus);   

const plusBtn=document.querySelector('button[data-action="increment"]');
const plus=()=>{
    counterValue+=1;
    counterCurrent.textContent=counterValue;
    }
plusBtn.addEventListener("click", plus);    


