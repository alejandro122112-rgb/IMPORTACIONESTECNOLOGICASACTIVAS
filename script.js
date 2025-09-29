const form = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    const response = await fetch("/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, mensaje })
    });

    const data = await response.json();
    mostrarComentarios(data);
    form.reset();
});

function mostrarComentarios(comentarios) {
    listaComentarios.innerHTML = "";
    comentarios.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nombre}: ${c.mensaje}`;
        listaComentarios.appendChild(li);
    });
}

window.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/comentarios");
    const data = await response.json();
    mostrarComentarios(data);
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje, ' + form.nombre.value + '!');
    form.reset();
});