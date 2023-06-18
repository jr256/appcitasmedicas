package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="grado")
public class HoraDisponible {
	
	@Id
	private Integer idhora;
	
	@Column(name = "hora")
	private String hora;
	
	@ManyToOne
	@JoinColumn(name = "idturno")
	private Turno turno;
	

}
