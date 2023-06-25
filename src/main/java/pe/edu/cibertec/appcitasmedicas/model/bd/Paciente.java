package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name ="paciente")
public class Paciente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idpaciente;
	@Column(name = "nombres")
	private String nombres;
	@Column(name = "apellidopaterno")
	private String apellidopaterno;
	@Column(name = "apellidomaterno")
	private String apellidomaterno;
	@Column(name = "numerodocumento")
	private String numerodocumento;
	@Column(name = "fechanacimiento")
	private String fechanacimiento;
	@Column(name = "correoelectronico")
	private String correoelectronico;
	@Column(name = "password")
	private String password;
	
	@ManyToOne
	@JoinColumn(name ="idtipodocumento")
	private TipoDocumento tipodocumento;
	
	@ManyToOne
	@JoinColumn(name ="idestado")
	private Estado estado;
	
	@JsonIgnore
	@OneToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;
}
