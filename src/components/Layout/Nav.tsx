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
		console.log(page); // TODO: remove
        onPageChange(page);
	}

    return (
        <Container
            sx={{
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
                <Button variant='text'
                    onClick={() => handleNav('home')}
                >
                    <Typography>HOME</Typography>
                </Button>
                <Button variant='text'
                    onClick={() => handleNav('portfolio')}
                >
                    <Typography>PORTFOLIO</Typography>
                </Button>
                <Button variant='text'
                    onClick={() => handleNav('about')}
                >
                    <Typography>ABOUT ME</Typography>
                </Button>
                <Button variant='text'
                    onClick={() => handleNav('contact')}
                >
                    <Typography>CONTACT</Typography>
                </Button>
            </Box>
        </Container>
    )
}

export default Nav;