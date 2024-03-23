import React from 'react';
import Button from '../../Atoms/Button/Button';
import './PlayerStatusPanel.css';
import RenderPlayer from '../../Molecules/RenderPlayer/RenderPlayer';
import Category from '../../Molecules/Category/Category';
import TabsContent from '../../Molecules/TabsContent/TabsContent';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useEffect } from 'react';

const PlayerStatusPanel = ({
    players,
    categories,
    logout,
    handleSubmit,
    handleDrop,
    saveCategories,
    disabled,
    handleDragStart,
    handleTabClick,
    activeLabel,
    filterPlayers,
    categoryIcon,
    hasCategoriesWithPlayers,
    resetFilter
}) => {
    useEffect(() => {
        const card = document.querySelector('.alert-card');
        card.style.animationPlayState = 'running';

        const timer = setTimeout(() => {
            card.style.animationPlayState = 'paused';
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!hasCategoriesWithPlayers() ? (
                <div className='alert-card'>
                    <p>
                        Welcome to status page, before making teams please drag and drop players to
                        a category, then submit.
                    </p>
                </div>
            ) : null}

            <div className='logout-button-container'>
                <Button title='Logout' color='#d9d9d9' width='200px' onClick={() => logout()} />
            </div>
            <div>
                <h2 className='player-section-title'>Current Roster of FNL Hockey</h2>
                <p className='player-section-title'>Total Players: {players.length} </p>

                <div className='tabs-content'>
                    <TabsContent activeLabel={activeLabel} handleTabClick={handleTabClick} />
                </div>

                <div className='player-section-inner-container'>
                    <div className='player-header'>
                        {filterPlayers.length > 0 &&
                            filterPlayers.map((player, idx) => (
                                <RenderPlayer
                                    key={idx}
                                    player={player}
                                    handleDragStart={handleDragStart}
                                />
                            ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <>
                        <h2 className='status-section'>Status</h2>
                        <div className='category-container'>
                            {Array.isArray(categories) &&
                                categories.map((category, idx) => (
                                    <Category
                                        key={idx}
                                        category={category}
                                        handleDrop={handleDrop}
                                        handleDragStart={handleDragStart}
                                        categoryIcon={categoryIcon}
                                    />
                                ))}
                        </div>
                    </>

                    {hasCategoriesWithPlayers() && (
                        <div className='player-status-button-container'>
                            <Button
                                title='Save'
                                color='black'
                                textColor='white'
                                width='205px'
                                type='button'
                                onClick={saveCategories}
                                marginTop='20px'
                                icon={<KeyboardArrowRightOutlinedIcon />}
                            />
                            {!disabled && (
                                <Button
                                    title='Submit'
                                    color='#d9d9d9'
                                    width='150px'
                                    type='submit'
                                    marginTop='20px'
                                />
                            )}

                            <Button
                                title='Reset'
                                color='black'
                                textColor='white'
                                width='205px'
                                type='button'
                                onClick={resetFilter}
                                marginTop='20px'
                                icon={<KeyboardArrowRightOutlinedIcon />}
                            />

                        </div>
                    )}
                </form>
            </div>
        </>
    );
};

export default PlayerStatusPanel;
