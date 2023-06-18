package pe.edu.cibertec.appcitasmedicas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import pe.edu.cibertec.appcitasmedicas.model.bd.Cita;
import pe.edu.cibertec.appcitasmedicas.service.CitaService;

@Controller
@RequestMapping("/cita")
public class CitaController {
	
	@Autowired
	private CitaService citaService;
	
	@GetMapping("/frmcita")
	public String frmMantCita(Model model) {
		model.addAttribute("citaForm", new Cita());
		model.addAttribute("visualizar", false);
		return "cita/frmcita";
	}

}
