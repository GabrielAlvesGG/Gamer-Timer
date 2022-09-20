$("#button-Frase").click(fraseAleatoria);
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


