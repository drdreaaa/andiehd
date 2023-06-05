import React from 'react';

// Material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

// Styles
import styles from './About.module.scss';
import Box from '@mui/system/Box';

const aboutMeInfo = [
    {
        name: 'life philosophy',
        items: [
            'Live and let live.',
            'Keep it simple.',
            'Less is more',
            'Make people smile.',
            'Know your worth.',
            'Choose happy.',
            'Return shopping carts.'
        ]
    },
    {
        name: 'interests',
        items: [
            'Arts and crafts.',
            'New technologies (sup, ChatGPT).',
            'Baking.',
            'Sports and gaming.',
            'Current events.',
            'Gamification.',
            'Stand up comedy.'
        ]
    },
    {
        name: 'skills',
        items: [
            'Arranging, then rearranging.',
            'Brainstorming.',
            'Making lists.',
            'Guessing pets\' weight.',
            'Remembering (my) credit card numbers.',
            'Disappearing airheads.',
            'Underwatering plants.'
        ]
    },
    {
        name: 'hot takes',
        items: [
            'Cancelled plans are the best plans.',
            'Fruit snacks are fruit.',
            'Tabs over spaces.',
            'Motion isn\'t always progress.',
            'Twizzlers over Redvines.',
            'Happy hour is from 4-6.',
            'People should write more positive reviews.'
        ]
    },
    {
        name: 'likes',
        items: [
            'Park days with the pups.',
            'Tootsie rolls (including fruit-flavored).',
            'Disco balls and neon signs.',
            'Blankets, slippers, & sweat-shorts.',
            'Naps.',
            'EDM & Top 40s.',
            'Roller coasters.'
        ]
    },
    {
        name: 'dislikes',
        items: [
            'Sticky door jams.',
            'Going to bed.',
            'Waking up.',
            'Plain mayo.',
            'Bullies.',
            'Spiders (and webs).',
            'Folding fitted sheets.'
        ]
    }
]

const About: React.FC = () => {

    return (
        <Container id='aboutContainer' className={styles.aboutContainer}>
            <Grid container spacing={2} sx={{justifyContent: 'center', margin: '0 !important', width: '100%'}}>
                {aboutMeInfo.map((section) => (
                    <Grid item sx={{
                        backgroundColor: '#fff',
                        borderStyle: 'none',
                        borderRadius: '15px',
                        margin: '15px !important',
                        minWidth: '350px',
                        width: '450px',
                        maxWidth: '485px',
                        padding: '55px !important',
                    }}>
                        {/* <Card key={section.name} sx={{boxShadow: 'none', padding: '15px'}}>
                            <CardContent> */}
                            <Box id={`${section.name}-Box`}>
                                <Typography variant='h3'>{section.name}</Typography>
                                <List>
                                    {section.items.map(item => (
                                        <ListItem>
                                            <Typography variant='body2'>
                                                {item}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                            {/* </CardContent>
                        </Card> */}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default About;