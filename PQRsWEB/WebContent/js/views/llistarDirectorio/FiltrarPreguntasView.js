/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/llistarDirectorio/filtrarPreguntasTemplate.html'
], function($, _, Backbone, filtrarPreguntasTemplate){

  var FiltrarPreguntasView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(filtrarPreguntasTemplate);

        //var filtrarPreguntasCollection = new FiltrarPreguntasCollection(aFiltrarPreguntas);  
        //var filtrarPreguntasListView = new FiltrarPreguntasListView({ collection: filtrarPreguntas}); 
        
        //filtrarPreguntasView.render(); 



    }
  });

  return FiltrarPreguntasView;
});