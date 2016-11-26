package edu.poli.pra.pyr.rest.service;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-11-25T21:20:35.473-0500")
@StaticMetamodel(Tbusuario.class)
public class Tbusuario_ {
	public static volatile SingularAttribute<Tbusuario, Integer> idusuario;
	public static volatile SingularAttribute<Tbusuario, String> cargo;
	public static volatile SingularAttribute<Tbusuario, Integer> identificacion;
	public static volatile SingularAttribute<Tbusuario, String> nombre;
	public static volatile SingularAttribute<Tbusuario, String> password;
	public static volatile SingularAttribute<Tbusuario, String> username;
	public static volatile ListAttribute<Tbusuario, Tbareaaprobacion> tbareaaprobacions;
	public static volatile ListAttribute<Tbusuario, Tbpregunta> tbpreguntas;
	public static volatile SingularAttribute<Tbusuario, Tbrol> tbrol;
}
