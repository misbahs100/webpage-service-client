import { faCalendar, faCog, faCommentDots, faFileAlt, faGripHorizontal, faHome, faListUl, faNetworkWired, faServer, faShoppingCart, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://agile-earth-23831.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-warning">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-warning">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-warning">
                        <FontAwesomeIcon icon={faListUl} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addTestimonial" className="text-warning">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Add Testimony</span>
                    </Link>
                </li>
                {isAdmin &&
                    <div>
                        <li>
                            <Link to="/customers" className="text-warning">
                                <FontAwesomeIcon icon={faUsers} /> <span>Customers</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/reviewers" className="text-warning">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Reviewers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="text-warning" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-warning" >
                                <FontAwesomeIcon icon={faServer} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-warning" >
                                <FontAwesomeIcon icon={faNetworkWired} /> <span>Manage Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/setting" className="text-warning" >
                                <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <Link to="/" className="text-warning"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;