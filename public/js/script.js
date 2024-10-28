//Icone Login
function loginCadastro(){
    let openLoginCadastro = document.querySelector('.open-login-cadastro');
    if (openLoginCadastro.classList.contains('open2')){
        openLoginCadastro.classList.remove('open2');
    }else {
        openLoginCadastro.classList.add('open2')
    }
}

// Menu hamburguer

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

const menuButton = document.getElementById('menuButton');
const burguer = document.getElementById('burguer');

menuButton.addEventListener('click', function () {

    if (burguer.textContent === 'menu') {
        burguer.textContent = 'menu_open';
    } else {
        burguer.textContent = 'menu';
    }
});

//olho senha

function mostrarSenha(){
    const inputPass = document.getElementById('login-senha');
    const btnShowPass = document.getElementById('eye-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}
function mostrarSenha2(){
    const inputPass = document.getElementById('verificaSenha');
    const btnShowPass = document.getElementById('eye-senha2');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}





//evento alert

function logar() {
    const login = document.getElementById("botaoLogin").value;
    alert("Bem Vindo!");
}

// mudança de cor do botão

window.onload = function () {
    const botao = document.getElementById("botaoLogin");
  
    if (botao) {
      botao.addEventListener("mouseover", () => {
        botao.style.backgroundColor = "#2c1c04";
      });
  
      botao.addEventListener("mouseout", () => {
        botao.style.backgroundColor = "#a37c4c";
      });
    } else {
      console.log("O botão de login não foi encontrado.");
    }
  };


//Focus

document.getElementById('email-login').focus();

//blog
function toggleText(id) {
    var textBox = document.getElementById(id);
    if (textBox.style.display === "none" || textBox.style.display === "") {
        textBox.style.display = "block";
    } else {
        textBox.style.display = "none";
    }
}




