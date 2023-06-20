package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.Hora;
import pe.edu.cibertec.appcitasmedicas.repository.HoraRepository;

@Service
public class HoraService {
	
	@Autowired
	private HoraRepository horadisponibleRepository;
	
	public List<Hora> listarHorasDisponibles(){
		return horadisponibleRepository.findAll();
	}

}
