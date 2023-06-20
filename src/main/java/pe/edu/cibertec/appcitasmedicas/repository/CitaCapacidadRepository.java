package pe.edu.cibertec.appcitasmedicas.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;
import pe.edu.cibertec.appcitasmedicas.model.bd.Especialidad;
import pe.edu.cibertec.appcitasmedicas.model.bd.EstadoCita;
import pe.edu.cibertec.appcitasmedicas.model.bd.Sede;

@Repository
public interface CitaCapacidadRepository extends JpaRepository<CitaCapacidad, Integer>{

	
	//@Query("SELECT cc FROM CitaCapacidad cc WHERE cc.sede.idsede = ?1 AND cc.especialidad.idespecialidad = ?2 AND cc.fecha = ?3 AND cc.estadocita.idestado = 1")
    //List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstado(Integer idsede, Integer idespecialidad, Date fecha);
	
	
	@Query("SELECT cc FROM CitaCapacidad cc WHERE cc.sede.idsede = :idsede AND cc.especialidad.idespecialidad = :idespecialidad AND cc.fecha = :fecha AND cc.estadocita.idestadocita = 1")
	List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstado(Integer idsede, Integer idespecialidad, Date fecha);

	/*public List<CitaCapacidad> findBySedeAndEspecialidadAndFechaAndEstadocita(
			Integer idsede,
			Integer idespecialidad,
		        Date fecha,
		        int estadocita
		    );*/
		    
		    
	
	
 /*   public List<CitaCapacidad> findBySedeAndEspecialidadAndFechaAndEstadocita(
            Sede sede,
            Especialidad especialidad,
            Date fecha,
            EstadoCita estadocita
        );*/
	
	
	/*
 	@Procedure(value = "usplistacitasporreservar")
 	@Transactional(readOnly = true)
    public List<CitaCapacidadSP> usplistacitasporreservar(
        @Param("pSede") int sede,
        @Param("pEspecialidad") int especialidad,
        @Param("pFecha") Date fecha
    );*/
	
	/*@Query(value = "CALL usplistacitasporreservar(:pSede, :pEspecialidad, :pFecha)", nativeQuery = true)
	public List<CitaCapacidadSP> usplistacitasporreservar(
        @Param("pSede") int sede,
        @Param("pEspecialidad") int especialidad,
        @Param("pFecha") Date fecha
    );*/

}
