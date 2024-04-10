import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Ensure this import is added 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import myImage from '../../../Images/FNLBlack.png';

function Footer() {
    const { isAuthenticated } = useAuth0();
    const linkStyle = {
        display: 'block',
        color: 'white',
        textDecoration: 'none',
        marginBottom: '5px',
        '&:hover': {
            textDecoration: 'underline',
        },
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: '20px',
            gap: { xs: '20px', md: '500px' }, 
            backgroundColor: 'black',
            color: 'white',
            flexDirection: { xs: 'column', md: 'row' }, 
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={myImage}
                    alt='Description'
                    style={{ height: '60px', width: '60px' }}
                />
                <Typography variant="h4" sx={{ fontStyle:'italic' }}>FNL</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: '120px',
                flexWrap: 'wrap',
            }}>
                <Box>
                    {isAuthenticated && (
                        <>
                            <Typography variant="h3" sx={{ marginBottom: '10px', fontSize: '1.25rem' }}>Quick Links</Typography>
                            <Link component={RouterLink} to="/" sx={linkStyle}>Home</Link>
                            <Link component={RouterLink} to="/Status" sx={linkStyle}>Status</Link>
                            <Link component={RouterLink} to="/Match" sx={linkStyle}>Match</Link>
                            <Link component={RouterLink} to="/Scores" sx={linkStyle}>Scores</Link>
                            <Link component={RouterLink} to="/Players" sx={linkStyle}>Players</Link>
                            <Link component={RouterLink} to="/Schedule" sx={linkStyle}>Schedule</Link>
                        </>
                    )}
                </Box>
                <Box>
                    <Typography variant="h3" sx={{ marginBottom: '10px', fontSize: '1.25rem' }}>Social Media</Typography>
                    <Link href="https://www.instagram.com/fnl_hockey" sx={linkStyle}><InstagramIcon /></Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;

