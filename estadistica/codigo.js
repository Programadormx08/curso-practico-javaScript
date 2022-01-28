let numeros = [1,3,7,1,9,3];
let numbers2 = [12,32,56,87,132,45,23];

// const promedio = ()=>
// {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//          suma += numeros[i];  
//     }
//     return suma/numeros.length;
// }

// console.log(promedio());

// const compare = (a,b)=>
// {
//     return a-b;
// }

// const mediana = ()=>
// {
//     let half = numbers2.length % 2;
//     if (half == 0) {
//         numbers2.sort(compare);
//         let halfNumbers = numbers2.length / 2;
//         let calculation = (numbers2[halfNumbers -1] + numbers2[halfNumbers]) / 2;
//         console.log(numbers2);
//         console.log(calculation);  
//     } else
//     {
//         numbers2.sort(compare);
//         let halfNumbers = (numbers2.length -1) / 2
//         let result = numbers2[halfNumbers];
//         console.log(numbers2);  
//         console.log(result);
//     }

// };

// mediana();

//numero de elementos menos uno entre 2: esa es la mediana.



const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
const lista1Count = {};

lista1.map(elemento =>
    {
        if (lista1Count[elemento]) lista1Count[elemento] += 1
        else lista1Count[elemento] = 1;
    })
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];



