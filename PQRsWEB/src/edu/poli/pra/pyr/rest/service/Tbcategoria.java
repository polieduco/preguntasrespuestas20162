package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tbcategoria database table.
 * 
 */
@Entity
@NamedQuery(name="Tbcategoria.findAll", query="SELECT t FROM Tbcategoria t")
public class Tbcategoria implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idcategoria;

	private String nomcategoria;

	//bi-directional many-to-one association to Tbpregunta
	@ManyToOne
	@JoinColumn(name="idpregunta")
	private Tbpregunta tbpregunta;

	public Tbcategoria() {
	}

	public Integer getIdcategoria() {
		return this.idcategoria;
	}

	public void setIdcategoria(Integer idcategoria) {
		this.idcategoria = idcategoria;
	}

	public String getNomcategoria() {
		return this.nomcategoria;
	}

	public void setNomcategoria(String nomcategoria) {
		this.nomcategoria = nomcategoria;
	}

	public Tbpregunta getTbpregunta() {
		return this.tbpregunta;
	}

	public void setTbpregunta(Tbpregunta tbpregunta) {
		this.tbpregunta = tbpregunta;
	}

}