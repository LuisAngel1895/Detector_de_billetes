<?php
    $host = 'localhost'; // Dirección del servidor de la base de datos
    $username = 'root'; // Nombre de usuario de la base de datos
    $password = '1895'; // Contraseña de la base de datos
    $database = 'informacion'; // Nombre de la base de datos

    $enlaceBD = mysqli_init();
    mysqli_options($enlaceBD, MYSQLI_INIT_COMMAND, 'SET SESSION mysql_native_password');
    mysqli_real_connect($enlaceBD, $host, $username, $password, $database);

    // Verificar si se pudo establecer la conexión
    if (mysqli_connect_errno()) {
        die("No se pudo conectar a la Base de Datos: " . mysqli_connect_error());
    }

    echo "Conexión exitosa a la Base de Datos";

    // Resto de tu código...
?>
