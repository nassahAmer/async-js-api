// Atividade: API "catAPI"
// Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

// Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
// Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL, 
            { headers:
                {'Content-Type':'application/json'}
            }); // recebe uma promise da API
        const json = await data.json(); // converte a string(promise) para .json
        console.log(json.webpurl);
        return json.webpurl; // retorna webpurl da URL da imagem que vai ser usada para mostrar na tela
    }
    catch(e) {
        console.log(e.message);
    }

    // SEM try/catch
    // const data = await fetch(BASE_URL, {headers:{'Content-Type':'application/json'}})
    //     .then((res) => res.json())
    //     .catch((e) => console.log(e));
    // return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats(); // adiciona a webpurl nova na URL no .src da imagem
};

catBtn.addEventListener('click', loadImg);

loadImg();

