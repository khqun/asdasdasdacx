import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
const IMG_API_KEY = "https://image.tmdb.org/t/p/w500";
// viet giong ten file
const MovieCard = ({ title, poster_path, release_date, id, vote_average, overview }) => {
    // function getDetailLinks 
    function getDetailLink(title) {
        let movieParam = title.split(' ');
        let valuesArrObj = [];
        movieParam.forEach((val) => {
            valuesArrObj.push(val)
        })
        return `/${id}-${valuesArrObj.join('-')}`
    }

    return (
        <div className="card-wrapper ">
            <button className="appropriate-button">
                <Link to={getDetailLink(title)}>
                    <div className="movie-card-img-wrapper">
                        <img className="card-img-top movie-card-img" src={IMG_API_KEY + poster_path} alt="nt" />
                        <div className="overlay">
                            <div className="details">
                                <p className="overview">Overview: {overview}</p>
                                <p className="overview">Score: {vote_average} <FontAwesomeIcon icon={faStar} /></p>
                            </div>
                        </div>
                    </div>

                </Link>
            </button>
            <div className="movies-card-details">
                <Link className="title" to={getDetailLink(title)}>{title}</Link>
                <p className="date">{release_date}</p>
            </div>
        </div>
    )
}
export default MovieCard