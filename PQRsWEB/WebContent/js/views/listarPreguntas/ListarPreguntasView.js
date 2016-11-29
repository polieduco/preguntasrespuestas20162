/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone',
		'text!templates/listarPreguntas/listarPreguntasTemplate.html' ],
		function($, _, Backbone, listarPreguntasTemplate) {

			var ListarPreguntasView = Backbone.View.extend({
				el : $("#page"),
				render : function() {
					$('.menu li').removeClass('active');
					$('.menu li a[href="' + window.location.hash + '"]')
							.parent().addClass('active');
					this.$el.html(listarPreguntasTemplate);

					// var listarCollection = new ListarCollection(aListar);
					// var listarListView = new ListarListView({ collection:
					// listarCollection});

					// listarView.render();

				}
			});

			return ListarPreguntasView;
		});