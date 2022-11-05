import SectionTitle from "./smallcomps/sectionTitle";
import MoviesScroller from "./smallcomps/horitenzal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getMovies, movieapi } from "../../redux/reducer/movieSlice";
const Homepage = () => {
    const movies = useSelector(movieapi);
    const dispatch = useDispatch();
    const [popularMovies, setPopularMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const getPopular = async () => {
            await dispatch(getAllMovies(dispatch))
        }
        getPopular();
    })
    return (
        <div >
            <div className="page-content container-fluid">
                <div className="homepage-section-1 d-flex">
                    <div className="container-fluid ">
                        <div className="homepage-searching-img">
                            <div className="d-flex searching-wrapper row">
                                <div className="title col-12">
                                    <h1>Welcome. </h1>
                                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                                </div>
                                <div className="searchbar-wrapper col-12">
                                    <input type="text" placeholder="Search for a TV series, movies, show..." className="searching-bar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-section-2 d-flex p-4 wave-bg">
                    <div className="container-fluid">
                        <div className="d-flex">
                            <SectionTitle
                                name="What's Popular"
                            />
                        </div>
                        <div className="toggle-button-wrapper">
                        </div>
                        <MoviesScroller
                            movies={movies}
                        />
                    </div>
                </div>
                <div className="homepage-section-4 d-flex p-4">
                    <div className="container-fluid wave-bg">
                        <SectionTitle
                            name="Trending"
                        />
                        <div className="toggle-button-wrapper">
                        </div>
                        <MoviesScroller
                            movies={trendingMovies}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage