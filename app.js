var botao = document.getElementById('clique');




botao.onclick = function(){

if(botao.value === 'Voltar'){

 p1.src = 'primeira.jpg';
 botao.value = 'Retornar';
botao.innerHTML = '(Próximo)';

 }else{

 p1.src = 'segunda.png';
 botao.value = 'Voltar';

 botao.innerHTML = '(Voltar)';

 }

}