document.addEventListener('DOMContentLoaded', (event) => {
    const closeButton = document.getElementById('closeButton');
    const popUpWrapper = document.getElementById('popUpWrapper');

    closeButton.addEventListener('click', () => {
        popUpWrapper.style.display = 'none';
    });
});

