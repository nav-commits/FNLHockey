import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import mainContext from '../../../Context/Context';
import './Navbar.css';
import myImage from '../../../Images/FNLBlack.png';

function Navbar() {
    const { getID } = useContext(mainContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const getIDMatchUp = () => getID;
    const navLinks = [
        { path: '/', text: 'Home' },
        { path: '/Status', text: 'Status' },
        { path: `/Match/${getIDMatchUp()}`, text: 'Match' },
        { path: '/Schedule', text: 'Schedule' },
        { path: '/Scores', text: 'Scores' },
        { path: '/Players', text: 'Players' },
    ];

    return (
        <nav className='nav--container'>
            <div className='logo--container'>
                <Link to='/'>
                    <img
                        src={myImage}
                        alt='Logo'
                        style={{ height: '60px', width: '60px' }}
                    />
                </Link>
                <h1 className='FNL-hockey'>FNL</h1>
            </div>
            <button onClick={toggleSidebar} className="hamburger-menu">☰</button>
            {isSidebarOpen && (
                <>
                    <div className='sidebar'>
                        {navLinks.map(({ path, text }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className='link--container'
                                activeclassname='active' 
                            >
                                {text}
                            </NavLink>
                        ))}
                    </div>
                    <div className="overlay" onClick={toggleSidebar} style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, zIndex: 100 }}></div>
                </>
            )}
            <div className='link-container--container'>
                {navLinks.map(({ path, text }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className='link--container'
                        activeclassname='active'
                    >
                        {text}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
