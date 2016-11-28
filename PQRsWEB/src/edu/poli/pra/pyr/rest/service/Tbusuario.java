package edu.poli.pra.pyr.rest.service;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the tbusuario database table.
 * 
 */
@Entity
@NamedQuery(name="Tbusuario.findAll", query="SELECT t FROM Tbusuario t")
public class Tbusuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer idusuario;

	private String cargo;

	private Integer identificacion;

	private String nombre;

	private String password;

	private String username;

	//bi-directional many-to-one association to Tbareaaprobacion
	@OneToMany(mappedBy="tbusuario")
	private List<Tbareaaprobacion> tbareaaprobacions;

	//bi-directional many-to-one association to Tbpregunta
	@OneToMany(mappedBy="tbusuario")
	private List<Tbpregunta> tbpreguntas;

	//bi-directional many-to-one association to Tbrol
	@ManyToOne
	@JoinColumn(name="idrol")
	private Tbrol tbrol;

	public Tbusuario() {
	}

	public Integer getIdusuario() {
		return this.idusuario;
	}

	public void setIdusuario(Integer idusuario) {
		this.idusuario = idusuario;
	}

	public String getCargo() {
		return this.cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public Integer getIdentificacion() {
		return this.identificacion;
	}

	public void setIdentificacion(Integer identificacion) {
		this.identificacion = identificacion;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return this.username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	public List<Tbareaaprobacion> getTbareaaprobacions() {
		return this.tbareaaprobacions;
	}

	public void setTbareaaprobacions(List<Tbareaaprobacion> tbareaaprobacions) {
		this.tbareaaprobacions = tbareaaprobacions;
	}

	public Tbareaaprobacion addTbareaaprobacion(Tbareaaprobacion tbareaaprobacion) {
		getTbareaaprobacions().add(tbareaaprobacion);
		tbareaaprobacion.setTbusuario(this);

		return tbareaaprobacion;
	}

	public Tbareaaprobacion removeTbareaaprobacion(Tbareaaprobacion tbareaaprobacion) {
		getTbareaaprobacions().remove(tbareaaprobacion);
		tbareaaprobacion.setTbusuario(null);

		return tbareaaprobacion;
	}

	public List<Tbpregunta> getTbpreguntas() {
		return this.tbpreguntas;
	}

	public void setTbpreguntas(List<Tbpregunta> tbpreguntas) {
		this.tbpreguntas = tbpreguntas;
	}

	public Tbpregunta addTbpregunta(Tbpregunta tbpregunta) {
		getTbpreguntas().add(tbpregunta);
		tbpregunta.setTbusuario(this);

		return tbpregunta;
	}

	public Tbpregunta removeTbpregunta(Tbpregunta tbpregunta) {
		getTbpreguntas().remove(tbpregunta);
		tbpregunta.setTbusuario(null);

		return tbpregunta;
	}

	public Tbrol getTbrol() {
		return this.tbrol;
	}

	public void setTbrol(Tbrol tbrol) {
		this.tbrol = tbrol;
	}

}