import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, error } = useAuth0();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/error', { state: { error: error ? error.message : 'You need to log in to access this page.' } });
        }
    }, [isAuthenticated, navigate, error]);

    if (!isAuthenticated) {
        return null; // Or a loading indicator
    }

    return children;
};

export default ProtectedRoute;
