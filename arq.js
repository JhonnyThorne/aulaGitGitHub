function soma(){
	var n1, n2, soma;

	n1 = document.getElementById ("primeiroNumero").value;
	n2 = document.getElementById ("segundoNumero").value;

	
	soma = n1 + n2;

	document.getElementById ("resposta").innerHTML = soma;
}
