import React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';
import myImage from '../../../Images/FNLWhiteBackground.png';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = () => {
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
      }
    }}>
      <img src={myImage} alt="Loading..." />
    </Box>
  );
};

export default Spinner;
