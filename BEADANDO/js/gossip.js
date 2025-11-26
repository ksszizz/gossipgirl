const alertContainer = document.getElementById('fullscreen-alert');

function showAlert() {
    alertContainer.classList.remove('alert-hidden');
    alertContainer.classList.add('alert-visible');
    document.body.style.overflow = 'hidden';
}

function hideAlert() {
    alertContainer.classList.remove('alert-visible');
    alertContainer.classList.add('alert-hidden');
    document.body.style.overflow = 'auto';
}

window.onload = showAlert;