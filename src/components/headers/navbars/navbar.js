import RenderDrop from "./dropdownlink";
import { useState, useEffect } from "react";
export default function Navigation() {
    const [show, setShow] = useState(true);
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <div className={`navigation-bar ${show ? 'hide' : ''}`}>
            <nav className="navbar navbar-expand-lg nav-color">
                <div className="d-flex">
                    <a className="logo" href="/">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="150" height="50" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <RenderDrop
                                    name="Movies"
                                    category="movie"
                                    linkList={["popular", "now_playing"]}
                                />
                            </li>
                            <li className="nav-item ">
                                <RenderDrop
                                    name="TV shows"
                                    category="tv"
                                    linkList={["popular", "trending"]}
                                />
                            </li>
                            <li className="nav-item">
                                <RenderDrop
                                    name="People"
                                    category="people"
                                    linkList={["popular", "trending"]}
                                />
                            </li>
                            <li className="nav-item ">
                                <RenderDrop
                                    name="More"
                                    linkList={["popular", "trending"]}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}


