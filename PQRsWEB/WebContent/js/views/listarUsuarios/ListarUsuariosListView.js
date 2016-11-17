/**
 * 
 */
// Filename: views/listarUsuarios/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/listarUsuario/ListarUsuarioModel',
  'collections/listarUsuarios/ListarUsuariosCollection',
  'text!templates/listarUsuarios/listarUsuariosListTemplate.html'
], function($, _, Backbone, ListarUsuarioModel, ListarUsuariosCollection, listarUsuariosListTemplate){
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

