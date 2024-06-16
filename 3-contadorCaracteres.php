<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Caracteres</title>
</head>
<body>
    <h1>Contador de Caracteres</h1>
    <form method="post">
        <label for="texto">Digite uma palavra ou texto:</label>
        <input type="text" id="texto" name="texto" required>
        <button type="submit">Contar Caracteres</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $texto = $_POST["texto"];
        $quantidade = strlen($texto);
        echo "<p>A string digitada possui $quantidade caracteres.</p>";
    }
    ?>
</body>
</html>