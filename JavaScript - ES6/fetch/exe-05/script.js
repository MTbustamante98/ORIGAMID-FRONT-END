const btn = document.querySelector('button');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhoto = document.getElementById('user-photo');


async function apiRandom() {
  userName.innerText = 'Carregando...'
  userEmail.innerText = "";
  userPhoto.src = "";

  try {
    const randomResponse = await fetch('https://randomuser.me/api/');

    if (!randomResponse.ok) throw new Error('Erro ao carregar os dados');

    const dadosRandomJSON = await randomResponse.json();

    const user = dadosRandomJSON.results[0];
    console.log(user)
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const photo = user.picture.medium;
    userName.innerText = `Nome: ${fullName}`;
    userEmail.innerText = `Email: ${email}`;
    userPhoto.src = photo;
  } catch(erro) {
    console.error('Erro ao puxar dados!', erro)
  }
}

btn.addEventListener('click', apiRandom);