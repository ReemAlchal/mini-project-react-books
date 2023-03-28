import axios from "axios";
export default function getBooks() {
  return axios.get("https://mini-project-react-books.herokuapp.com/books");
}

export function getBook(id) {
  return axios.get("https://mini-project-react-books.herokuapp.com/book/" + id);
}

export function postBook(values) {
  return axios.post(
    "https://mini-project-react-books.herokuapp.com/books",
    values
  );
}

export function updateBook(id) {
  return axios.put(
    "https://mini-project-react-books.herokuapp.com/book/" + id,
    {
      available: false,
    }
  );
}

export function deleteBook(id) {
  return axios.delete(
    "https://mini-project-react-books.herokuapp.com/books/" + id
  );
}
