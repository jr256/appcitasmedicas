package pe.edu.cibertec.appcitasmedicas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.cibertec.appcitasmedicas.model.bd.Turno;

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Integer> {

}