<!DOCTYPE html>
<html>
<head>
    <title>Calculadora Simples</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .calculator {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 350px;
        }
        .calculator h2 {
            text-align: center;
            color: #333;
        }
        .calculator input, .calculator select, .calculator button {
            width: calc(100% - 20px);
            padding: 12px;
            margin: 10px auto;
            border: 1px solid #ddd;
            border-radius: 10px;
            display: block;
            font-size: 16px;
        }
        .calculator button {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
            border: none;
            cursor: pointer;
        }
        .calculator button:hover {
            opacity: 90%;
        }
        .result {
            margin-top: 15px;
            padding: 12px;
            background-color: #e0ffe0;
            border: 1px solid #b3ffb3;
            border-radius: 10px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>

<div class="calculator">
    <h2>Calculadora</h2>
    <form method="post" action="">
        <label for="numero1">Número 1</label>
        <input type="number" id="numero1" name="numero1" step="any" required>
        
        <label for="numero2">Número 2</label>
        <input type="number" id="numero2" name="numero2" step="any">

        <label for="operacao">Operação</label>
        <select id="operacao" name="operacao" required>
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
            <option value="raiz">Raiz Quadrada</option>
        </select>

        <button type="submit" name="calcular">Calcular</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero1 = $_POST['numero1'];
        $numero2 = $_POST['numero2'];
        $operacao = $_POST['operacao'];
        $resultado = '';

        switch ($operacao) {
            case 'soma':
                $resultado = $numero1 + $numero2;
                break;
            case 'subtracao':
                $resultado = $numero1 - $numero2;
                break;
            case 'multiplicacao':
                $resultado = $numero1 * $numero2;
                break;
            case 'divisao':
                if ($numero2 != 0) {
                    $resultado = $numero1 / $numero2;
                } else {
                    $resultado = "Erro: Divisão por zero";
                }
                break;
            case 'raiz':
                $resultado = sqrt($numero1);
                break;
            default:
                $resultado = "Operação inválida";
                break;
        }

        echo "<div class='result'>Resultado: $resultado</div>";
    }
    ?>
</div>

</body>
</html>
