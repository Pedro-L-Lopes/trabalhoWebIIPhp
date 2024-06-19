<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "xuitter_db";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {
    case 'insert':
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $texto = $_POST['postContent'];

            $sql = "INSERT INTO publicacoes (texto) VALUES (?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $texto);

            if ($stmt->execute()) {
                echo "New post created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $stmt->close();
        }
        break;

    case 'curtir':
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $postId = $_POST['postId'];
            $curtida = $_POST['curtida'];

            $sql = "UPDATE publicacoes SET curtida = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ii", $curtida, $postId);

            if ($stmt->execute()) {
                echo "Post updated successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $stmt->close();
        }
        break;

    case 'delete':
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $postId = $_POST['postId'];

            $sql = "DELETE FROM publicacoes WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $postId);

            if ($stmt->execute()) {
                echo "Post deleted successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $stmt->close();
        }
        break;

    case 'load':
        $sql = "SELECT id, texto, data_criacao, curtida FROM publicacoes ORDER BY data_criacao DESC";
        $result = $conn->query($sql);

        $posts = array();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $posts[] = $row;
            }
        }

        echo json_encode($posts);
        break;

    default:
        echo "Invalid action";
        break;
}

$conn->close();
?>
