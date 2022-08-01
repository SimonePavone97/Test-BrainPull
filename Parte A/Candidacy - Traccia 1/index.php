<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidatura</title>

    <style>
        html, form {
            text-align: center;
            margin: 0 auto;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 200px;
            padding: 40px;
        }

        input {
            margin: 10px 0;
        }
    </style>



</head>

<body>

    <h1>Invio Candidatura</h1>


    <form action="form.php" method="post" enctype="multipart/form-data">

        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" placeholder="Inserisci il nome" required>

        <label for="Cognome">Cognome</label>
        <input type="text" name="Cognome" id="Cognome" placeholder="Inserisci il Cognome" required>

        <label for="Telefono">Telefono</label>
        <input type="number" name="Telefono" id="Telefono" placeholder="Inserisci il Telefono" required>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Inserisci il email" required>

        <label for="Età">Età</label>
        <input type="number" name="Età" id="Età" placeholder="Inserisci il Età" required>

        <label for="CV">Allega il tuo CV</label>
        <input type="file" name="fileTo" id="fileTo" placeholder="Inserisci il CV" required>

        <input type="submit"  name = "submit" value="Invia Dati" >
        
    </form>
</body>
</html>