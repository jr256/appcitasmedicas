package pe.edu.cibertec.appcitasmedicas.model.request;

import java.util.Date;

import lombok.Data;

@Data
public class CitaCapacidadRequest {
	
	private Integer idcitacapacidad;	
	private Date fecha;	
	private Integer idsede;	
	private Integer idespecialidad;	
	private Integer iddoctor;
	private Integer idhora;
	private Integer idpaciente;	
	private Integer idestadocita;

}
