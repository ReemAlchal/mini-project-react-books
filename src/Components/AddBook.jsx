import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { postBook } from "../Utils/api";

export default function AddBook() {
  const initialValues = {
    name: "",
    details: "",
    image: "",
    available: true,
  };

  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const AddBook = useMutation((values) => postBook(values), {
    onSuccess: () => {
      QueryClient.invalidateQueries(["BookList"]);
    },
  });
  const submit = (values) => {
    AddBook.mutate(values);
    navigate("/BookList");
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submit}>
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="inputContainer">
            <div>
              <h2 className="Home">Book Name:</h2>
              <Field className="inputField" type="text" name="name" />
            </div>

            <div>
              <h2 className="Home">Book Details:</h2>
              <Field className="inputField" type="text" name="details" />
            </div>

            <div>
              <h2 className="Home">Book Image URL:</h2>
              <Field className="inputField" type="text" name="image" />
            </div>
            <div>
              <h2 className="Home">Is Availabile:</h2>
              <Field className="inputField" type="checkbox" name="available" />
            </div>
          </div>
          <button className="submit" type="submit">
            Add Book
          </button>
        </Form>
      </Formik>
    </div>
  );
}
