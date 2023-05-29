package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.repository.DoctorRepository;
import pe.edu.cibertec.appcitasmedicas.model.bd.Doctor;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	public List<Doctor> listarDoctor(){
		return doctorRepository.findAll();
	}
	
	public void registrarDoctor(Doctor Doctor) {
		doctorRepository.save(Doctor);
	}
	
	public void eliminarDoctor(Integer idDoctor) {
		doctorRepository.deleteById(idDoctor);
	}
}
