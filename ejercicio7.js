var cont = 1;
var cont2 = 0;
var bandera = 0;

var n = prompt("introduce un numero y te enseñaremos todos los numeros primos hasta ese numero");
//Mostrar por pantalla
console.log(n);

//Funcion que se encarga de mostrar los numeros primos al introducir el valor
function primos(){
n = 50;
while(cont <= n){
    while(cont2 < cont){
        if(cont % cont2 === 0 && cont2 != 1 && cont2 != cont){
            bandera = 1;
        }
        cont2++;
    }
    if(bandera === 0){
        document.write(cont2+ "<br/>");
    }
    else{
        bandera = 0;
    }
    cont++;
    cont2 = 0;
}
}
