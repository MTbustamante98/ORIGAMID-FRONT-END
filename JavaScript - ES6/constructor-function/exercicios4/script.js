function Tarefa(descricao, prioridade) {
  this.descricao = descricao;
  this.prioridade = prioridade;
  this.completa = false;
}

Tarefa.prototype.concluir = function() {
  this.completa = true;
};

Tarefa.prototype.exibirTarefa = function(container) {
  const tarefaElemento = document.createElement("div");
  tarefaElemento.classList.add(`prioridade-${this.prioridade}`);
  tarefaElemento.textContent = this.descricao;

  if (this.completa) {
    tarefaElemento.classList.add("completa");
  }
  
  tarefaElemento.addEventListener("click", () => {
    this.concluir();
    tarefaElemento.classList.add("completa");
  });

  container.appendChild(tarefaElemento);
};

function adicionarTarefa() {
  const descricao = document.getElementById("descricao").value;
  const prioridade = parseInt(document.getElementById("descricao").value);

  if(!descricao) {
    alert("Por Favor, insira uma descrição para a tarefa.");
    return;
  }

  const novaTarefa = new Tarefa(descricao, prioridade);

  const listaDeTarefas = document.getElementById("listaDeTarefas");
  novaTarefa.exibirTarefa(listaDeTarefas);

  document.getElementById('descricao').value = '';
}

