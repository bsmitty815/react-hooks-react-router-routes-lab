import React from "react";
import { movies } from "../data";

function Movies() {
  


  //run the map up here and set up the JSX
  //so you can just add the variable movieItems in the JSX below
  const movieItems = movies.map((movie) => ( // this is a function saved in a variable
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre) => ( // if you do another map you have to open up the curly brackets agin
          <li key={genre}>{genre}</li> // you need to use movie instead of movies beucase you are mapping through
                                      // that particula movie
          ))}                          
      </ul>
    </div>
  ))

  

  return ( 
    <div>
      <h1>Movies Page</h1>
      {movieItems}

    </div>
  )
}

export default Movies;
