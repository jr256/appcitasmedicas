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
@Table(name = "cargahoraria")
public class CargaHoraria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer iddisponibilidad;
	
	
	
	@ManyToOne
	@JoinColumn(name = "idsede")
	private Sede sede;
	
	@ManyToOne
	@JoinColumn(name = "idespecialidad")
	private Especialidad especialidad;
	
	@ManyToOne
	@JoinColumn(name = "iddoctor")
	private Doctor doctor;
	
}
