package pe.edu.cibertec.appcitasmedicas.model.bd;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idusuario;
	@Column(name = "email")
	private String email;
	@Column(name = "passw")
	private String passw;
	@Column(name = "tipousuario")
	private String tipousuario;
	
	
	
	public Usuario(Long idusuario, String email, String passw, String tipousuario) {
		super();
		this.idusuario = idusuario;
		this.email = email;
		this.passw = passw;
		this.tipousuario = tipousuario;
	}



	public Usuario() {
		super();
	}
	
	@Getter
	@Setter
	@OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL)
	private Paciente paciente;
	 

}
