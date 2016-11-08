/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/anadirComentario/anadirComentarioTemplate.html'
], function($, _, Backbone, anadirComentarioTemplate){

  var AnadirComentarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(anadirComentarioTemplate);

        //var añadirComentarioCollection = new AñadirComentarioCollection(aAñadirComentario);  
        //var añadirComentarioListView = new AñadirComentarioListView({ collection: añadirComentario}); 
        
        //añadirComentarioView.render(); 

   
  

    }
  });

  return AnadirComentarioView;
});

