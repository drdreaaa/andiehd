import React from 'react';

// Material
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {

    return (
        <Box
            sx={{
                margin: '35px 0',
                padding: '15px 0',
                textAlign: 'center'
            }}
        >
            <Typography variant='h3'>andieHD</Typography>
        </Box>
    )
}

export default Header;