function entrarSite() {
    let user = document.getElementById("username").value == "senac";
    let password = document.getElementById("password").value == "senac123";
    let email = document.getElementById("email").value == "senac@senac.com.br";
    let date;

    if (user && password && email) {
        alert("Acesso realizado");
        window.location.href = "html/sistema.html";
    } else {
        alert("Algo está errado");
        window.location.href = "index.html";
    }
}
function LimparCampo() {
    user = document.getElementById('nome').value = '';
    password = document.getElementById('senha').value = '';
    email = document.getElementById('email').value = '';
    date = document.getElementById('date').value = '';
}

function TrocaSenha() {
    user = document.getElementById('nome').value == '';
    password = document.getElementById('senha').value == '';
    email = document.getElementById('email').value == '';
}
function mostrarLogin() {
    var loginForm = document.getElementById("loginContainer");
    loginForm.classList.toggle("show-login");
}// Definição da classe ContaBancaria
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    // Método para adicionar dinheiro ao saldo
    depositar(valor) {
        this.saldo += valor;
    }
}

// Instanciando uma conta bancária com saldo inicial de R$ 5000
const minhaConta = new ContaBancaria(5000);

// Função para solicitar um empréstimo e adicionar o valor ao saldo
// Função para solicitar um empréstimo e adicionar o valor ao saldo
function solicitarEmprestimo(valor) {
    if (valor > 0) {
        minhaConta.depositar(valor); // Adiciona o valor do empréstimo ao saldo
        alert(`Empréstimo de R$${valor} aprovado. Novo saldo: R$${minhaConta.saldo}`);

        // Atualiza o saldo bancário na página
        atualizarSaldoNaPagina();
    } else {
        alert("O valor do empréstimo deve ser maior que zero.");
    }
}

// Função para atualizar o saldo bancário na página
function atualizarSaldoNaPagina() {
    const saldoElemento = document.getElementById('saldo');
    saldoElemento.textContent = `R$ ${minhaConta.saldo.toFixed(2).replace('.', ',')}`; // Atualiza o saldo exibido
}


// Chama a função para atualizar o saldo ao carregar a página
atualizarSaldoNaPagina();