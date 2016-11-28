package edu.poli.pra.pyr.rest.service;

import java.sql.Timestamp;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-11-25T21:20:35.410-0500")
@StaticMetamodel(Tbpregunta.class)
public class Tbpregunta_ {
	public static volatile SingularAttribute<Tbpregunta, Integer> idpregunta;
	public static volatile SingularAttribute<Tbpregunta, Timestamp> fechacreacion;
	public static volatile SingularAttribute<Tbpregunta, Timestamp> fechafinvigencia;
	public static volatile SingularAttribute<Tbpregunta, Timestamp> fechainiciovigencia;
	public static volatile SingularAttribute<Tbpregunta, String> pregunta;
	public static volatile ListAttribute<Tbpregunta, Tbaprobacionpregunta> tbaprobacionpreguntas;
	public static volatile ListAttribute<Tbpregunta, Tbcategoria> tbcategorias;
	public static volatile ListAttribute<Tbpregunta, Tbpalabrasclave> tbpalabrasclaves;
	public static volatile SingularAttribute<Tbpregunta, Tbusuario> tbusuario;
	public static volatile ListAttribute<Tbpregunta, Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves;
	public static volatile ListAttribute<Tbpregunta, Tbrespuesta> tbrespuestas;
}
