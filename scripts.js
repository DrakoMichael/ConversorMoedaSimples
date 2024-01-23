//placeholder
document.getElementById("resultado").innerHTML = '---';



function converterMoeda() {
    var valorUsuario = parseFloat(document.getElementById("valor").value);
    var moeda = document.getElementById("moeda").value;
    var linkApi = "https://economia.awesomeapi.com.br/last/";
    var linkApiComValor = linkApi + moeda;


    fetch(linkApiComValor)
        .then(resposta => resposta.json())
        .then(dados => {
            var moedaTransformada = moeda.replace("-", "");
            console.log(dados);

            var high = parseFloat(dados[moedaTransformada].high);
            var low = parseFloat(dados[moedaTransformada].low);
            console.log(high);
            console.log(low);

            // Lógica de conversão
            var valorFinal = valorUsuario * low;
            var valorFinalArredondado = valorFinal;

            //verifica se o usuário informou um número
            if (isNaN(valorFinalArredondado)) {
                document.getElementById("resultado").innerHTML = "insira um valor";
            } else {
                var valorFinalEmMoeda = valorFinalArredondado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                document.getElementById("resultado").innerHTML = valorFinalEmMoeda;
            }
            
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
            document.getElementById("resultado").innerHTML = 'Erro ao obter dados da API.';
        });
}
