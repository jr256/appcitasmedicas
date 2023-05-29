package pe.edu.cibertec.appcitasmedicas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pe.edu.cibertec.appcitasmedicas.model.bd.TipoDocumento;
import pe.edu.cibertec.appcitasmedicas.service.TipoDocumentoService;

@Controller
@RequestMapping("/TipoDocumento")
public class TipoDocumentoController {


		@Autowired
		private TipoDocumentoService tipodocumentoService;

		@GetMapping("/listarTipoDocumentos")
		@ResponseBody
		public List<TipoDocumento> listarTipoDocumentos() {
			return tipodocumentoService.listarTipoDocumentos();
		}

	}
