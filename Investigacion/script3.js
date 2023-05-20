// Obtener referencia al elemento de audio
const audioElement = document.getElementById('audioElement');

// Función para reproducir el audio
function playAudio() {
  audioElement.play();
}

// Función para pausar el audio
function pauseAudio() {
  audioElement.pause();
}

// Verificar si el navegador admite la API getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Acceder a la cámara y el micrófono del dispositivo
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
      // Mostrar el video de la cámara en el elemento de video
      videoElement.srcObject = stream;

      // Iniciar la detección del código QR
      startQRDetection(stream);

      // Reproducir el audio
      playAudio();
    })
    .catch(function (error) {
      console.error('Error al acceder a la cámara: ', error);
    });
}

// Resto del código...
