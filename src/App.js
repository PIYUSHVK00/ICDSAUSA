import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Centers from './components/Centers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import theme from './styles/theme';

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('marathi'); // Default to Marathi

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;