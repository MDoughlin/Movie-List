import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import SearchBar from "./Components/SearchBar";
import Heading from "./Components/Heading";
import ResultList from "./Components/ResultList";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchData = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ff27ea81`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <>
      <Navigation />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Heading heading='Movies' />
      <div className="container-fluid">
        <div className="row">
          <ResultList movies={movies} />
        </div>
      </div>
    </>
  );
};

export default App;
