import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {movies.map((film) => (
        <MovieCard film={film} />
      ))}
    </div>
  );
};

export default MovieList;
