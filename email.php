<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse e-mail de destination
    $to = "kouassikoffijeanpaul4@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau message de contact de $name";

    // Corps de l'e-mail
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        // Rediriger l'utilisateur vers une page de confirmation
        header("Location: merci.html");
        exit();
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    echo "Le formulaire n'a pas été soumis correctement.";
}
?>