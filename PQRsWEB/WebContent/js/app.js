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
  
  // Configurar LayoutManager con los valores predeterminados de Backbone.
  Backbone.LayoutManager.configure({
    // Permite que LayoutManager aumente Backbone.View.prototype.
    manage: true,

    prefix: "app/templates/",

    fetch: function(path) {
      // Concatena la extensión del archivo.
      path = path + ".html";

      // Si se almacena en caché, utilice la plantilla compilada.
      if (JST[path]) {
        return JST[path];
      }

      // Permite cambiar la búsqueda a `async-mode`.
      var done = this.async();

      //Busca la plantilla asincrónicamente.
      $.get(app.root + path, function(contents) {
        done(JST[path] = _.template(contents));
      });
    }
  });

});
