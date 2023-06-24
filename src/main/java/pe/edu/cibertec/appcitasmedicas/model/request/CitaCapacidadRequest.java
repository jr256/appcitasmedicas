package pe.edu.cibertec.appcitasmedicas.model.request;

import lombok.Data;

@Data
public class CitaCapacidadRequest {
	
	private Integer idcitacapacidad;	
	private String fecha;	
	private Integer idsede;	
	private Integer idespecialidad;	
	private Integer iddoctor;
	private Integer idhora;
	private Integer idpaciente;	
	private Integer idestadocita;

}
