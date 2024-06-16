import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center text-lg text-white p-5">
      <div className="flex justify-center items-center gap-5 ">
        <a
          href="https://www.instagram.com/world_record_egg/"
          target="_blank"
          className="flex items-center"
        >
          <FaInstagram />
          @livrariaorline
        </a>

        <a
          href="https://www.youtube.com/watch?v=F55rYIx2e3g"
          target="_blank"
          className="flex items-center"
        >
          <FaXTwitter />
          @livrariaorline
        </a>
      </div>
      <hr />
      <div className="">
        <a href="https://www.pudim.com.br/">
          <img src="./images/logo.png" alt="" target="_blank" />
          &copy;Todos os direitos reservados
        </a>
      </div>
    </footer>
  );
};

export default Footer;
