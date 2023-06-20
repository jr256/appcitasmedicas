package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;
import pe.edu.cibertec.appcitasmedicas.model.sp.CitaCapacidadSP;
import pe.edu.cibertec.appcitasmedicas.service.CitaCapacidadService;

@Controller
@RequestMapping("/cita")
public class CitaCapacidadController {
	
	@Autowired
	private CitaCapacidadService citacapacidadService;
	
	@GetMapping("/frmcita")
	public String frmMantCita(Model model) {
		model.addAttribute("citaForm", new CitaCapacidad());
		model.addAttribute("visualizar", false);
		return "cita/frmcita";
	}
	
	   @GetMapping("/disponibles")
	   @ResponseBody
	    public List<CitaCapacidad> listarCitasDisponibles(
	        @RequestParam("idsede") Integer idsede,
	        @RequestParam("idespecialidad") Integer idespecialidad,
	        @RequestParam("fecha") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fecha
	    ) {
	        return citacapacidadService.buscarPorSedeEspecialidadFechaYEstado(idsede, idespecialidad, fecha);
	    }

}
