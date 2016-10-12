// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/listarUsuarios/ListarUsuariosView',
  'views/projects/ProjectsView',
  'views/footer/FooterView'
], function($, _, Backbone, HomeView, ListarUsuariosView, ProjectsView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
    	'actions': 'defaultAction',
      'projects': 'showProjects',
      
      // Default
      
       '*listarU': 'showListarUsuarios'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
    	   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showListarUsuarios', function (actions) {
         
        var listarUsuariosView = new ListarUsuariosView();
        listarUsuariosView.render();
        
    });

    app_router.on('route:defaultAction', function () {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });


    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
