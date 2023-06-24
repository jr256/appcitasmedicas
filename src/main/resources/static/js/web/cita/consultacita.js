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
	        url: "/cita/reservadas",//Petición al servidor
	        type: "GET",
	        data: { 
	        	idsede: idSede,
	        	idespecialidad: idEspecialidad,
	        	fecha: fecha
	        	
	        },
	        success: function(response) {   
	        	 console.log(response);
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
	var tablaCitasP = $("#tblcitasprogramadas tbody");
	tablaCitasP.empty();
	  
	  $.each(listaCitas, function(index, cita) {
	   

	    var fila = "<tr>" +
	      "<td>" + cita.sede.nombre + "</td>" +
	      "<td>" + cita.especialidad.especialidad + "</td>" +
	      "<td>" + cita.doctor.nombres + " " + cita.doctor.apellidopaterno + "</td>" +	      
	      "<td>" + cita.fecha + "</td>" +   
	      "<td>" + cita.hora.hora + "</td>" + 
	      "<td>" + cita.paciente.nombres  + " " + cita.paciente.apellidopaterno+ "</td>" + 
	     
	      "</tr>";
	    tablaCitasP.append(fila);
    });
  }
});



