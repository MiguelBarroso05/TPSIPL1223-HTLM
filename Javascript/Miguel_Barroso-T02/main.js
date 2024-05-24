
// Exibir data atual
const currentDateElement = document.getElementById('current-date');
const currentDate = new Date();
const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${currentDate.getFullYear()}`;
currentDateElement.textContent = `Data Atual: ${formattedDate}`;

// Manipular envio do formulário

function handleClick_submit() {
    const output = document.getElementById('form-output');
    output.innerHTML = '<h2>Dados Submetidos</h2>';
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let ddn = document.getElementById('ddn').value;
    let gender = document.getElementById('gender').value;
    let bio = document.getElementById('bio').value;
    document.getElementById('nome-output').innerText = nome;
    document.getElementById('email-output').innerText = email;
    document.getElementById('ddn-output').innerText = ddn;
    document.getElementById('gender-output').innerText = gender;
    document.getElementById('bio-output').innerText = bio;
    
}

// Alternar estilo
function handleClick_style() {
    const stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === './style.css') {
        stylesheet.setAttribute('href', './style2.css');
    } else {
        stylesheet.setAttribute('href', './style.css');
    }
}
