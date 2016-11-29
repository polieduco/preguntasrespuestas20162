define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/usuarioYcontrasena/inicioSesion/inicioSesionTemplate.html',
        'models/usuario/usuarioModel'
        ], function($, _, Backbone, inicioSesionTemplate, usuarioModel){
	var InicioSesionView = Backbone.View.extend({

		el: $("#mdl-layout__container"),

		render: function(){
			$('.menu li').removeClass('active');
			$('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
			this.$el.html(inicioSesionTemplate);
			/* Simple VanillaJS to toggle class */

			document.getElementById('toggleProfile').addEventListener('click', function () {
				[].map.call(document.querySelectorAll('.profile'), function(el) {
					el.classList.toggle('profile--open');
				});
			});
		},

		events: {
			"click #btnlogin": "login"
		},

		login: function(){
			var usuario = $("#fieldUser").val();
			var password= $("#fieldPassword").val();
			if("" == usuario && "" == password){
				$("#mensajes").html("Ingrese su usuario y contraseña");    		
			}else{
				let user=usuario;
				let pass=password;
				$.get('Rol', {
			        username : user,
			        password : pass
					}, function(responseText) {
						if(responseText=="Enhorabuena conectado!"){
							window.location="index.html?#/vistaPrincipal"; 
						}else{
							$("#mensajes").html("Usuario/clave incorrecta");
							$("#fieldUser").val("");
							$("#fieldPassword").val("");
							alert('Mensaje manejado con JavaScript');
						}
					
					});
			}
		}

	});

	return InicioSesionView;
});
