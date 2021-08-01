import React from "react";
import Movie from "./Movie";
export default function Movies(props) {
  const { movies = [] } = props;
  if (!movies) {
    return <div>Not found</div>;
  }
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
