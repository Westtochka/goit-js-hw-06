const textInput=document.querySelector("#validation-input");
textInput.addEventListener("blur", ()=>{
const numberData=Number(textInput.getAttribute("data-length"))
 if(textInput.value.length===numberData){
     textInput.classList.add("valid")
     textInput.classList.remove("invalid")
    }
   else{textInput.classList.add("invalid")
        textInput.classList.remove("valid")}
    } 
);

