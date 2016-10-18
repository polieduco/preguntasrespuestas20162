define([
  'jquery',
  'underscore',
  'backbone',
  'models/listarUsuario/ListarUsuarioModel',
  'collections/listarUsuarios/ListarUsuariosCollection',
  'views/listarUsuarios/ListarUsuariosListView',
  'text!templates/listarUsuarios/listarUsuariosTemplate.html'
], function($, _, Backbone, ListarUsuarioModel, ListarUsuariosCollection, ListarUsuariosListView,listarUsuariosTemplate){

  var ListarUsuariosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(listarUsuariosTemplate);
 

        var listarUsuario0 = new ListarUsuarioModel({idUsuario:'Usuario1',rol:'Administrador',nombre:'nombre1',apellidos:'apallidos1',estado:'activo'}); 
        var listarUsuario1 = new ListarUsuarioModel({idUsuario:'Usuario2',rol:'usuario',nombre:'nombre2',apellidos:'apallidos2',estado:'inactivo'}); 
        var listarUsuario2 = new ListarUsuarioModel({idUsuario:'Usuario3',rol:'Administrador',nombre:'nombre3',apellidos:'apallidos3',estado:'activo'}); 
        var listarUsuario3 = new ListarUsuarioModel({idUsuario:'Usuario4',rol:'Autor',nombre:'nombre4',apellidos:'apallidos4',estado:'activo'}); 
        var listarUsuario4 = new ListarUsuarioModel({idUsuario:'Usuario5',rol:'Administrador',nombre:'nombre5',apellidos:'apallidos5',estado:'activo'}); 

        var aListarUsuarios = [listarUsuario0, 
                               listarUsuario1,
                               listarUsuario2,
                               listarUsuario3,
                               listarUsuario4];

        var listarUsuariosCollection = new ListarUsuariosCollection(aListarUsuarios);  
        var listarUsuariosListView = new ListarUsuariosListView({ collection: listarUsuariosCollection}); 
        
        listarUsuariosListView.render(); 

  
    }
  });

  return ListarUsuariosView;
});