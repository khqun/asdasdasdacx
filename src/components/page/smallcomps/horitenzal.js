import React from "react";
import MovieCard from "./moviecards";
const MoviesScroller = ({ movies }) => {
    return (
        <div className="container-horitenzal custom-horitenzal d-flex">
            {movies.map((movie) => (
                <div className="horitenzal-card" key={movie.id}>
                    <MovieCard {...movie} />
                </div>
            ))}
        </div>
    )
}
export default MoviesScroller