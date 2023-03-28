import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../Utils/api";
function BookDetails() {
  const id = useParams().id;

  const res = useQuery(["BookDetails", id], () => getBook(id));
  const book = res.data?.data;
  return (
    <div className="alll">
      <div className="all">
        <div className="imagediv">
          <img className="image" src={book?.image} />
        </div>
        <div className="div3">
          <div className="detailsdev">
            <h3>Book Name: {book?.name}</h3>
            <h3>Book Details: {book?.details}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
