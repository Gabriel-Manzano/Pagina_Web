//ESTRELLAAAAAAAS
const estrellasContainer = document.querySelector('.estrellas');
const numEstrellas = 200; // Número de estrellas
for (let i = 0; i < numEstrellas; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duracion = Math.random() * 2 + 1;
    const tamano = Math.random() * 2;
    estrella.style.left = `${x}px`;
    estrella.style.top = `${y}px`;
    estrella.style.width = `${tamano}px`;
    estrella.style.height = `${tamano}px`;
    estrella.style.animationDuration = `${duracion}s`;
    estrellasContainer.appendChild(estrella);
}
