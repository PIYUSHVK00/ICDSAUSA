import React, { useState, useContext } from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { 
      name: 'मुख्यपृष्ठ', 
      en: 'Home', 
      path: '/' 
    },
    { 
      name: 'आमच्याबद्दल', 
      en: 'About Us',
      subItems: [
        { name: 'आमची माहिती', en: 'About Us', path: '/about' },
        { name: 'आम्ही कोणासाठी काम करतो', en: 'To Whom We Work', path: '/about/whom-we-work' },
      ]
    },
    { 
      name: 'सेवा', 
      en: 'Services',
      subItems: [
        { name: 'सर्व सेवा', en: 'All Services', path: '/services' },
        { name: 'शिशुसेवा', en: 'Child Care', path: '/services/childcare' },
        { name: 'पोषण', en: 'Nutrition', path: '/services/nutrition' },
      ]
    },
    { 
      name: 'केंद्रे', 
      en: 'Centers', 
      path: '/centers' 
    },
    { 
      name: 'गॅलरी', 
      en: 'Gallery', 
      path: '/gallery' 
    },
    { 
      name: 'संपर्क', 
      en: 'Contact', 
      path: '/contact' 
    },
  ];

  // Desktop dropdown handlers
  const handleMenuOpen = (event, index) => {
    setAnchorEl({ el: event.currentTarget, index });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Mobile drawer handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuToggle = (index) => {
    if (expandedMenu === index) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(index);
    }
  };

  // Language toggle
  const handleLanguageToggle = () => {
    setLanguage(language === 'marathi' ? 'english' : 'marathi');
  };

  // Desktop Navigation
  const renderDesktopNav = () => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {navItems.map((item, index) => (
        item.subItems ? (
          <div key={index}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, index)}
              sx={{ textTransform: 'none', mx: 1 }}
            >
              {language === 'marathi' ? item.name : item.en}
            </Button>
            <Menu
              anchorEl={anchorEl?.index === index ? anchorEl.el : null}
              open={anchorEl?.index === index}
              onClose={handleMenuClose}
            >
              {item.subItems.map((subItem, subIndex) => (
                <MenuItem 
                  key={subIndex}
                  component={Link}
                  to={subItem.path}
                  onClick={handleMenuClose}
                >
                  {language === 'marathi' ? subItem.name : subItem.en}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <Button
            key={index}
            component={Link}
            to={item.path}
            color="inherit"
            sx={{ textTransform: 'none', mx: 1 }}
          >
            {language === 'marathi' ? item.name : item.en}
          </Button>
        )
      ))}
      <Button 
        onClick={handleLanguageToggle}
        color="inherit"
        sx={{ 
          ml: 2,
          border: '1px solid white',
          borderRadius: '20px',
          px: 2,
          textTransform: 'none'
        }}
      >
        {language === 'marathi' ? 'English' : 'मराठी'}
      </Button>
    </Box>
  );

  // Mobile Navigation
  const renderMobileNav = () => (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: {
          width: 280,
          bgcolor: 'primary.main',
          color: 'white'
        }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem 
              button 
              component={item.subItems ? 'div' : Link}
              to={!item.subItems ? item.path : null}
              onClick={item.subItems ? () => handleMobileMenuToggle(index) : handleDrawerToggle}
              sx={{
                '&:hover': { backgroundColor: 'primary.light' },
                mb: 0.5
              }}
            >
              <ListItemText 
                primary={language === 'marathi' ? item.name : item.en} 
                primaryTypographyProps={{ fontSize: '1.1rem' }}
              />
              {item.subItems && (
                expandedMenu === index ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            
            {item.subItems && (
              <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem 
                      key={subIndex}
                      button 
                      component={Link}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{ 
                        pl: 4,
                        '&:hover': { backgroundColor: 'primary.light' }
                      }}
                    >
                      <ListItemText 
                        primary={language === 'marathi' ? subItem.name : subItem.en} 
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        
        <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        <ListItem 
          button 
          onClick={() => {
            handleLanguageToggle();
            handleDrawerToggle();
          }}
          sx={{
            '&:hover': { backgroundColor: 'primary.light' }
          }}
        >
          <ListItemText 
            primary={language === 'marathi' ? 'English' : 'मराठी'} 
            primaryTypographyProps={{ fontSize: '1.1rem' }}
          />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: 'none' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          ICDS AUSA
        </Typography>
        
        {!isMobile ? renderDesktopNav() : (
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
      {isMobile && renderMobileNav()}
    </AppBar>
  );
};

export default Header;