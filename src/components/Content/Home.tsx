import React from 'react';

// Material
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Styles
import styles from './Home.module.scss';

const Home: React.FC = () => {

    return (
        <Container
            id='homeContainer2'
            className={styles.homeContainer}
            maxWidth='xl'
        >
            {/* mobile display */}
            <Grid id='mobileGrid' container spacing='2' sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', verticalAlign: 'middle' }}>
                <Grid item sx={{alignSelf: 'center'}}>
                    <Box>
                        <Typography variant='h4' className={styles.salutation}>hey there, friend!</Typography>
                    </Box>
                </Grid>
                <Grid item sx={{alignSelf: 'center'}}>
                    <Box>
                        <img id='photo' className={styles.photo} src='/images/headshot.JPG' alt='tempPhoto' />
                    </Box>
                </Grid>
                <Grid item>
                    <Box id='mobileIntro' className={styles.intro}>
                        <Typography variant='body1'>
                            I’m Andie, but most people just call me loud. I am of Venezuelan descent, speak three languages, and I only answer to Mother Nature (...and mom). 
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects, abandoning them and banishing supplies to the Graveyard of Abandoned Projects (closet), and rifling through to resurrect them months later when I want to run it back.
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* tablet display */}
            <Grid id='tabletGrid' container spacing='5' sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, justifyContent: 'center' }}>
                <Grid item>
                    <Box>
                        <Typography variant='h4'>hey there, tablet friend!</Typography>
                    </Box>
                    <Box id='tabletIntro' className={styles.intro}>
                        <Typography variant='body1'>
                            I’m Andie, but most people just call me loud. I am of Venezuelan descent, speak three languages, and I only answer to Mother Nature (...and mom). 
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects, abandoning them and banishing supplies to the Graveyard of Abandoned Projects (closet), and rifling through to resurrect them months later when I want to run it back.
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sx={{alignSelf: 'center'}}>
                    <Box>
                        <img id='photo' className={styles.photo} src='/images/headshot.JPG' alt='tempPhoto' />
                    </Box>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>

            {/* desktop display */}
            <Grid id='desktopGrid' container spacing='2' sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, justifyContent: 'center' }}>
                <Grid item>
                    <Box>
                        <Typography variant='h4'>hey there, desktop friend!</Typography>
                    </Box>
                    <Box id='desktopIntro' className={styles.intro}>
                        <Typography variant='body1'>
                            I’m Andie, but most people just call me loud. I am of Venezuelan descent, speak three languages, and I only answer to Mother Nature (...and mom). 
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects, abandoning them and banishing supplies to the Graveyard of Abandoned Projects (closet), and rifling through to resurrect them months later when I want to run it back.
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sx={{alignSelf: 'center'}}>
                    <Box>
                        <img id='photo' className={styles.photo} src='/images/headshot.JPG' alt='tempPhoto' />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;