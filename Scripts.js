// Define uma chave de API para acessar o serviço de previsão do tempo
const key = "1fc46b6c3f2f2d832cf3b82ead51bed9";

// Função que exibe os dados da previsão do tempo na tela
function colocardadosnatela(dados) {
    // Exibe os dados no console para depuração
    console.log(dados);
    
    // Atualiza o título com o nome da cidade
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    
    // Atualiza a temperatura com o valor arredondado e a unidade
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    
    // Atualiza a descrição da previsão do tempo
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    
    // Atualiza a umidade, corrigindo a propriedade errada 'umidade' para 'humidity'
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    
    // Atualiza o ícone da previsão do tempo, corrigindo a URL da imagem
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Função assíncrona que busca a previsão do tempo para uma cidade
async function buscarcidade(cidade) {
    // Faz uma requisição para a API de previsão do tempo com o nome da cidade
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json()); // Converte a resposta da API para JSON
    
    // Chama a função para atualizar os dados na tela com a resposta da API
    colocardadosnatela(dados);
}

// Função chamada quando o botão de busca é clicado
function cliqueinobotao() {
    // Obtém o valor digitado no campo de entrada da cidade
    const cidade = document.querySelector(".inputcidade").value;
    
    // Chama a função para buscar a previsão do tempo para a cidade fornecida
    buscarcidade(cidade);
}
