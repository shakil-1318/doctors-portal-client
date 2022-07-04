import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { AiFillMedicineBox, AiFillRead } from "react-icons/ai";
import './Sidebar.css'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../Admin/MakeAdmin';
import DashboardHome from '../DashboardHome';
import ManageOrder from '../Admin/ManageOrder';
import MyAppoints from '../Users/MyAppoints';
import Review from '../Users/Review';
import AddAppointment from '../Admin/AddAppointment';




const Sidebar = () => {
    const { user, logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();
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
                        <Link to='/home'>
                            Home
                        </Link>
                        <Link onClick={logOut} to='/home'>
                            LogOut
                        </Link>
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

                    {
                        admin ? <>
                            <li className="nav-text">
                                <Link to={`${url}/manageOrder`}>
                                    <AiIcons.AiFillHome />
                                    <span>Manage Order</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to={`${url}/makeAdmin`}>
                                    <AiIcons.AiFillHome />
                                    <span>Make Admin</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to={`${url}/addappointment`}>
                                    <AiIcons.AiFillHome />
                                    <span>Add Appointment</span>
                                </Link>
                            </li>
                        </>
                            :
                            <>
                                <li className="nav-text">
                                    <Link to={`${url}/myappointment`}>
                                        < AiFillMedicineBox></AiFillMedicineBox>
                                        <span>My Appointments</span>
                                    </Link>
                                </li>
                                <li className="nav-text">
                                    <Link to={`${url}/review`}>
                                        < AiFillRead></AiFillRead>
                                        <span>Review</span>
                                    </Link>
                                </li>
                            </>
                    }
                </ul>
            </nav>
            <Switch>
                <Route exact path={`${path}`}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/manageOrder`}>
                    <ManageOrder></ManageOrder>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/addappointment`}>
                    <AddAppointment></AddAppointment>
                </Route>
                <Route path={`${path}/myappointment`}>
                    <MyAppoints></MyAppoints>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>

            </Switch>
        </>
    );
};

export default Sidebar;