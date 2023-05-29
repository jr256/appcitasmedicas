package pe.edu.cibertec.appcitasmedicas.model.request;


import lombok.Data;

@Data
public class PacienteRequest {
	
	private Integer idpaciente;
	private String nombres;
	private String apellidopaterno;
	private String apellidomaterno;
	private Integer idtipodocumento;
	private String numerodocumento;
	private String fechanacimiento;
	private String correoelectronico;
	private String password;
	private Integer idestado;
}
