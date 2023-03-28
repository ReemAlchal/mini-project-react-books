import React from "react";
import { deleteBook } from "../Utils/api";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateBook } from "../Utils/api";
import { useNavigate } from "react-router-dom";

function Book({ book }) {
  const queryClient = useQueryClient();
  const deleteTheBook = useMutation((id) => deleteBook(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["BookList"]);
    },
  });

  const updateBookStatus = useMutation((id) => updateBook(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["BookList"]);
    },
  });

  const navigate = useNavigate();
  function deleted() {
    deleteTheBook.mutate(book.id);
  }
  function Updated() {
    updateBookStatus.mutate(book.id);
  }

  function goToDetails() {
    navigate("/BookDetails/" + book.id);
  }
  return (
    <div>
      <div onClick={goToDetails}>
        <img src={book.image} width="200px" />
      </div>
      <div>
        <button onClick={deleted} className="Delete">
          Delete
        </button>
        <button onClick={Updated} className="Details">
          {book.available ? "Available" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}
export default Book;
