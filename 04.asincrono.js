//setTimeOut()
function notificardescarga(nombreArchivo){
    console.log('notificacion: el archivo'+ nombreArchivo+ "se ha descargado correctamente");

}
function descargararchivo(archivo,CallT){
console.log('01iniciando descarga de:' + archivo + "...");

//simulamos una demora de tri secuns
setTimeout (function (){
    CallT(archivo);
    
}, 300);
}
descargararchivo("manual callbacks pdf" , notificardescarga);
console.log("03 el usuario puede seguir navegando")