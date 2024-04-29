
const button = document.querySelector('.button');
let resModelo = document.querySelector('.res-modelo');
let resEntrada = document.querySelector('.res-entrada');
let resPreco = document.querySelector('.res-preco');

button.addEventListener('click', resultado = (e) => {
    e.preventDefault();
    let modeloInput = document.querySelector('#modelo').value;
    let anoInput = document.querySelector('#ano').value;
    let precoInput = document.querySelector('#preco').value;

    let ano = classificacao(anoInput);

    resModelo.innerHTML = `${modeloInput} - ${ano}`;
})

function classificacao(ano) {
    let anoAtual = new Date().getFullYear();

    let resposta = '';
    if (ano > anoAtual) {
        alert('Ano Inválido!')
    }
    if (ano == anoAtual) {
        resposta = 'Novo';
    }
    if (ano < anoAtual) {
        resposta = 'Seminovo';
    }
    if (ano < anoAtual - 2) {
        resposta = 'Usado';
    }

    return resposta;
}