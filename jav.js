function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Ajouter X jours
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Vérifier si le cookie d'acceptation existe
    if (getCookie('cookiesAccepted') === 'true') {
        cookieBanner.classList.add('hidden');
    }

    // Gérer le clic sur le bouton "Accepter"
    acceptCookiesBtn.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Sauvegarder pour 1 an
        cookieBanner.innerHTML = `<p style="color: #C6A500; text-align: center;">Merci pour votre visite ! N'oubliez pas de nous contacter si vous avez des questions ou des besoins. !</p>`;
        setTimeout(() => {
            cookieBanner.classList.add('hidden'); // Masquer après 3 secondes
        },3000);
    });
})