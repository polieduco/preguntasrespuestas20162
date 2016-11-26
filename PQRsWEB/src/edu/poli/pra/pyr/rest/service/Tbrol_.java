package edu.poli.pra.pyr.rest.service;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-11-25T21:20:35.460-0500")
@StaticMetamodel(Tbrol.class)
public class Tbrol_ {
	public static volatile SingularAttribute<Tbrol, Integer> idrol;
	public static volatile SingularAttribute<Tbrol, String> nomrol;
	public static volatile ListAttribute<Tbrol, Tbusuario> tbusuarios;
}
