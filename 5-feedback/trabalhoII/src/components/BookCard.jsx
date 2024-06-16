function BookCard({ book, hoveredBook }) {
  console.log(hoveredBook);
  return (
    <main className="w-60 max-h-96 mx-auto bg-white shadow-lg rounded-lg hover:shadow-xl overflow-hidden relative">
      <img
        className="max-w-48 max-h-60 mx-auto"
        src={book.img}
        alt={book.name}
      />
      {hoveredBook === book.id && (
        <div className="absolute top-0 left-0 w-full text-center">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-xs">{book.message}</p>
          </div>
        </div>
      )}
      <div className="p-4">
        <h1 className="text-sm font-semibold h-10 truncate">{book.name}</h1>
        <h3 className="text-gray-600 text-xs h-5">{book.author}</h3>
        <h2 className="text-gray-800 text-sm mt-2">R${book.price}</h2>
      </div>
    </main>
  );
}

export default BookCard;
