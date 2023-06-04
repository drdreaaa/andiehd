import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';

function App() {

    const theme = createTheme({
		// palette: {

		// },
		typography: {
      h3: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: '100'
      },
      h4: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: '100'
      },
			h5: {
				// maxWidth: '350px',
				// marginTop: '10px',
				fontFamily: "'Inter', sans-serif",
			},
			body1: {
					fontFamily: "'Inter', sans-serif",
					fontWeight: '100'
			},
      body2: {
        fontFamily: "'Inter', sans-serif",
					fontWeight: '200'
      },
			caption: {
				color: 'white',
        fontFamily: "'Inter', sans-serif",
        fontWeight: '200',
        fontStyle: 'italic'
			},
			button: {
				color: '#000',
        fontWeight: '100',
        '&:hover': {
          color: '#fff' // this should go in a components objects
        }
			}
		},
    breakpoints: {
      values: {
        xs: 0, // mobile
        sm: 480, // tablet
        md: 767, // desktop
        lg: 1024, // wide
        xl: 1536,
      },
    },
	});
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Header />
          <Layout />
          {/* <Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
