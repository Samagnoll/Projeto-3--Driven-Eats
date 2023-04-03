let pratoSalgado = '';
let selecionarBebiba = '';
let selecionarSobremesa = '';
let vlrComida = 0;
let vlrBebida = 0;
let vlrSobremesa = 0;
let refri;
let doce;

function habilitarBotao(){
    //verificar prato
    if(pratoSalgado !== ''){
    //verificar bebida
        if(selecionarBebiba !== ''){
    //verificar sobremesa
            if(selecionarSobremesa  !== ''){
    //habilitar botão
            const habilitarEContinuar = document.querySelector('.selecionar');
            habilitarEContinuar.classList.add('botaoHabilitado');
            const mudarEscrito = document.querySelector('.escrito');
            mudarEscrito.innerHTML = 'Finalizar pedido';
             }
       }
    }
}
function SelecionarPrato(selector){

     pratoSalgado = selector.innerHTML;

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.pratos-salgados .selecionado');
if (botaoQueFoiSelecionadoAnteriormente !== null){
    botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
}
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado');
    
    habilitarBotao()

    let preco = botao.querySelector('.valor').innerHTML;
    const array = preco.split('');
     console.log(preco);
    let numArray = [];
    let valor=0;
    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray.push('.');
            }
            else{
                numArray.push(array[i]);
            }
        }
    } 
    
    valor= parseFloat (numArray.join("")); 
    //console.log(valor);
   
    comida = botao.querySelector('.Frango').innerHTML;
    vlrComida=valor;
    comida=botao.querySelector('.Frango').innerHTML
    vlrComida = Number((botao.querySelector('.valor').innerHTML).replace("R$", " ").replace(",", "."));
    console.log(comida)
}



function SelecionarBebida(selector){

    selecionarBebiba = selector.innerHTML;

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.bebidas .selecionado');
if (botaoQueFoiSelecionadoAnteriormente !== null){
    botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
}
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado');

    habilitarBotao()

    let preco = botao.querySelector('.valor').innerHTML;
    const array = preco.split('');
     console.log(preco);
    let numArray = [];
    let valor1=0;
    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray.push('.');
            }
            else{
                numArray.push(array[i]);
            }
        }
    } 
    
    valor1= parseFloat (numArray.join("")); 
    //console.log(valor);
   
    refri = botao.querySelector('.bebida').innerHTML;
    vlrBebida=valor1;
    refri=botao.querySelector('.bebida').innerHTML
    vlrBebida = Number((botao.querySelector('.valor').innerHTML).replace("R$", " ").replace(",", "."));
    console.log(refri)
}


function SelecionarSobremesa(selector){

    selecionarSobremesa = selector.innerHTML;

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.pratos-sobremesa .selecionado');
if (botaoQueFoiSelecionadoAnteriormente !== null){
    botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
}
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado');
    console.log(selector)

    habilitarBotao()

    let preco = botao.querySelector('.valor').innerHTML;
    const array = preco.split('');
    let numArray = [];
    let valor2=0;
    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray.push('.');
            }
            else{
                numArray.push(array[i]);
            }
        }
    } 
    
    valor2= parseFloat (numArray.join("")); 
    //console.log(valor);
   
    doce = botao.querySelector('.sobremesa').innerHTML;
    vlrSobremesa=valor2;
    doce=botao.querySelector('.sobremesa').innerHTML
    vlrSobremesa = Number((botao.querySelector('.valor').innerHTML).replace("R$", " ").replace(",", "."));
    
}


function chamaZap(){
    let valorTotal = 0.0;
    valorTotal = vlrComida + vlrBebida+vlrSobremesa;
    console.log(valorTotal)
    let mensagemDeEnvio="Olá, gostaria de fazer o pedido:" + 
    "\n- Prato: " + comida + 
    "\n- Bebida: " + refri +
    "\n- Sobremesa: " + doce +
    "\nTotal: R$ " +valorTotal.toFixed(2).replace(".", ",");
    let msg = encodeURIComponent(mensagemDeEnvio);
    
    window.open(`https://wa.me/5599999999?text=${msg}`);
    console.log(msg)
}