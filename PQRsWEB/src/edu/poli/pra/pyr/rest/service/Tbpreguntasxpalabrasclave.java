package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tbpreguntasxpalabrasclave database table.
 * 
 */
@Entity
@NamedQuery(name="Tbpreguntasxpalabrasclave.findAll", query="SELECT t FROM Tbpreguntasxpalabrasclave t")
public class Tbpreguntasxpalabrasclave implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="idp_palabraclave")
	private Integer idpPalabraclave;

	//bi-directional many-to-one association to Tbpalabrasclave
	@ManyToOne
	@JoinColumn(name="idclave")
	private Tbpalabrasclave tbpalabrasclave;

	//bi-directional many-to-one association to Tbpregunta
	@ManyToOne
	@JoinColumn(name="idpregunta")
	private Tbpregunta tbpregunta;

	public Tbpreguntasxpalabrasclave() {
	}

	public Integer getIdpPalabraclave() {
		return this.idpPalabraclave;
	}

	public void setIdpPalabraclave(Integer idpPalabraclave) {
		this.idpPalabraclave = idpPalabraclave;
	}

	public Tbpalabrasclave getTbpalabrasclave() {
		return this.tbpalabrasclave;
	}

	public void setTbpalabrasclave(Tbpalabrasclave tbpalabrasclave) {
		this.tbpalabrasclave = tbpalabrasclave;
	}

	public Tbpregunta getTbpregunta() {
		return this.tbpregunta;
	}

	public void setTbpregunta(Tbpregunta tbpregunta) {
		this.tbpregunta = tbpregunta;
	}

}