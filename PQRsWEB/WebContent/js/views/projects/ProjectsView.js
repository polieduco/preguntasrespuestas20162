define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/UsuarioYcontraseña/inicioSesionTemplate.html'
  ], function($, _, Backbone, SidebarView, inicioSesionTemplate){
  var ProjectsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(inicioSesionTemplate);
    }
  });

  return ProjectsView;
});
