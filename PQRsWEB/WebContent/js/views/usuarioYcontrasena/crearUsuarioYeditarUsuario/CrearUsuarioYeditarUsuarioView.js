/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone, crearUsuarioYeditarUsuarioTemplate){

  var CrearUsuarioYeditarUsuarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(crearUsuarioYeditarUsuarioTemplate);


  
    }
  });

  return CrearUsuarioYeditarUsuarioView;
});
