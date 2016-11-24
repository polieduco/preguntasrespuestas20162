/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usuarioYcontrasena/olvidoContrasena/olvidoContrasenaTemplate.html'
], function($, _, Backbone, olvidoContrasenaTemplate){

  var OlvidoContrasenaView = Backbone.View.extend({
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
	    	"click #Btn_recoveryPass": "RecoveryPass"
	    },
	    
	    login: function(){
	    	var usuario = $("#txtSearchUser").val();
	    	$("#mensajes").html("El usuario es:"+usuario);
	    }
});

  return OlvidoContrasenaView;
});