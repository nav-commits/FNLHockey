import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import HomePageContent from '../Organisms/HomePageContent/HomepageContent';
import myImage from '../../Images/FNLWhiteBackground.png';

function Home() {
    const { isLoading } = useAuth0();

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

    return (
        <>
            <HomePageContent
            />
        </>
    );
}

export default Home;
