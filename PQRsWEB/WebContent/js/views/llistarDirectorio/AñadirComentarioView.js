/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/añadirComentarioTemplate.html'
], function($, _, Backbone, SidebarView, AñadirComentarioListView,añadirComentarioTemplate){

  var AñadirComentarioView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(añadirComentarioTemplate);

        //var añadirComentarioCollection = new AñadirComentarioCollection(aAñadirComentario);  
        //var añadirComentarioListView = new AñadirComentarioListView({ collection: añadirComentario}); 
        
        //añadirComentarioView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return AñadirComentarioView;
});