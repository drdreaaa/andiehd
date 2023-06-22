import React, { useState } from 'react';
import axios from 'axios';

// Material
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import styles from './Contact.module.scss';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleNameChange = (event: any) => {
        event.preventDefault();
        console.log('name: ', event.target.value);
        setName(event.target.value);
    }
    
    const handleEmailChange = (event: any) => {
        event.preventDefault();
        console.log('emailt: ', event.target.value);
        setEmail(event.target.value);
    }
    
    const handleMessageChange = (event: any) => {
        event.preventDefault();
        console.log('message: ', event.target.value);
        setMessage(event.target.value);
    }

    const sendEmail = () => {

        const postBody = {name, email, message};

        axios.post('https://2ezdv7sm96.execute-api.us-east-2.amazonaws.com/default', postBody)
            .then(res => {
                console.log(`res: ${res}`);
            })
            .catch(err => console.log(err));

        console.log(`postBody: ${postBody}`);
        console.log(`name: ${name}`);
        console.log(`email: ${email}`);
        console.log(`message: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <Container id='contactContainer' className={styles.contactContainer}
            // sx={{
            //     backgroundColor: '#fff',
            //     borderStyle: 'hidden',
            //     borderRadius: '15px',
            //     marginTop: '15px',
            //     maxWidth: '650px',
            //     width: '500px',
            //     minWidth: '350px',
            //     padding: '55px',
            // }}
        >
            <Box id='contactBox' sx={{textAlign: 'center'}}>
                <Typography id='contactHeader' variant='h3'>get in touch</Typography>
                <Box id='emailFormBox' sx={{ margin: '10px', gap: '10px', '& .MuiTextField-root': { m: 1 },}}>
                    <FormGroup id='emailFormGroup'>
                        <TextField value={name} label='name' onChange={(e) => handleNameChange(e)}/>
                        <TextField value={email} label='email' onChange={(e) => handleEmailChange(e)}/>
                        <TextField value={message} label='message' multiline rows={4} onChange={(e) => handleMessageChange(e)}/>
                    </FormGroup>
                </Box>
                <Button id='sendEmailBtn' 
                    type='submit'
                    onClick={sendEmail}
                >send</Button>
            </Box>
        </Container>
    )
}

export default Contact;