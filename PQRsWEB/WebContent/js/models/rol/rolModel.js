
    
// Model for Tbrol entity
/**
 * 
 */
define([
        //librerias javascript
  'underscore',
  'backbone'
  ], function(_,Backbone) {//se extienden todos los métodos y atributos de la clase Backbone.Model en el modelo actual.
  
  var rolModel = Backbone.Model.extend({   
	// valores predeterminados del modelo actual
        urlRoot: "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbrol",//direccion url de cada modelo y coleccion
        idAttribute: 'idrol',
        defaults: {
            nomrol: ""
        },
        toViewJson: function () {
            var result = this.toJSON(); //Objeto valor es una cadena, número, booleano, nulo, objeto o arreglo
            
            // displayName property is used to render item in the list
            result.displayName = this.get('idrol');//devuelve un arreglo cuyos elementos correspondientes 
          //a las propiedades enumerables que seencuentran directamente en el object result.
            return result;
        },
       
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {// código de manejo de errores,configurados en el servidor REST.
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');// Muestra notificación como una alerta
                }}
            
            if (method == 'create') {
                options.url = 'http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbrol';
            }
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
        
        
    });
  return rolModel; 
});    