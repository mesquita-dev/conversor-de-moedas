function Converter(){
  var valorElemento = document.getElementById ("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorDR = valorEmDolar * 5;
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é de R$ " + valorDR;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro(){
  var valorElementoEuro = document.getElementById ("valorEuro");
  var valorEuro = valorElementoEuro.value;
  var valorEmEuro = parseFloat(valorEuro);
  var valorEUR = valorEmEuro * 7;
  
  var elementoConvertidoEuro = document.getElementById ("valorConvertidoEuro");
  var valorConvertidoEuro = "O resultado em real é de R$ " + valorEUR;
  elementoConvertidoEuro.innerHTML = valorConvertidoEuro;
}

