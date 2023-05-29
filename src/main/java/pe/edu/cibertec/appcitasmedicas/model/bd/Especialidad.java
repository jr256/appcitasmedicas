package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="especialidad")
public class Especialidad {
	

	@Id
	private Integer idespecialidad;
	@Column(name = "especialidad")
	private String especialidad;

}
