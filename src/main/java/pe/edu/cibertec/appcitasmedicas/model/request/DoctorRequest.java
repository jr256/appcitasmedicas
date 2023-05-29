package pe.edu.cibertec.appcitasmedicas.model.request;

import lombok.Data;

@Data
public class DoctorRequest {

	
	private Integer iddoctor;	
	private String nombres;	
	private String apellidopaterno;
	private String apellidomaterno;	
	private String fechanacimiento;
	private String numerodocumento;
	private String codigocop;
	private String correoinstitucional;
	private Integer idestado;
	private Integer idtipodocumento;
	private Integer idespecialidad;
}
