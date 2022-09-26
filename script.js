const inText = document.querySelector(".i-texto");
const msg = document.querySelector(".msg");

function encriptar(texto){
    texto = texto.toLowerCase();
    let text1 = "";
    let c=0;
    for(let i = 0; i < texto.length; i++){
        c=0;    

        if(texto[i] == "a"){
            text1 += "ai";
            c++;
        }
        if(texto[i] == "e"){
            text1 += "enter";
            c++;
        }
        if(texto[i] == "i"){
            text1 += "imes";
            c++;
        }
        if(texto[i] == "o"){
            text1 += "ober";
            c++;
        }
        if(texto[i] == "u"){
            text1 += "ufat";
            c++;
        }
        if(c==0){text1 += texto[i] }
    }
    return text1;
}

function desencriptar(texto){
    texto = texto.toLowerCase();
    let text1 = "";
    let c=0;
    for(let i = 0; i < texto.length; i++){
        c=0;
        if(texto[i] == "a"){
            text1 += "a";
            c++;
        }
        if(texto[i] == "e"){
            text1 += "e";
            c+=2;
        }
        if(texto[i] == "i"){
            text1 += "i";
            c+=3;
        }
        if(texto[i] == "o"){
            text1 += "o";
            c+=4;
        }
        if(texto[i] == "u"){
            text1 += "u";
            c+=5;
        }
        if(c==0){text1 += texto[i];}
        if(c==1){i++;}
        if(c==2){i+=4;}
        if(c==3){i+=3;}
        if(c==4){i+=3;}
        if(c==5){i+=3;}
    }
    return text1;
}

function btnEncriptar(){
    const TextoEncriptado = encriptar(inText.value);
    msg.value = TextoEncriptado;
    msg.style.backgroundImage = "none"
    inText.value = ""
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inText.value);
    msg.value = textoDesencriptado;
    msg.style.backgroundImage = "none"
    inText.value = ""
}

function copiar(){
    msg.select();
    navigator.clipboard.writeText(msg.value);
    msg.value = "";
    alert("Texto copiado");
}
