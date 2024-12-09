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

// function logar() {
//     const login = document.getElementById("botaoLogin").value;
//     alert("Bem Vindo!");
// }

// mudança de cor do botão

// window.onload = function () {
//     const botao = document.getElementById("botaoLogin");
  
//     if (botao) {
//       botao.addEventListener("mouseover", () => {
//         botao.style.backgroundColor = "#2c1c04";
//       });
  
//       botao.addEventListener("mouseout", () => {
//         botao.style.backgroundColor = "#a37c4c";
//       });
//     } else {
//       console.log("O botão de login não foi encontrado.");
//     }
//   };


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

function toggleOpen(id){
    var openPerfil = document.getElementById(id);
    if (openPerfil.style.display === "none" || openPerfil.style.display === "") {
        openPerfil.style.display = "block"
        } else {
        openPerfil.style.display = "none";
    }

}


//Animação AOS

AOS.init({
    duration: 1000, // Duração da animação em milissegundos
    offset: 120, // Distância do elemento até o topo antes da animação iniciar
    easing: 'ease-in-out', // Tipo de animação
    delay: 0, // Tempo de espera antes de começar a animação
    once: true, // Se true, anima apenas na primeira vez que o elemento aparece
  });

  // Retorno Login

// status 

function showDetails(order) {
    const details = document.getElementById('details');
    details.innerHTML = `
      <h2>Detalhes do ${order}</h2>
      <p>Status: <strong>${order.includes('001') ? 'Em Produção' : order.includes('002') ? 'Pendente' : 'Concluído'}</strong></p>
      <p>Data do Pedido: 01/11/2024</p>
      <p>Cliente: João da Silva</p>
    `;
    document.querySelectorAll('.status-item').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }