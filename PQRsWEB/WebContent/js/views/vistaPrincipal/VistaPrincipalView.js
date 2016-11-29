/**
 * vista preliminar de los templates
 */
define([ 'jquery', 'underscore', 'backbone',
		'text!templates/vistaPrincipal/vistaPrincipalTemplate.html' ],
		function($, _, Backbone, vistaPrincipalTemplate) {

			var VistaPrincipalView = Backbone.View.extend({
				el : $("#barra"),
				render : function() {
					$('.menu li').removeClass('active');
					$('.menu li a[href="' + window.location.hash + '"]')
							.parent().addClass('active');
					this.$el.html(vistaPrincipalTemplate);

				}
			});

			return VistaPrincipalView;
		});