import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "./footerlink";
export default function Footers() {
    const linkList = [{ name: "THE BASICS", list: ["About Us", "Contact Us", "API"] }, { name: "THE BASICS", list: ["About Us", "Contact Us", "API"] }, { name: "THE BASICS", list: ["About Us", "Contact Us", "API"] },]
    return (
        <footer className="single-column">
            <nav className="d-flex">
                <div className="col-4">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" className="footer-logo" />
                    <Link to="/profile"><button className="rounded">Hello</button></Link>
                </div>
            </nav>
            <FooterLinks
                name="THE BASICS"
                list={["About Us", "Contact Us", "API"]}
            />
            {linkList.map((link,index) => {
                return (
                    <FooterLinks
                        key={index}
                        name={link.name}
                        list={link.list}
                    />
                )
            })}
        </footer>
    )
}