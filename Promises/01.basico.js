var miPromesa = new Promise(
//recibe un unico argumento:
//funcion ejecutora(excutor funtion)
    function(resolve, reject) {
    //cuerpo de la funcion ejecutora
    var operacionExitoso = true;

    if(operacionExitoso) {
        //cambia el estado de 'pending' a 'fulfilled'
        resolve('los datos se procesaron correctamente');
    }else {
        //cambia el estado de 'pending' a 'rejected'
        //y entrega el motivo del pallo
        reject('Ocurrio un fallo al procesar los datos');
    }
}
)

//then(): Registra una funcion que se ejecutara cuando la promesa pase al estado de 'fulfilled'
//catch(): Registra una funcion que se ejecutara cuando la promesa pase al estado de 'rejected'
miPromesa
    .then(function(mensajeRecibido) {
        console.log("Resultado capturado en then():" + mensajeRecibido);
    })
    .catch(function(motivoError) {
        console.error("Error capturado en catch():" + motivoError);
    });