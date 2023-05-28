package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="estado")
public class Estado {
	
	private Integer idestado;
	private String descestado;

}
