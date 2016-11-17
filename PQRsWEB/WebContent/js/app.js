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
  
  // Mezcla de Backbone.Events, módulos y gestión de diseño en el objeto de aplicación
  return _.extend(app, {
    //Crea un objeto personalizado con un objeto Vistas anidado.
    module: function(additionalProps) {
      return _.extend({ Views: {} }, additionalProps);
    },

    //Ayudante para el uso de diseños
    useLayout: function(name, options) {
      // Habilita la variable arity  permitiendo que el primer argumento sea las opciones
      // object and omitting the name argument.
      if (_.isObject(name)) {
        options = name;
      }

      //  las opciones deben ser un objeto.
      options = options || {};

      // Si se especificó una propiedad de nombre, utilícela como plantilla.

      if (_.isString(name)) {
        options.template = name;
      }

      // Crea un nuevo Layout con opciones.
      var layout = new Backbone.Layout(_.extend({
        el: "#main"
      }, options));

      // Cache the reference.
      return this.layout = layout;
    }
  }, Backbone.Events);

});
