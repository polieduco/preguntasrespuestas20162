define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usuarioYcontrasena/inicioSesion/inicioSesionTemplate.html',
  'models/usuario/UsuarioModel'
  ], function($, _, Backbone, inicioSesionTemplate, UsuarioModel){
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
    	/*
    	var um = new UsuarioModel();
    	um.set({username:usuario});
    	um.fetch();
    	if(um.get("username") == usuario){
    		//autenticado
    		
    	}else{
    		//no esta autenticado
    		
    	}*/
    	$("#mensajes").html("Ususario/clave incorrecta");
    }
  
  });

  return InicioSesionView;
});
