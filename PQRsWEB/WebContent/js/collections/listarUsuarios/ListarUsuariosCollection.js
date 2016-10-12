/**
 * 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/listarUsuario/ListarUsuarioModel'
], function($, _, Backbone, ListarUsuarioModel){
  var ListarUsuariosCollection = Backbone.Collection.extend({
    model: ListarUsuarioModel,
    
    initialize: function(){

      //this.add([listarUsuarios0, listarUsuarios1, listarUsuarios2, listarUsuarios3, listarUsuarios4]);

    }

  });
 
  return ListarUsuariosCollection;
});