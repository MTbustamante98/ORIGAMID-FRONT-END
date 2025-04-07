const message = document.getElementById("paragrafo");
const btn = document.querySelector("button");

function promiseClick(){
  const promessa = new Promise((resolve, reject) => {
    setTimeout(()=> {
      const condicao = true;
      if (condicao) {
        resolve("Texto alterado com sucesso!");
      } else {
        reject('Erro: Não foi possível alterar o texto!')
      }
    }, 3000);
  });

  promessa.then(resolucao => {
    message.innerText = resolucao;
  }).catch(reject => {
    console.error(reject)
  })
}



btn.addEventListener("click", promiseClick);