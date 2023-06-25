function cargarTiposDocumento() {
	$("#cbotipodocumento").empty();
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumentos",
		dataType: "json",
		success: function(resultado){
			// console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cbotipodocumento").append(
							`<option value="${value.idtipodocumento}">
								${value.tipodocumento}</option>`
							);
				})
			}			
		}
	})

function cargarEstados() {
		$("#cboestado").empty();
		$.ajax({
			type: "GET",
			url: "/Estado/listarEstados",
			dataType: "json",
			success: function(resultado){
				// console.log(resultado);
				if(resultado.length > 0){
					$.each(resultado, function(index, value){
						$("#cboestado").append(
								`<option value="${value.idestado}">
									${value.estado}</option>`
								);
					})
				}			
			}
		})
	};