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


