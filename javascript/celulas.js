let estrutura = prompt("Digite o nome da estrutura: ");
let celulaAnimal = ["Núcleo", "Membrana Nuclear", "Citoplasma", "Ribossomos", "Lisossomos", "Complexo de Golgi", "Retículo Endoplasmático Liso", "Retículo Endoplasmático Rugoso", "Centríolo", "Citoesqueleto", "Membrana Plasmática", "DNA", "Cromossomos", "Mitocôndria", "Peroxissomos", "RNA Mensageiro"]
for(let i =0; i< celulaAnimal.length; i++) {
    if(celulaAnimal[i] == "Núcleo" && estrutura == "Núcleo") {
        document.write(`Comportar o DNA. <br> <img src="imagens/núcleo.png" style="width: 70vw; height: 90vh">`);
    } 
    else if(celulaAnimal[i]=="Membrana Nuclear" && estrutura == "Membrana Nuclear") {
        document.write(`Responsável pela produção de ribossomos. <br> <img src="imagens/carioteca.webp" style="width: 70vw; height: 90vh">`)
    }
    else if(celulaAnimal[i]=="Citoplasma" && estrutura == "Citoplasma") {
        document.write(`Estrutura gelatinosa que armazena as demais organelas. <br> <img src="imagens/citoplasma.webp" style="width: 70vw; height: 90vh">`)
    }
    else if(celulaAnimal[i]=="Ribossomos" && estrutura == "Ribossomos") {
        document.write(`Produção e síntese de proteínas. <br> <img src="imagens/ribossomo.webp" style="width: 70vw; height: 90vh">`)
    }
    else if(celulaAnimal[i]=="Lisossomos" && estrutura == "Lisossomos") {
        document.write(`Este, faz a quebra do alimento, que é digerido patra proporcionar energia para a célula. <br> <img src="imagens/lisossomos.webp" style="width: 70vw; height: 90vh">`)
    }
    else if(celulaAnimal[i]=="Complexo de Golgi" && estrutura == "Complexo de Golgi") {
        document.write("Faz o armazenamento, transformação e exportação das substÂncias das células.")
    }
    else if(celulaAnimal[i]=="Retículo Endoplasmático Liso" && estrutura == "Retículo Endoplasmático Liso") {
        document.write("Responsável por produção hormonal")
    }
    else if(celulaAnimal[i]=="Retículo Endoplasmático Rugoso" && estrutura == "Retículo Endoplasmático Rugoso") {
        document.write("Responsável pela síntese proteíca, além da glicosilação, produção de fosfolipídios e montagem de meoléculas proteícas.")
    }
    else if(celulaAnimal[i]=="Centríolo" && estrutura == "Centríolo") {
        document.write("Auxiliam na divisão celulas (mitose e meiose).")
    }
    else if(celulaAnimal[i]=="Citoesqueleto" && estrutura == "Citoesqueleto") {
        document.write("Rede de filamentos proteicos que roporciona sustentação e resistência para as organelas")
    }
    else if(celulaAnimal[i]=="Membrana Plasmática" && estrutura == "Membrana Plasmática") {
        document.write("Estrutura celular que delimita as células, separando o interior do meio extracelular e selecionando o que entra e sai.")
    }
    else if(celulaAnimal[i]=="DNA" && estrutura == "DNA") {
        document.write("Armazena e transmite informações genéticas, funcionano ainda, como molde para a síntese do RNA.")
    }
    else if(celulaAnimal[i]=="Cromossomos" && estrutura == "Cromossomos") {
        document.write("Abrigam o material genético dentro das células (molécula de DNA condensada).")
    }
    else if(celulaAnimal[i]=="Mitocôndria" && estrutura == "Mitocôndria") {
        document.write("São responsáveis pelo processo de respiraçã celular.")
    }
    else if(celulaAnimal[i]=="Peroxissomos" && estrutura == "Peroxissomos") {
        document.write("Faz a desintoxicação das células e realiza a catalização do peróxido de hidrogênio.")
    }
    else if(celulaAnimal[i]=="RNA Mensageiro" && estrutura == "RNA Mensageiro") {
        document.write("Leva as informações do DN do núcleo até o citoplasma, onde a proteína é produzida.")
    }
}
