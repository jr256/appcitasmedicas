package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.appcitasmedicas.model.bd.Distrito;
import pe.edu.cibertec.appcitasmedicas.repository.DistritoRepository;

@Service
public class DistritoService {
	@Autowired
	private DistritoRepository distritoRepository;
	
	public List<Distrito> listarDistritos(){
		return distritoRepository.findAll();
	}
	public void registrarDistrito(Distrito distrito) {
		distritoRepository.save(distrito);
	}

}
