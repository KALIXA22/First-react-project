import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { styled } from '@mui/material/styles'; //  Import styled from MUI, or styled-components

//  Styled components using MUI's styled API
const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight:'100vh',
  overflow:'hidden',
  minWidth:'100vw',
});

const MainContent = styled('div')({
  flex: 1,
  overflow:'auto',
});

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
