fetch("https://raitec-backend.onrender.com/api")
  .then(resposta => resposta.json())
  .then(dados => {
    document.getElementById("mensagem").innerText = dados.mensagem;
  })
  .catch(err => {
    document.getElementById("mensagem").innerText = "Erro ao conectar com o servidor";
    console.error(err);
  });
