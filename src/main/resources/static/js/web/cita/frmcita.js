$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "/sede/listarSedes",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index,value){
					$("#cbosede").append(
							`<option value="${value.idsede}">
								${value.nombre}</option>`
							);
				})
			}			
		}
	})
});


$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "/Especialidad/listarEspecialidades",
		dataType: "json",
		success: function(resultado){
			if(resultado.length > 0){
				$.each(resultado, function(index,value){
					$("#cboespecialidad").append(
							`<option value="${value.idespecialidad}">
								${value.especialidad}</option>`
							);
				})
			}			
		}
	})
});



//----------------------------------Prueba


$(document).ready(function() {
	  // Evento click del botón "Buscar"
	  $('#btnbuscar').click(function() {
	    // Obtener los valores seleccionados del select y del input date
	    var sede = $('#cbosede').val();
	    var especialidad = $('#cboespecialidad').val();
	    var fecha = $('#fechacita').val();

	    // Mostrar los valores en la consola para verificar
	    console.log('Sede:', sede);
	    console.log('Especialidad:', especialidad);
	    console.log('Fecha:', fecha);

	    // Realizar la llamada AJAX al endpoint del controlador
	    $.ajax({
	      url: '/cita/disponibles',
	      method: 'GET',
	      data: {
	        idsede: sede,
	        idespecialidad: especialidad,
	        fecha: fecha
	      },
	      success: function(response) {
	        // Manejar la respuesta exitosa
	        console.log(response); // Aquí puedes hacer lo que necesites con los datos obtenidos
	      },
	      error: function(xhr, status, error) {
	        // Manejar el error
	        console.error(error);
	      }
	    });
	  });
	});



//Funcion para buscar las citas disponibles

$(document).ready(function() {
	  
	  var btnBuscar = $("#btnbuscar");

	  btnBuscar.click(function() {
	 
	    var idSede = $("#cbosede").val();
	    var idEspecialidad = $("#cboespecialidad").val();
	    var fecha = $("#fechacita").val();
	    
	    if (idSede === "" || idEspecialidad === "" || fecha === null || fecha === "") {
	      
	    	alert("Debe llenar todos los campos para poder visualizar los horarios disponibles");
	    } else {
	  
	      $.ajax({
	        url: "/cita/disponibles",
	        type: "GET",
	        data: { 
	        	idsede: idSede,
	        	idespecialidad: idEspecialidad,
	        	fecha: fecha
	        	
	        },
	        success: function(response) {         
	        	listarCitasDisponibles(response);
	        },
	        error: function(xhr) {          
	          console.log(xhr.responseText);
	        }
	      });
	    }
	  });
	  

// Función para listar citas disponibles 
function  listarCitasDisponibles(listaCitas) {
	var tablaCitas = $("#tblcitacapacidad tbody");
	  tablaCitas.empty();
	  // Agregar las filas correspondientes a los alumnos encontrados
	  $.each(listaCitas, function(index, cita) {
	    var fechaCompleta = new Date(cita.fecha);
	    var opcionesFormato = { year: 'numeric', month: '2-digit', day: '2-digit' };
	    var fechaFormateada = fechaCompleta.toLocaleDateString('es-ES', opcionesFormato);

	    var fila = "<tr>" +
	      "<td>" + cita.sede.nombre + "</td>" +
	      "<td>" + cita.especialidad.especialidad + "</td>" +
	      "<td>" + cita.doctor.nombres + " " + cita.doctor.apellidopaterno + "</td>" +	      
	      "<td>" + fechaFormateada + "</td>" +   
	      "<td>" + cita.hora.hora + "</td>" + 
	      "<td>"+
	      "<button type='button' class='btn btn-success btnconfirmarcita'"+
	      " data-idcitacapacidad='"+ cita.idcitacapacidad +"'"+
	      " data-sede='"+ cita.sede.nombre +"'"+
	      " data-especialidad='"+ cita.especialidad.especialidad +"'"+
	      " data-fecha='"+ fechaFormateada +"'"+
	      " data-hora='"+ cita.hora.hora +"'"+
	      " data-doctor='"+ (cita.doctor.nombres + " " + cita.doctor.apellidopaterno) +"'"+
	      ">Seleccionar</button></td>"+
	      "<td>"+
	      "</tr>";
	    tablaCitas.append(fila);
    });
  }
});


// Función para confirmar cita

$(document).on("click", ".btnconfirmarcita", function(){
	$("#txtsede").val($(this).attr("data-sede"));
	$("#txtespecialidad").val($(this).attr("data-especialidad"));
	$("#txtfecha").val($(this).attr("data-fecha"));
	$("#txthora").val($(this).attr("data-hora"));
	$("#txtdoctor").val($(this).attr("data-doctor"));	
	$("#hdnidcitacapacidad").val($(this).attr("data-idcitacapacidad"));
	


	$("#modalCita").modal("show");
});


