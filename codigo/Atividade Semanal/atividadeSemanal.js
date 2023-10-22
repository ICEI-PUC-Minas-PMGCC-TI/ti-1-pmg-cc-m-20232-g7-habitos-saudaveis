function adicionarExercicio() {
  // Obtém os valores dos campos de entrada
  var exercicio = document.getElementById("exercicio").value;
  var duracao = document.getElementById("duracao").value;
  var descricao = document.getElementById("descricao").value;

  // Obtém a tabela
  var tabela = document.getElementById("tabelaExercicios").getElementsByTagName('tbody')[0];

  // Cria uma nova linha na tabela
  var novaLinha = tabela.insertRow(-1);

  // Insere as células na nova linha
  var celulaExercicio = novaLinha.insertCell(0);
  var celulaDuracao = novaLinha.insertCell(1);
  var celulaDescricao = novaLinha.insertCell(2);

  // Define o conteúdo das células com os valores dos campos de entrada
  celulaExercicio.innerHTML = exercicio;
  celulaDuracao.innerHTML = duracao;
  celulaDescricao.innerHTML = descricao;

  // Limpa os campos de entrada após adicionar o exercício
  document.getElementById("exercicio").value = "";
  document.getElementById("duracao").value = "";
  document.getElementById("descricao").value = "";
}

// Crie um objeto para armazenar os dados do formulário
// var exercicio = {
//     nome: document.getElementById("exercicio").value,
//     duracao: document.getElementById("duracao").value,
//     descricao: document.getElementById("descricao").value
//   };
//   // Crie uma solicitação HTTP para enviar os dados do formulário para o servidor
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "/api/exercicios");
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.send(JSON.stringify(exercicio));
//   // Adicione um manipulador de eventos para o botão "Adicionar"
//   document.getElementById("adicionar").addEventListener("click", function() {
//     // Crie um objeto para armazenar os dados do formulário
//     var exercicio = {
//       nome: document.getElementById("exercicio").value,
//       duracao: document.getElementById("duracao").value,
//       descricao: document.getElementById("descricao").value
//     };
//     // Crie uma solicitação HTTP para enviar os dados do formulário para o servidor
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/api/exercicios");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(exercicio));
//     // Limpe os campos do formulário
//     document.getElementById("exercicio").value = "";
//     document.getElementById("duracao").value = "";
//     document.getElementById("descricao").value = "";
//   });