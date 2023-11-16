const input_text = document.querySelector("#input_text");
const input_message = document.querySelector("#input_message");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnCriptografar(){
    const textCriptografado = Criptografar(input_text.value);
    input_message.value = textCriptografado;
    input_text.value = "";
}

function Criptografar(stringCriptografada) {
    for (let i = 0; i < matriz_code.length; i++){
        if(stringCriptografada.includes(matriz_code[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textDescriptografado = Descriptografar(input_text.value);
    input_message.value = textDescriptografado;
    input_text.value = "";
}

function Descriptografar(stringDescriptografada) {
    for (let i = 0; i < matriz_code.length; i++){
        if(stringDescriptografada.includes(matriz_code[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return stringDescriptografada;
}

function Copiar() {
  input_message.select();
  navigator.clipboard.writeText(input_message.value);
  input_message.value = "";
}
