import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useScrollListener from "../../../hooks/useScrollListener";
import './Navigation.css'

const Navigation = () => {
  const [click, setClick]=useState(false);

  const handleClick=()=>setClick(!click);

  // nav
  const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--hidden");

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
   
    return (
        <>
       
      <nav className={navClassList.join(" ")}>
      <div className="navbar">
        <div className="nav-container container">
          <NavLink exact to="/" className="nav-logo">
            Doctor Portal
          </NavLink>
          <ul className={click? "nev-menu active": "nev-menu"}>
            <li className="nav-items">
              <NavLink exact to='/' activeClassName="active" className='nav-links' onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to='/appointment' activeClassName="active" className='nav-links' onClick={handleClick}>
                Appointment
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink exact to='/login' activeClassName="active" className='nav-links' onClick={handleClick}>
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        </div>
      </div>
      </nav>
        </>
    );
};

export default Navigation;