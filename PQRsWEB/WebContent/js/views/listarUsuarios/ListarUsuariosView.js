define(
		[
				'jquery',
				'underscore',
				'backbone',
				'models/usuario/usuarioModel',
				'views/listarUsuarios/ListarUsuariosListView',
				'text!templates/listarUsuarios/listarUsuariosTemplate.html',
				'views/usuarioYcontrasena/crearUsuarioYeditarUsuario/CrearUsuarioYeditarUsuarioView',
				'collections/usuario/usuarioCollection' ],
		function($, _, Backbone, usuarioModel, ListarUsuariosListView,
				listarUsuariosTemplate, CrearUsuarioYeditarUsuarioView,
				usuarioCollection) {

			var listarUsuario0 = new usuarioModel({
				username : '1',
				cargo : 'Administrador',
				nombre : 'nombre1',
				identificacion : 'abc1',
				password : '123'
			});
			var listarUsuario1 = new usuarioModel({
				username : '2',
				cargo : 'Administrador',
				nombre : 'nombre2',
				identificacion : 'abc2',
				password : '123'
			});
			var listarUsuario2 = new usuarioModel({
				username : '3',
				cargo : 'Administrador',
				nombre : 'nombre3',
				identificacion : 'abc3',
				password : '123'
			});
			var listarUsuario3 = new usuarioModel({
				username : '4',
				cargo : 'Administrador',
				nombre : 'nombre4',
				identificacion : 'abc4',
				password : '123'
			});
			var listarUsuario4 = new usuarioModel({
				username : '5',
				cargo : 'Administrador',
				nombre : 'nombre5',
				identificacion : 'abc5',
				password : '123'
			});
			var listarUsuario5 = new usuarioModel({
				username : '6',
				cargo : 'Administrador',
				nombre : 'nombre6',
				identificacion : 'abc6',
				password : '123'
			});
			var listarUsuario6 = new usuarioModel({
				username : '7',
				cargo : 'Administrador',
				nombre : 'nombre7',
				identificacion : 'abc7',
				password : '123'
			});
			var listarUsuario7 = new usuarioModel({
				username : '8',
				cargo : 'Administrador',
				nombre : 'nombre8',
				identificacion : 'abc8',
				password : '123'
			});
			var listarUsuario8 = new usuarioModel({
				username : '9',
				cargo : 'Administrador',
				nombre : 'nombre9',
				identificacion : 'abc9',
				password : '123'
			});
			var listarUsuario9 = new usuarioModel({
				username : '10',
				cargo : 'Administrador',
				nombre : 'nombre10',
				identificacion : 'abc10',
				password : '123'
			});
			var listarUsuario10 = new usuarioModel({
				username : '11',
				cargo : 'Administrador',
				nombre : 'nombre11',
				identificacion : 'abc11',
				password : '123'
			});
			var listarUsuario11 = new usuarioModel({
				username : '12',
				cargo : 'Administrador',
				nombre : 'nombre12',
				identificacion : 'abc12',
				password : '123'
			});
			var listarUsuario12 = new usuarioModel({
				username : '13',
				cargo : 'Administrador',
				nombre : 'nombre13',
				identificacion : 'abc13',
				password : '123'
			});
			var listarUsuario13 = new usuarioModel({
				username : '14',
				cargo : 'Administrador',
				nombre : 'nombre14',
				identificacion : 'abc14',
				password : '123'
			});
			var listarUsuario14 = new usuarioModel({
				username : '15',
				cargo : 'Administrador',
				nombre : 'nombre15',
				identificacion : 'abc15',
				password : '123'
			});
			var i = 0;
			var izq = 15;
			var aListarUsuarios = [ listarUsuario0, listarUsuario1,
					listarUsuario2, listarUsuario3, listarUsuario4,
					listarUsuario5, listarUsuario6, listarUsuario7,
					listarUsuario8, listarUsuario9, listarUsuario10,
					listarUsuario11, listarUsuario12, listarUsuario13,
					listarUsuario14 ];

			// var um = new usuarioModel();
			// um.set({username:usuario});

			// var UsuarioCollection = new usuarioCollection(um.fetch());

			var paso;
			var ListarUsuariosView = Backbone.View
					.extend({
						el : $("#page"),
						render : function() {
							$('.menu li').removeClass('active');
							$('.menu li a[href="' + window.location.hash + '"]')
									.parent().addClass('active');
							this.$el.html(listarUsuariosTemplate);
							var UsuarioCollection = new usuarioCollection();
							for (paso = 0 + i; paso < 5 + i; paso++) {
								UsuarioCollection.add(aListarUsuarios[paso]);
							}
							if (i >= 10) {
								i = 0;
							} else {
								i = i + 5;
							}

							var listarUsuariosListView = new ListarUsuariosListView(
									{
										collection : UsuarioCollection
									});
							listarUsuariosListView.render();
						},
						render1 : function() {
							$('.menu li').removeClass('active');
							$('.menu li a[href="' + window.location.hash + '"]')
									.parent().addClass('active');
							this.$el.html(listarUsuariosTemplate);
							var UsuarioCollection = new usuarioCollection();
							for (paso = izq - 5; paso < izq; paso++) {
								UsuarioCollection.add(aListarUsuarios[paso]);
							}
							if (izq <= 5) {
								izq = 15;
							} else {
								izq = izq - 5;
							}
							var listarUsuariosListView = new ListarUsuariosListView(
									{
										collection : UsuarioCollection
									});
							listarUsuariosListView.render();
						},
						events : {
							"click #btnCreaEditUsua" : "irCreaEditUsua",
							"click #btnlistUsua" : "listarUsuarios",
							"click #btnActiInac" : "activarInactivar",
							"click #btnDer" : "render",
							"click #btnIzq" : "render1"
						},

						irCreaEditUsua : function() {
							var crearUsuarioYeditarUsuarioView = new CrearUsuarioYeditarUsuarioView();
							crearUsuarioYeditarUsuarioView.render();
						},

						activarInactivar : function() {
							var ctr = 0;

							if (ctr = 0) {

								// btnActiInac.value= "Inactivar"; ctr = 1; btn

							} else {

								// btnActiInac.value = "Activar"; ctr = 0;

							}
						},

						listarUsuarios : function() {
							var um = new usuarioModel();
							um.fetch();
						}
					});

			return ListarUsuariosView;
		});
