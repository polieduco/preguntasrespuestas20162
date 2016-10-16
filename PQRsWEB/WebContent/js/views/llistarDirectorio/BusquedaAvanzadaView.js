/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/busquedaAvanzadaTemplate.html'
], function($, _, Backbone, SidebarView, busquedaAvanzadaTemplate){

  var BusquedaAvanzadaView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(busquedaAvanzadaTemplate);

        //var busquedaAvanzadaCollection = new BusquedaAvanzadaCollection(aBusquedaAvanzada);  
        //var busquedaAvanzadaListView = new BusquedaAvanzadaListView({ collection: busquedaAvanzadaCollection}); 
        
        //busquedaAvanzadaView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return BusquedaAvanzadaView;
});