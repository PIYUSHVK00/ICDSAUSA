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
      path: '/',
      icon: '🏠'
    },
    { 
      name: 'आमच्याबद्दल', 
      en: 'About Us',
      icon: 'ℹ️',
      subItems: [
        { name: 'आमची माहिती', en: 'About Us', path: '/about', icon: '👥' },
        { name: 'आम्ही कोणासाठी काम करतो', en: 'To Whom We Work', path: '/about/whom-we-work', icon: '👨‍👩‍👧‍👦' },
        { name: 'संघटनात्मक संरचना', en: 'Organizational Structure', path: '/about/organizational-structure', icon: '🏛️' },
        // Add schemes as a sub-item under About
      ]
    },
    { 
      name: 'सर्व योजना', 
      en: 'All Schemes', 
      path: '/Yojana', 
      icon: '📋',
      hiddenInHeader: true // This will prevent it from appearing in main nav
    },
    {
      name: 'केंद्रे', 
      en: 'Centers', 
      path: '/centers',
      icon: '🏢'
    },
    { 
      name: 'गॅलरी', 
      en: 'Gallery', 
      path: '/gallery',
      icon: '📷'
    },
    { 
      name: 'संपर्क', 
      en: 'Contact', 
      path: '/contact',
      icon: '📞'
    },
  ];

  // Filter out hidden items for main navigation
  const filteredNavItems = navItems.map(item => {
    if (item.subItems) {
      return {
        ...item,
        subItems: item.subItems.filter(subItem => !subItem.hiddenInHeader)
      };
    }
    return item;
  });

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
      {filteredNavItems.map((item, index) => (
        item.subItems ? (
          <div key={index}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, index)}
              sx={{ 
                textTransform: 'none', 
                mx: 1,
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              {language === 'marathi' ? item.name : item.en}
            </Button>
            <Menu
              anchorEl={anchorEl?.index === index ? anchorEl.el : null}
              open={anchorEl?.index === index}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 200,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }
              }}
            >
              {item.subItems.map((subItem, subIndex) => (
                <MenuItem 
                  key={subIndex}
                  component={Link}
                  to={subItem.path}
                  onClick={handleMenuClose}
                  sx={{
                    fontFamily: language === 'marathi' ? "'Noto Sans Devanagari', sans-serif" : 'inherit',
                    fontSize: '0.9rem',
                    py: 1.5
                  }}
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
            sx={{ 
              textTransform: 'none', 
              mx: 1,
              fontWeight: 500,
              fontSize: '0.95rem',
            }}
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
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '20px',
          px: 2,
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': {
            borderColor: 'white',
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        {language === 'marathi' ? 'English' : 'मराठी'}
      </Button>
    </Box>
  );

  // Mobile Navigation - shows all items including hidden ones
  const renderMobileNav = () => (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: {
          width: '85%',
          maxWidth: 300,
          bgcolor: '#f8f9fa',
          backgroundImage: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
          boxShadow: '2px 0 15px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box sx={{ 
        p: 2, 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "'Roboto Condensed', sans-serif" }}>
          ICDS AUSA
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
      
      <List sx={{ py: 0 }}>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem 
              button 
              component={item.subItems ? 'div' : Link}
              to={!item.subItems ? item.path : null}
              onClick={item.subItems ? () => handleMobileMenuToggle(index) : handleDrawerToggle}
              sx={{
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.03)' },
                py: 1.5,
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                transition: 'background-color 0.2s ease'
              }}
            >
              <Box sx={{ 
                fontSize: '1.4rem',
                mr: 2,
                width: 30,
                textAlign: 'center',
                opacity: 0.8
              }}>
                {item.icon}
              </Box>
              <ListItemText 
                primary={language === 'marathi' ? item.name : item.en} 
                primaryTypographyProps={{ 
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontFamily: language === 'marathi' ? "'Noto Sans Devanagari', sans-serif" : "'Roboto', sans-serif",
                  letterSpacing: language === 'marathi' ? '0.5px' : '0.3px'
                }}
              />
              {item.subItems && (
                expandedMenu === index ? 
                <ExpandLess sx={{ color: theme.palette.text.secondary }} /> : 
                <ExpandMore sx={{ color: theme.palette.text.secondary }} />
              )}
            </ListItem>
            
            {item.subItems && (
              <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem 
                      key={subIndex}
                      button 
                      component={Link}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{ 
                        pl: 6,
                        py: 1.25,
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                      }}
                    >
                      <Box sx={{ 
                        fontSize: '1.2rem',
                        mr: 2,
                        width: 30,
                        textAlign: 'center',
                        opacity: 0.7
                      }}>
                        {subItem.icon}
                      </Box>
                      <ListItemText 
                        primary={language === 'marathi' ? subItem.name : subItem.en} 
                        primaryTypographyProps={{ 
                          fontSize: '0.9rem',
                          color: theme.palette.text.secondary,
                          fontFamily: language === 'marathi' ? "'Noto Sans Devanagari', sans-serif" : "'Roboto', sans-serif",
                          fontWeight: 500
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        
        <Divider sx={{ my: 1, bgcolor: 'rgba(0,0,0,0.08)' }} />
        
        <ListItem 
          button 
          onClick={() => {
            handleLanguageToggle();
            handleDrawerToggle();
          }}
          sx={{
            py: 1.5,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' }
          }}
        >
          <Box sx={{ 
            fontSize: '1.4rem',
            mr: 2,
            width: 30,
            textAlign: 'center'
          }}>
            {language === 'marathi' ? '🇬🇧' : '🇮🇳'}
          </Box>
          <ListItemText 
            primary={language === 'marathi' ? 'English' : 'मराठी'} 
            primaryTypographyProps={{ 
              fontSize: '1rem',
              fontWeight: 600,
              color: theme.palette.text.primary
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ 
        bgcolor: 'primary.main', 
        boxShadow: 'none',
      }}>
        <Toolbar sx={{ 
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 2, sm: 3 }
        }}>
          <Typography 
            variant="h6" 
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'white',
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            ICDS AUSA
          </Typography>
          
          {!isMobile ? renderDesktopNav() : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Add padding to account for AppBar */}
      <Box sx={{ height: { xs: 56, sm: 64 } }} />
      
      {renderMobileNav()}
    </>
  );
};

export default Header;