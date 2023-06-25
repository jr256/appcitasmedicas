package pe.edu.cibertec.appcitasmedicas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {


	
	@GetMapping("/homePaciente")
	public String homepaciente() {
		return "homePaciente";
	}
	
	@GetMapping("/homeEmpleado")
	public String homeempleado() {
		return "homeEmpleado";
	}
}
