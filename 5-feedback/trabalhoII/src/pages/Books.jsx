// Hooks
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import BookCard from "../components/BookCard";

// Books
import { books } from "../utils/books";

const Books = () => {
  const [hoveredBook, setHoveredBook] = useState(null);

  return (
    <main className="" style={{ height: "99vh" }}>
      <h1 className="font-semibold text-xl text-white text-center p-2 m-2 bg-slate-800 rounded-sm">
        Livros disponíveis
      </h1>
      <article className="grid grid-cols-2 md:flex md:flex-row justify-center items-center">
        {books.map((book) => (
          <div key={book.id}>
            <Link
              to={`/books/${book.id}`}
              onMouseOver={() => setHoveredBook(book.id)}
              onMouseOut={() => setHoveredBook(null)}
            >
              <BookCard book={book} hoveredBook={hoveredBook} />
            </Link>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Books;
