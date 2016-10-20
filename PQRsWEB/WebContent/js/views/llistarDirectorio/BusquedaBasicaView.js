/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/llistarDirectorio/busquedaBasicaTemplate.html'
], function($, _, Backbone, SidebarView, busquedaBasicaTemplate){

  var BusquedaBasicaView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(busquedaBasicaTemplate);

        //var busquedaBasicaCollection = new BusquedaBasicaCollection(aBusquedaBasica);  
        //var busquedaBasicaListView = new BusquedaBasicaListView({ collection: busquedaBasicaCollection}); 
        
        //busquedaBasicaView.render(); 

      //add the sidebar 
      var sidebarView = new SidebarView();
     //sidebarView.render();

    }
  });

  return BusquedaBasicaView;
});