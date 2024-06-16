<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplicidade</title>
</head>
<body>
 <h1>Verificação de Múltiplos de 3 e 5</h1>

 <?php
    for ($i = 1; $i <= 100; $i++) {
        if ($i % 3 == 0 && $i % 5 == 0) {
            echo "<p>O número $i é múltiplo de 3 e 5</p>";
        } elseif ($i % 3 == 0) {
            echo "<p>O número $i é múltiplo de 3</p>";
        } elseif ($i % 5 == 0) {
            echo "<p>O número $i é múltiplo de 5</p>";
        }
    }
 ?>
</body>
</html>
