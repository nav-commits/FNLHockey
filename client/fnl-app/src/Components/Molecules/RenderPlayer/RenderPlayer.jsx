import React from 'react';
import '../RenderPlayer/RenderPlayer.css';

const RenderPlayer = ({ player, handleDragStart }) => {
    return (
        <div
            className="player-status"
            draggable
            onDragStart={(e) => handleDragStart(e, player)}
        >
            {/* <img src={player.img} alt="player" style={{ height: '30px', width: '30px', borderRadius: '20px' }} /> */}
            {player.img ? <div style={{ height: '30px', width: '30px', borderRadius: '20px', backgroundColor: 'lightgrey' }} /> : <div style={{ height: '30px', width: '30px', borderRadius: '20px', backgroundColor: 'lightgrey' }}/> }
            {player.name}
            <br />
            {player.position}
        </div>
    );
};

export default RenderPlayer;
