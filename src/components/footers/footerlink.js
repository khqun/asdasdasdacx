import { Link } from "react-router-dom"

export default function FooterLinks({ name, list }) {
    return (
        <div className="footer-links-wrapper">
            <h4>{name}</h4>
            <ul >
                {list.map((link) => {
                    return (
                        <li key={link}>
                            <Link to={`${link}`}>{link}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}