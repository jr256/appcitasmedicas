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
	        url: "/cita/disponibles",
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
	var tablaCitas = $("#tblcitacapacidad tbody");
	  tablaCitas.empty();
	  
	  $.each(listaCitas, function(index, cita) {
	    
	    var fila = "<tr>" +
	      "<td>" + cita.sede.nombre + "</td>" +
	      "<td>" + cita.especialidad.especialidad + "</td>" +
	      "<td>" + cita.doctor.nombres + " " + cita.doctor.apellidopaterno + "</td>" +	      
	      "<td>" + cita.fecha + "</td>" +   
	      "<td>" + cita.hora.hora + "</td>" + 
	      "<td>"+
	      "<button type='button' class='btn btn-success btnseleccionarcita'"+
	      " data-idcitacapacidad='"+ cita.idcitacapacidad +"'"+
	      " data-idespecialidad='"+ cita.especialidad.idespecialidad +"'"+
	      " data-idsede='"+ cita.sede.idsede +"'"+
	      " data-idhora='"+ cita.hora.idhora +"'"+
	      " data-iddoctor='"+ cita.doctor.iddoctor +"'"+
	      " data-sede='"+ cita.sede.nombre +"'"+
	      " data-especialidad='"+ cita.especialidad.especialidad +"'"+
	      " data-fecha='"+ cita.fecha +"'"+
	      " data-hora='"+ cita.hora.hora +"'"+
	      " data-doctor='"+ (cita.doctor.nombres + " " + cita.doctor.apellidopaterno) +"'"+
	      ">Seleccionar</button></td>"+
	      "<td>"+
	      "</tr>";
	    tablaCitas.append(fila);
    });
  }
});


// Boton SELECCIONAR que muestra modal de confirmación de cita

$(document).on("click", ".btnseleccionarcita", function(){
	$("#txtsede").val($(this).attr("data-sede"));
	$("#txtespecialidad").val($(this).attr("data-especialidad"));
	$("#txtfecha").val($(this).attr("data-fecha"));
	$("#txthora").val($(this).attr("data-hora"));
	$("#txtdoctor").val($(this).attr("data-doctor"));
	
	//Campos ocultos para guardar los Id
	$("#hdidcitacapacidad").val($(this).attr("data-idcitacapacidad"));
	$("#hdidsede").val($(this).attr("data-idsede"));
	$("#hdidespecialidad").val($(this).attr("data-idespecialidad"));
	$("#hdidhora").val($(this).attr("data-idhora"));
	$("#hdiddoctor").val($(this).attr("data-iddoctor"));
	


	$("#modalCita").modal("show");
});


// ***************** Boton REGISTRAR CITA **********
$(document).on("click", "#btnregistrarcita", function() {
	var fecha = $("#txtfecha").val();
	//var fechaParts = fecha.split("/");
	//var fechaFormateada = fechaParts[2] + "-" + fechaParts[1] + "-" + fechaParts[0];
	 
	
	
	var datos = {
	    idcitacapacidad: $("#hdidcitacapacidad").val(),
	    idespecialidad: $("#hdidespecialidad").val(),
	    idsede: $("#hdidsede").val(),
	    idhora: $("#hdidhora").val(),
	    iddoctor: $("#hdiddoctor").val(),
	    idestadocita: 2,
	    idpaciente: 1,
	    fecha: fecha
	  };
	  
	  console.log(datos)

	  // Realizar la solicitud POST
	  $.ajax({
	    url: "/cita/registrar",
	    type: "POST",
	    contentType: "application/json",
	    data: JSON.stringify(datos),
	    success: function(response) {
	    	
	      console.log("Datos enviados correctamente");
	      alert(response.mensaje);
	      //Actualizamos el listado dando click en el botón buscar
	      $("#btnbuscar").trigger("click");
	      
	     
	    },
	    error: function(xhr, status, error) {
	      
	      console.error("Error al enviar los datos:", error);
	      
	    }
	  });
	  
	  $("#modalCita").modal("hide");
});

