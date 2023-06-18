package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.Turno;
import pe.edu.cibertec.appcitasmedicas.repository.TurnoRepository;

@Service
public class TurnoService {
	
	@Autowired
	private TurnoRepository turnoRepository;
	
	public List<Turno> listarTurnos(){
		return turnoRepository.findAll();
	}


}
