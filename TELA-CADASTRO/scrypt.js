document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let valido = true;

    const nomePessoa = document.getElementById("nomePessoa");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroSenha = document.getElementById("erroSenha");

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";

    if (nomePessoa.value.trim() === "" ) {
        erroNome.textContent = "Por favor, insira seu nome.";
        valido = false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email.value)) {
        erroEmail.textContent = "Por favor, insira um email válido. (ex. exemplo123@gmail.com).";
        valido = false;
    }

    if (senha.value.lenght = 8) {
        erroSenha.textContent = "A senha deve ter pelo menos 8 caracteres.";
        valido = false;
    }

    if(valido) {
        alert("Cadastro finalizado com sucesso!");
    }
});
