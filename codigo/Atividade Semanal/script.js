// Crie um objeto para armazenar os dados do formulário
var exercicio = {
    nome: document.getElementById("exercicio").value,
    duracao: document.getElementById("duracao").value,
    descricao: document.getElementById("descricao").value
  };
  // Crie uma solicitação HTTP para enviar os dados do formulário para o servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/exercicios");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(exercicio));
  // Adicione um manipulador de eventos para o botão "Adicionar"
  document.getElementById("adicionar").addEventListener("click", function() {
    // Crie um objeto para armazenar os dados do formulário
    var exercicio = {
      nome: document.getElementById("exercicio").value,
      duracao: document.getElementById("duracao").value,
      descricao: document.getElementById("descricao").value
    };
    // Crie uma solicitação HTTP para enviar os dados do formulário para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/exercicios");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(exercicio));
    // Limpe os campos do formulário
    document.getElementById("exercicio").value = "";
    document.getElementById("duracao").value = "";
    document.getElementById("descricao").value = "";
  });