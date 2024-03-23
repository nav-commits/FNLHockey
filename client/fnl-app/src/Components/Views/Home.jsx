import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import HomePageContent from '../Organisms/HomePageContent/HomepageContent';
import myImage from '../../Images/FNLWhiteBackground.png';

function Home() {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

    if (isLoading) return <div className='backdrop'>
        <div className='spinner-container'>
            <div className='spinner'>
                <img
                    src={myImage}
                    alt='Loading...'
                    style={{ height: '80px', width: '80px' }}
                />
            </div>
        </div>
    </div>;

    const authButton = {
        title: isAuthenticated ? 'Logout' : 'Login',
        action: isAuthenticated ? logout : loginWithRedirect,
    };

    const navigateTo = (route) => navigate(`/${route}`);

    return (
        <>
            <HomePageContent
                authButton={authButton}
                navigateTo={navigateTo}
            />
        </>
    );
}

export default Home;

