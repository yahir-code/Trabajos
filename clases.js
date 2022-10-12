var articulos=[
    {nombre:"bici", costo:300},
    {nombre:"TV", costo:2500},
    {nombre:"Libro", costo:320},
    {nombre:"Celular", costo:1000},
    {nombre:"Laptop", costo:20000},
    {nombre:"Teclado", costo:500},
    {nombre:"Audifonos", costo:1700},
];
//articulos.forEach((valor)=>{
 //   console.log(valor.nombre);
//})

var arrelgoCaros = articulos.filter((valor)=>{
    if(valor.costo>2000)
    return valor;
})
var articulosDescuento = articulos.map((articulo)=>{
    return {nombre:articulo.nombre, costo:articulo.costo*0.8};
}) 


//filtro se puede modificar
let nombre = ["Guillermo", "Josue", "Chino", "Arely","Samuel"];
let nombreNuevos = nombres.filter(nombre=>{
    if(nombre.length>7){
        return nombre;
    }
})

// regresa un valor
let mujer = nombres.fimd(persona=>{
    if(persona.sexo [0] == "F"){
        return persona.nombre;
    }
})

let mujer1 = nombres.find(persona=>{
    if(persona.nombre.include("Chi")){
        return true;
    }
})














let nombres = [
    {
        nombre:"Guillermo",
        edad:37,
        sexo:"M",
    },
    {
        nombre:"Josue",
        edad:22,
        sexo:"M",
    },
    {
        nombre:"Chino",
        edad:20,
        sexo:"M",
    },
    {
        nombre:"Arely",
        edad:21,
        sexo:"F",
    },
    {
        nombre:"Samuel",
        edad:21,
        sexo:"M",
    },
            ];



let hombres = nombres.filter(persona=>{
    if(persona.sexo == "M"){
        return persona;
    }
})

let saludos = nombres.map(persona=>{
    return `hola ${persona.nombre} tu edad es de ${persona.edad}`; 
    return {nombre:persona.nombre, sueldo:3000};
 
})
// regresa un valor
let mujer2 = nombres.find(persona=>{
    if(persona.sexo [0] == "F"){
        return persona.nombre;
    }
})

let mujer3 = nombres.find(persona=>{
    if(persona.nombre.include("Chi")){
        return true;
    }
})

nombres.forEach(persona=>{
    console.log(persona.nombre);

})
//evaluar
let Mayores = nombres.some(persona=>{
    if (persona.edad>30)
    {
        return true;
    }
})
