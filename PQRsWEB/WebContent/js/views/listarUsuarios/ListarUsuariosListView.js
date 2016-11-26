/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/usuario/usuarioCollection',
  'text!templates/listarUsuarios/listarUsuariosListTemplate.html'
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

