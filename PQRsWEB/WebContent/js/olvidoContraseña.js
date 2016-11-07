function Comprobar(formulario) {
	var eMail=document.getElementById('email').value;
	if (eMail.length==0) {
	var erroremail=document.createElement('p');
	erroremail.innerHTML='No escribiste tu email';
	document.getElementById("Comentarios").appendChild(erroremail);
	return false;
	}
	return true;
}

function GetPass(){
	debugger;
	var email = $('#emailPws').val();
	$.ajax({
		type: "POST",
		url: "src/Test/GetPassword",
		cache: false,
		data: email,
		error: function(xhr){
			debugger;
			console.log(Json.stringfy(xhr));
		},
		success: function(data){
			debugger;
		}
		});
}