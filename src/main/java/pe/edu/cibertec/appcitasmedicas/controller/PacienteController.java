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

import pe.edu.cibertec.appcitasmedicas.model.bd.Estado;
import pe.edu.cibertec.appcitasmedicas.model.bd.Paciente;
import pe.edu.cibertec.appcitasmedicas.model.bd.TipoDocumento;
import pe.edu.cibertec.appcitasmedicas.model.request.PacienteRequest;
import pe.edu.cibertec.appcitasmedicas.model.response.ResultadoResponse;
import pe.edu.cibertec.appcitasmedicas.service.PacienteService;

@Controller
@RequestMapping("/paciente")
public class PacienteController {
	
	@Autowired
	private PacienteService pacienteService;
	
	@GetMapping("/frmpaciente")
	public String frmMantPaciente(Model model) {
		model.addAttribute("listarPaciente", pacienteService.listarPaciente());
		return "paciente/frmpaciente";
	}
	
	
	@PostMapping("/registrarPaciente")
	@ResponseBody
	public ResultadoResponse registrarPaciente(@RequestBody PacienteRequest pacienteRequest) {
		String mensaje = "Paciente registrado correctamente";
		Boolean respuesta = true;
		try {
			Paciente objPaciente = new Paciente();
			if (pacienteRequest.getIdpaciente() > 0) {
				objPaciente.setIdpaciente(pacienteRequest.getIdpaciente());
			}
			objPaciente.setNombres(pacienteRequest.getNombres());
			objPaciente.setApellidopaterno(pacienteRequest.getApellidopaterno());
			objPaciente.setApellidomaterno(pacienteRequest.getApellidomaterno());
			TipoDocumento objTipoDocumento = new TipoDocumento();
			objTipoDocumento.setIdtipodocumento(pacienteRequest.getIdtipodocumento());
			objPaciente.setTipodocumento(objTipoDocumento);
			objPaciente.setNumerodocumento(pacienteRequest.getNumerodocumento());
			objPaciente.setFechanacimiento(pacienteRequest.getFechanacimiento());
			objPaciente.setCorreoelectronico(pacienteRequest.getCorreoelectronico());
			objPaciente.setPassword(pacienteRequest.getPassword());
			Estado objEstado = new Estado();
			objEstado.setIdestado(pacienteRequest.getIdestado());
			objPaciente.setEstado(objEstado);
			pacienteService.registrarPaciente(objPaciente);
			
		} catch (Exception e) {
			mensaje = "Paciente no fue registrado";
			respuesta = false;
		}
		
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	@DeleteMapping("/eliminarPaciente")
	@ResponseBody
	public ResultadoResponse eliminarPaciente(@RequestBody PacienteRequest pacienteRequest) {
		String mensaje = "Paciente eliminado correctamente";
		Boolean respuesta = true;
		
		try {
			
			pacienteService.eliminarPaciente(pacienteRequest.getIdpaciente());
		} catch (Exception e) {
			mensaje = "Paciente no fue eliminado";
			respuesta = false;
		}
		
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	
	@GetMapping("/listarPaciente")
	@ResponseBody
	public List<Paciente> listarPaciente(){
		return pacienteService.listarPaciente();
	}

}
