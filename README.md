TypeScript - JavaScript
Proporcionan interactividad a las paginas web y moviles

TypeScript -> se transpila a JavaScript
JavaScript posee un motor modelo de ejecucion donde se ejecuta el codigo

Transpilar: Conversiom de codigo fuente de un lenguaje de alto nivel o otro, a mismo nivel de abstraccion.  

El modelo de ejecucion de js es de un solo hilo principal (single-thereaded): solo se puede ejecutar una instruccion a la vez en su hilo principal.

operaciones sincromas: Las tareas se ejecutan una tras otra. 
Operaciones asincromas: Una tarea que se inicia ahora, pero cuyo resultado se obtendra en el futuro.

Call Stack,Callback queue y microtask queue Entorno y Event Loop(Bucle de eventos)


01. callback (llamada de retorno): es una funcion que se pasa a otra como argumento con la intencion de que la funcion receptora la invoque en algun momento de su propio cuerpo.

1. Declarar una funcion: definimos que hace, pero aun no se ejecuta.

2. invocar una funcion: Usamos parentesus oara que se cirra Ahora mismo.

3. pasar como argumento una funcion: Usamos el nombre la funcion sin parentecis ya que la entregamos a otro para que ella decida cuando usarla.

ECMAScript (ES6) 2015
Promesas (Promise)
Es un objeto de JS, que representan la eventual finalizacion(con un exito o un fracaso) de una operacion asincrona y su valor resultante (puede ser una promesa)

1. pendiente (pending)
2. cumplida (fulfilled)
3. rechazada (rejected)

1. crear promesas: new promise()
2. consumir promesas: .then(), catch(), finally()