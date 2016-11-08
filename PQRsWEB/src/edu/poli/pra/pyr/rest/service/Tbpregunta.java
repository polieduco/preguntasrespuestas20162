package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


/**
 * The persistent class for the tbpregunta database table.
 * 
 */
@Entity
@NamedQuery(name="Tbpregunta.findAll", query="SELECT t FROM Tbpregunta t")
public class Tbpregunta implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idpregunta;

	private Timestamp fechacreacion;

	private Timestamp fechafinvigencia;

	private Timestamp fechainiciovigencia;

	private String pregunta;

	//bi-directional many-to-one association to Tbaprobacionpregunta
	@OneToMany(mappedBy="tbpregunta")
	private List<Tbaprobacionpregunta> tbaprobacionpreguntas;

	//bi-directional many-to-one association to Tbcategoria
	@OneToMany(mappedBy="tbpregunta")
	private List<Tbcategoria> tbcategorias;

	//bi-directional many-to-one association to Tbpalabrasclave
	@OneToMany(mappedBy="tbpregunta")
	private List<Tbpalabrasclave> tbpalabrasclaves;

	//bi-directional many-to-one association to Tbusuario
	@ManyToOne
	@JoinColumn(name="idusuario")
	private Tbusuario tbusuario;

	//bi-directional many-to-one association to Tbpreguntasxpalabrasclave
	@OneToMany(mappedBy="tbpregunta")
	private List<Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves;

	//bi-directional many-to-one association to Tbrespuesta
	@OneToMany(mappedBy="tbpregunta")
	private List<Tbrespuesta> tbrespuestas;

	public Tbpregunta() {
	}

	public Integer getIdpregunta() {
		return this.idpregunta;
	}

	public void setIdpregunta(Integer idpregunta) {
		this.idpregunta = idpregunta;
	}

	public Timestamp getFechacreacion() {
		return this.fechacreacion;
	}

	public void setFechacreacion(Timestamp fechacreacion) {
		this.fechacreacion = fechacreacion;
	}

	public Timestamp getFechafinvigencia() {
		return this.fechafinvigencia;
	}

	public void setFechafinvigencia(Timestamp fechafinvigencia) {
		this.fechafinvigencia = fechafinvigencia;
	}

	public Timestamp getFechainiciovigencia() {
		return this.fechainiciovigencia;
	}

	public void setFechainiciovigencia(Timestamp fechainiciovigencia) {
		this.fechainiciovigencia = fechainiciovigencia;
	}

	public String getPregunta() {
		return this.pregunta;
	}

	public void setPregunta(String pregunta) {
		this.pregunta = pregunta;
	}

	public List<Tbaprobacionpregunta> getTbaprobacionpreguntas() {
		return this.tbaprobacionpreguntas;
	}

	public void setTbaprobacionpreguntas(List<Tbaprobacionpregunta> tbaprobacionpreguntas) {
		this.tbaprobacionpreguntas = tbaprobacionpreguntas;
	}

	public Tbaprobacionpregunta addTbaprobacionpregunta(Tbaprobacionpregunta tbaprobacionpregunta) {
		getTbaprobacionpreguntas().add(tbaprobacionpregunta);
		tbaprobacionpregunta.setTbpregunta(this);

		return tbaprobacionpregunta;
	}

	public Tbaprobacionpregunta removeTbaprobacionpregunta(Tbaprobacionpregunta tbaprobacionpregunta) {
		getTbaprobacionpreguntas().remove(tbaprobacionpregunta);
		tbaprobacionpregunta.setTbpregunta(null);

		return tbaprobacionpregunta;
	}

	public List<Tbcategoria> getTbcategorias() {
		return this.tbcategorias;
	}

	public void setTbcategorias(List<Tbcategoria> tbcategorias) {
		this.tbcategorias = tbcategorias;
	}

	public Tbcategoria addTbcategoria(Tbcategoria tbcategoria) {
		getTbcategorias().add(tbcategoria);
		tbcategoria.setTbpregunta(this);

		return tbcategoria;
	}

	public Tbcategoria removeTbcategoria(Tbcategoria tbcategoria) {
		getTbcategorias().remove(tbcategoria);
		tbcategoria.setTbpregunta(null);

		return tbcategoria;
	}

	public List<Tbpalabrasclave> getTbpalabrasclaves() {
		return this.tbpalabrasclaves;
	}

	public void setTbpalabrasclaves(List<Tbpalabrasclave> tbpalabrasclaves) {
		this.tbpalabrasclaves = tbpalabrasclaves;
	}

	public Tbpalabrasclave addTbpalabrasclave(Tbpalabrasclave tbpalabrasclave) {
		getTbpalabrasclaves().add(tbpalabrasclave);
		tbpalabrasclave.setTbpregunta(this);

		return tbpalabrasclave;
	}

	public Tbpalabrasclave removeTbpalabrasclave(Tbpalabrasclave tbpalabrasclave) {
		getTbpalabrasclaves().remove(tbpalabrasclave);
		tbpalabrasclave.setTbpregunta(null);

		return tbpalabrasclave;
	}

	public Tbusuario getTbusuario() {
		return this.tbusuario;
	}

	public void setTbusuario(Tbusuario tbusuario) {
		this.tbusuario = tbusuario;
	}

	public List<Tbpreguntasxpalabrasclave> getTbpreguntasxpalabrasclaves() {
		return this.tbpreguntasxpalabrasclaves;
	}

	public void setTbpreguntasxpalabrasclaves(List<Tbpreguntasxpalabrasclave> tbpreguntasxpalabrasclaves) {
		this.tbpreguntasxpalabrasclaves = tbpreguntasxpalabrasclaves;
	}

	public Tbpreguntasxpalabrasclave addTbpreguntasxpalabrasclave(Tbpreguntasxpalabrasclave tbpreguntasxpalabrasclave) {
		getTbpreguntasxpalabrasclaves().add(tbpreguntasxpalabrasclave);
		tbpreguntasxpalabrasclave.setTbpregunta(this);

		return tbpreguntasxpalabrasclave;
	}

	public Tbpreguntasxpalabrasclave removeTbpreguntasxpalabrasclave(Tbpreguntasxpalabrasclave tbpreguntasxpalabrasclave) {
		getTbpreguntasxpalabrasclaves().remove(tbpreguntasxpalabrasclave);
		tbpreguntasxpalabrasclave.setTbpregunta(null);

		return tbpreguntasxpalabrasclave;
	}

	public List<Tbrespuesta> getTbrespuestas() {
		return this.tbrespuestas;
	}

	public void setTbrespuestas(List<Tbrespuesta> tbrespuestas) {
		this.tbrespuestas = tbrespuestas;
	}

	public Tbrespuesta addTbrespuesta(Tbrespuesta tbrespuesta) {
		getTbrespuestas().add(tbrespuesta);
		tbrespuesta.setTbpregunta(this);

		return tbrespuesta;
	}

	public Tbrespuesta removeTbrespuesta(Tbrespuesta tbrespuesta) {
		getTbrespuestas().remove(tbrespuesta);
		tbrespuesta.setTbpregunta(null);

		return tbrespuesta;
	}

}