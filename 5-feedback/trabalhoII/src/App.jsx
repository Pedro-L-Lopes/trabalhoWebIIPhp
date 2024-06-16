// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import UserData from "./pages/UserData";

// Books
import { books } from "./utils/books";
import Footer from "./components/Footer";
import Books from "./pages/Books";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Livraria" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/books/:bookId" element={<Book books={books} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
