$("#button-Score").click(mostraPlacar);
function mostraPlacar(){
    $(".placar").stop().slideToggle(600);
}

function InserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Gabriel";    
    var numPalavras = $("#contador-Palavras").text();

   var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-Remover").click(removeLinha);
   corpoTabela.append(linha);
   $(".placar").slideDown(500);
   scrollPlacar();
}
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
        {
        scrollTop : posicaoPlacar + "px"
    }, 1000);
}
function novaLinha(usuario, numPalavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-Remover").attr("href", "#");    
    var icone = $("<i>").addClass("Tyni").addClass("material-icons").text("delete");
    
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;
}
function removeLinha(){
    event.preventDefault();
   var linha =  $(this).parent().parent();
   linha.fadeOut(1000);
   setTimeout(function(){
    linha.remove();
   }, 1000);
   
}
