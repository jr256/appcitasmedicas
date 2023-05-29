package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.Especialidad;
import pe.edu.cibertec.appcitasmedicas.service.EspecialidadService;


@Controller
@RequestMapping("/Especialidad")
public class EspecialidadController {
	
	@Autowired
	private EspecialidadService especialidadService;
	
	@GetMapping("/listarEspecialidades")
	@ResponseBody
	public List<Especialidad> listarEspecialidades(){
		return especialidadService.listarEspecialidades();
	}

}
