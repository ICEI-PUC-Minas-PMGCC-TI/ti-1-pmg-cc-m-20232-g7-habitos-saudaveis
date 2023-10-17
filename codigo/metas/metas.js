const form = document.getElementById("form");
const message = document.getElementById("message");

const validateMessage = () => {
    message.nextElementSibling.classList.add('error-hidden')

    if(!message.value) {
        message.nextElementSibling.classList.remove('error-hidden')
    } else {
        alert("Meta cadastrada com sucesso!");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateMessage();
});

message.addEventListener("message", () => {
    validateMessage();
})