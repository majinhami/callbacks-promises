function mostrarTotal(montoTotal){
    console.log("el total a pagar con iva incluido es: $" + montoTotal);
    
}

function calcularPrecioConIVA(precioBase,callBM){
    var iva= precioBase*0.16;
    var total= precioBase + iva;
//ejecutar el callback
callBM(total);
}

calcularPrecioConIVA(100, mostrarTotal);