const form = document.querySelector('form')
const peso = document.querySelector('input[name = "peso"]');
const altura = document.getElementById("altura");
const sexo = document.getElementById("sexo");
const idade = document.getElementById("idade");

const validatePeso = () => {
    peso.nextElementSibling.classList.add('error-hidden')

    if(!peso.value) {
        peso.nextElementSibling.classList.remove('error-hidden')
    }
}

const validateAltura = () => {
    altura.nextElementSibling.classList.add('error-hidden1')

    if(!altura.value) {
        altura.nextElementSibling.classList.remove('error-hidden1')
    }
}

const validateSexo = () => {
    sexo.nextElementSibling.classList.add('error-hidden2')

    if(!sexo.value) {
        sexo.nextElementSibling.classList.remove('error-hidden2')
    }
}

const validateIdade = () => {
    idade.nextElementSibling.classList.add('error-hidden3')

    if(!idade.value) {
        idade.nextElementSibling.classList.remove('error-hidden3')
    } else if(peso.value && altura.value && sexo.value){
        alert("Medidas cadastradas com sucesso!");
        peso.value = "";
        altura.value = "";
        sexo.value = "";
        idade.value = "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validatePeso();
    validateAltura();
    validateSexo();
    validateIdade();
});