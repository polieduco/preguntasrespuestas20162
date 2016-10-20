/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/filtrarPreguntasTemplate.html'
], function($, _, Backbone, SidebarView, filtrarPreguntasTemplate){

  var FiltrarPreguntasView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(filtrarPreguntasTemplate);

        //var filtrarPreguntasCollection = new FiltrarPreguntasCollection(aFiltrarPreguntas);  
        //var filtrarPreguntasListView = new FiltrarPreguntasListView({ collection: filtrarPreguntas}); 
        
        //filtrarPreguntasView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return FiltrarPreguntasView;
});