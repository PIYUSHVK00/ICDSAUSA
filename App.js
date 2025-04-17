import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import components (we'll create these next)
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/Home';
import About from './src/components/About';
import Services from './src/components/Services';
import Centers from './src/components/Centers';
import Gallery from './src/components/Gallery';
import Contact from './src/components/Contact';

// Import styles
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App; // Make sure this export exists