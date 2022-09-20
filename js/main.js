var tempoInicial = $("#contador-Tempo").text();

$(document).ready(function(){
    AtualizaFrase();
    InicializaContadores();
    InicializaCronometro();
    marcadores();
    $("#button-Restart").click(ReiniciaJogo);
})

function AtualizaFrase(params) {
    var frase = jQuery(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoDaFrase = $("#tamanhoDaFrase");
    tamanhoDaFrase.text(numPalavras);        
}

var campo = $(".campo-Digitacao");


function InicializaContadores(){
    campo.on("input", function () {
        var conteudo = campo.val();
    var textAreaPalavaras = conteudo.split(/\S+/).length - 1;
    $("#contador-Palavras").text(textAreaPalavaras);

    var qtcaracteres = conteudo.length;
    $("#contador-Caracteres").text(qtcaracteres);
})
}   
function InicializaCronometro(){
    
campo.one("focus", function(){
    var tempoDigitacao = $("#contador-Tempo").text();
   var cronometroId = setInterval(function(){
        tempoDigitacao--;
        $("#contador-Tempo").text(tempoDigitacao);
        if(tempoDigitacao < 1){
          
            clearInterval(cronometroId);
            FinalizaJogo(); 
        }
    },1000)                
});
}
function atualizaTempoInicia(tempo){
   $("#contador-Tempo").text(tempo);
   tempoInicial = tempo;
   tempoDigitacao = tempo;
}
function FinalizaJogo(){
    campo.attr("disabled", true);
    campo.toggleClass("campo-Desabilitado");
    InserePlacar();
}
function marcadores(){

campo.on("input", function(){
    var frase = $(".frase").text();
    var digitando = campo.val();
    var comparavel = frase.substr(0, digitando.length);

    if(digitando === comparavel){
        campo.addClass("campo-Correto");
        campo.removeClass("campo-Errado");
    }
    else{
        campo.addClass("campo-Errado");
        campo.removeClass("campo-Correto");
    }
});
}   

function ReiniciaJogo(params) {
    console.log("button restart");
    campo.attr("disabled", false);
    campo.val(" ");
    campo.removeClass("campo-Correto");
    campo.removeClass("campo-Errado");
    $("#contador-Tempo").text(tempoInicial);
    $("#contador-Caracteres").text(0);
    $("#contador-Palavras").text(0);
    InicializaCronometro();
    campo.toggleClass("campo-Desabilitado");
}


