<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST');
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USER');
        $mail->Password = getenv('SMTP_PASS');
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);

        $mail->setFrom($email, $name);
        $mail->addAddress("kouassikoffijeanpaul4@gmail.com");

        $mail->Subject = "Nouveau message de contact de $name";
        $mail->Body = "Nom: $name\nEmail: $email\nTéléphone: $phone\n\nMessage:\n$message";

        $mail->send();
        header("Location: merci.html");
        exit();
    } catch (Exception $e) {
        echo "Erreur d'envoi: {$mail->ErrorInfo}";
    }
} else {
    echo "Le formulaire n'a pas été soumis correctement.";
}
?>
