package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tbestado database table.
 * 
 */
@Entity
@NamedQuery(name="Tbestado.findAll", query="SELECT t FROM Tbestado t")
public class Tbestado implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idestado;

	private String nomestado;

	public Tbestado() {
	}

	public Integer getIdestado() {
		return this.idestado;
	}

	public void setIdestado(Integer idestado) {
		this.idestado = idestado;
	}

	public String getNomestado() {
		return this.nomestado;
	}

	public void setNomestado(String nomestado) {
		this.nomestado = nomestado;
	}

}