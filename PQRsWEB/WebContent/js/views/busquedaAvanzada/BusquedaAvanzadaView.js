/**
 * 
 */
define([ 'jquery', 'underscore', 'backbone',
		'text!templates/busquedaAvanzada/busquedaAvanzadaTemplate.html' ],
		function($, _, Backbone, busquedaAvanzadaTemplate) {

			var BusquedaAvanzadaView = Backbone.View.extend({
				el : $("#page"),
				render : function() {
					$('.menu li').removeClass('active');
					$('.menu li a[href="' + window.location.hash + '"]')
							.parent().addClass('active');
					this.$el.html(busquedaAvanzadaTemplate);

					// var busquedaAvanzadaCollection = new
					// BusquedaAvanzadaCollection(aBusquedaAvanzada);
					// var busquedaAvanzadaListView = new
					// BusquedaAvanzadaListView({ collection:
					// busquedaAvanzadaCollection});

					// busquedaAvanzadaView.render();

				}
			});

			return BusquedaAvanzadaView;
		});