import React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';
import myImage from '../../../Images/FNLWhiteBackground.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = () => {
  const theme = useTheme();
  // Use useMediaQuery hook with theme breakpoints to apply for mobile devices
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      '& img': {
        animation: `${spin} 2s linear infinite`,
        height: '90px',
        width: '90px',
        // Adjust margin-top for mobile to move the image up
        marginTop: isMobile ? '-50%' : 0,
      }
    }}>
      <img src={myImage} alt="Loading..." />
    </Box>
  );
};

export default Spinner;
