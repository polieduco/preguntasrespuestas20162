define([
  'jquery',
  'underscore',
  'backbone',
  'models/usuario/usuarioModel',
  'views/listarUsuarios/ListarUsuariosListView',
  'text!templates/listarUsuarios/listarUsuariosTemplate.html',
  'views/usuarioYcontrasena/crearUsuarioYeditarUsuario/CrearUsuarioYeditarUsuarioView',
  'collections/usuario/usuarioCollection'
], function($, _, Backbone, usuarioModel,ListarUsuariosListView,listarUsuariosTemplate,CrearUsuarioYeditarUsuarioView,usuarioCollection){

  var ListarUsuariosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
    	$('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        this.$el.html(listarUsuariosTemplate);
 

        //var listarUsuario0 = new UsuarioModel({idUsuario:'Usuario1',rol:'Administrador',nombre:'nombre1',apellidos:'apallidos1',estado:'activo'}); 
        //var listarUsuario1 = new UsuarioModel({idUsuario:'Usuario2',rol:'usuario',nombre:'nombre2',apellidos:'apallidos2',estado:'inactivo'}); 
        //var listarUsuario2 = new UsuarioModel({idUsuario:'Usuario3',rol:'Administrador',nombre:'nombre3',apellidos:'apallidos3',estado:'activo'}); 
        //var listarUsuario3 = new UsuarioModel({idUsuario:'Usuario4',rol:'Autor',nombre:'nombre4',apellidos:'apallidos4',estado:'activo'}); 
        //var listarUsuario4 = new UsuarioModel({idUsuario:'Usuario5',rol:'Administrador',nombre:'nombre5',apellidos:'apallidos5',estado:'activo'}); 
        
        var listarUsuario0 = new usuarioModel({username:'1',cargo:'Administrador',nombre:'nombre1',identificacion:'abc',password:'123'}); 
        var listarUsuario1 = new usuarioModel({username:'2',cargo:'Administrador',nombre:'nombre2',identificacion:'abc',password:'123'});
        var listarUsuario2 = new usuarioModel({username:'3',cargo:'Administrador',nombre:'nombre3',identificacion:'abc',password:'123'});
        var listarUsuario3 = new usuarioModel({username:'4',cargo:'Administrador',nombre:'nombre4',identificacion:'abc',password:'123'});
        var listarUsuario4 = new usuarioModel({username:'5',cargo:'Administrador',nombre:'nombre5',identificacion:'abc',password:'123'}); 

        
        var aListarUsuarios =[listarUsuario0, 
                               listarUsuario1,
                               listarUsuario2,
                               listarUsuario3,
                               listarUsuario4];
        var um = new usuarioModel();
    	//um.set({username:usuario});
    	
        var UsuarioCollection = new usuarioCollection(um.fetch());  
       var listarUsuariosListView = new ListarUsuariosListView({collection: UsuarioCollection}); 
        
        listarUsuariosListView.render(); 

  
    },
    events: {
    	"click #btnCreaEditUsua": "irCreaEditUsua"
    },
    
    irCreaEditUsua: function(){
    	var crearUsuarioYeditarUsuarioView = new CrearUsuarioYeditarUsuarioView();
        crearUsuarioYeditarUsuarioView.render();
    },
    events: {
    	"click #btnActiInac": "activarInactivar"
    		
    },
    
    activarInactivar: function(){
    	var ctr = 0;

    	if(ctr = 0){

    		$get('btnActiInac').value= 'Cerrar'; ctr = 1;

    	}else{

    		$get('btnActiInac').value = 'Abrir'; ctr = 0;

    	}
    }
    
    
    //events: {
    //	"click #btnlistUsua": "listarUsuarios"
   // }, 
   // listarUsuarios: function(){
   // 	var um = new UsuarioModel();
   // 	um.fetch();
  //  }
  });

  return ListarUsuariosView;
});

