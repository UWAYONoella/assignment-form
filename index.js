const form=document.getElementById("form");
const btn=document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",e=>{
    e.preventDefault();
form.classList.toggle("submitted");
form.textContent="Thank you for applying in internship program, we will send you an email not later than 24hours!";

})