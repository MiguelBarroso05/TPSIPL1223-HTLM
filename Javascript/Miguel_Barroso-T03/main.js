
function adicionarlista() {
    let input = prompt("Por favor, insira um valor:");
    if (input) {
        let lista = document.getElementById("lista");
        let Itemlista = document.createElement("li");
        Itemlista.textContent = input;
        lista.appendChild(Itemlista);
    }
}

function mostrar(event) {
    event.preventDefault();
    
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let selectedImage = document.querySelector('input[name="image"]:checked').value;

    let displayArea = document.getElementById("display-area");
    displayArea.innerHTML = `
        <h1>${title}</h1>
        <p>${description}</p>
        <img src="${selectedImage}" alt="Selected Image">
    `;
}
