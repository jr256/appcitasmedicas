package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="estado")
public class Estado {

	@Id
	private Integer idestado;
	@Column(name= "estado")
	private String estado;

}
