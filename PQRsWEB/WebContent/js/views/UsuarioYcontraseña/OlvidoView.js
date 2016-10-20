/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/UsuarioYcontraseña/olvidoTemplate.html'
], function($, _, Backbone, SidebarView, olvidoTemplate){

  var OlvidoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(olvidoTemplate);

        //var olvidoCollection = new OlvidoCollection(aOlvido);  
        //var olvidoListView = new OlvidoListView({ collection: olvidoCollection}); 
        
        //olvidoLiatView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return OlvidoView;
});