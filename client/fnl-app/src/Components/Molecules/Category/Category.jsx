import React from 'react';
import './Category.css';
import RenderPlayer from '../../Molecules/RenderPlayer/RenderPlayer';

const Category = ({ category, handleDrop, handleDragStart, categoryIcon }) => {
    return (
        <div
            className='category'
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, category)}
        >
            <h3 className='category-title'>
                {category.name} {categoryIcon(category.name)}
            </h3>
            <ol>
                {category.players.map((player, idx) => (
                    <li key={idx}>
                        <RenderPlayer player={player} handleDragStart={handleDragStart} />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Category;
