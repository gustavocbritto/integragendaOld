function validarsenhas() {
    if(document.form1.Senha.value != document.form1.ConfirmarSenha.value){
		alert("Senhas diferentes");
	}else if(document.form1.login.value != ""){
		alert("Bem vindo!")
	}
}

function efetuarlogin() {
    if(document.form1.login.value != "" && document.form1.Senha.value != "" ){
		alert("Bem vindo, " + document.form1.login.value)
	}
}