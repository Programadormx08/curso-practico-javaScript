const cuadrado = document.querySelector(".img1");
const triangulo = document.querySelector(".img2");
const circulo = document.querySelector(".img3");

cuadrado.addEventListener("click", ()=>
{
    let dato = parseInt(prompt("¿cuanto mide cada lado de cuadrado?"));
    let perimetro = dato * 4;
    let area = dato * dato;
    let codeHtml = `<p>Figura: cuadrado</p><br>
                    <p>Perimetro: ${perimetro}</p><br>
                    <p>Area: ${area}</p>`
    document.querySelector(".resultado").innerHTML = codeHtml;
});

triangulo.addEventListener("click", ()=>
{
    let base = parseInt(prompt("¿cuanto mide la base del triangulo?"));
    let lado = parseInt(prompt("¿cuanto mide cada lado del triangulo?"));
    let altura = parseInt(prompt("¿cuanto mide la altura del triangulo?"));
    let perimetro = base + (lado * 2);
    let area = (base * altura)/2;

    let codeHtml = `<p>Figura: Triangulo</p><br>
                    <p>Perimetro: ${perimetro}</p><br>
                    <p>Area: ${area}</p>`
    document.querySelector(".resultado").innerHTML = codeHtml;
});

circulo.addEventListener("click", ()=>
{
    let diametro = parseInt(prompt("¿cuanto mide el diametro del circulo?"));
    let radio = diametro / 2;
    let area = 3.1416 * (radio * radio);

    let codeHtml = `<p>Figura: Circulo</p><br>
                    <p>Radio: ${radio}</p><br>
                    <p>Diametro: ${diametro}</p><br>
                    <p>Area: ${area}</p>`
    document.querySelector(".resultado").innerHTML = codeHtml;
});

