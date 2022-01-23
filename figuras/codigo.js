//codigo para cuadrado.
const medidaCuadrado = document.querySelector(".medida-cuadrado");
document.querySelector(".submit-area").addEventListener("click", ()=>
{
    let lado = parseInt(medidaCuadrado.value);
    let area = lado * lado;
    if (isNaN(area)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Area = ${area} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-cuadrado").innerHTML = htmlCode;
    }
});
document.querySelector(".submit-perimetro").addEventListener("click", ()=>
{
    let lado = parseInt(medidaCuadrado.value);
    let perimetro = lado * 4;
    if (isNaN(perimetro)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Perimetro = ${perimetro} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-cuadrado").innerHTML = htmlCode;
    }
});

//codigo para triangulo
const ladoA = document.querySelector(".lado-a")
const ladoB = document.querySelector(".lado-b")
const base = document.querySelector(".base")
const altura = document.querySelector(".altura")

document.querySelector(".submit-area-triangulo").addEventListener("click",()=>
{
    let medidaladoA = parseInt(ladoA.value);
    let medidaladoB = parseInt(ladoB.value);
    let medidaBase = parseInt(base.value);
    let medidaAltura = parseInt(altura.value);
    let area = (medidaBase * medidaAltura) / 2;
    if (isNaN(area)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Area = ${area} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-triangulo").innerHTML = htmlCode;
    }
})

document.querySelector(".submit-perimetro-triangulo").addEventListener("click",()=>
{
    let medidaladoA = parseInt(ladoA.value);
    let medidaladoB = parseInt(ladoB.value);
    let medidaBase = parseInt(base.value);
    let medidaAltura = parseInt(altura.value);
    let perimetro = medidaladoA + medidaladoB + medidaBase;
    if (isNaN(perimetro)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Perimetro = ${perimetro} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-triangulo").innerHTML = htmlCode;
    }
})


//codigo para circulo
const medidaCirculo = document.querySelector(".medida-circulo")

document.querySelector(".submit-area-circulo").addEventListener("click",()=>
{
    let diametro = parseInt(medidaCirculo.value);
    let radio = diametro / 2;
    let area = 3.1416 * (radio * radio);
    if (isNaN(area)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Area = ${area} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-circulo").innerHTML = htmlCode;
    }
})


document.querySelector(".submit-perimetro-circulo").addEventListener("click",()=>
{
    let diametro = parseInt(medidaCirculo.value);
    let radio = diametro / 2;
    let perimetro = 3.1416 * diametro
    if (isNaN(perimetro)) {
        alert("ingresa los datos correctamente")
    } else
    {
        let htmlCode = `<p>Perimetro = ${perimetro} <small>unida de medida<small>.</p>`
        document.querySelector(".respuesta-circulo").innerHTML = htmlCode;
    }
})

