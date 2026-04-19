let a = document.getElementById("plus")
let b = document.getElementById("Minus");
let h1 = document.querySelector("h1");

let size =20;
a.addEventListener("click",()=>{
    size+=5
    h1.Style.fontsize = size +"px"
})
b.addEventListener("click",()=>{
    size-=5
    h1.style.fontsize =size +"px"
})
