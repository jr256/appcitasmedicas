// ************* Botón AGREGAR *******************
$(document).on("click", "#btnagregar", function(){
	$("#txtnombres").val("");
	$("#txtapellidopaterno").val("");
	$("#txtapellidomaterno").val("");
	$("#txtfechanacimiento").val("");
	$("#txtnrodocumento").val("");
	$("#txtcodigocop").val("");
	$("#txtcorreo").val("");
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


//************* Botón que muestra modal para Actualizar *******************
$(document).on("click", ".btnactualizar", function(){
	$("#txtnombres").val($(this).attr("data-nombres"));
	$("#txtapellidopaterno").val($(this).attr("data-apellidopaterno"));
	$("#txtapellidomaterno").val($(this).attr("data-apellidomaterno"));
	$("#txtfechanacimiento").val($(this).attr("data-fechanacimiento"));
	$("#txtnrodocumento").val($(this).attr("data-numerodocumento"));
	$("#txtcodigocop").val($(this).attr("data-codigocop"));
	$("#txtcorreo").val($(this).attr("data-correoinstitucional"));
	$("#hddidregistrodoctor").val($(this).attr("data-iddoctor"));
	
	$("#cbotipodocumento").empty();
	var idtipodocumento = $(this).attr("data-idtipodocumento");
	$("#cboespecialidad").empty();
	var idespecialidad = $(this).attr("data-idespecialidad");
	$("#cboestado").empty();
	var idestado = $(this).attr("data-idestado");
	
	$.ajax({
		type: "GET",
		url: "/TipoDocumento/listarTipoDocumentos",
		dataType: "json",
		success: function(resultado){
			 console.log(resultado);
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
	
	});
	
	$.ajax({
		type: "GET",
		url: "/Especialidad/listarEspecialidades",
		dataType: "json",
		success: function(resultado){
			 console.log(resultado);
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
	});
	
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


	
// **************** Boton GUARDAR ************

$(document).on("click", "#btnguardar", function(){
    var datos = {
        iddoctor: $("#hddidregistrodoctor").val(),
        nombres: $("#txtnombres").val(),
        apellidopaterno: $("#txtapellidopaterno").val(),
        apellidomaterno: $("#txtapellidomaterno").val(),
        fechanacimiento: $("#txtfechanacimiento").val(),
        numerodocumento: $("#txtnrodocumento").val(),
        codigocop: $("#txtcodigocop").val(),
        correoinstitucional: $("#txtcorreo").val(),
        idestado: $("#cboestado").val(),
        idespecialidad: $("#cboespecialidad").val(),
        idtipodocumento: $("#cbotipodocumento").val()
    };

    console.log("Datos enviados POST: ", datos); 

    $.ajax({
        type: "POST",
        url: "/doctor/registrarDoctor",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(resultado){
            console.log(resultado);
            alert(resultado.mensaje);
            ListarDoctor();
        }
    });

    $("#modalDoctor").modal("hide");
});



//************* Botón ELIMINAR *******************

$(document).on("click", ".btneliminardoctor", function(){
	$("#hddideliminardoctor").val("");
	$("#hddideliminardoctor").val($(this).attr("data-iddoctor"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar a " +
		    $(this).attr("data-nombres") +
		    " " +
		    $(this).attr("data-apellidopaterno") +
		    " " +
		    $(this).attr("data-apellidomaterno") +
		    "?");
	$("#modalEliminarDoctor").modal("show");
});



//************* Botón ELIMINAR REGISTRO *******************
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
			console.log("Datos recibidos GET listarDoctores: ", resultado);
			$("#tbldoctor > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tbldoctor > tbody").append("<tr>"+
						"<td>"+value.iddoctor+"</td>"+
						"<td>"+ value.nombres + " " + value.apellidopaterno + " " + value.apellidomaterno + "</td>"+									
						"<td>"+ value.fechanacimiento+"</td>"+
						"<td>"+ value.tipodocumento.tipodocumento+"</td>"+
						"<td>"+ value.numerodocumento+"</td>"+
						"<td>"+ value.codigocop+"</td>"+
						"<td>"+ value.correoinstitucional+"</td>"+
						"<td>"+ value.especialidad.especialidad+"</td>"+
						"<td>"+ value.estado.estado+"</td>"+
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
							" data-apellidopaterno='"+value.apellidopaterno+"'"+
							" data-apellidomaterno='"+value.apellidomaterno+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}




