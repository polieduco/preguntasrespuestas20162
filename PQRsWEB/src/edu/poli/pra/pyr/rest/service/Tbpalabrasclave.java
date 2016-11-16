package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tbpalabrasclave database table.
 * 
 */
@Entity
@NamedQuery(name="Tbpalabrasclave.findAll", query="SELECT t FROM Tbpalabrasclave t")
public class Tbpalabrasclave implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idclave;

	private String palabraclave;

	//bi-directional many-to-one association to Tbpregunta
	@ManyToOne
	@JoinColumn(name="idpregunta")
	private Tbpregunta tbpregunta;

	//bi-directional many-to-one association to Tbpreguntasxpalabrasclave
	@OneToMany(mappedBy="tbpalabrasclave")
	private List<Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves;

	public Tbpalabrasclave() {
	}

	public Integer getIdclave() {
		return this.idclave;
	}

	public void setIdclave(Integer idclave) {
		this.idclave = idclave;
	}

	public String getPalabraclave() {
		return this.palabraclave;
	}

	public void setPalabraclave(String palabraclave) {
		this.palabraclave = palabraclave;
	}

	public Tbpregunta getTbpregunta() {
		return this.tbpregunta;
	}

	public void setTbpregunta(Tbpregunta tbpregunta) {
		this.tbpregunta = tbpregunta;
	}

	public List<Tbpreguntasxpalabrasclave> getTbpreguntasxpalabrasclaves() {
		return this.tbpreguntasxpalabrasclaves;
	}

	public void setTbpreguntasxpalabrasclaves(List<Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves) {
		this.tbpreguntasxpalabrasclaves = tbpreguntasxpalabrasclaves;
	}

	public Tbpreguntasxpalabrasclave addTbpreguntasxpalabrasclave(Tbpreguntasxpalabrasclave tbpreguntasxpalabrasclave) {
		getTbpreguntasxpalabrasclaves().add(tbpreguntasxpalabrasclave);
		tbpreguntasxpalabrasclave.setTbpalabrasclave(this);

		return tbpreguntasxpalabrasclave;
	}

	public Tbpreguntasxpalabrasclave removeTbpreguntasxpalabrasclave(Tbpreguntasxpalabrasclave tbpreguntasxpalabrasclave) {
		getTbpreguntasxpalabrasclaves().remove(tbpreguntasxpalabrasclave);
		tbpreguntasxpalabrasclave.setTbpalabrasclave(null);

		return tbpreguntasxpalabrasclave;
	}

}