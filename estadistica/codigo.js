let numeros = [1,3,7,1,9,3,12];
let frutas = ["aguacate","aaguacate","pera","manzana","cebolla","consome","girasol"]


// const promedio = ()=>
// {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//          suma += numeros[i];  
//     }
//     return suma/numeros.length;
// }

// console.log(promedio());

const mediana= ()=>
{
    let half = numeros.length / 2 % 2;
    if (half == 0) console.log("lista par")
    else console.log("lista impar");

};

mediana();