    function calculaIMC() 
            { 
var peso, altura, imc, leyenda; 
//hacemos la llamada a los datos introducidos 
peso=document.getElementById("peso").value; 
altura=document.getElementById("altura").value/100; 
//calculamos el imc 
imc=peso/(altura*altura); 
document.getElementById("imc").value=imc.toFixed(2); 
//mediante if comparamos el resultado para determinar si es correcto el peso 
if(imc<=20.5) 
    { 
//determinamos el defecto en peso y definimos el comentario 
leyenda="Estas delgado. Debes engordar " + (altura*altura*20.5-peso).toFixed(1) + " kilos"; 
    } 
else if(imc>=25.5) 
{ 
//determinamos el exceso en peso y definimos el comentario 
leyenda="Tienes sobrepeso. Debes adelgazar "+(peso-altura*altura*25.5).toFixed(1) +" kilos";     
} 
else 
    { 
    leyenda="Estas en tu peso ideal"; 
 } 
//enviamos el comentario a la caja correspondiente
document.getElementById("leyenda").value=leyenda; 