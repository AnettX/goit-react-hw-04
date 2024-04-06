import { Form } from "react-bootstrap";
import css from "./SearchBar.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  return (
    <header>
      <h1 className={css.title}>Image Search</h1>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search images and photos"
          autocomplete="off"
          autofocus
          className={css.searchInput}
          ref={searchInput}
        />
        <button type="submit" className={css.btnSubmit}>
          Search
        </button>
      </Form>
    </header>
  );
};

export default SearchBar;
