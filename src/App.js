import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; // Add this import
import Typography from '@mui/material/Typography'; // Add this import
import theme from './styles/theme';
import PragatiAhval from './components/PragatiAhval';
import MahitiAdhikar from './components/MahitiAdhikar';
import Dhorane from './components/Dhorane';


// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Main Pages
import Home from './components/Home';
import About from './components/About';
import Centers from './components/Centers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhomWeWork from './components/WhomWeWork';
import OrganizationalStructure from './components/OrganizationalStructure';

// Scheme Pages
import SchemesPage from './components/Yojana';
import LekhLadkiYojana from './components/LekhLadkiYojana';
import BalSangopanShikshan from './components/BalSangopanShikshan';
import EkRakmiLabha from './components/EkRakmiLabha';
import AdarshAnganwadi from './components/AdarshAnganwadi';
import BabyCareKit from './components/BabyCareKit';
import BetiBachaoBetiPadhao from './components/BetiBachaoBetiPadhao';
import VCDC from './components/VCDC';
import PoshanAbhiyan from './components/PoshanAbhiyan';
import PurakPoshanAahar from './components/PurakPoshanAahar';

// Context
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('marathi');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router>
          <Header />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pragati-ahval" element={<PragatiAhval />} />
            <Route path="/mahiti-adhikar" element={<MahitiAdhikar />} />
            <Route path="/dhorane" element={<Dhorane />} />

            
            {/* About Subpages */}
            <Route path="/about/whom-we-work" element={<WhomWeWork />} />
            <Route 
              path="/about/organizational-structure" 
              element={<OrganizationalStructure />} 
            />

            {/* Schemes Routes */}
            <Route path="/yojana" element={<SchemesPage />} />
            <Route path="/yojana/lekh-ladki" element={<LekhLadkiYojana />} />
            <Route 
              path="/yojana/bal-sangopan-shikshan" 
              element={<BalSangopanShikshan />} 
            />
            <Route path="/yojana/ek-rakmi-labha" element={<EkRakmiLabha />} />
            <Route 
              path="/yojana/adarsh-anganwadi" 
              element={<AdarshAnganwadi />} 
            />
            <Route path="/yojana/baby-care-kit" element={<BabyCareKit />} />
            <Route 
              path="/yojana/beti-bachao-beti-padhao" 
              element={<BetiBachaoBetiPadhao />} 
            />
            <Route path="/yojana/vcdc" element={<VCDC />} />
            <Route path="/yojana/poshan-abhiyan" element={<PoshanAbhiyan />} />
            <Route 
              path="/yojana/purak-poshan-aahar" 
              element={<PurakPoshanAahar />} 
            />

            {/* Fallback Route */}
            <Route path="*" element={
              <Box textAlign="center" p={4}>
                <Typography variant="h3">404 - Page Not Found</Typography>
                <Typography paragraph>The requested page doesn't exist</Typography>
              </Box>
            } />
          </Routes>
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;