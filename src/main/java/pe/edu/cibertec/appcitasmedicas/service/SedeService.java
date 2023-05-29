package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.Sede;
import pe.edu.cibertec.appcitasmedicas.repository.SedeRepository;

@Service
public class SedeService {
	
	@Autowired
	private SedeRepository sedeRepository;
	
	public List<Sede> listarSedes(){
		return sedeRepository.findAll();
	}
	public void registrarSede(Sede sede) {
		sedeRepository.save(sede);
	}
	public void eliminarSede(Integer idsede) {
		sedeRepository.deleteById(idsede);
	}

}
