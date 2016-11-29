// Collection class for Tbpreguntasxpalabrasclave entities
/**
 * 
 */
define(
		[
		// librerias javascript
		'jquery', 'underscore', 'backbone',
				'models/preguntasxpalabrasclave/preguntasXpalabrasClaveModel' ],
		function($, _, Backbone, preguntasxpalabrasclaveModel) {// se extienden
			// todos los
			// métodos y
			// atributos de
			// la clase
			// Backbone.Model
			// en la
			// coleccion
			// actual

			var preguntasxpalabrasclaveCollection = Backbone.Collection
					.extend({// valores predeterminados de la coleccion
						// actual
						model : preguntasxpalabrasclaveModel,
						// Parámetros que necesita el servidor
						url : "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbpreguntasxpalabrasclave",// direccion
						// url
						// de
						// cada
						// modelo
						// y
						// coleccion
						sync : function(method, model, options) { // Operaciones
							// de
							// sincronización
							// manejadas
							// a traves
							// del
							// servidor
							// y
							// operaciones
							// de los
							// modelos
							options || (options = {});
							var errorHandler = {
								error : function(jqXHR, textStatus, errorThrown) {// codigo
									// de
									// manejo
									// de
									// errores,configurados
									// en
									// el
									// servidor
									// REST.
									// TODO: put your error handling code here
									// If you use the JS client from the
									// different domain
									// (f.e. locally) then Cross-origin resource
									// sharing
									// headers has to be set on the REST server
									// side.
									// Otherwise the JS client has to be copied
									// into the
									// some (f.e. the same) Web project on the
									// same domain
									alert('Unable to fulfil the request');// Muestra
									// notificacion
									// como
									// una
									// alerta
								}
							}

							var result = Backbone.sync(method, model, _.extend(
									options, errorHandler));// guarda en una
							// variable
							return result;
						}
					});

			return preguntasxpalabrasclaveCollection;
		});