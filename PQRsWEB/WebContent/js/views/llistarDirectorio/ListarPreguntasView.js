/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/listarPreguntasTemplate.html'
], function($, _, Backbone, SidebarView, listarPreguntasTemplate){

  var ListarPreguntasView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(listarPreguntasTemplate);

        //var listarCollection = new ListarCollection(aListarPreguntas);  
        //var listarListView = new ListarListView({ collection: listarPreguntasCollection}); 
        
        //listarPreguntasListView.render(); 

      //add the sidebar 
      //var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return ListarPreguntasView;
});