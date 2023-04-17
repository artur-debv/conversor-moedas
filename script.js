// Função que converte o valor da moeda
function converterMoeda() {
  // Obtém os valores de entrada do usuário
  const valor = document.getElementById('valor').value;
  const moedaOrigem = document.getElementById('moeda-origem').value;
  const moedaDestino = document.getElementById('moeda-destino').value;

  // URL da API de conversão de moedas
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

  // Faz uma requisição GET à API para obter as taxas de câmbio
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Obtém a taxa de câmbio da moeda de destino em relação à moeda de origem
      const taxa = data.rates[moedaDestino];

      // Calcula o valor convertido
      const valorConvertido = valor * taxa;

      // Exibe o resultado da conversão
      document.getElementById('resultado').innerHTML = `${valor} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
      document.getElementById('resultado').style.backgroundColor = 'whitesmoke'
      document.getElementById('resultado').style.height = '31px'
      document.getElementById('resultado').style.width = '165px'
      document.getElementById('resultado').style.textAlign = 'center'
      document.getElementById('resultado').style.paddingTop = '7px'
      document.getElementById('resultado').style.margin = '0 auto'
    })
    .catch(error => console.log(error));
}

// Adiciona um evento de clique ao botão de conversão
document.getElementById('btn-convert').addEventListener('click', converterMoeda);