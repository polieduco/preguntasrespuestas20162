package edu.poli.pra.pyr.rest.service;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-11-25T21:20:35.353-0500")
@StaticMetamodel(Tbareaaprobacion.class)
public class Tbareaaprobacion_ {
	public static volatile SingularAttribute<Tbareaaprobacion, Integer> idareaaprobacion;
	public static volatile SingularAttribute<Tbareaaprobacion, String> nomarea;
	public static volatile ListAttribute<Tbareaaprobacion, Tbaprobacionpregunta> tbaprobacionpreguntas;
	public static volatile SingularAttribute<Tbareaaprobacion, Tbusuario> tbusuario;
}
