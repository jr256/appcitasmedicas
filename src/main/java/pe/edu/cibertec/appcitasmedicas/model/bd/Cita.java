package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;


@Data
@Entity
@Table(name = "cita")
public class Cita {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idcita;
	
	@ManyToOne
	@JoinColumn(name = "idpaciente")
	private Paciente paciente;
	
	@ManyToOne
	@JoinColumn(name = "idhorario")
	private Horario horario;
	
	@ManyToOne
	@JoinColumn(name = "idespecialidad")
	private Especialidad especialidad;
	
	@ManyToOne
	@JoinColumn(name = "iddoctor")
	private Doctor doctor;
	
	@ManyToOne
	@JoinColumn(name = "idsede")
	private Sede sede;
	
	
	@ManyToOne
	@JoinColumn(name = "idhora")
	private HoraDisponible hora;
	

}
