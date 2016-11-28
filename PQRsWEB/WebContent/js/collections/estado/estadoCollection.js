 // Collection class for Tbestado entities
/**
 * 
 */
define([
//librerias javascrip
  'jquery',        
  'underscore',
  'backbone',
  'models/estado/estadoModel'
], function($, _,Backbone, estadoModel){//se extienden todos los métodos y atributos //se extienden todos los métodos y atributos

var estadoCollection = Backbone.Collection.extend({// valores predeterminados de la coleccion actual
 model: estadoModel, 
//Parámetros que necesita el servidor 
        url: "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbestado",//direccion url de cada modelo y coleccion
        sync: function (method, model, options) {//Operaciones de sincronización manejadas a traves del servidor y operaciones de los modelos 
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {//codigo de manejo de errores,configurados en el servidor REST.
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');//Muestra notificacion como una alerta
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));//guarda en una variable el resultado de la fucion del manejo de los errores
            return result;
        }
    });
    
return estadoCollection;   
})