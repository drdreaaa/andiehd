import React, { useState } from 'react';

// Material
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

// Styles
import styles from './Portfolio.module.scss';


const portfolioItems = [
    {
        title: 'electronic statement delivery service',
        caption: '*designs by product team',
        description: 'Homegrown e-Statements Disney service for talent to view and download statements.',
        items: [
            {
                brief: 'Implemented UI as defined by Product for the Electronic Statement Delivery Service.',
                imgSrc: '/images/workshots/esd_main.png'
            },
            {
                brief: 'PLACEHOLDER FOR DOWNLOAD GIF',
                imgSrc: '/images/workshots/esd_main.png'
            },
            {
                brief: 'Implemented POC user menu for ESD.',
                imgSrc: '/images/workshots/esd_usermenu.png'
            },
            {
                brief: 'PLACEHOLDER FOR REPORT BUG',
                imgSrc: '/images/workshots/esd_main.png'
            },
            {
                brief: 'PLACEHOLDER FOR SUBMIT FEEDBACK',
                imgSrc: '/images/workshots/esd_main.png'
            },
            {
                brief: 'Implemented microservice to collect emails to register for ESD.',
                imgSrc: '/images/workshots/esd_email_collection.png'
            },
            {
                brief: 'Landing page for successful email registration.',
                imgSrc: '/images/workshots/esd_ec_success.png'
            }
        ]
    },
    {
        title: 'rerun2',
        caption: '*designs by product team',
        description: 'Homegrown Disney financial service to pay residuals to talent.',
        items: [
            {
                brief: 'Refactored UI for user experience improvements.',
                imgSrc: '/images/workshots/r2_title_master.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_product_setup.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_interfaces.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_settings.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_app_versions.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_liquibase.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_security.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_indexing.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_users.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_rep_queue.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_cost_center.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_gl_accnt.png'
            },
            {
                brief: 'brief desc of what i did',
                imgSrc: '/images/workshots/r2_admin_devtools.png'
            }
        ]
    },
    {
        title: 'participations portal',
        caption: '*designs by product team',
        description: 'Homegrown Disney financial service to pay participations to talent.',
        items: [
            {
                brief: 'PLACEHOLDER FOR OUTBOX MODAL',
                imgSrc: '/images/workshots/vouchers_bulk.png'
            },
            {
                brief: 'PLACEHOLDER FOR RECIPIENT PANEL',
                imgSrc: '/images/workshots/vouchers_bulk.png'
            }
        ]
    },
]
  
  
const Portfolio: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setSelected('')
        setOpen(false)
    };

    const handleEnlargeImage = (imgSrc: string) => {
        setSelected(imgSrc);
        handleOpen();
    }

    return (
        <>
            <Container id='portfolioContainer' sx={{padding: '0 !important', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {portfolioItems.map((item) => (
                    <Container key={item.title} sx={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', backgroundColor: '#fff', margin: '25px 15px', padding: '0 !important', borderStyle: 'none', borderRadius: '15px' }}>
                        <Box
                            sx={{
                                backgroundColor: '#F697E0',
                                borderStyle: 'none',
                                borderRadius: '15px 15px 0 0',
                                color: '#fff',
                                margin: '0',
                                padding: '8px 13px'
                            }}
                        >
                            <Typography variant='h5'
                                id={`sectionHeader-${item.title}`}
                            >
                                {item.title}
                            </Typography>
                            <Typography variant='caption'>
                                {item.caption}
                            </Typography>
                            <Typography variant='body2'>
                                {item.description}
                            </Typography>
                        </Box>
                        <Container sx={{display: 'flex', flexDirection: 'row', overflow: 'auto', gap: '15px', padding: '10px' }}>
                            {item.items.map((work) => (
                                <Card sx={{ maxWidth: '343px', width: '343px', minWidth: '343px', maxHeight: '400px', margin: '10px' }}>
                                    <CardContent>
                                        <Box sx={{overflow: 'hidden'}}>
                                            <Button onClick={() => handleEnlargeImage(work.imgSrc)}>
                                                <img className={styles.photo} src={work.imgSrc} alt={work.brief} />
                                            </Button>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {work.brief}
                                        </Typography>
                                    </CardContent>
                                    
                                </Card>
                            ))}
                        </Container>
                    </Container>
                ))}
            </Container>
            {open && (
                <Modal id='bigPhotoModal'
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={styles.largePhotoBox}>
                        <img className={styles.largePhoto} src={selected} alt='enlarged' onClick={handleClose} />
                    </Box>
                </Modal>
            )}
        </>
    )
}

export default Portfolio;