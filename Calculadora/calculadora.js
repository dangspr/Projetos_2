var valor;
var resultado;
function botao(num){
    valor = document.calc.visor.value += num;
}
function igual(){
      resultado = eval(valor);
      document.calc.visor.value = resultado.toLocaleString('pt-br');

}
function deleta(){
    document.calc.visor.value = '';

}