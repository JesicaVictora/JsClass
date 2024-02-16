//leer un numero detras de otro mientras que el numero leido sea distinto de cero.
//Al final del proceso mostrar cuantos numeros validos he leido,
//y cuanto suman las cantidades de los numeros introducidos, y
// cual es la media de los numeros leidos.




let numero = 1;
let cantNumeros = 0; 
let SumaNumeros = 0;
let MediaNumeros = 0;

while (numero != 0) {

    numero = prompt("Ingrese un numero");
  
    numero = numero*1;
   
    if (numero != 0) {
        cantNumeros++;
        SumaNumeros +=  numero; 
    }
    
}

console.log ("Se ha leido "+cantNumeros+" numeros");

console.log ("La suma de todos los numeros es "+SumaNumeros);

MediaNumeros = SumaNumeros/cantNumeros;

console.log ("La media de todos los numeros es "+MediaNumeros);


