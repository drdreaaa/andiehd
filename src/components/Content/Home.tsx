import React, { useState } from 'react';

// Material
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Styles
import styles from './Home.module.scss';
import LanguageToggle from './Home/LanguageToggle';

enum Languages {
    ENGLISH = 'en',
    FRENCH = 'fr',
    SPANISH = 'es'
}

const Home: React.FC = () => {
    const [language, setLanguage] = useState<string>('en');
    
    const handleLanguage = (newLang: string) => {
        setLanguage(newLang);
    }

    const EnglishSalutation = () => {
        return (
            <Box>
                <Typography variant='h4' className={styles.salutation}>hey there, friend!</Typography>
            </Box>
        )
    }
    const FrenchSalutation = () => {
        return (
            <Box>
                <Typography variant='h4' className={styles.salutation}>salut, mon ami!</Typography>
            </Box>
        )
    }
    const SpanishSalutation = () => {
        return (
            <Box>
                <Typography variant='h4' className={styles.salutation}>¿que tal, amigo?</Typography>
            </Box>
        )
    }
    const EnglishIntro = () => {
        return (
            <React.Fragment>
                <Typography variant='body1'>
                    I’m Andrea, but most people just call me Andie. I am of Venezuelan descent, speak three languages, and I love to use my language skills with others when given the opportunity. (Click the toggles above to change the language.)
                </Typography>
                <br />
                <Typography variant='body1'>
                    I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects, be it technical or non-technical, and brainstorming creative solutions to complex problems. I pride myself in being a spirited team player and revel in the successes of my friends and peers.
                </Typography>
                <br />
                <Typography variant='body1'>
                    I’m passionate about learning new skills (hence the tinkering), observing behavior and interactions, and eating candy and carrots (balance is key).
                </Typography>
            </React.Fragment>
        )
    }
    const FrenchIntro = () => {
        return (
            <React.Fragment>
                <Typography variant='body1'>
                    Je m’appelle Andréa, mais la plupart des personnes m’appellent Andie (mais seulement en anglais... ça me sonne bizarre en français). Je suis vénézuélienne, je parle trois langues, et j’aime bien utiliser mes habiletés linguistiques avec les autres quand j’ai l’opportunité. (Cliquez les boutons au-dessus pour changer la langue.)
                </Typography>
                <br />
                <Typography variant='body1'>
                    Je suis ingénieure d’interface par jour, et tripoteuse par nuit. J’excelle à m'hyper-concentrer sur les projets, soi technique ou pas, et lancer des idées pour trouver solutions aux problèmes complex. Je suis fiere d’être une partenaire fiable et animée, et je me réjouies de les suces de mes amis et collègues.
                </Typography>
                <br />
                <Typography variant='body1'>
                    Je suis passionnée d’apprendre nouveaux dons (partant le tripoter), observer les comportements et interactions, et manger bonbons et carottes (l'équilibre est la clé). 
                </Typography>
            </React.Fragment>
        )
    }
    const SpanishIntro = () => {
        return (
            <React.Fragment>
                <Typography variant='body1'>
                    Me llamo Andrea, pero la mayoría de la gente me llaman Andie (en ingles... Andrea me suena bonito en español). Soy venezolana, hablo tres lenguas, y me encanta usar mis habilidades lingüísticas con los demás cuando tengo l’opportunidad. (Haz clic en los botones por encima para cambiar la lengua.)
                </Typography>
                <br />
                <Typography variant='body1'>
                    Soy ingeniera de interfaz por día, y jugueteora por noche. Destaco en híper-concentrándome en proyectos, sea técnico o no, y proponiendo soluciones creativos a problemas complejos. Tengo orgullo de ser compañera responsable y animada, y me disfruto en los éxitos de mis amigos y compañeros.
                </Typography>
                <br />
                <Typography variant='body1'>
                    Tengo passion por aprender habilidades nuevos (por eso jugueteo), observar comportamientos y interacciones, y comer caramelitos y zanahorias (el equilibrio es clave). 
                </Typography>
            </React.Fragment>
        )
    }

    const displaySalutation = () => {
        if (language === Languages.ENGLISH) {
            return <EnglishSalutation />;
        } else if (language === Languages.FRENCH) {
            return <FrenchSalutation />;
        } else {
            return <SpanishSalutation />;
        }
    }
    const displayIntro = () => {
        if (language === Languages.ENGLISH) {
            return <EnglishIntro />;
        } else if (language === Languages.FRENCH) {
            return <FrenchIntro />;
        } else {
            return <SpanishIntro />;
        }
    }

    return (
        <Box>
            <LanguageToggle language={language} onLangToggle={handleLanguage}/>
            <Container
                id='homeContainer2'
                className={styles.homeContainer}
                maxWidth='xl'
                >
                {/* mobile display */}
                <Grid id='mobileGrid' container spacing='2' sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', verticalAlign: 'middle' }}>
                    <Grid item sx={{alignSelf: 'center'}}>
                        {displaySalutation()}
                        {/* {language === 'en' && (<EnglishSalutation />)}
                        {language === 'fr' && (<FrenchSalutation />)}
                        {language === 'es' && (<SpanishSalutation />)} */}
                        {/* <Box>
                            <Typography variant='h4' className={styles.salutation}>hey there, friend!</Typography>
                        </Box> */}
                    </Grid>
                    <Grid item sx={{alignSelf: 'center'}}>
                        <Box>
                            <img id='photo' className={styles.photo} src='/images/headshot.JPG' alt='tempPhoto' />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box id='mobileIntro' className={styles.intro}>
                            {displayIntro()}
                            {/* <Typography variant='body1'>
                                I’m Andrea, but most people just call me Andie. I am of Venezuelan descent, speak three languages, and I love to use my language skills with others when given the opportunity. 
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects and driving the entirety of the software development lifecycle from design to deployment.
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy.
                            </Typography> */}
                        </Box>
                    </Grid>
                </Grid>

                {/* tablet display */}
                <Grid id='tabletGrid' container spacing='5' sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, justifyContent: 'center' }}>
                    <Grid item>
                        {displaySalutation()}
                        {/* <Box>
                            <Typography variant='h4'>hey there, friend!</Typography>
                        </Box> */}
                        <Box id='tabletIntro' className={styles.intro}>
                            {displayIntro()}
                            {/* <Typography variant='body1'>
                                I’m Andrea, but most people just call me Andie. I am of Venezuelan descent, speak three languages, and I love to use my language skills with others when given the opportunity. 
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects and driving the entirety of the software development lifecycle from design to deployment.
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy!
                            </Typography> */}
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
                        {displaySalutation()}
                        {/* <Box>
                            <Typography variant='h4'>hey there, friend!</Typography>
                        </Box> */}
                        <Box id='desktopIntro' className={styles.intro}>
                            {displayIntro()}
                            {/* <Typography variant='body1'>
                                I’m Andrea, but most people just call me Andie. I am of Venezuelan descent, speak three languages, and I love to use my language skills with others when given the opportunity. 
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m a front-end software engineer by day, and a tinkerer by night. I excel in hyper-focusing on projects and driving the entirety of the software development lifecycle from design to deployment.
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                I’m passionate about learning new skills (hence the above), observing behavior and interactions, and eating candy!
                            </Typography> */}
                        </Box>
                    </Grid>
                    <Grid item sx={{alignSelf: 'center'}}>
                        <Box>
                            <img id='photo' className={styles.photo} src='/images/headshot.JPG' alt='tempPhoto' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Home;