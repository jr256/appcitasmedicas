package pe.edu.cibertec.appcitasmedicas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.Distrito;

@Repository
public interface DistritoRepository extends JpaRepository<Distrito, Integer>{

}
