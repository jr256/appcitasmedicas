package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.Turno;
import pe.edu.cibertec.appcitasmedicas.service.TurnoService;

@Controller
@RequestMapping("/Turno")
public class TurnoController {
	
	@Autowired
	private TurnoService turnoService;

	@GetMapping("/listarTurnos")
	@ResponseBody
	public List<Turno> listarTurnos() {
		return turnoService.listarTurnos();
	}


}
