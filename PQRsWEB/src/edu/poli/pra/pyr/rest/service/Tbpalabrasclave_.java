package edu.poli.pra.pyr.rest.service;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-11-25T21:20:35.394-0500")
@StaticMetamodel(Tbpalabrasclave.class)
public class Tbpalabrasclave_ {
	public static volatile SingularAttribute<Tbpalabrasclave, Integer> idclave;
	public static volatile SingularAttribute<Tbpalabrasclave, String> palabraclave;
	public static volatile SingularAttribute<Tbpalabrasclave, Tbpregunta> tbpregunta;
	public static volatile ListAttribute<Tbpalabrasclave, Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves;
}
