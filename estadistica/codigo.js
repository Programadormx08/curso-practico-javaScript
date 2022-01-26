let numeros = [1,3,7,1,9,3,12];
let numbers2 = [3,46,12,89,120,54];


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
    let half = numbers2.length / 2 % 2;
    if (half == 0) console.log("even list")
    else console.log("odd list");

};

mediana();