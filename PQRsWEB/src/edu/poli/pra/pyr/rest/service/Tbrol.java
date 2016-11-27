package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tbrol database table.
 * 
 */
@Entity
@NamedQuery(name="Tbrol.findAll", query="SELECT t FROM Tbrol t")
public class Tbrol implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idrol;

	private String nomrol;

	//bi-directional many-to-one association to Tbusuario
	@OneToMany(mappedBy="tbrol")
	private List<Tbusuario> tbusuarios;

	public Tbrol() {
	}

	public Integer getIdrol() {
		return this.idrol;
	}

	public void setIdrol(Integer idrol) {
		this.idrol = idrol;
	}

	public String getNomrol() {
		return this.nomrol;
	}

	public void setNomrol(String nomrol) {
		this.nomrol = nomrol;
	}

	public List<Tbusuario> getTbusuarios() {
		return this.tbusuarios;
	}

	public void setTbusuarios(List<Tbusuario> tbusuarios) {
		this.tbusuarios = tbusuarios;
	}

	public Tbusuario addTbusuario(Tbusuario tbusuario) {
		getTbusuarios().add(tbusuario);
		tbusuario.setTbrol(this);

		return tbusuario;
	}

	public Tbusuario removeTbusuario(Tbusuario tbusuario) {
		getTbusuarios().remove(tbusuario);
		tbusuario.setTbrol(null);

		return tbusuario;
	}

}