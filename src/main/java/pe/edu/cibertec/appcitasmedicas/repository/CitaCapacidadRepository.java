package pe.edu.cibertec.appcitasmedicas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;

@Repository
public interface CitaCapacidadRepository extends JpaRepository<CitaCapacidad, Integer>{

	
	
	
	@Query("SELECT cc FROM CitaCapacidad cc WHERE cc.sede.idsede = :idsede AND cc.especialidad.idespecialidad = :idespecialidad AND cc.fecha = :fecha AND cc.estadocita.idestadocita = 1")
	List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstado(@Param("idsede") Integer idsede,@Param("idespecialidad")  Integer idespecialidad,@Param("fecha") String fecha);

	
	@Query("SELECT cc FROM CitaCapacidad cc WHERE cc.sede.idsede = :idsede AND cc.especialidad.idespecialidad = :idespecialidad AND cc.fecha = :fecha AND cc.estadocita.idestadocita = 2")
	List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstadoR(@Param("idsede") Integer idsede,@Param("idespecialidad")  Integer idespecialidad,@Param("fecha") String fecha);
		    
	
	


}
