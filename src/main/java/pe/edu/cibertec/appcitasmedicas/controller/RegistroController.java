package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import pe.edu.cibertec.appcitasmedicas.model.bd.Estado;
import pe.edu.cibertec.appcitasmedicas.model.bd.Paciente;
import pe.edu.cibertec.appcitasmedicas.model.bd.TipoDocumento;
import pe.edu.cibertec.appcitasmedicas.model.bd.Usuario;
import pe.edu.cibertec.appcitasmedicas.repository.UsuarioRepository;
import pe.edu.cibertec.appcitasmedicas.service.EstadoService;
import pe.edu.cibertec.appcitasmedicas.service.TipoDocumentoService;


@Controller
@RequestMapping("/registro")
public class RegistroController {
	
	private UsuarioRepository usuarioRepository;
	private HttpSession session;
	
	
	@Autowired
	private TipoDocumentoService tipoDocumentoService;
	
	@Autowired
	private EstadoService estadoService;
	
	@Autowired
	public RegistroController(UsuarioRepository usuarioRepository, HttpSession session) {
		super();
		this.usuarioRepository = usuarioRepository;
		this.session = session;
	}


	@GetMapping("/frmRegistrar")
	public String registrar(Model model) {
		if (session.getAttribute("userType") == null) {
	        session.setAttribute("userType", "paciente");
	    }
		Paciente paciente = new Paciente();
		model.addAttribute("paciente", new Paciente());
        model.addAttribute("bindingResult", new BeanPropertyBindingResult(paciente, "paciente"));
		model.addAttribute("usuario", new Usuario());
		return "registro/frmRegistrar";
	}

	
	@PostMapping("/registrar")
	public String guardarUsuario(@ModelAttribute("usuario") Usuario usuario, @ModelAttribute("paciente") Paciente paciente, Model model) {
	    List<TipoDocumento> tiposDocumentos = tipoDocumentoService.listarTipoDocumentos();
	    List<Estado> estados = estadoService.listarEstados();
	    model.addAttribute("tiposDocumentos", tiposDocumentos);
	    model.addAttribute("estados", estados);
	    usuario.setTipousuario("paciente");
	    usuario.setEmail(paciente.getCorreoelectronico());
	    usuario.setPassw(paciente.getPassword());

	    paciente.setNombres(paciente.getNombres());
	    paciente.setApellidopaterno(paciente.getApellidopaterno());
	    paciente.setApellidomaterno(paciente.getApellidomaterno());
	    paciente.setNumerodocumento(paciente.getNumerodocumento());
	    paciente.setFechanacimiento(paciente.getFechanacimiento());
	    paciente.setCorreoelectronico(paciente.getCorreoelectronico());
	    paciente.setPassword(paciente.getPassword());

	    usuario.setPaciente(paciente);
	    paciente.setUsuario(usuario);

	    usuarioRepository.save(usuario);

	    return "redirect:/login";
	}


}
