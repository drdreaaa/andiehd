import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useState } from 'react';

import styles from '../Home.module.scss';
import { styled } from '@mui/material/styles';

interface LanguageToggleProps {
    language: string,
    onLangToggle: any,
}
const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#F697E0'
    }
  });

const LanguageToggle: React.FC<LanguageToggleProps> = ({language, onLangToggle}) => {
    // const [language, setLanguage] = useState<string>('en');
    
    const toggleLanguage = (
        event: React.MouseEvent<HTMLElement>,
        newLang: string 
    ) => {
        // setLanguage(newLang)
        if (newLang !== null) {
            onLangToggle(newLang);
        }
    }

    return (
        <Box id='languageToggleBox' sx={{textAlign: 'center'}}>
            <Container id='languageToggleContainer'>
                <ToggleButtonGroup id='languageToggleButtonGroup'
                    value={language}
                    exclusive
                    onChange={toggleLanguage}
                    className={styles.toggle}
                    size='small'
                >
                    <ToggleButton value='en' selected={language === 'en'} sx={{textTransform: 'none'}}>en</ToggleButton>
                    <ToggleButton value='fr' selected={language === 'fr'} sx={{textTransform: 'none'}}>fr</ToggleButton>
                    <ToggleButton value='es' selected={language === 'es'} sx={{textTransform: 'none'}}>es</ToggleButton>
                </ToggleButtonGroup>
            </Container>
        </Box>
    )
}

export default LanguageToggle;