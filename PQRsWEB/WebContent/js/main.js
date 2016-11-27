// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js nos permite configurar alias de acceso directo
// Su uso se hará más evidente a lo largo del futher en el tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates'
  }

});

require([
  // Cargar nuestro módulo de aplicación y pasarlo a nuestra definición de funciones
  'app',

], function(App){
  // La dependencia "app" se pasa como "App"
  // Una vez más, las otras dependencias pasó no son "AMD" por lo tanto, no pasa un parámetro a esta función
  App.initialize();
});
