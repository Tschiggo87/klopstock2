// Ein Event-Listener für das 'submit'-Event des Formulars hinzufügen
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindern, dass das Formular direkt abgeschickt wird

        // Formulardaten validieren
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Bitte alle Felder ausfüllen.');
            return;
        }

        // Formulardaten zum Server senden (z.B. über Ajax)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://your-server.com/send_message', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Ihre Nachricht wurde erfolgreich gesendet.');
                    // Hier können Sie auch weitere Aktionen durchführen, z.B. das Formular zurücksetzen
                } else {
                    alert('Es gab ein Problem beim Senden Ihrer Nachricht.');
                }
            }
        };
        xhr.send(`name=${name}&email=${email}&message=${message}`);
    });
});
