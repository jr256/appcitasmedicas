package pe.edu.cibertec.appcitasmedicas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	public Usuario findByEmail(String email);
	
	@Query("SELECT u.tipousuario FROM Usuario u WHERE u.email = :email")
	String findTipoUsuarioByEmail(@Param("email") String email);
}
