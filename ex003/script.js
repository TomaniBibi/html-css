const formulario = document.querySelector('#formulario');
const mensagemInput = document.querySelector('#mensagem');
const mensagensDiv = document.querySelector('#mensagens');

// Conectar ao servidor de chat
const socket = io.connect('http://localhost:3000');

// Enviar mensagem para o servidor quando o formulário for enviado
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const mensagem = mensagemInput.value;
  mensagemInput.value = '';

  socket.emit('mensagem', mensagem);
});

// Adicionar mensagem à tela quando receber uma mensagem do servidor
socket.on('mensagem', (mensagem) => {
  const mensagemDiv = document.createElement('div');
  mensagemDiv.innerText = mensagem;

  mensagensDiv.appendChild(mensagemDiv);
});
