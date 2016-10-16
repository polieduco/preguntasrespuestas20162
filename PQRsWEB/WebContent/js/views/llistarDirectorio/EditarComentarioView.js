/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/editarComentarioTemplate.html'
], function($, _, Backbone, SidebarView, editarComentarioTemplate){

  var EditarComentarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(editarComentarioTemplate);

        //var editarComentarioCollection = new EditarComentarioCollection(aEditarComentario);  
        //var editarComentarioListView = new EditarComentarioListView({ collection: editarComentarioCollection}); 
        
       // editarComentarioView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return EditarComentarioView;
});