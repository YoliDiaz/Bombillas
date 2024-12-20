const bombilla = document.getElementById("bombilla");
const boton = document.getElementById("boton");

let isEncendido = false;

boton.addEventListener('click', () => {
    isEncendido = !isEncendido
    bombilla.src = isEncendido ? 'img/encendida.png' : 'img/apagada.png'
    boton.textContent = isEncendido ? 'Apagar' : 'Encender'
});