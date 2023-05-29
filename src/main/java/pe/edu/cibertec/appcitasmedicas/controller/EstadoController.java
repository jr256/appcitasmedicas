package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.Estado;
import pe.edu.cibertec.appcitasmedicas.service.EstadoService;

@Controller
@RequestMapping("/Estado")
public class EstadoController {

	@Autowired
	private EstadoService estadoService;
	
	@GetMapping("/listarEstados")
	@ResponseBody
	public List<Estado> listarEstados(){
		return estadoService.listarEstados();
	}
}
