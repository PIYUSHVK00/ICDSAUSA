import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WhomWeWork from './pages/About/WhomWeWork';


// Import components
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/Home';
import About from './src/components/About';
import WhomWeWork from './src/components/WhomWeWork';
import Services from './src/components/Services';
import ChildCare from './src/components/Services/ChildCare';
import Nutrition from './src/components/Services/Nutrition';
import Centers from './src/components/Centers';
import Gallery from './src/components/Gallery';
import Contact from './src/components/Contact';

// Import styles
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';

// Create Language Context
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('marathi'); // 'marathi' or 'english'

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            
            {/* About Us Section with Nested Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/whom-we-work" element={<WhomWeWork />} />
            
            {/* Services Section with Nested Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/childcare" element={<ChildCare />} />
            <Route path="/services/nutrition" element={<Nutrition />} />
            
            {/* Other Main Routes */}
            <Route path="/centers" element={<Centers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about/whom-we-work" element={<WhomWeWork />} />

            
            {/* 404 Page - You might want to create this later */}
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}

export default App;