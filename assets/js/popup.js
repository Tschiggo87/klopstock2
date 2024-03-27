document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('closeButton');
    const popUpWrapper = document.getElementById('popUpWrapper');

    closeButton.addEventListener('click', (e) => {
        e.preventDefault(); // Verhindert die Standardaktion des Links
        popUpWrapper.style.display = 'none';
        // Optional: Navigieren Sie zurück zum Anfang der Seite
        window.scrollTo(0, 0);
    });
});


