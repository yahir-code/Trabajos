//modificar cosas

let contenedor = document.getElementById("contenedor");
let input = document.querySelector("#input");
let botoncito =document.querySelector("#botoncito");



botoncito.addEventListener("click",()=>{
    contenedor.innerText = input.value;
    contenedor.className = "sombreado";
})







