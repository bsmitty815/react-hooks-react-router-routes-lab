import React from "react";
import { directors } from "../data";

function Directors() {


  const directorsInfo = directors.map((director) => (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
    <ul>
      {director.movies.map((movie) => ( // when you do the second map you have to use the arguments
        <li key={movie}>{movie}</li> //passed through (director) because you are no longer going through directors
      ))}
    </ul>
    </div>
  ))

  return ( 
    <div>
      <h1>Directors Page</h1>
      {directorsInfo}
    </div>
  )
}

export default Directors;
