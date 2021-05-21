<? php
    session_start();
    include("db/conexionDB.php");

    $action = $_POST['Action'];

    if($action == 'Consulta') 
        guardarConsulta();
    else if($action == "Hospitalizacion")



    function guardarConsulta(){
        $fecha       = $_POST['fecha'];
        $razon       = $_POST['razon'];
        $peso        = $_POST['peso'];
        $altura      = $_POST['altura'];
        $presion     = $_POST['presion'];
        $comentarios = $_POST['comentarios'];

        $consulta = "INSERT INTO ConsultasMedicoPaciente VALUES()"
        //medicoID, pacienteID, altura, peso, presión, razon, comentarios, fecha 
    }



?>