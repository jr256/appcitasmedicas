package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.Distrito;
import pe.edu.cibertec.appcitasmedicas.service.DistritoService;


@Controller
@RequestMapping("/Distrito")
public class DistritoController {

	@Autowired
	private DistritoService distritoService;
	
	@GetMapping("/listarDistritos")
	@ResponseBody
	public List<Distrito> listarDistritos(){
		return distritoService.listarDistritos();
	}
}
