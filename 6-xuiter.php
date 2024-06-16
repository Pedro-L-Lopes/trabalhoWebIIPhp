<?php
// Conexão com o banco de dados
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "xuitter_db";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Função para conectar ao banco de dados
function connectDatabase() {
    global $servername, $user, $password, $dbname;
    $conn = new mysqli($servername, $user, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// Função para inserir uma nova publicação
function insertPost($postContent) {
    $conn = connectDatabase();
    $stmt = $conn->prepare("INSERT INTO publicacoes (texto) VALUES (?)");
    $stmt->bind_param("s", $postContent);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

// Função para marcar uma publicação como curtida
function likePost($postId) {
    $conn = connectDatabase();
    $stmt = $conn->prepare("UPDATE publicacoes SET curtida = 1 WHERE id = ?");
    $stmt->bind_param("i", $postId);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

// Função para excluir uma publicação
function deletePost($postId) {
    $conn = connectDatabase();
    $stmt = $conn->prepare("DELETE FROM publicacoes WHERE id = ?");
    $stmt->bind_param("i", $postId);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

// Função para carregar todas as publicações
function loadPosts() {
    $conn = connectDatabase();
    $sql = "SELECT id, texto FROM publicacoes";
    $result = $conn->query($sql);
    $publicacoes = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $publicacoes[] = $row;
        }
    }
    $conn->close();
    return $publicacoes;
}

// Verifica se a requisição é POST para processar os dados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Operações baseadas no tipo de requisição
    if (isset($_POST["operation"])) {
        $operation = $_POST["operation"];
        
        if ($operation === "insert") {
            if (isset($_POST["postContent"])) {
                $postContent = $_POST["postContent"];
                insertPost($postContent);
            }
        } elseif ($operation === "like") {
            if (isset($_POST["postId"])) {
                $postId = $_POST["postId"];
                likePost($postId);
            }
        } elseif ($operation === "delete") {
            if (isset($_POST["postId"])) {
                $postId = $_POST["postId"];
                deletePost($postId);
            }
        }
    }
}

// Carrega as publicações e retorna como JSON
$posts = loadPosts();
header('Content-Type: application/json');
echo json_encode($posts);
?>
