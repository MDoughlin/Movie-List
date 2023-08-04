import { Card } from "react-bootstrap";
import React from 'react';

const ResultList = (props) => {
  return (
    <>

      {props.movies.map((movie, index) => <div>
        <img src={movie.Poster} ></img>
      </div>)}
    </>
  );
};
export default ResultList;
