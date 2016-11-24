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
	      this.$el.html(olvidoContrasenaTemplate);
	      /* Simple VanillaJS to toggle class */
	    },
});
  return OlvidoContrasenaView;
});

function sendEmail(e){
	let dataEmail=$('#mail').val();
	$.get('Usuario', {
        userEmail : dataEmail
		}, function(responseText) {
		        //$('#ajaxGetUserServletResponse').text(responseText);
			console.log(responseText);
		});
	 e.preventDefault();
	return false;
}