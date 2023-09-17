document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('closeButton');
    const goToContact = document.getElementById('goToContact');
    const popUpWrapper = document.getElementById('popUpWrapper');

    closeButton.addEventListener('click', () => {
        popUpWrapper.style.display = 'none';
    });

    goToContact.addEventListener('click', () => {
        popUpWrapper.style.display = 'none';
        window.location.hash = 'contact';
    });

});


