function apenasNumeros(string) {
    var apenasNumeros = string.replace(/[^0-9]/g, '');
    return parseInt(apenasNumeros);
}

function ConversaWhatsApp() {
    var telefone = apenasNumeros(document.getElementById("telefone").value);
    window.open("https://api.whatsapp.com/send?phone=55" + telefone + "&text=Olá");
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}