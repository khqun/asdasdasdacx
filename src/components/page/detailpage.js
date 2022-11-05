import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, moviedetail } from "../../redux/reducer/movieSlice";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";
export default function MovieDetails() {
    const params = useParams();
    const movieId = params.movieId.split('-');
    const detail = useSelector(moviedetail);
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieDetails = async () => {
            await dispatch(getDetail(`/movie/${movieId[0]}?`), dispatch);
        }
        getMovieDetails()
    }, [dispatch, movieId]);
    return (
        <div className="detail-body">
            <img src={IMG_PATH + detail.poster_path} alt="moviepic" className="detail-img" />
            <div className="p-5">
                <h2>{detail.title}</h2>
                {/* <p>{detail.genres.map((genre) => {
                    return (
                        <span>{genre.name} </span>
                    )
                })}</p> */}
                <p className="tagline">{detail.tagline}</p>
                <h2>Overview</h2>
                <p>{detail.overview}</p>
                <p>Score {detail.vote_average}</p>
            </div>

        </div>
    )
}