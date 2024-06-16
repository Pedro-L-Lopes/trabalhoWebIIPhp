// Hooks
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Component
import BookCard from "../components/BookCard";

// Books

const Book = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === parseInt(bookId));

  if (!book) return <div>Livro não encontrado</div>;

  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center gap-5 mt-5 md:max-w-6xl mx-auto w-96 md:w-full">
        <img className="h-full mb-10" src={book.img} alt={book.name} />
        <div className="max-w-xl">
          <h1 className="text-xl md:text-2xl font-semibold">{book.name}</h1>
          <h3>Data: {book.date}</h3>
          <div className="flex flex-col md:flex-row gap-5">
            <h3>Edição: Padrão</h3>
            <h3 className="text-blue-500">Autor: {book.author}</h3>
          </div>
          <div className="border p-2 rounded-sm mt-5 shadow-md md:mb-10">
            <h2 className="text-xl font-semibold">Descrição</h2>
            <p>{book.description}</p>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 mb-5">
          <p className="text-3xl font-semibold p-2">R${book.price}</p>
          <p className="opacity-70">R$15% de desconto no pix </p>
          <div className="">
            <label htmlFor="opt" className="">
              Quantidade
            </label>
            <select id="opt" className="p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button className="text-white font-bold rounded-sm w-48 p-3 bg-slate-800 hover:bg-slate-700 transition-all">
            Comprar
          </button>
        </div>
      </section>

      <section>
        <h1 className="text-center mb-3">Achamos que você pode gostar</h1>
        <article className="grid grid-cols-2 md:flex md:flex-row justify-center items-center mb-16">
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <BookCard book={book} />
              </Link>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Book;
