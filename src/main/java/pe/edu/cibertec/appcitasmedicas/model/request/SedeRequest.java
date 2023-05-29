package pe.edu.cibertec.appcitasmedicas.model.request;

import lombok.Data;

@Data
public class SedeRequest {
	private Integer idsede;
	private String nombre;
	private String direccion;
	private Integer idestado;
	private Integer iddistrito;

}
