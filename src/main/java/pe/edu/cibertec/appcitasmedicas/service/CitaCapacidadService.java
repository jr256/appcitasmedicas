package pe.edu.cibertec.appcitasmedicas.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;
import pe.edu.cibertec.appcitasmedicas.repository.CitaCapacidadRepository;

@Service
public class CitaCapacidadService {
	
	@Autowired
	 private CitaCapacidadRepository citacapacidadRepository;
	



    public List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstado(Integer idsede, Integer idespecialidad, Date fecha) {
        return citacapacidadRepository.buscarPorSedeEspecialidadFechaYEstado(idsede, idespecialidad, fecha);
    }
	


}
