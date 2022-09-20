$("#button-Frase").click(fraseAleatoria);
$("#button-FraseId").click(buscaFrase);
function fraseAleatoria(){
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFrase)
    .fail(function (){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2500)
    })
    .always(function(){
        $("#spinner").toggle();
    })
    
}
function trocaFrase(data){    
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    AtualizaFrase();
    atualizaTempoInicia(data[numeroAleatorio].tempo);
}
function buscaFrase(){
    $("#spinner").toggle();
    var fraseId= $("#Frase-Id").val();
    console.log(fraseId);
    var dados = {id: fraseId}
    $.get("http://localhost:3000/frases", dados,BuscaFrase)
    .fail(function (){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2500)
    })
    .always(function(){
        $("#spinner").toggle();
    })
}
function BuscaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    AtualizaFrase();
    atualizaTempoInicia(data.tempo);
}

