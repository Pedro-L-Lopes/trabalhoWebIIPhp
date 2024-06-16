import React from "react";
import { useLocation } from "react-router-dom";

const UserData = () => {
  const location = useLocation();
  const { userData } = location.state || {};

  if (!userData) {
    return <div>Nenhum dado encontrado.</div>;
  }

  return (
    <div className="p-8 h-screen">
      <h1 className="font-bold text-2xl mb-4">Dados do Usuário</h1>
      <p>
        <strong>Nome:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Tipo de Feedback:</strong> {userData.typeFeedback}
      </p>
      <p>
        <strong>Mensagem:</strong> {userData.message}
      </p>
    </div>
  );
};

export default UserData;
