/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/llistarDirectorio/listarTemplate.html'
], function($, _, Backbone, listarTemplate){

  var ListarView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(listarTemplate);

        //var listarCollection = new ListarCollection(aListar);  
        //var listarListView = new ListarListView({ collection: listarCollection}); 
        
        //listarView.render(); 

   

    }
  });

  return ListarView;
});