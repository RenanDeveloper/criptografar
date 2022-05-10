function aguardando(){
    var saida = document.querySelector('.resultado');

    saida.textContent="";
    setInterval(saida.style.backgroundImage = "url('img/boneco.png')", 1000);
}

function codificar(){
    var textoAlvo = document.querySelector('.texto').value;
    var saida = document.querySelector('.resultado');

    saida.style.backgroundImage = "none";


    textoAlvo = Array.from(textoAlvo);

    for (let i = 0; i < textoAlvo.length; i++) {
        const letra = textoAlvo[i];
        if (letra == 'a') {
            textoAlvo.splice(i, 1, "ai");
        }
        if (letra == 'e') {
            textoAlvo.splice(i, 1, "enter");
        }
        if (letra == 'i') {
            textoAlvo.splice(i, 1, "imes");
        }
        if (letra == 'o') {
            textoAlvo.splice(i, 1, "ober");
        }
        if (letra == 'u') {
            textoAlvo.splice(i, 1, "ufat");
        }
    }

    textoAlvo = textoAlvo.join("");
    saida.textContent = textoAlvo;


}

function decodificar(){
    var textoAlvo = document.querySelector('.texto').value;
    var saida = document.querySelector('.resultado');

    saida.style.backgroundImage = "none";

    
    textoAlvo = textoAlvo.split("ai");
    for (let i = 0; i < textoAlvo.length-1; i++) {
        const letra = textoAlvo[i];
        textoAlvo[i] = textoAlvo[i]+'a';
    }
    textoAlvo = textoAlvo.join(""); 
    textoAlvo = textoAlvo.split("enter");
    for (let i = 0; i < textoAlvo.length-1; i++) {
        const letra = textoAlvo[i];
        textoAlvo[i] = textoAlvo[i]+'e';
    }
    textoAlvo = textoAlvo.join(""); 
    textoAlvo = textoAlvo.split("imes");
    for (let i = 0; i < textoAlvo.length-1; i++) {
        const letra = textoAlvo[i];
        textoAlvo[i] = textoAlvo[i]+'i';
    }
    textoAlvo = textoAlvo.join(""); 
    textoAlvo = textoAlvo.split("ober");
    for (let i = 0; i < textoAlvo.length-1; i++) {
        const letra = textoAlvo[i];
        textoAlvo[i] = textoAlvo[i]+'o';
    }
    textoAlvo = textoAlvo.join(""); 
    textoAlvo = textoAlvo.split("ufat");
    for (let i = 0; i < textoAlvo.length-1; i++) {
        const letra = textoAlvo[i];
        textoAlvo[i] = textoAlvo[i]+'u';
    }

    textoAlvo = textoAlvo.join(""); 
    var saida = document.querySelector('.resultado');
    saida.textContent = textoAlvo;
}

