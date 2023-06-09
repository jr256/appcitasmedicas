package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;
import pe.edu.cibertec.appcitasmedicas.repository.CitaCapacidadRepository;

@Service
public class CitaCapacidadService {
	
	@Autowired
	 private CitaCapacidadRepository citacapacidadRepository;
	

    public List<CitaCapacidad> buscarPorSedeEspecialidadFechaYEstado(Integer idsede, Integer idespecialidad, String fecha) {
        return citacapacidadRepository.buscarPorSedeEspecialidadFechaYEstado(idsede, idespecialidad, fecha);
    }
    
    
    public List<CitaCapacidad> buscarCitasReservadas(Integer idsede, Integer idespecialidad, String fecha) {
        return citacapacidadRepository.buscarPorSedeEspecialidadFechaYEstadoR(idsede, idespecialidad, fecha);
    }
    
	
    public void registrarCita(CitaCapacidad citacapacidad) {
    	citacapacidadRepository.save(citacapacidad);
	}
    
  



}
