import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import myImage from '../../../Images/FNLBlack.png';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img
                    src={myImage}
                    alt='Description'
                    style={{ height: '60px', width: '60px' }}
                />
                <h1 className='FNL-hockey'>FNL</h1>
            </div>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/Status">Status</Link>
                    <Link to="/Match">Match</Link>
                    <Link to="/Scores">Scores</Link>
                    <Link to="/Players">Players</Link>
                    <Link to="/Schedule">Schedule</Link>
                </div>
                <div className="footer-column">
                    <h3>Social Media</h3>
                    <Link to="https://www.instagram.com/fnl_hockey"><InstagramIcon/></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
