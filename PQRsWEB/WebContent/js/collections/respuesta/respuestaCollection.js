// Collection class for Tbrespuesta entities
/**
 * 
 */
define([
  'jquery', 
  'underscore',
  'backbone',
  'models/respuesta/Respuesta'
], function($, _,Backbone, respuestaModel){              //se añade

var respuestaCollection = Backbone.Collection.extend({
 model: respuestaModel, 
        url: "http://localhost:19749/WebApplication3/webresources/dbclasses.respuesta/",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });
    
return respuestaCollection;  
});    