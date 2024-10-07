<?php
try {
    $db = new PDO('sqlite:database.sqlite');
    echo "Connexion réussie à la base de données.";
} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}