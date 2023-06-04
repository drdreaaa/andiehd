import React from 'react';

// App Components
import Nav from './Nav';
import Footer from './Footer/Footer';
import Home from '../Content/Home';
import Portfolio from '../Content/Portfolio';
import About from '../Content/About';
import Contact from '../Content/Contact';

// Material Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Layout: React.FC = () => {
	let navigate = useNavigate();

	const handlePageChange = (page: string) => {
		navigate(page);
	}

    return (
        <Container 
			id='layoutContainer' 
			sx={{padding: '0 !important', margin: '0', width: '100%', maxWidth: 'none !important'}}>
			<Box id='bodyBox' sx={{backgroundColor: '#FCDDF5', margin: '0', padding: '0', minWidth: '100%'}}>
				<Nav page={'home'} onPageChange={handlePageChange} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					{/* <Route path='/social' element={<Social />} /> */}
				</Routes>
				<Footer />
			</Box>
        </Container>
    )
}

export default Layout;