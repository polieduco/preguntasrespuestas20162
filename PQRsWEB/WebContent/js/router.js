// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/listarUsuarios/ListarUsuariosView',
  'views/usuarioYcontrasena/inicioSesion/InicioSesionView',
  'views/usuarioYcontrasena/olvidoContrasena/OlvidoContrasenaView',
  'views/usuarioYcontrasena/crearUsuarioYeditarUsuario/CrearUsuarioYeditarUsuarioView',
  'views/anadirComentario/AnadirComentarioView',
  'views/busquedaAvanzada/BusquedaAvanzadaView',
  'views/busquedaBasica/BusquedaBasicaView',
  'views/editarComentario/EditarComentarioView',
  'views/editarPregunta/EditarPreguntaView',
  'views/filtrarPreguntas/FiltrarPreguntasView',
  'views/listarPreguntas/ListarPreguntasView',
], function($, _, Backbone, ListarUsuariosView, InicioSesionView,OlvidoView,CrearUsuarioYeditarUsuarioView,AnadirComentarioView,BusquedaAvanzadaView,BusquedaBasicaView,EditarComentarioView,EditarPreguntaView,FiltrarPreguntasView,ListarView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
    	'inicioSesionn': 'showInicioSesion',
        'olvido': 'showOlvido',
        'crearUsuarioYeditarUsuario': 'showCrearUsuarioYeditarUsuario',
        'anadirComentario': 'showAnadirComentario',
        'busquedaAvanzada': 'showBusquedaAvanzada',
        'busquedaBasica': 'showBusquedaBasica',
        'editarComentario': 'showEditarComentario',
        'editarPregunta': 'showEditarPregunta',
        'filtrarPreguntas': 'showFiltrarPreguntas',
        'listar': 'showListar',
      // Default
        '*listarUsuarios': 'showListarUsuarios',
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    

    app_router.on('route:showInicioSesion', function(){
    	var inicioSesionView = new InicioSesionView();
    	inicioSesionView.render();
    });
    
    app_router.on('route:showListarUsuarios', function (actions) {
         
        var listarUsuariosView = new ListarUsuariosView();
        listarUsuariosView.render();
        
    });
    
    app_router.on('route:showOlvido', function(){
 	      
        var olvidoView = new OlvidoView();
        olvidoView.render();

    });
    app_router.on('route:showCrearUsuarioYeditarUsuario', function(){
 	   
        var crearUsuarioYeditarUsuarioView = new CrearUsuarioYeditarUsuarioView();
        crearUsuarioYeditarUsuarioView.render();

    });
    app_router.on('route:showAnadirComentario', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var anadirComentarioView = new AnadirComentarioView();
        anadirComentarioView.render();

    });
    app_router.on('route:showBusquedaAvanzada', function(){

        var busquedaAvanzadaView = new BusquedaAvanzadaView();
        busquedaAvanzadaView.render();

    });
    app_router.on('route:showBusquedaBasica', function(){
 	   
        var busquedaBasicaView = new BusquedaBasicaView();
        busquedaBasicaView.render();

    });
    app_router.on('route:showEditarComentario', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var editarComentarioView = new EditarComentarioView();
        editarComentarioView.render();

    });
    app_router.on('route:showEditarPregunta', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var editarPreguntaView = new EditarPreguntaView();
        editarPreguntaView.render();

    });
    app_router.on('route:showFiltrarPreguntas', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var filtrarPreguntasView = new FiltrarPreguntasView();
        filtrarPreguntasView.render();

    });
    app_router.on('route:showListar', function(){
 	   
        // Call render on the module we loaded in via the dependency array
        var listarView = new ListarView();
        listarView.render();

    });
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
