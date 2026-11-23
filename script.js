
// =====================================
// ECOINGENIA - FUNCIONES PRINCIPALES
// =====================================

// 1. BUSCADOR DE MÓDULOS

const searchInput = document.querySelector(
    '.search-box input'
);

const searchButton = document.querySelector(
    '.search-box button'
);

const featureCards = document.querySelectorAll(
    '.feature-card'
);

function searchModules() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    let results = 0;

    featureCards.forEach(card => {

        const content = card.textContent.toLowerCase();

        if (content.includes(searchText)) {

            card.style.display = 'flex';
            results++;

        } else {

            card.style.display = 'none';

        }

    });

    console.log(`Resultados encontrados: ${results}`);
}

// Buscar al escribir
searchInput.addEventListener('input', searchModules);

// Buscar al presionar el botón
searchButton.addEventListener('click', searchModules);

// Buscar al presionar Enter
searchInput.addEventListener('keydown', event => {

    if (event.key === 'Enter') {
        searchModules();
    }

});


// =====================================
// 2. NAVEGACIÓN DEL MENÚ
// =====================================

const navigationLinks = document.querySelectorAll(
    '.nav-link'
);

navigationLinks.forEach(link => {

    link.addEventListener('click', () => {

        navigationLinks.forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');

    });

});


// =====================================
// 3. PERFIL DEL USUARIO
// =====================================

const profile = document.querySelector(
    '.sidebar-profile'
);

profile.style.cursor = 'pointer';

profile.addEventListener('click', () => {

    alert(
        'Bienvenido a tu perfil de Nexo Ambiental, Javier.'
    );

});


// =====================================
// 4. NOTIFICACIONES
// =====================================

const notificationButton = document.querySelector(
    '.topbar-actions button'
);

notificationButton.addEventListener('click', () => {

    alert('No tienes notificaciones nuevas.');

});


// =====================================
// 5. RESTABLECER BUSCADOR
// =====================================

searchInput.addEventListener('search', () => {

    if (searchInput.value === '') {

        featureCards.forEach(card => {
            card.style.display = 'flex';
        });

    }

});

console.log('Nexo Ambiental se ha iniciado correctamente.');
