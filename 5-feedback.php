<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    die;
}

function resposta($codigo, $ok, $msg, $data = null) {
    header("Content-Type: application/json");
    http_response_code($codigo);
    echo json_encode([
        'ok' => $ok,
        'msg' => $msg,
        'data' => $data
    ]);
    die;
}

$body = file_get_contents('php://input');

if (!$body) {
    resposta(400, false, "Corpo da requisição não encontrado.");
}

$body = json_decode($body);

if (!$body) {
    resposta(400, false, "JSON inválido.");
}

$body->name = filter_var($body->name, FILTER_SANITIZE_STRING);
$body->email = filter_var($body->email, FILTER_VALIDATE_EMAIL);
$body->typeFeedback = filter_var($body->typeFeedback, FILTER_SANITIZE_STRING);
$body->message = filter_var($body->message, FILTER_SANITIZE_STRING);

if (!$body->name || !$body->email || !$body->typeFeedback || !$body->message) {
    resposta(400, false, "Dados inválidos!");
}

resposta(200, true, 'Dados recebidos com sucesso!', [
    'name' => $body->name,
    'email' => $body->email,
    'typeFeedback' => $body->typeFeedback,
    'message' => $body->message
]);
?>

