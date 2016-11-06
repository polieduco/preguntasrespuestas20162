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
