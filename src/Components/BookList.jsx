import React from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import getBooks from "../Utils/api";
import Book from "./Book";
import { useNavigate } from "react-router-dom";
function BookList() {
  const res = useQuery(["BookList"], () => getBooks());
  console.log(res);
  const eachBook = res.data?.data.map((book) => <Book book={book} />);
  console.log(eachBook);
  let Navigate = useNavigate();
  const clicked = () => {
    Navigate("/AddBook");
  };
  return (
    <>
      <div className="Home1">
        <button onClick={clicked} className="button">
          Add New Book
        </button>
      </div>
      <div className="Home1">
        <div className="bookImage">
          <h1>Book List</h1>
          <div>{eachBook}</div>
        </div>
      </div>
    </>
  );
}

export default BookList;
