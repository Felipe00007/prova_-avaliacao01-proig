//2 ͦ Checkpoint de programação imperativa


let menuMicroondas = {
    1 : {nome : "pipoca", duracao: 10 } ,
    2 : {nome: "macarrao", duracao: 8},
    3 : {nome: "carne", duracao: 15},
    4 : {nome: "feijao", duracao: 12},
    5 : {nome: "brigadeiro", duracao:8},
    Arraytotal : [8,10,12,15]
}

//calcular tempo total, levando em conta input cliente

function microondas (prato, operacaoDoCiente, numeroDigitadoCliente) {
    let tempoDepoisInputCliente;
    //calcular tempo total
    if(operacaoDoCiente === "+") {
        tempoDepoisInputCliente = prato + numeroDigitadoCliente;
    } else if (operacaoDoCiente === "-" ) {
        tempoDepoisInputCliente = prato - numeroDigitadoCliente;
    } 
    //primeiro IF que valida o menu, ou ainda, o tempo padrao dos menus
    if (prato === 8 || prato === 10 || prato === 12 || prato === 15){
        if(tempoDepoisInputCliente < prato) {
            console.log("tempo insuficiente");
        } else if(tempoDepoisInputCliente >= prato * 3 ) {
            console.log("KABUMMMMMMMMMMM");
        } else if(tempoDepoisInputCliente > prato * 2 && tempoDepoisInputCliente < prato*3){
            console.log("Comida Queimou");
        } else {
            console.log("Prato pronto, Bom Apetite")
        }
    } else {
        console.log("Prato Não existe")
    }    
}

microondas(12, "+", 13);
microondas(menuMicroondas[1].duracao)
microondas(menuMicroondas[3].duracao, "+", 50)
microondas(5)
microondas(menuMicroondas[2].duracao, "-", 30)
console.log("----------------------------------") // testando todos os Pratos 
microondas(8)
microondas(10)
microondas(12)
microondas(15)
