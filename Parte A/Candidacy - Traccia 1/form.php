<?php

echo 'Grazie per la candidatura ' . $_POST['nome'] . ' ' . $_POST['Cognome'] . '<br>';

echo 'Il numero di telefono inserito è: ' . $_POST['Telefono'] . '<br>';

echo 'Email: ' . $_POST['email'] . '<br>';

echo 'Età di: ' . $_POST['Età'] . '<br>';




$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileTo"]["name"]);
$uploadOk = 1;
$FileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Controlla se il file esiste già
if (file_exists($target_file)) {
  echo "Ehi, il tuo file è stato già caricato.";
  $uploadOk = 0;
}

// Controllo grandezza file
if ($_FILES["fileTo"]["size"] > 200000) {
  echo "Ehi, il tuo file è troppo grande ('max 2Mb)'.";
  $uploadOk = 0;
}

// Consentiamo il caricamento solo dei file con estensione .pdf
if($FileType != "pdf" ) {
  echo "Accettiamo solo file .pdf - ";
  $uploadOk = 0;
}

// Controlla se $uploadOk è impostato su 0 da un errore
if ($uploadOk == 0) {
  echo "Il tuo file non è stato caricato correttamente.";
// Se tutto è ok il file può essere caricato
} else {
  if (move_uploaded_file($_FILES["fileTo"]["tmp_name"], $target_file)) {
    echo "Il file ". htmlspecialchars( basename( $_FILES["fileTo"]["name"])). " è stato caricato correttamente.";
  } else {
    echo "Scusa, c'è stato un errore nell'upload del file.";
  }
}


?>