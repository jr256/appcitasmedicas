package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.HoraDisponible;
import pe.edu.cibertec.appcitasmedicas.repository.HoraDisponibleRepository;

@Service
public class HoraDisponibleService {
	
	@Autowired
	private HoraDisponibleRepository horadisponibleRepository;
	
	public List<HoraDisponible> listarHorasDisponibles(){
		return horadisponibleRepository.findAll();
	}

}
