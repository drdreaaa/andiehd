import React from 'react';

// Material
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


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
            <Box id='footerButtonGroup'>
                <Button variant='text' onClick={() => window.open('https://www.linkedin.com/in/andiealdana', '_blank', 'noreferrer noopener')}>
                    <LinkedInIcon />
                        {/* <Typography>linkedin</Typography> */}
                </Button>
                <Button variant='text' onClick={() => window.open('https://github.com/drdreaaa', '_blank', 'noreferrer noopener')}>
                    <GitHubIcon />
                        {/* <Typography>github</Typography> */}
                </Button>
                <Button variant='text' onClick={() => window.open('/files/AndieAldana_Resume_v2.pdf', '_blank', 'noreferrer noopener')}>
                    <PictureAsPdfIcon />
                        {/* <Typography>view resume</Typography> */}
                </Button>
            </Box>
        </Container>
    )
}

export default Footer;