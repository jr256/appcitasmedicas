package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="tipodocumento")
public class TipoDocumento {
	
	@Id
	private Integer idtipodocumento;
	@Column(name = "tipodocumento")
	private String tipodocumento;
	
	
}
