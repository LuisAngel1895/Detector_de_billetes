// Obtener referencia al formulario
var formulario = document.forms["Formulario"];

// Función de validación del formulario
function validarFormulario(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores ingresados en los campos
  var nombre = formulario.elements["nombre"].value;
  var apellidos = formulario.elements["apellidos"].value;
  var correo = formulario.elements["correo"].value;
  var contraseña = formulario.elements["contraseña"].value;

  // Realizar validaciones
  if (nombre.trim() === "") {
    alert("Por favor, ingrese su nombre.");
    return;
  }

  if (apellidos.trim() === "") {
    alert("Por favor, ingrese sus apellidos.");
    return;
  }

  if (correo.trim() === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return;
  }

  if (contraseña.trim() === "") {
    alert("Por favor, ingrese su contraseña.");
    return;
  }

  // Si todas las validaciones pasan, enviar el formulario
  formulario.submit();
}

// Agregar el evento de escucha al formulario
formulario.addEventListener("submit", validarFormulario);
