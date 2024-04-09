import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CustomErrorPage = () => {
    const location = useLocation();
    const { error } = location.state || { error: 'Unknown error' }; // Default error message

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            textAlign: 'center',
            gap: 2, 
        }}>
            <Typography variant="h4" component="h2">Error Occurred</Typography>
            <Typography>{error}</Typography>
            <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
                Go back home
            </Link>
        </Box>
    );
};

export default CustomErrorPage;
