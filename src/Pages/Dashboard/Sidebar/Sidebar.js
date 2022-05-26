import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io';
import './Sidebar.css'
import profile from '../../../images/people-1.png'
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbars">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
                </Link>
                <div className="profile_dropdown">
                    <Link to='#'><img className='img-fluid' src={user?.photoURL} alt="" /></Link>
                    <div className="dropdown_content">
                        {/* <a href="#">LogOut</a> */}
                        <Link to='/home'>
                            Home
                        </Link>
                        <Link to='/home'>
                            LogOut
                        </Link>
                        {/* <a href="#">LogOut</a> */}
                    </div>
                </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/'>
                            <AiIcons.AiFillHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/'>
                            <FaIcons.FaCartPlus />
                            <span>Product</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className='text-center'>welcome to dashboard</h1>
        </>
    );
};

export default Sidebar;