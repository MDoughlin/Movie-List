import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navigation from "./Navigation";
import SearchBar from "./Components/SearchBar";
import Heading from "./Components/Heading";
import ResultList from "./Components/ResultList";
import { Row } from "react-bootstrap";
import AddFavorite from "./Components/AddFavorite";
import FavoriteList from "./Components/Pages/FavoriteList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';




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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/favorites" element={<FavoriteList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Navigation />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <Heading heading='Movies' />
      </div>
      <div className="container-fluid">
        <Row md={5}>
          <ResultList movies={movies} favoriteComponent={AddFavorite} />
        </Row>
      </div>
    </>
  );
};

export default App;
