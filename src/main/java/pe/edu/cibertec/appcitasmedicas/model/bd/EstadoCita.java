package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="estadocita")
public class EstadoCita {
	
	@Id
	private Integer idestadocita;
	@Column(name = "estadocita")
	private String estadocita;

}
