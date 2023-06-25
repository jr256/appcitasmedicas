// ********* Botón AGREGAR *************
$(document).on("click", "#btnagregar", function(){
	$("#txtnombre").val("");
	$("#txtdireccion").val("");
	$("#hddidregistrosede").val("0");
	$("#cbodistrito").empty();
	$.ajax({
		type: "GET",
		url: "/Distrito/listarDistritos",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cbodistrito").append(
							`<option value="${value.iddistrito}">
								${value.distrito}</option>`
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
								${value.estado}</option>`
							);
				})
			}			
		}
	})
	$("#modalSede").modal("show");
});



// *************** Botón que muestra modal para ACTUALIZAR ********
$(document).on("click", ".btnactualizar", function(){
	$("#txtnombre").val($(this).attr("data-nombre"));
	$("#txtdireccion").val($(this).attr("data-direccion"));
	$("#hddidregistrosede").val($(this).attr("data-idsede"));
	$("#cbodistrito").empty();
	var iddistrito = $(this).attr("data-iddistrito");
	$.ajax({
		type: "GET",
		url: "/Distrito/listarDistritos",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index, value){
					$("#cbodistrito").append(
							`<option value="${value.iddistrito}">
								${value.distrito}</option>`
							);
				})
				$("#cbodistrito").val(iddistrito);
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
								${value.estado}</option>`
							);
				})
				$("#cboestado").val(idestado);
			}			
		}
	})
	$("#modalSede").modal("show");
});


// *********** Botón GUARDAR *****************
$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/sede/registrarSede",
		contentType: "application/json",
		data: JSON.stringify({
			idsede: $("#hddidregistrosede").val(),
			nombre: $("#txtnombre").val(),
			direccion: $("#txtdireccion").val(),
			iddistrito: $("#cbodistrito").val(),
			idestado: $("#cboestado").val(),
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSede();
		}
	})
	$("#modalSede").modal("hide");
});



//Muestra modal de ELIMINAR
$(document).on("click", ".btneliminarsede", function(){
	$("#hddideliminarsede").val("");
	$("#hddideliminarsede").val($(this).attr("data-idsede"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar la "+ 
			$(this).attr("data-nombre")+"?");
	$("#modalEliminarSede").modal("show");
})


$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/sede/eliminarSede",
		data: JSON.stringify({
			idsede: $("#hddideliminarsede").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSede();
		}
	})
	$("#modalEliminarSede").modal("hide");
})


function ListarSede(){
	$.ajax({
		type: "GET", 
		url: "/sede/listarSedes",
		dataType: "json",
		success: function(resultado){
			 console.log(resultado);
			$("#tblsede > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tblsede > tbody").append("<tr>"+
						"<td>"+value.idsede+"</td>"+
						"<td>"+value.nombre+"</td>"+
						"<td>"+value.direccion+"</td>"+
						"<td>"+value.distrito.distrito+"</td>"+
						"<td>"+value.estado.estado+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-idsede='"+value.idsede+"'"+
							" data-nombre='"+value.nombre+"'"+
							" data-direccion='"+value.direccion+"'"+
							" data-iddistrito='"+value.distrito.iddistrito+"'"+
							" data-idestado='"+value.estado.idestado+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btn-danger'"+
							" data-idsala='"+value.idsede+"'"+
							" data-descsala='"+value.nombre+"'"+
							"><i class='fas fa-trash'></i></button></td>"+
						"</tr>")
			})
		}
	})
}












