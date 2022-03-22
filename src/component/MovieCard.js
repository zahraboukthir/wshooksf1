import React from "react";

const MovieCard = ({ film }) => {
  return (
    <div>
      <h3>{film.title}</h3>
      <img widh="200px" height="200px" src={film.posterurl} alt="" />
      <h4>{film.descreption} </h4>
      <p>{film.rate}</p>
    </div>
  );
};

export default MovieCard;
