function entrarSite() {
    let user = document.getElementById("username").value == "senac";
    let password = document.getElementById("password").value == "senac123";
    let email = document.getElementById("email").value == "senac@senac.com.br";
    let date;

    if (user && password && email) 
    {
        alert("Acesso realizado");
        window.location.href = "html/sistema.html";
    } else {
        alert("Algo está errado");
        window.location.href = "index.html";
    }
}
function LimparCampo() {
    user = document.getElementById('nome').value='';
    password = document.getElementById('senha').value='';
    email = document.getElementById('email').value='';
    date = document.getElementById('date').value='';
}

function TrocaSenha()
{
    window.location.href = "html/trocasenha.html";

    user = document.getElementById('nome').value == '';
    password = document.getElementById('senha').value == '';
    email = document.getElementById('email').value == '';
}