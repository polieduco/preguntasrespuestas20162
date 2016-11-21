package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tbareaaprobacion database table.
 * 
 */
@Entity
@NamedQuery(name="Tbareaaprobacion.findAll", query="SELECT t FROM Tbareaaprobacion t")
public class Tbareaaprobacion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idareaaprobacion;

	private String nomarea;

	//bi-directional many-to-one association to Tbaprobacionpregunta
	@OneToMany(mappedBy="tbareaaprobacion")
	private List<Tbaprobacionpregunta> tbaprobacionpreguntas;

	//bi-directional many-to-one association to Tbusuario
	@ManyToOne
	@JoinColumn(name="idusuario")
	private Tbusuario tbusuario;

	public Tbareaaprobacion() {
	}

	public Integer getIdareaaprobacion() {
		return this.idareaaprobacion;
	}

	public void setIdareaaprobacion(Integer idareaaprobacion) {
		this.idareaaprobacion = idareaaprobacion;
	}

	public String getNomarea() {
		return this.nomarea;
	}

	public void setNomarea(String nomarea) {
		this.nomarea = nomarea;
	}

	public List<Tbaprobacionpregunta> getTbaprobacionpreguntas() {
		return this.tbaprobacionpreguntas;
	}

	public void setTbaprobacionpreguntas(List<Tbaprobacionpregunta> tbaprobacionpreguntas) {
		this.tbaprobacionpreguntas = tbaprobacionpreguntas;
	}

	public Tbaprobacionpregunta addTbaprobacionpregunta(Tbaprobacionpregunta tbaprobacionpregunta) {
		getTbaprobacionpreguntas().add(tbaprobacionpregunta);
		tbaprobacionpregunta.setTbareaaprobacion(this);

		return tbaprobacionpregunta;
	}

	public Tbaprobacionpregunta removeTbaprobacionpregunta(Tbaprobacionpregunta tbaprobacionpregunta) {
		getTbaprobacionpreguntas().remove(tbaprobacionpregunta);
		tbaprobacionpregunta.setTbareaaprobacion(null);

		return tbaprobacionpregunta;
	}

	public Tbusuario getTbusuario() {
		return this.tbusuario;
	}

	public void setTbusuario(Tbusuario tbusuario) {
		this.tbusuario = tbusuario;
	}

}