package pe.edu.cibertec.appcitasmedicas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.cibertec.appcitasmedicas.model.bd.TipoDocumento;
import pe.edu.cibertec.appcitasmedicas.repository.TipoDocumentoRepository;

@Service
public class TipoDocumentoService {
	@Autowired
	private TipoDocumentoRepository tipodocumentoRepository;
	
	public List<TipoDocumento> listarTipoDocumentos(){
		return tipodocumentoRepository.findAll();
	}
	public void registrarTipoDocumento(TipoDocumento tipodocumento) {
		tipodocumentoRepository.save(tipodocumento);
	}

}
