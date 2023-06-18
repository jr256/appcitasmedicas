package pe.edu.cibertec.appcitasmedicas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.HoraDisponible;

@Repository
public interface HoraDisponibleRepository extends JpaRepository<HoraDisponible, Integer>{

}
