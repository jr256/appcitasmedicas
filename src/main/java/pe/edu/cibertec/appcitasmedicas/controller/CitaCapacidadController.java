package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.CitaCapacidad;
import pe.edu.cibertec.appcitasmedicas.model.bd.Doctor;
import pe.edu.cibertec.appcitasmedicas.model.bd.Especialidad;
import pe.edu.cibertec.appcitasmedicas.model.bd.EstadoCita;
import pe.edu.cibertec.appcitasmedicas.model.bd.Hora;
import pe.edu.cibertec.appcitasmedicas.model.bd.Paciente;
import pe.edu.cibertec.appcitasmedicas.model.bd.Sede;
import pe.edu.cibertec.appcitasmedicas.model.request.CitaCapacidadRequest;
import pe.edu.cibertec.appcitasmedicas.model.response.ResultadoResponse;
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
   
   
 
   
   @PostMapping("/registrar")
	@ResponseBody
	public ResultadoResponse registrarDoctor(
			@RequestBody CitaCapacidadRequest citacapacidadRequest
			) {
		String mensaje ="Cita registrada correctamente";
		Boolean respuesta = true;
		try {			
			
			CitaCapacidad objCitaCapacidad = new CitaCapacidad();
			if(citacapacidadRequest.getIdcitacapacidad() > 0) {
				objCitaCapacidad.setIdcitacapacidad(citacapacidadRequest.getIdcitacapacidad());
			}
			objCitaCapacidad.setFecha(citacapacidadRequest.getFecha());
			
			
			Sede oSede = new Sede();
			oSede.setIdsede(citacapacidadRequest.getIdsede());
			objCitaCapacidad.setSede(oSede);
			
			
			Especialidad oEspecialidad = new Especialidad();
			oEspecialidad.setIdespecialidad(citacapacidadRequest.getIdespecialidad());
			objCitaCapacidad.setEspecialidad(oEspecialidad);
			
			Doctor oDoctor = new Doctor();
			oDoctor.setIddoctor(citacapacidadRequest.getIddoctor());
			objCitaCapacidad.setDoctor(oDoctor);
			
			Hora oHora = new Hora();
			oHora.setIdhora(citacapacidadRequest.getIdhora());
			objCitaCapacidad.setHora(oHora);
			
			EstadoCita oEstadoCita = new EstadoCita();
			oEstadoCita.setIdestadocita(citacapacidadRequest.getIdestadocita());
			objCitaCapacidad.setEstadocita(oEstadoCita);
			
			Paciente oPaciente = new Paciente();
			oPaciente.setIdpaciente(citacapacidadRequest.getIdpaciente());
			objCitaCapacidad.setPaciente(oPaciente);
						
			
			Especialidad objEspecialidad = new Especialidad();
			objEspecialidad.setIdespecialidad(citacapacidadRequest.getIdespecialidad());
			objCitaCapacidad.setEspecialidad(objEspecialidad);

			
			citacapacidadService.registrarCita(objCitaCapacidad);
			
		}catch(Exception ex) {
			mensaje = "Cita no registrada";
			respuesta = false;
		}
		return ResultadoResponse.builder()
				.mensaje(mensaje)
				.respuesta(respuesta)
				.build();
	}
   
   
	@GetMapping("/consultacitas")
	public String listapago() {
		
		return "cita/consultacita";
	}
   
   

}
