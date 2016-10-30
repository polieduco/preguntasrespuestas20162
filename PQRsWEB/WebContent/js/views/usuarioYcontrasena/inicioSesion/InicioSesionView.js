<<<<<<< HEAD:PQRsWEB/WebContent/js/views/usuarioYcontrasena/inicioSesion/InicioSesionView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usuarioYcontrasena/inicioSesion/inicioSesionTemplate.html'
  ], function($, _, Backbone, inicioSesionTemplate){
  var InicioSesionView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(inicioSesionTemplate);
    }
  });

  return InicioSesionView;
});

=======
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/usuarioYcontraseña/inicioSesion/inicioSesionTemplate.html'
  ], function($, _, Backbone, inicioSesionTemplate){
  var InicioSesionView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(inicioSesionTemplate);
      /* Simple VanillaJS to toggle class */

      document.getElementById('toggleProfile').addEventListener('click', function () {
        [].map.call(document.querySelectorAll('.profile'), function(el) {
          el.classList.toggle('profile--open');
        });
      });
    }
  });

  return InicioSesionView;
});
>>>>>>> master:PQRsWEB/WebContent/js/views/usuarioYcontraseña/inicioSesion/InicioSesionView.js
