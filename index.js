const form=document.getElementById("form");
const btn=document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",e=>{
    e.preventDefault();
form.classList.toggle("submitted");

})