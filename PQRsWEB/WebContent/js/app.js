// Filename: app.js
//un archivo app.js puede contener las referencias de lógica o módulo necesarios para iniciar una aplicación.
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pase en nuestro módulo de router y llamar a su función inicializar
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
}, function() {
   // Da una ubicación global para colocar los ajustes de configuración y el módulo
  // Creaciòn.
  var app = {
    // Ruta raíz para ejecutar la aplicación.
    root: "/"
  };
 //  Crea un nuevo objeto Template de JavaScript.
  var JST = window.JST = window.JST || {};

});
