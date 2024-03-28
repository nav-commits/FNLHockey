import React from 'react';
import { useLocation } from 'react-router-dom';

const CustomErrorPage = () => {
    const location = useLocation();
    const { error } = location.state || { error: 'Unknown error' }; // Default error message

    return (
        <div>
            <h2>Error Occurred</h2>
            <p>{error}</p>
            <a href="/">Go back home</a>
        </div>
    );
};

export default CustomErrorPage;
