import React from 'react';

// Material
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Footer: React.FC = () => {

    return (
        <Container
            id='footerContainer'
            sx={{
                backgroundColor: '#FCDDF5',
                padding: '25px 0 !important',
                textAlign: 'center',
                width: '100%',
                gap: '15px',
                maxWidth: 'none !important',
                margin: '0 !important',
                // bottom: '0',
                // position: 'fixed',
            }}
        >
            <Button>
                <Typography variant='button'>linkedin</Typography>
            </Button>
            <Button>
                <Typography variant='button'>github</Typography>
            </Button>
            <Button>
                <Typography variant='button'>view resume</Typography>
            </Button>
        </Container>
    )
}

export default Footer;