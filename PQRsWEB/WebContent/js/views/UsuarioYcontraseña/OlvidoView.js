/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/UsuarioYcontraseña/olvidoTemplate.html'
], function($, _, Backbone, olvidoTemplate){

  var OlvidoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(olvidoTemplate);

        //var olvidoCollection = new OlvidoCollection(aOlvido);  
        //var olvidoListView = new OlvidoListView({ collection: olvidoCollection}); 
        
        //olvidoLiatView.render(); 


    }
  });

  return OlvidoView;
});