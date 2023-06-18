package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="turno")
public class Turno {
	
	@Id
	private Integer idturno;
	
	@Column(name = "turno")
	private String turno;

}
