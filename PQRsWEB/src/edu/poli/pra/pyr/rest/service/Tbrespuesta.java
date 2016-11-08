package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tbrespuesta database table.
 * 
 */
@Entity
@NamedQuery(name="Tbrespuesta.findAll", query="SELECT t FROM Tbrespuesta t")
public class Tbrespuesta implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idrespuesta;

	private String respuesta;

	//bi-directional many-to-one association to Tbpregunta
	@ManyToOne
	@JoinColumn(name="idpregunta")
	private Tbpregunta tbpregunta;

	public Tbrespuesta() {
	}

	public Integer getIdrespuesta() {
		return this.idrespuesta;
	}

	public void setIdrespuesta(Integer idrespuesta) {
		this.idrespuesta = idrespuesta;
	}

	public String getRespuesta() {
		return this.respuesta;
	}

	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}

	public Tbpregunta getTbpregunta() {
		return this.tbpregunta;
	}

	public void setTbpregunta(Tbpregunta tbpregunta) {
		this.tbpregunta = tbpregunta;
	}

}