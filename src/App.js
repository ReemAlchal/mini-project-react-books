import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./Components/BookDetails";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={<BookList />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/BookDetails/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
