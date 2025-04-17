import React, { useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const isMobile = useMediaQuery('(max-width:900px)');

  const navItems = [
    { name: 'मुख्यपृष्ठ', path: '/', en: 'Home' },
    { name: 'आमच्याबद्दल', path: '/about', en: 'About' },
    { name: 'सेवा', path: '/services', en: 'Services' },
    { name: 'केंद्रे', path: '/centers', en: 'Centers' },
    { name: 'गॅलरी', path: '/gallery', en: 'Gallery' },
    { name: 'संपर्क', path: '/contact', en: 'Contact' },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ICDS AUSA
        </Typography>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
              >
                {language === 'marathi' ? item.name : item.en}
              </Button>
            ))}
            <Button 
              onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
              color="inherit"
              sx={{ ml: 2 }}
            >
              {language === 'marathi' ? 'English' : 'मराठी'}
            </Button>
          </Box>
        )}

        {isMobile && (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;