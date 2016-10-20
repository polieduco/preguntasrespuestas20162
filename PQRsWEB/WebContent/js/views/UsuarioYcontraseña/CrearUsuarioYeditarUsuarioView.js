/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/UsuarioYcontraseña/crearUsuarioYeditarUsuarioTemplate.html'
], function($, _, Backbone, SidebarView,crearUsuarioYeditarUsuarioTemplate){

  var CrearUsuarioYeditarUsuarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(crearUsuarioYeditarUsuarioTemplate);


      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return CrearUsuarioYeditarUsuarioView;
});