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
@Table(name ="doctor")
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer iddoctor;
	@Column(name = "nombres")
	private String nombres;
	@Column(name = "apellidopaterno")
	private String apellidopaterno;
	@Column(name = "apellidomaterno")
	private String apellidomaterno;
	@Column(name = "fechanacimiento")
	private String fechanacimiento;
	@Column(name = "numerodocumento")
	private String numerodocumento;
	@Column(name = "codigocop")
	private String codigocop;
	@Column(name = "correoinstitucional")
	private String correoinstitucional;
	
	
	
	
	@ManyToOne
	@JoinColumn(name ="idestado")
	private Estado estado;
	
	@ManyToOne
	@JoinColumn(name ="idespecialidad")
	private Especialidad especialidad;
	
	@ManyToOne
	@JoinColumn(name ="idtipodocumento")
	private TipoDocumento tipodocumento;

}
