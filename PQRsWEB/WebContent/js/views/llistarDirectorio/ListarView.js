/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/listarTemplate.html'
], function($, _, Backbone, SidebarView, listarTemplate){

  var ListarView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(listarTemplate);

        //var listarCollection = new ListarCollection(aListar);  
        //var listarListView = new ListarListView({ collection: listarCollection}); 
        
        //listarView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return ListarView;
});