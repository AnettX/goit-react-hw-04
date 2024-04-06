
import css from "./SearchBar.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };
  return (
    <header>
      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <h2 className={css.title}>Image Search</h2>
          <label>
            <Field
              type="text"
              name="searchTerm"
              placeholder="Enter search query..."
              className={css.searchInput}
            />
            <ErrorMessage component="p" name="searchTerm" />
          </label>
          <button type="submit" className={css.btnSubmit}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
