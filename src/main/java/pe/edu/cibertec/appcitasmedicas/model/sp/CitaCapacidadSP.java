package pe.edu.cibertec.appcitasmedicas.model.sp;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class CitaCapacidadSP {
	
	@Id
	private Integer idcitacapacidad;
	
	private Integer idsede;
	private String nombre;
	private Date fecha;
	private Integer idespecialidad;
	private String especialidad;
	private Integer iddoctor;
	private String nombres;
	private String apellidopaterno;
	private Integer idhora;
	private String hora;
	private Integer idestado;
	private String estadocita;
	
	

}
