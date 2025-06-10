// Configuration des particules
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#7c4dff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#7c4dff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Functions modales
function openModal(traceId) {
    const modal = document.getElementById(`modal-${traceId}`);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(traceId) {
    const modal = document.getElementById(`modal-${traceId}`);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Image plein écran
function toggleFullscreen(img) {
    const fullscreenContainer = document.querySelector('.fullscreen-image');
    const fullscreenImg = fullscreenContainer.querySelector('img');
    fullscreenImg.src = img.src;
    fullscreenContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const fullscreenContainer = document.querySelector('.fullscreen-image');
    fullscreenContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});
