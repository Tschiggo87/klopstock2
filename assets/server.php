<?php
// HTTP-Header für CORS (Cross-Origin Resource Sharing) setzen
// Dies ist nur zu Demonstrationszwecken, in der Produktion sollten Sie die
// erlaubte Herkunft auf die tatsächliche Domain Ihrer Website beschränken
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/javascript');

// Überprüfen, ob die Anfrage eine POST-Anfrage ist
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Formulardaten aus POST-Request lesen
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Einfache Validierung
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Alle Felder müssen ausgefüllt sein.";
        exit;
    }

    // E-Mail senden
    $to = "empfaenger@example.com"; // Ihre E-Mail-Adresse
    $subject = "Neue Nachricht von Ihrer Website";
    $headers = "Von: $email" . "\r\n" .
        "Antworten an: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Ihre Nachricht wurde erfolgreich gesendet.";
    } else {
        http_response_code(500);
        echo "Es gab ein Problem beim Senden Ihrer Nachricht.";
    }
} else {
    http_response_code(405);
    echo "Nur POST-Anfragen werden unterstützt.";
}
