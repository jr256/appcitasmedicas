package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
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
@Table(name = "citacapacidad")
public class CitaCapacidad {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Integer idcitacapacidad;
		
	@Column(name = "fecha")
	private String fecha;
	
	
	
	@ManyToOne
	@JoinColumn(name = "idsede")
	private Sede sede;
	
	@ManyToOne
	@JoinColumn(name = "idespecialidad")
	private Especialidad especialidad;

	
	@ManyToOne
	@JoinColumn(name = "iddoctor")
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "idhora")
	private Hora hora;
	
	
	@ManyToOne
	@JoinColumn(name = "idestadocita")
	private EstadoCita estadocita;
	
	@ManyToOne
	@JoinColumn(name = "idpaciente")
	private Paciente paciente;
	

}
