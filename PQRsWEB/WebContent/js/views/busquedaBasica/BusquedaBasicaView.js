/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/busquedaBasica/busquedaBasicaTemplate.html'
], function($, _, Backbone, busquedaBasicaTemplate){

  var BusquedaBasicaView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(busquedaBasicaTemplate);

        //var busquedaBasicaCollection = new BusquedaBasicaCollection(aBusquedaBasica);  
        //var busquedaBasicaListView = new BusquedaBasicaListView({ collection: busquedaBasicaCollection}); 
        
        //busquedaBasicaView.render(); 

  

    }
  });

  return BusquedaBasicaView;
});