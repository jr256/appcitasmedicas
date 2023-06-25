

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
								${value.estado}</option>`
							);
				})
				$("#cboestado").val(idestado);
			}			
		}
	})
	$("#modalPaciente").modal("show");
});


//************* Botón ACTUALIZAR REGISTRO *******************
$(document).on("click", "#btnactualizar", function(){
	$.ajax({
		type: "PUT",
		contentType: 'application/json',
		url: "/paciente/actualizarPaciente",
		data: JSON.stringify({
			idpaciente: $("#hddidactualizarpaciente").val(),
	    	nombres: $("#txtnombres").val(),
	    	apellidopaterno: $("#txtapellidopaterno").val(),
	    	apellidomaterno: $("#txtapellidomaterno").val(),
	    	idtipodocumento: $("#cbotipodocumento").val(),
	        numerodocumento: $("#txtnumerodocumento").val(),
	        fechanacimiento: $("#txtfechanacimiento").val(),
	        correoelectronico: $("#txtcorreoelectronico").val(),
	        password: $("#txtpassword").val(),
	        idestado: $("#cboestado").val(),
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarPaciente();
		}
	})
	$("#modalActualizarPaciente").modal("hide");
})

// **************** Boton GUARDAR ************

$(document).on("click", "#btnguardar", function(){
    var datos = {
    	idpaciente: $("#hddidregistropaciente").val(),
    	nombres: $("#txtnombres").val(),
    	apellidopaterno: $("#txtapellidopaterno").val(),
    	apellidomaterno: $("#txtapellidomaterno").val(),
    	idtipodocumento: $("#cbotipodocumento").val(),
        numerodocumento: $("#txtnumerodocumento").val(),
        fechanacimiento: $("#txtfechanacimiento").val(),
        correoelectronico: $("#txtcorreoelectronico").val(),
        password: $("#txtpassword").val(),
        idestado: $("#cboestado").val(),

    };

    console.log("Datos enviados POST: ", datos); 

    $.ajax({
        type: "POST",
        url: "/paciente/registrarPaciente",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(resultado){
            console.log(resultado);
            alert(resultado.mensaje);
            ListarPaciente();
        }
    });

    $("#modalPaciente").modal("hide");
});





$(document).ready(function() {
  // Obtener el elemento del botón de búsqueda
  var btnBuscar = $("#btnbuscar");
  // Agregar un evento de clic al botón de búsqueda
  btnBuscar.click(function() {
    // Obtener el valor del campo de entrada de ID
    var idpaciente = $("#idpaciente").val();
    // Verificar si el campo de entrada está vacío
    if (idpaciente === "") {
      // Realizar la llamada AJAX al controlador para obtener la lista completa de alumnos
      $.ajax({
        url: "/paciente/listarPaciente",
        type: "GET",
        success: function(response) {
          // Actualizar la tabla de alumnos con la lista completa
        	actualizarTablaPacientes(response);
        },
        error: function(xhr) {
          // Manejar el error de la solicitud AJAX
          console.log(xhr.responseText);
        }
      });
    } else {
      // Realizar la llamada AJAX al controlador para buscar al alumno por ID
      $.ajax({
        url: "/paciente/buscarPaciente",
        type: "GET",
        data: { idpaciente: idpaciente },
        success: function(response) {
          // Actualizar la tabla de alumnos con el resultado de la búsqueda
        	actualizarTablaPacientes([response]);
        },
        error: function(xhr) {
          // Manejar el error de la solicitud AJAX
          console.log(xhr.responseText);
        }
      });
    }
  });

  
  // Función para actualizar la tabla de alumnos con los resultados de la búsqueda
  function actualizarTablaPacientes(listaPaciente) {
    var tablapaciente = $("#tblpaciente tbody");
    tablapaciente.empty();
    // Agregar las filas correspondientes a los alumnos encontrados
    $.each(listaPaciente, function(index, value) {
      var fila = "<tr>" +
      "<td>" + value.idpaciente + "</td>" +
      "<td>"+ value.nombres + " " + value.apellidopaterno + " " + value.apellidomaterno + "</td>"+
      "<td>" + value.tipodocumento.tipodocumento + "</td>" +
      "<td>" + value.numerodocumento + "</td>" +
      "<td>" + value.fechanacimiento + "</td>" +
      "<td>" + value.correoelectronico + "</td>" +

      "<td>" + value.estado.estado + "</td>"    
     
      "</tr>";
      tablapaciente.append(fila);
    });
  }
});


/*
function ListarPaciente() {
    $.ajax({
        type: "GET",
        url: "/paciente/listarPaciente",
        dataType: "json",
        success: function(resultado) {
            console.log("Datos recibidos GET listarPacientes: ", resultado);
            $("#tblpaciente > tbody").html("");
            $.each(resultado, function(index, value) {
                $("#tblpaciente > tbody").append("<tr>" +
                    "<td>" + value.idpaciente + "</td>" +
                    "<td>" + value.nombres + "</td>" +
                    "<td>" + value.apellidopaterno + "</td>" +
                    "<td>" + value.apellidomaterno + "</td>" +
                    "<td>" + value.tipodocumento.tipodocumento + "</td>" +
                    "<td>" + value.numerodocumento + "</td>" +
                    "<td>" + value.fechanacimiento + "</td>" +
                    "<td>" + value.correoelectronico + "</td>" +
                    "<td>" + value.password + "</td>" +
                    "<td>" + value.estado.estado + "</td>" +
                    "<td>" +
                    "<button type='button' class='btn btn-success btnactualizar'" +
                    " data-idpaciente='" + value.idpaciente + "'" +
                    " data-nombres='" + value.nombres + "'" +
                    " data-apellidopaterno='" + value.apellidopaterno + "'" +
                    " data-apellidomaterno='" + value.apellidomaterno + "'" +
                    " data-fechanacimiento='" + value.fechanacimiento + "'" +
                    " data-idtipodocumento='" + value.tipodocumento.idtipodocumento + "'" +
                    " data-numerodocumento='" + value.numerodocumento + "'" +
                    " data-correoelectronico='" + value.correoelectronico + "'" +
                    " data-password='" + value.password + "'" +
                    " data-idestado='" + value.estado.idestado + "'" +
                    "><i class='fas fa-pen'></i></button></td>" +
                    "<td>" +
                    "<button type='button' class='btn btn-danger btneliminarpaciente'" +
                    " data-idpaciente='" + value.idpaciente + "'" +
                    " data-nombres='" + value.nombres + "'" +
                    " data-apellidopaterno='" + value.apellidopaterno + "'" +
                    " data-apellidomaterno='" + value.apellidomaterno + "'" +
                    "><i class='fas fa-trash'></i></button></td>" +
                    "</tr>");
            });
        }
    });
}

function BuscarPacientePorId(idPaciente) {
    $.ajax({
        type: "GET",
        url: "/paciente/buscarPaciente?idpaciente=" + idPaciente,
        dataType: "json",
        success: function(resultado) {
            console.log("Datos recibidos GET buscarPaciente: ", resultado);
            
            // Limpiar la tabla de pacientes
            $("#tblpaciente tbody").html("");
            
            // Verificar si se encontró un paciente con el id especificado
            if (resultado) {
                // Agregar el paciente encontrado a la tabla
                $("#tblpaciente tbody").append("<tr>" +
                    "<td>" + resultado.idpaciente + "</td>" +
                    "<td>" + resultado.nombres + "</td>" +
                    "<td>" + resultado.apellidopaterno + "</td>" +
                    "<td>" + resultado.apellidomaterno + "</td>" +
                    "<td>" + resultado.tipodocumento.tipodocumento + "</td>" +
                    "<td>" + resultado.numerodocumento + "</td>" +
                    "<td>" + resultado.fechanacimiento + "</td>" +
                    "<td>" + resultado.correoelectronico + "</td>" +
                    "<td>" + resultado.password + "</td>" +
                    "<td>" + resultado.estado.estado + "</td>" +
                    "<td>" +
                    "<button type='button' class='btn btn-success btnactualizar'" +
                    " data-idpaciente='" + resultado.idpaciente + "'" +
                    " data-nombres='" + resultado.nombres + "'" +
                    " data-apellidopaterno='" + resultado.apellidopaterno + "'" +
                    " data-apellidomaterno='" + resultado.apellidomaterno + "'" +
                    " data-fechanacimiento='" + resultado.fechanacimiento + "'" +
                    " data-idtipodocumento='" + resultado.tipodocumento.idtipodocumento + "'" +
                    " data-numerodocumento='" + resultado.numerodocumento + "'" +
                    " data-correoelectronico='" + resultado.correoelectronico + "'" +
                    " data-password='" + resultado.password + "'" +
                    " data-idestado='" + resultado.estado.idestado + "'" +
                    "><i class='fas fa-pen'></i></button></td>" +
                    "<td>" +
                    "<button type='button' class='btn btn-danger btneliminarpaciente'" +
                    " data-idpaciente='" + resultado.idpaciente + "'" +
                    " data-nombres='" + resultado.nombres + "'" +
                    " data-apellidopaterno='" + resultado.apellidopaterno + "'" +
                    " data-apellidomaterno='" + resultado.apellidomaterno + "'" +
                    "><i class='fas fa-trash'></i></button></td>" +
                    "</tr>");
            } else {
            }
        }
    });
}
*/
