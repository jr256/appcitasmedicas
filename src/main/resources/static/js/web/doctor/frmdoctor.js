$(document).on("click", "#btnagregar", function(){
	$("#txtnombres").val("");
	$("#txtapellidopaterno").val("");
	$("#txtapellidomaterno").val("");
	$("#txtfechanacimiento").val("");
	$("#txtnrodocumento").val("");
	$("#codigocop").val("");
	$("#correo").val("");
	$("#hddidregistrodoctor").val("0");
	
	
	$("#cbotipodocumento").empty();
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumentos",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboestado").append(
							`<option value="${value.idtipodocumento}">
								${value.tipodocumento}</option>`
							);
				})
			}			
		}
	})
	
	
	$("#cboespecialidad").empty();
	$.ajax({
		type: "GET",
		url: "/Especialidad/listarEspecialidades",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboestado").append(
							`<option value="${value.idespecialidad}">
								${value.especialidad}</option>`
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
			//console.log(resultado);
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
	$("#modalDoctor").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
	$("#txtdescripcion").val($(this).attr("data-descsala"));
	$("#txtnroasientos").val($(this).attr("data-asientos"));
	$("#hddidregistrosala").val($(this).attr("data-idsala"));
	$("#cboestado").empty();
	var idestado = $(this).attr("data-idestado");
	$.ajax({
		type: "GET",
		url: "/Estado/listarEstados",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
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
	$("#modalDoctor").modal("show");
});

$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/sala/registrarSala",
		contentType: "application/json",
		data: JSON.stringify({
			idsala: $("#hddidregistrosala").val(),
			descsala: $("#txtdescripcion").val(),
			asientos: $("#txtnroasientos").val(),
			idestado: $("#cboestado").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSala();
		}
	});
	$("#modalDoctor").modal("hide");
})

$(document).on("click", ".btneliminardoctor", function(){
	$("#hddideliminardoctor").val("");
	$("#hddideliminardoctor").val($(this).attr("data-iddoctor"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar la "+ 
			$(this).attr("data-nombres")+"?");
	$("#modalEliminarDoctor").modal("show");
})
$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/doctor/eliminarDoctor",
		data: JSON.stringify({
			idsala: $("#hddideliminardoctor").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSala();
		}
	})
	$("#modalEliminarDoctor").modal("hide");
})

function ListarSala(){
	$.ajax({
		type: "GET",
		url: "/doctor/listarDoctores",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tbldoctor > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tbldoctor > tbody").append("<tr>"+
						"<td>"+value.idsala+"</td>"+
						"<td>"+value.descsala+"</td>"+
						"<td>"+value.asientos+"</td>"+
						"<td>"+value.estado.descestado+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-idsala='"+value.idsala+"'"+
							" data-descsala='"+value.descsala+"'"+
							" data-asientos='"+value.asientos+"'"+
							" data-idestado='"+value.estado.idestado+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarsala'"+	
							" data-idsala='"+value.idsala+"'"+
							" data-descsala='"+value.descsala+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}





