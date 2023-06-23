package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.Doctor;
import pe.edu.cibertec.appcitasmedicas.model.bd.Especialidad;
import pe.edu.cibertec.appcitasmedicas.model.bd.Estado;
import pe.edu.cibertec.appcitasmedicas.model.bd.TipoDocumento;
import pe.edu.cibertec.appcitasmedicas.model.request.DoctorRequest;
import pe.edu.cibertec.appcitasmedicas.model.response.ResultadoResponse;
import pe.edu.cibertec.appcitasmedicas.service.DoctorService;

@Controller
@RequestMapping("/doctor")
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("/frmdoctor")
	public String frmMantDoctor(Model model) {
		model.addAttribute("listadoctores", 
				doctorService.listarDoctor());
		return "doctor/frmdoctor";
	}
	
	@PostMapping("/registrarDoctor")
	@ResponseBody
	public ResultadoResponse registrarDoctor(
			@RequestBody DoctorRequest doctorRequest
			) {
		String mensaje ="Doctor registrada correctamente";
		Boolean respuesta = true;
		try {			
			
			Doctor objDoctor = new Doctor();
			if(doctorRequest.getIddoctor() > 0) {
				objDoctor.setIddoctor(doctorRequest.getIddoctor());
			}
			objDoctor.setNombres(doctorRequest.getNombres());
			objDoctor.setApellidopaterno(doctorRequest.getApellidopaterno());
			objDoctor.setApellidomaterno(doctorRequest.getApellidomaterno());
			objDoctor.setFechanacimiento(doctorRequest.getFechanacimiento());
			objDoctor.setCodigocop(doctorRequest.getCodigocop());
			objDoctor.setCorreoinstitucional(doctorRequest.getCorreoinstitucional());
			objDoctor.setNumerodocumento(doctorRequest.getNumerodocumento());
			
			Estado objEstado = new Estado();
			objEstado.setIdestado(doctorRequest.getIdestado());
			objDoctor.setEstado(objEstado);
			
			TipoDocumento objTipoDocumento = new TipoDocumento();
			objTipoDocumento.setIdtipodocumento(doctorRequest.getIdtipodocumento());
			objDoctor.setTipodocumento(objTipoDocumento);
			
			Especialidad objEspecialidad = new Especialidad();
			objEspecialidad.setIdespecialidad(doctorRequest.getIdespecialidad());
			objDoctor.setEspecialidad(objEspecialidad);

			
			doctorService.registrarDoctor(objDoctor);
			
		}catch(Exception ex) {
			mensaje = "Doctor no registrado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	@DeleteMapping("/eliminarDoctor")
	@ResponseBody
	public ResultadoResponse eliminarDoctor(@RequestBody
			DoctorRequest doctorRequest) {
		String mensaje = "Doctor eliminado correctamente";
		Boolean respuesta = true;
		try {
			doctorService.eliminarDoctor(doctorRequest.getIddoctor());
		}catch (Exception e) {
			mensaje = "Doctor no eliminado";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	@GetMapping("/listarDoctores")
	@ResponseBody
	public List<Doctor> listarDoctores(){
		return doctorService.listarDoctor();
	}
	
	
	
	

}
