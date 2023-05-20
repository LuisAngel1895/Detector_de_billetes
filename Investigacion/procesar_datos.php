<?php
	include "conex.php";
	echo "todo correcto";

	if (isset($_POST['nombre']) && !empty($_POST['nombre']) && isset($_POST['apellidos']) && !empty($_POST['apellidos']) && isset($_POST['correo']) && !empty($_POST['correo']) && isset($_POST['contraseña']) && !empty($_POST['contraseña'])) {
		$Nom = $_POST['nombre'];
		$Apell = $_POST['apellidos'];
		$Corr = $_POST['correo'];
		$Contra = $_POST['contraseña'];

		$enlaceBD = mysqli_connect("localhost", "root", "1895", "informacion") or die("No se pudo conectar a la Base de Datos");

		mysqli_query($enlaceBD, "INSERT INTO datos (`Nom`, `Apell`, `Corr`, `Contra`) VALUES ('$Nom','$Apell','$Corr','$Contra')");

		echo "Datos Enviados Correctamente";
	} else {
		echo "Error al Enviar los Datos";
	}
?>

