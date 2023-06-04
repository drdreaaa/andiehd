import React from 'react';

// Material
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface NavProps {
    page: string;
    onPageChange: any;
}
const Nav: React.FC<NavProps> = ({page, onPageChange}) => {

    const handleNav = (page: any) => {
		console.log(page);
        onPageChange(page);
	}

    return (
        <Container
            sx={{
                // margin: '15px 0',
                padding: '15px'
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                }}
            >
                <Button
                    onClick={() => handleNav('home')}
                >
                    <Typography variant='button'>HOME</Typography>
                </Button>
                <Button
                    onClick={() => handleNav('portfolio')}
                >
                    <Typography variant='button'>PORTFOLIO</Typography>
                </Button>
                <Button
                    onClick={() => handleNav('about')}
                >
                    <Typography variant='button'>ABOUT ME</Typography>
                </Button>
                <Button
                    onClick={() => handleNav('contact')}
                >
                    <Typography variant='button'>CONTACT</Typography>
                </Button>
            </Box>
        </Container>
    )
}

export default Nav;