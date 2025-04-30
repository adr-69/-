<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $entry = "Name: $name\nEmail: $email\nMessage: $message\n---\n";

    // Save to a file
    file_put_contents("messages.txt", $entry, FILE_APPEND | LOCK_EX);

    // Respond to the client
    echo "success";
} else {
    echo "invalid request";
}
?>