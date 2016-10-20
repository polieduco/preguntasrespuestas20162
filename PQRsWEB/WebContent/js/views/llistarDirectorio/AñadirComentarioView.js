/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/llistarDirectorio/añadirComentarioTemplate.html'
], function($, _, Backbone, añadirComentarioTemplate){

  var AñadirComentarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(añadirComentarioTemplate);

        //var añadirComentarioCollection = new AñadirComentarioCollection(aAñadirComentario);  
        //var añadirComentarioListView = new AñadirComentarioListView({ collection: añadirComentario}); 
        
        //añadirComentarioView.render(); 

   
  

    }
  });

  return AñadirComentarioView;
});