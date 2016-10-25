/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/editarComentario/editarComentarioTemplate.html'
], function($, _, Backbone, editarComentarioTemplate){

  var EditarComentarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(editarComentarioTemplate);

        //var editarComentarioCollection = new EditarComentarioCollection(aEditarComentario);  
        //var editarComentarioListView = new EditarComentarioListView({ collection: editarComentarioCollection}); 
        
       // editarComentarioView.render(); 

   

    }
  });

  return EditarComentarioView;
});