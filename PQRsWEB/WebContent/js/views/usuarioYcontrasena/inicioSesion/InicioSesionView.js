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
    	
    	
    	if("poli" == usuario && "123" == password){
    		$("#mensajes").html("correcta");
    		//$url="index.html?#/vistaPrincipal"; 
    		//echo "<SCRIPT>window.location='$url';</SCRIPT>"; 
    		
    	}else{
    		$("#mensajes").html("Usuario/clave incorrecta");
    		
    	}
    	
    }
  
  });

  return InicioSesionView;
});
