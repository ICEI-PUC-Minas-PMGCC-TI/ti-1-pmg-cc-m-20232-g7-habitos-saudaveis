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

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data));

});

message.addEventListener("message", () => {
    validateMessage();
})