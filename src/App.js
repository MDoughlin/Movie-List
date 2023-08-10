import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navigation from "./Navigation";
import SearchBar from "./Components/SearchBar";
import Heading from "./Components/Heading";
import ResultList from "./Components/ResultList";
import { Row } from "react-bootstrap";
import AddFavorite from "./Components/AddFavorite";
import RemoveFavorite from "./Components/RemoveFavorite";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavorite = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);

    setFavorites(newFavoriteList);
  };

  return (
    <>
      <Navigation />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <Heading heading='Movies' />
      </div>
      <div className="container-fluid movie-app">
        <div className="row">
          <ResultList movies={movies} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddFavorite} />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <Heading heading="Favorites" />
        </div>
        <div className="row">
          <ResultList movies={favorites} handleFavoritesClick={removeFavorite} favoriteComponent={RemoveFavorite} />
        </div>
      </div>
    </>
  );
};

export default App;
