function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const spanColor=document.querySelector(".color")
const btnColor=document.querySelector(".change-color")
const body=document.querySelector("body")

btnColor.addEventListener('click', ()=>{
  const color=getRandomHexColor();
body.style.backgroundColor = color;
spanColor.textContent=color;
})


