function duplicarNumero(numero){
console.log('resultado duplicado: ' + (numero * 2))


}
function procesarLista(listaNumeros, accionCall){
console.log ('--inicio del procesamiento de la lista--')
for(var i=0; i<listaNumeros.length; i++){
    accionCall(listaNumeros[i]);
}
console.log ("--fin del procesamiento de la lista--")
}

var listaNumeros=[5,10,15,20,25,30,35,40];
procesarLista(listaNumeros , duplicarNumero);
console.log("siguiente instruccion del programa")
