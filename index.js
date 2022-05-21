console.log("olá estou testando")

let sliderElement = document.querySelector("#slider"); //cria uma variavel chamada sliderElement e passa o valor document.query que Retorna o primeiro elemento dentro do documento
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPass = document.querySelector("#container-pass");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@?/";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value
// pega a variavel sizePassword e usa a tag innerHTML para aparecer no span, mostra o valor de sliderElement == 5

slider.oninput = function () { //o evento oninput ocorre imediatamente após a alteração do valor de um elemento
    sizePassword.innerHTML = this.value;
}

function generatePass() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPass.classList.remove("hide"); //remove a classe hide do span de id #container-pass
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPass() {
    navigator.clipboard.writeText(novaSenha); //copia o que estiver na variavel novaSenha
}