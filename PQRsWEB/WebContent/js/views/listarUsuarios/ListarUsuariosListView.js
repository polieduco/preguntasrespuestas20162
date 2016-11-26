/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/usuario/usuarioModel',
  'collections/usuario/usuarioCollection',
  'text!templates/listarUsuarios/listarUsuariosListTemplate.html'
], function($, _, Backbone, usuarioModel, usuarioCollection, listarUsuariosListTemplate){
  var ListarUsuariosListView = Backbone.View.extend({
    el: $("#listarUsuarios-list"),

    render: function(){
      
      var data = {
    		  listarUsuarios: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template( listarUsuariosListTemplate, data );
      $("#listarUsuarios-list").html( compiledTemplate ); 
    }
  });
  return ListarUsuariosListView;
});

