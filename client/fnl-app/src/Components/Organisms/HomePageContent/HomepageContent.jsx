import React from 'react';
import Button from '../../Atoms/Button/Button';
import '../../Organisms/HomePageContent/HomePageContent.css';
import goalieImage from '../../../Images/goalie.jpg';
import goreMeadowsImage from '../../../Images/gore-meadows-skating-rink.jpg';
import { stories } from '../../../Utils/Data';

function HomePageContent({ authButton }) {
    return (
        <>
            <div className='auth-button-container'>
                <Button
                    title={authButton.title}
                    color='#d9d9d9'
                    width='200px'
                    onClick={authButton.action}
                />
            </div>

            <div className='mobile-home-page-content'>
                <div>
                    <div className='welcome-container'>
                        <h1>Welcome to the FNL Hockey League!</h1>
                        <p>Your Friday Night Destination for Thrilling Ball Hockey in Brampton!</p>
                    </div>

                    <div className='image-text-container'>
                        <div className='image-container'>
                            <img src={goalieImage} alt='Goalie in action' />
                        </div>
                        <div className='stories-container'>
                            <h2 className='stories-heading'>Top Stories</h2>
                            <ul className='stories-list'>
                                {stories.map((story, index) => (
                                    <li key={index} className='story-item'>
                                        {story}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='image-text-container'>
                        <div className='image-container-two'>
                            <img src={goreMeadowsImage} alt='Gore Meadows Skating Rink' />
                        </div>
                        <div className='text-block'>
                            <p>
                                Experience the Excitement of Ball Hockey Every Friday! Welcome to
                                the official online hub of the FNL Hockey League, Brampton's premier
                                destination for ball hockey enthusiasts. Set in the heart of our
                                community at the Gore Meadows Recreation Center, our league brings
                                the fast-paced, exhilarating sport of ball hockey to life every
                                Friday night.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePageContent;
