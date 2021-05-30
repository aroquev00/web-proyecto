
<?php
    session_start();

    include('db/conexionDB.php');

    $consulta = "SELECT nombre , COUNT(*) AS Num FROM Meds GROUP BY nombre ORDER BY Num DESC, nombre ASC ";


$resultado = hacerQuery($consulta);

    $data = array();

    while ($row = mysqli_fetch_row($resultado)){
        $data[] = $row;
    }

    echo json_encode($data);
