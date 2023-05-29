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
	
	
	$("#cboespecialidad").empty();
	$.ajax({
		type: "GET",
		url: "/Especialidad/listarEspecialidades",
		dataType: "json",
		success: function(resultado){
			// console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboespecialidad").append(
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
	$("#modalDoctor").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
	$("#txtnombres").val($(this).attr("data-nombres"));
	$("#txtapellidopaterno").val($(this).attr("data-apellidopaterno"));
	$("#txtapellidomaterno").val($(this).attr("data-apellidomaterno"));
	$("#txtfechanacimiento").val($(this).attr("data-fechanacimiento"));
	$("#txtnumerodocumento").val($(this).attr("data-numerodocumento"));
	$("#txtcodigocop").val($(this).attr("data-codigocop"));
	$("#txtcorreoinstitucional").val($(this).attr("data-correoinstitucional"));
	$("#hddidregistrodoctor").val($(this).attr("data-iddoctor"));
	$("#cboestado").empty();
	var idestado = $(this).attr("data-idestado");
	
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumento",
		dataType: "json",
		success: function(resultado){
			// console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cbotipodocumento").append(
							`<option value="${value.idtipoducmento}">
								${value.tipodocumento}</option>`
							);
				})
				$("#cbotipodocumento").val(idtipodocumento);
			}			
		}
	
	$.ajax({
		type: "GET",
		url: "/Especialidad/listarEspecialidad",
		dataType: "json",
		success: function(resultado){
			// console.log(resultado);
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cboespecialidad").append(
							`<option value="${value.idespecialidad}">
								${value.especialidad}</option>`
							);
				})
				$("#cboespecialidad").val(idespecialidad);
			}			
		}
	
	
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
				$("#cboestado").val(idestado);
			}			
		}
	})
	$("#modalDoctor").modal("show");
});

$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/doctor/registrarDoctor",
		contentType: "application/json",
		data: JSON.stringify({
			iddoctor: $("#hddidregistrodoctor").val(),
			nombres: $("#txtdescripcion").val(),
			apellidopaterno: $("#txtapellidopaterno").val(),
			apellidomaterno: $("#txtapellidomaterno").val(),
			fechanacimiento: $("#txtfechanacimiento").val(),
			tipodocumento: $("#txttipodocumento").val(),
			codigocop: $("#txtcodigocop").val(),
			correoinstitucional: $("#txtcorreoinstitucional").val(),
			idestado: $("#cboestado").val()
			idespecialidad: $("#cboespecialidad").val()
			idtipodocumento: $("#cbotipodocumento").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarDoctor();
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
			iddoctor: $("#hddideliminardoctor").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarDoctor();
		}
	})
	$("#modalEliminarDoctor").modal("hide");
})

function ListarDoctor(){
	$.ajax({
		type: "GET",
		url: "/doctor/listarDoctores",
		dataType: "json",
		success: function(resultado){
			// console.log(resultado);
			$("#tbldoctor > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tbldoctor > tbody").append("<tr>"+
						"<td>"+value.iddoctor+"</td>"+
						"<td>"+value.nombres+"</td>"+
						"<td>"+value.apellidopaterno+"</td>"+
						"<td>"+value.apellidomaterno+"</td>"+
						"<td>"+value.fechanacimiento+"</td>"+
						"<td>"+value.tipodocumento.tipodocumento+"</td>"+
						"<td>"+value.numerodocumento+"</td>"+
						"<td>"+value.codigocop+"</td>"+
						"<td>"+value.correoinstitucional+"</td>"+
						"<td>"+value.especialidad.especialidad+"</td>"+
						"<td>"+value.estado.estado+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-iddoctor='"+value.iddoctor+"'"+
							" data-nombres='"+value.nombres+"'"+
							" data-apellidopaterno='"+value.apellidopaterno+"'"+
							" data-apellidomaterno='"+value.apellidomaterno+"'"+
							" data-fechanacimiento='"+value.fechanacimiento+"'"+
							" data-tipodocumento='"+value.tipodocumento.tipodocumento+"'"+
							" data-numerodocumento='"+value.numerodocumento+"'"+
							" data-correoinstitucional='"+value.correoinstitucional+"'"+
							" data-especialidad='"+value.especialidad.especialidad+"'"+
							" data-idestado='"+value.estado.estado+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminardoctor'"+	
							" data-iddoctor='"+value.iddoctor+"'"+
							" data-nombres='"+value.nombres+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}





