function validarsenhas() {
    if(document.form1.Senha.value != document.form1.ConfirmarSenha.value){
		alert("Senhas diferentes");
	}else if(document.form1.login.value != "" && document.form1.Senha.value != "" && document.form1.ConfirmarSenha.value != "" ){
		alert("Bem vindo!")
	}
}

function efetuarlogin() {
    if(document.form1.login.value != "" && document.form1.Senha.value != ""){
		alert("Bem vindo, " + document.form1.login.value)
	}
}


function clonarLinha(){
	var row = document.getElementById("linhaParaClonar");
	var table = document.getElementById("tabela");
	var clone = row.cloneNode(true);
	clone.id = "linhaClonada";
	table.appendChild(clone);
}

function deleteRow(i){
	document.getElementById("tabela").deleteRow(i)
}

function UsuarioConvidado(){
	if(document.form1.email.value != ""){
		alert("Email enviado!");
	}
	
}

function salvar(){
	alert("Salvo com sucesso");
	
}