import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { 
  Box,
	Container, 
	Typography 
} from '@mui/material';

import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import DbeNarrativePage from '../views/dbeNarrativePage/DbeNarrativePage';

const ConditionalFooter = () => {
  return <Footer />;
};

const MainRoutes = () => {
  
  return (
    <Router>
      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<DbeNarrativePage />} />

          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Box>
      <ConditionalFooter />
    </Router>
  )
}

export default MainRoutes;

// 404 page
const NotFoundPage = () => {
  return(
		<Container maxWidth="xl">
      <Box sx={{ height: "calc(100vh - 100px)" }} className="flexCenterCenterRow">
			  <Typography variant='h3'>404 - Page not found</Typography>
      </Box>
		</Container>
  )
};

