// Selección de elementos
const menuBtn = document.getElementById('menu-hamburguesa');
const menuLista = document.getElementById('header-inferior');

// Función para abrir/cerrar menú
menuBtn.addEventListener('click', () => {
    if (menuLista.style.display === 'block') {
        menuLista.style.display = 'none';
    } else {
        menuLista.style.display = 'block';
    }
});
