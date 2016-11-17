/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/editarPregunta/editarPreguntaTemplate.html'
], function($, _, Backbone, editarPreguntaTemplate){

  var EditarPreguntaView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(editarPreguntaTemplate);

        //var editarPreguntaCollection = new EditarPreguntaCollection(aEditarPregunta);  
        //var editarPreguntaListView = new EditarPreguntaListView({ collection: editarPreguntaCollection}); 
        
        //editarPreguntaView.render(); 

  
    }
  });

  return EditarPreguntaView;
});