$(document).on("click","#btnempezar",
            function(){
      //alert("Hola mundo Javascript");
      let usuario = $("#txtusuario").val();
      let password = $("#txtpassword").val();
      
      //recuperamos valores de las cajas de texto
      $("#lbldatos").text("Usuario : " + usuario + " - Password " + password);
      $("#modalempezar").modal("show");
      
})