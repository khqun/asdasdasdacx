import { useState } from "react";
import { Link } from "react-router-dom";
export default function RenderDrop({ name, linkList, category }) {
  const [isOpening, setIsOpening] = useState(false);
  const trigerOpen = () => {
    setIsOpening(!isOpening)
  }
  const menuClass = `dropdown-menu${isOpening ? " show" : ""}`;
  return (
    <div className="dropdown nav-drop" onClick={trigerOpen}>
      <button
        className='nav-link appropriate-button drop-link'
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        {name}
      </button>
      <div className={menuClass} aria-labelledby="dropdownMenuButton">
        {linkList.map((link) => {
          return (
            < Link className="dropdown-item" to={`/${category}/${link}`} key={link}>
              {link}
            </Link>
          )
        }
        )}
      </div>
    </div >
  )
}