// useDeviceDetect.js

import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the state based on the current window size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile };
};

export default useDeviceDetect;
