import React from 'react';

// Material
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Contact: React.FC = () => {

    return (
        <Container id='contactContainer' sx={{
            backgroundColor: '#fff',
                borderStyle: 'hidden',
                borderRadius: '15px',
                marginTop: '15px',
                maxWidth: '650px',
                width: '500px',
                minWidth: '350px',
                padding: '55px'
        }}>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant='h3'>get in touch</Typography>
                <Box sx={{ margin: '10px', gap: '10px', '& .MuiTextField-root': { m: 1 },}}>
                    <FormGroup>
                        <TextField label='name'/>
                        <TextField label='email'/>
                        <TextField label='message' multiline rows={4}/>
                    </FormGroup>
                </Box>
                <Button>send</Button>
            </Box>
        </Container>
    )
}

export default Contact;