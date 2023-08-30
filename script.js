document.getElementById("saludar").addEventListener("click",(e)=>{
    alert("Hola!")
    e.stopPropagation();
})
document.getElementsByTagName("div")[0].addEventListener("click",()=>{
    
    alert("Hola! Soy el div")
})