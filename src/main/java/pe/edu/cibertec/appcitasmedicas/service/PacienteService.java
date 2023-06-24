package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.Paciente;
import pe.edu.cibertec.appcitasmedicas.repository.PacienteRepository;

@Service
public class PacienteService {
	
	@Autowired
	private PacienteRepository pacienteRepository;
	
	public List<Paciente> listarPaciente(){
		return pacienteRepository.findAll();
	}
	
	public void registrarPaciente(Paciente paciente) {
		pacienteRepository.save(paciente);
	}
	
	public void eliminarPaciente(Integer idpaciente) {
		pacienteRepository.deleteById(idpaciente);
	}
    public Paciente buscarPaciente(Integer idpaciente) {
        return pacienteRepository.findById(idpaciente).orElse(null);
    }
}
