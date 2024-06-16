// Hooks
import { Link } from "react-router-dom";

// Components
import Carousel from "../components/Carousel";
import BookCard from "../components/BookCard";

// Images
import welcome from "../assets/welcome.jpg";

// Books
import { books } from "../utils/books";

const home = () => {
  return (
    <main className="h-full">
      <h3 className="text-center p-2">
        Utilize o cupom "orline10" em sua primeira compra * valido apenas pra
        produtos vendidos e entregues pela Orline *
      </h3>

      <Carousel />

      <section className="flex flex-col md:flex-row items-center justify-center m-14 shadow-md gap-2 rounded-md hover:shadow-lg">
        <img src={welcome} className="max-w-sm rounded-md" />
        <article>
          <h1 className="text-3xl font-extrabold">
            Bem-vindo à Livraria Orline
          </h1>
          <p>
            O refúgio perfeito para os amantes de livros! Aqui, cada página é
            uma porta para um mundo novo e emocionante, pronto para ser
            explorado. Nossa missão é proporcionar uma experiência única de
            descoberta literária, onde cada cliente se sente em casa, cercado
            por histórias fascinantes e conhecimento enriquecedor. De clássicos
            intemporais a lançamentos emocionantes, nossa coleção abrange uma
            ampla variedade de gêneros e temas, garantindo que haja algo para
            todos os gostos e idades. Explore nossas prateleiras, deixe-se
            envolver pela magia das palavras e embarque em uma jornada
            inesquecível através das páginas dos livros. Estamos ansiosos para
            compartilhar nossa paixão pela leitura e ajudá-lo a encontrar seu
            próximo livro favorito.
          </p>
        </article>
      </section>

      {/* Bestsellers */}
      <section>
        <h1 className="text-2xl text-center mb-5">
          Mais vendidos{" "}
          <Link
            to="/books"
            className="text-blue-400 hover:text-blue-900 transition-all text-sm"
          >
            ver mais
          </Link>
        </h1>
        <article className="grid grid-cols-2 md:flex md:flex-row justify-center items-center">
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <BookCard book={book} />
              </Link>
            </div>
          ))}
        </article>
      </section>
      <section className="flex flex-col justify-center items-center mt-10 p-5 bg-gray-100">
        <h1 className="font-extrabold">Receba novidades, inscreva-se!</h1>
        <h2>Receba promoções e conteúdos exclusivos.</h2>
        <form className="flex justify-center items-center mt-5 mb-5">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="p-2 border mx-2 rounded-sm"
          />
          <input
            type="email"
            placeholder="Seu email"
            required
            className="p-2 border mx-2 rounded-sm"
          />
          <button className="p-2 bg-gray-800 text-white rounded-sm">
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default home;
