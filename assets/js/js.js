function calcular(){
	var peso = document.getElementById("peso").value;
	var estatura = document.getElementById("estatura").value;
	var imc = peso/(estatura*estatura);
	alert("Tu IMC es " + imc.toFixed(1));
}