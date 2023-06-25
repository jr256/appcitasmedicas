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

import pe.edu.cibertec.appcitasmedicas.model.bd.Distrito;
import pe.edu.cibertec.appcitasmedicas.model.bd.Estado;
import pe.edu.cibertec.appcitasmedicas.model.bd.Sede;
import pe.edu.cibertec.appcitasmedicas.model.request.SedeRequest;
import pe.edu.cibertec.appcitasmedicas.model.response.ResultadoResponse;
import pe.edu.cibertec.appcitasmedicas.service.SedeService;

@Controller
@RequestMapping("/sede")
public class SedeController {
	
	@Autowired
	private SedeService sedeService;
	
	@GetMapping("/frmsede")
	public String frmMantSede(Model model) {
		model.addAttribute("listasedes", sedeService.listarSedes());
		return "sede/frmsede";
	}
	
	@PostMapping("registrarSede")
	@ResponseBody
	public ResultadoResponse registrarSede(@RequestBody SedeRequest sedeRequest) {
		String mensaje = "Sede registrada correctamente";
		Boolean respuesta = true;
		try {
			Sede objSede = new Sede();
			if (sedeRequest.getIdsede() > 0) {
				objSede.setIdsede(sedeRequest.getIdsede());
			}
			objSede.setNombre(sedeRequest.getNombre());
			objSede.setDireccion(sedeRequest.getDireccion());
			Distrito objDistrito = new Distrito();
			objDistrito.setIddistrito(sedeRequest.getIddistrito());
			Estado objEstado = new Estado();
			objEstado.setIdestado(sedeRequest.getIdestado());
			objSede.setDistrito(objDistrito);
			objSede.setEstado(objEstado);
			sedeService.registrarSede(objSede);
		} catch (Exception e) {
			mensaje = "Sede no registrada";
			respuesta = false;
		}
		return ResultadoResponse.builder().mensaje(mensaje).respuesta(respuesta).build();
	}

	@DeleteMapping("/eliminarSede")
	@ResponseBody
	public ResultadoResponse eliminarSede(@RequestBody SedeRequest sedeRequest) {
		String mensaje = "Sala eliminada correctamente";
		Boolean respuesta = true;
		try {
			sedeService.eliminarSede(sedeRequest.getIdsede());
		} catch (Exception e) {
			mensaje = "Sala no eliminada. Tiene transacciones asociadas.";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
	
	@GetMapping("/listarSedes")
	@ResponseBody
	public List<Sede> ListarSedes(){
		return sedeService.listarSedes();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
