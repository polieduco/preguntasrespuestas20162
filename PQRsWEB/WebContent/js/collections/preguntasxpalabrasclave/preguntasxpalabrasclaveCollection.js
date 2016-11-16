  // Collection class for Tbpreguntasxpalabrasclave entities
/**
 * 
 */
define([
 'jquery', 
  'underscore',
  'backbone',
  'models/preguntasxpalabrasclave/PreguntasxPalabrasClave'
], function($, _,Backbone, preguntasxpalabrasclaveModel){              //se añade

var preguntasxpalabrasclaveCollection = Backbone.Collection.extend({
model: preguntasxpalabrasclaveModel, 

        url: "http://localhost:19749/WebApplication3/webresources/dbclasses.preguntasxpalabrasclave/",
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
     
return preguntasxpalabrasclaveCollection;  
}); 