package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="hora")
public class Hora {
	
	@Id
	private Integer idhora;
	
	@Column(name = "hora")
	private String hora;
	
	
	

}
