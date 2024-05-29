onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        console.log('Permissão concedida para acessar o áudio.');
        // Use o stream de áudio conforme necessário
    })
    .catch(function(err) {
        console.error('Erro ao obter permissão para acessar o áudio: ', err);
    });
