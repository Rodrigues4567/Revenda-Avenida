
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
    let valorEntrada = entrada(precoInput, ano);
    let parcela10x = parcelas(precoInput, valorEntrada);

    resModelo.innerHTML = `${modeloInput} - ${ano}`;
    resEntrada.innerHTML = `Entrada R$: ${valorEntrada.toFixed(3)}`;
    resPreco.innerHTML = `+10x de R$: ${parcela10x.toFixed(3)}`;
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

function entrada(preco, status) {
    if (status == 'Novo') {
        return preco * 0.5;
    }
    else {
        return preco * 0.3;
    }
}

function parcelas(preco, entrada) {
    return (preco - entrada) / 10;
}