$(document).on("click", "#btnagregar", function(){
	$("#txtnombres").val("");
	$("#txtapellidopaterno").val("");
	$("#txtapellidomaterno").val("");
	$("#txtnumerodocumento").val("");
	$("#txtfechanacimiento").val("");
	$("#txtcorreoelectronico").val("");
	$("#txtpassword").val("");
	$("#hddidregistropaciente").val("0");
	$("#cbotipodocumento").empty();
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumentos",
		dataType: "json",
		success: function(resultado){
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
	$("#cboestado").empty();
	$.ajax({
		type: "GET",
		url: "/Estado/listarEstados",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboestado").append(
							`<option value="${value.idestado}">
								${value.descestado}</option>`
							);
				})
			}			
		}
	})
	$("#modalPaciente").modal("show");
});


$(document).on("click", ".btnactualizar", function(){
	$("#txtnombres").val($(this).attr("data-nombres"));
	$("#txtapellidopaterno").val($(this).attr("data-apellidopaterno"));
	$("#txtapellidomaterno").val($(this).attr("data-apellidomaterno"));
	$("#txtnumerodocumento").val($(this).attr("data-numerodocumento"));
	$("#txtfechanacimiento").val($(this).attr("data-fechanacimiento"));
	$("#txtcorreoelectronico").val($(this).attr("data-correoelectronico"));
	$("#txtpassword").val($(this).attr("data-password"));
	$("#hddidregistropaciente").val($(this).attr("data-idpaciente"));
	$("#cbotipodocuemnto").empty();
	var idtipodocumento = $(this).attr("data-idtipodocumento");
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumentos",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cbotipodocumento").append(
							`<option value="${value.idtipodocumento}">
								${value.tipodocumento}</option>`
							);
				})
				$("#cbotipodocumento").val(idtipodocumento);
			}			
		}
	})
	$("#cboestado").empty();
	var idestado = $(this).attr("data-idestado");
	$.ajax({
		type: "GET",
		url: "/Estado/listarEstados",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboestado").append(
							`<option value="${value.idestado}">
								${value.descestado}</option>`
							);
				})
				$("#cboestado").val(idestado);
			}			
		}
	})
	$("#modalPaciente").modal("show");
});
