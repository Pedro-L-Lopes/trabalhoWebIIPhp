import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { VscFeedback } from "react-icons/vsc";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [typeFeedback, setTypeFeedback] = useState("elogio");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || !typeFeedback) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/projetos/php1/5-feedback.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            typeFeedback,
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/userdata", { state: { userData: data.data } });
        }, 3000);
      } else {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }
    } catch (error) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  return (
    <main
      className="flex justify-center items-center flex-col"
      style={{ height: "99vh" }}
    >
      <VscFeedback size={50} />
      <h1 className="font-bold text-2xl">Deixe seu feedback</h1>

      <form
        onSubmit={handleSubmit}
        className={`bg-slate-100 p-8 rounded-lg shadow-lg max-w-lg w-full mt-5 ${
          alert && "border border-red-600"
        } ${success && "border border-green-600"}`}
      >
        {alert && (
          <Alert text={"Por favor preencha todos os campos"} type={false} />
        )}
        {success && (
          <Alert
            text={`Muito obrigado pelo feedback :)`}
            text2={"Redirecionando para conferir seus dados"}
            type={true}
          />
        )}

        <label htmlFor="nome" className="block mb-2">
          Nome
          <input
            type="text"
            className="form-input mt-1 block w-full border-2 rounded-md p-2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label htmlFor="email" className="block mb-2">
          Email
          <input
            type="email"
            className="form-input mt-1 block w-full border-2 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <fieldset className="mb-4">
          <legend className="block mb-2">Tipo de feedback:</legend>
          <div className="flex flex-wrap">
            <select
              name="opcao"
              value={typeFeedback}
              onChange={(e) => setTypeFeedback(e.target.value)}
              className="text-lg mr-2 bg-transparent"
            >
              <option value="elogio">Elogio</option>
              <option value="critica">Crítica</option>
              <option value="sugestao">Sugestão</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </fieldset>

        <label htmlFor="mensagem" className="block mb-2">
          Mensagem
          <textarea
            id="mensagem"
            cols="30"
            rows="5"
            className="mt-1 block w-full border-2 rounded-md p-2"
            placeholder="Deixe sua mensagem aqui..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default Contact;
