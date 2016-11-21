package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tbaprobacionpreguntas database table.
 * 
 */
@Entity
@Table(name="tbaprobacionpreguntas")
@NamedQuery(name="Tbaprobacionpregunta.findAll", query="SELECT t FROM Tbaprobacionpregunta t")
public class Tbaprobacionpregunta implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idaprobacionpregunta;

	private Integer idestado;

	//bi-directional many-to-one association to Tbareaaprobacion
	@ManyToOne
	@JoinColumn(name="idareaaprobacion")
	private Tbareaaprobacion tbareaaprobacion;

	//bi-directional many-to-one association to Tbpregunta
	@ManyToOne
	@JoinColumn(name="idpregunta")
	private Tbpregunta tbpregunta;

	public Tbaprobacionpregunta() {
	}

	public Integer getIdaprobacionpregunta() {
		return this.idaprobacionpregunta;
	}

	public void setIdaprobacionpregunta(Integer idaprobacionpregunta) {
		this.idaprobacionpregunta = idaprobacionpregunta;
	}

	public Integer getIdestado() {
		return this.idestado;
	}

	public void setIdestado(Integer idestado) {
		this.idestado = idestado;
	}

	public Tbareaaprobacion getTbareaaprobacion() {
		return this.tbareaaprobacion;
	}

	public void setTbareaaprobacion(Tbareaaprobacion tbareaaprobacion) {
		this.tbareaaprobacion = tbareaaprobacion;
	}

	public Tbpregunta getTbpregunta() {
		return this.tbpregunta;
	}

	public void setTbpregunta(Tbpregunta tbpregunta) {
		this.tbpregunta = tbpregunta;
	}

}