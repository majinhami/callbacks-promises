//Definir la funcion que servira como callback
function despedirse(){
console.log('adios, hemos terminado la clase')
}

//declaramos la funcion principal que recibe una funcion como parametro

function inicarProceso(callB){
    console.log('iniciando el proceso principal...')

//invocamos la funcion que recibimos como argumento
callB();

}

//llamamos a la funcion principal pasando 'despedirse' sin parentecis
inicarProceso(despedirse);