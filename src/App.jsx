import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { requestPhotoesByQuery } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState(null);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        const data = await requestPhotoesByQuery(query);
        setPhotos(data.photos);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
