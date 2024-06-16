<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Par ou Ímpar</title>
</head>
<body>
    <h1>Verifique se um número é Par ou Ímpar</h1>
    <form method="post">
        <label for="numero">Digite um número:</label>
        <input type="number" id="numero" name="numero" required>
        <button type="submit">Verificar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = $_POST["numero"];
        if ($numero % 2 == 0) {
            echo "<p>O número $numero é Par</p>";
        } else {
            echo "<p>O número $numero é Ímpar</p>";
        }
    }
    ?>
</body>
</html>
