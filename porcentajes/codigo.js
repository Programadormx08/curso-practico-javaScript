const precio = document.querySelector(".precio");
const descuento = document.querySelector(".descuento");

document.querySelector(".enviar").addEventListener("click", ()=>
{
    let descuentoGenerado = (parseInt(descuento.value) * parseInt(precio.value))/100;
    let pago = parseInt(precio.value) - descuentoGenerado;
    
    document.querySelector(".pago").value = pago;
})