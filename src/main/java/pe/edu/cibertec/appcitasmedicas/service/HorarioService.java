package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.Horario;
import pe.edu.cibertec.appcitasmedicas.repository.HorarioRepository;

@Service
public class HorarioService {
	
	@Autowired
	private HorarioRepository horarioRepository;
	
	public List<Horario> listarHorarios(){
		return horarioRepository.findAll();
	}

}
