import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { Form } from "react-bootstrap";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";

const API_URL = "https://api.unsplash.com/search/photos";

function App() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setIsLoading(true);
        setErrorMsg("");
        const { data } = await axios.get(
          `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=20&client_id=qgDWMHSBuJuIbWzSvNS7HLs87sJVCTDls08a59otbaw`
        );
        console.log("result: ", data);
        setImages((pre) => [...pre, ...data.results]);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("search:", searchInput.current.value);
    fetchImages();
    setPage(1);
  };

  console.log("page:", page);

  return (
    <>
      {/* <SearchBar /> */}
      <header>
        <h1>Image Search</h1>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search images and photos"
            autocomplete="off"
            autofocus
            ref={searchInput}
          />
          <button type="submit">Search</button>
        </Form>
      </header>
      {isLoading && <Loader />}
      {errorMsg && <p>{errorMsg}</p>}
      {/* ImageGallery */}
      {images !== null &&
        images.map((image) => {
          return (
            <img
              key={image.id}
              width={250}
              src={image.urls.small}
              alt={image.alt_description}
            />
          );
        })}
      {page < totalPages && (
        <button onClick={() => setPage(page + 1)}>Load more</button>
      )}
    </>
  );
}

export default App;
