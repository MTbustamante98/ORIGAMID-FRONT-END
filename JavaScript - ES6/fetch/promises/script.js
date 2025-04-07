const divImg = document.getElementById("imagemContainer");
const btn = document.querySelector("button");

function promiseClick() {
  const promessa = new Promise((resolve, reject) => {
    const imageUrl = "exe-02/img/predio.jpg";
    setTimeout(() => {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => resolve(img);

      img.onerror = () => reject("Erro: Foto não pode ser carregada!");
    }, 2000);
  });

  promessa
    .then((imgElement) => {
      divImg.innerHTML = "Foto de Burj Khalifa";
      divImg.appendChild(imgElement);
    })
    .catch((reject) => {
      console.error(reject);
    });
}

btn.addEventListener("click", promiseClick);
