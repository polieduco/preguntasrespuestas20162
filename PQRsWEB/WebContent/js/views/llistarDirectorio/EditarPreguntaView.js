/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/editarPreguntaTemplate.html'
], function($, _, Backbone, SidebarView, editarPreguntaTemplate){

  var EditarPreguntaView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(editarPreguntaTemplate);

        //var editarPreguntaCollection = new EditarPreguntaCollection(aEditarPregunta);  
        //var editarPreguntaListView = new EditarPreguntaListView({ collection: editarPreguntaCollection}); 
        
        //editarPreguntaView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return EditarPreguntaView;
});