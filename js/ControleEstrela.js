function carregaEstrelas(){
	var node = document.getElementById("estrelas");
	node.innerHTML = "<input type\"radiobuttom\" onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";

};

function alerta(numero, idElemento){
	var node = document.getElementById(idElemento);
	//node.parentNode.removeChild();
	if(numero == 1)
	{
		node.innerHTML = "<span onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";
	}else
	if(numero == 2)
	{
		node.innerHTML = "<span onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";

	}else
	if(numero == 3)
	{
		node.innerHTML = "<span onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";

	}else
	if(numero == 4)
	{
		node.innerHTML = "<span onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";
	}else
	{
		node.innerHTML = "<span class=\"estrelaPintada\" onclick=\"alerta(5 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(4 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(3 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(2 , '"+idElemento+"')\">&#x2605;</span><span class=\"estrelaPintada\" onclick=\"alerta(1 , '"+idElemento+"')\">&#x2605;</span>";
	}
	
};