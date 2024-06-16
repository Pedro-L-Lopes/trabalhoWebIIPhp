import React from "react";

const Alert = ({ text, text2, type }) => {
  const bgColor = type ? "bg-green-600" : "bg-red-600";

  return (
    <main
      className={` text-white font-extrabold rounded-md shadow-md p-2 ${bgColor}`}
    >
      <h1 className="text-center">{text}</h1>
      <h1 className="text-center">{text2}</h1>
    </main>
  );
};

export default Alert;
