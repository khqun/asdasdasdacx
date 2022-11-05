import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./smallcomps/moviecards";
import { getMovies, movieapi } from "../../redux/reducer/movieSlice";
import { useSelector, useDispatch } from "react-redux";
export default function MovieListPage() {
    const params = useParams();
    const [currentpage, setCurrentPage] = useState(1);
    const movies = useSelector(movieapi);
    const dispatch = useDispatch();
    const changePage = (int) => {
        setCurrentPage(currentpage + int)
    };
    const renderMovies = () => {
        return (
            movies.map((movie) => {
                return (
                    <div className="movie-list-card" key={movie.id} >
                        <MovieCard
                            {...movie}
                        />
                    </div>
                )
            })
        )
    }
    useEffect(() => {
        //chuyen sang xu li o slice
        const getMovieList = async () => {
            await dispatch(getMovies(`/${params.category}/${params.property}?page=${currentpage}&`), dispatch);
        }
        getMovieList()
    }, [dispatch, movies, params.category, params.property, currentpage]);
    return (
        <div>
            <div className="movie-list-wrapper">
                {renderMovies()}
            </div>
            <div className="button-toggle">
                <button
                    className="page-button"
                    disabled={currentpage === 1 ? true : false}
                    onClick={() => changePage(-1)}
                >&#8249;</button>
                <button
                    className="page-button"
                    onClick={() => changePage(1)}
                >&#8250;</button>
            </div>
        </div>

    )
}