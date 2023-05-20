// Obtener referencia a los elementos del DOM
const videoElement = document.getElementById('videoElement');
const audioElement = document.getElementById('audioElement');
const result = document.getElementById('result');

// Verificar si el navegador admite la API getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Acceder a la cámara y el micrófono del dispositivo
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
      // Mostrar el video de la cámara en el elemento de video
      videoElement.srcObject = stream;

      // Obtener el contexto de audio
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioSource = audioContext.createMediaStreamSource(stream);

      // Crear el nodo de procesamiento de audio
      const analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 2048;
      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      // Conectar el nodo de procesamiento de audio al nodo de destino
      audioSource.connect(analyserNode);
      analyserNode.connect(audioContext.destination);

      // Iniciar la detección del código QR
      startQRDetection(stream);

      // Mostrar el audio capturado en el elemento de audio
      function visualize() {
        analyserNode.getByteTimeDomainData(dataArray);
        audioElement.srcObject = stream;
        requestAnimationFrame(visualize);
      }

      // Iniciar la visualización del audio
      visualize();
    })
    .catch(function (error) {
      console.error('Error al acceder a la cámara y el micrófono: ', error);
    });
}

// Resto del código...
