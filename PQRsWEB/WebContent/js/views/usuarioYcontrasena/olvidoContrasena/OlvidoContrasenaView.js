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
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(olvidoContrasenaTemplate);
    }
  });

  return OlvidoContrasenaView;
});

