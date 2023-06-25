package pe.edu.cibertec.appcitasmedicas.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import pe.edu.cibertec.appcitasmedicas.model.bd.Usuario;
import pe.edu.cibertec.appcitasmedicas.repository.UsuarioRepository;


@Controller
public class LoginController {
	
	private UsuarioRepository usuarioRepository;
	
	public LoginController(UsuarioRepository usuarioRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
	}

	@GetMapping("/login")
	public String getLogin() {
		return "login";
	}
	
	@GetMapping("/loginEmpleado")
	public String getLoginEmpleado() {
		return "loginEmpleado";
	}
	
	@GetMapping("/inicio")
	public String getInicio() {
		return "inicio";
	}
	
	
	@PostMapping("/login")
	public String login(@RequestParam("username") String username, @RequestParam("password") String password,
	                            HttpSession session, Model model) {
	    if (isValidCredentials(username, password)) {
	        String userType = getUserType(username);
	        model.addAttribute("Paciente", userType);
	        session.setAttribute("userType", userType);
	        
	        Usuario usuario = usuarioRepository.findByEmail(username);
	        if (usuario.getPaciente() != null) {
	            model.addAttribute("idpaciente", usuario.getPaciente().getIdpaciente());
	        }
	        
	        return "redirect:/homePaciente";
	    } else {
	        String userType = getUserType(username);
	        if (userType == null || !userType.equals("Paciente")) {
	            return "redirect:/homeEmpleado";
	        } else {
	            return "redirect:/login?error";
	        }
	    }
	}
	 
	 private boolean isValidCredentials(String username, String password) {
		 Usuario usuario = usuarioRepository.findByEmail(username);

		    if (usuario != null && password.equals(usuario.getPassw())) {
		        return true; 
		    }

		    return false;
	    }
	 
	 private String getUserType(String username) {
	        Usuario usuario = usuarioRepository.findByEmail(username);
	        if (usuario != null) {
	            return usuario.getTipousuario();
	        }
	        return null;
	    }
	 
	 
	 @GetMapping("/logout")
	 public String logout(HttpSession session) {
	     // Invalidar la sesión
	     session.invalidate();
	     
	     // Redirigir al usuario a la ruta "inicio"
	     return "redirect:/inicio";
	 }


}
