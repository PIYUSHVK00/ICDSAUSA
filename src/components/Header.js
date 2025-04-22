import React, { useState, useEffect } from 'react';
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
  List,
  ListItem,
  ListItemText,
  Drawer,
  Collapse,
  Avatar,
  Slide,
  useScrollTrigger,
  CssBaseline
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { Link, useLocation } from 'react-router-dom';
import icdsLogo from '../assets/icds-logo.ico'; // Make sure this path is correct

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { 
      name: 'मुख्यपृष्ठ', 
      path: '/',
      icon: '🏠'
    },
    { 
      name: 'आमच्याबद्दल', 
      icon: 'ℹ️',
      subItems: [
        { name: 'आमची माहिती', path: '/about', icon: '👥' },
        { name: 'आम्ही कोणासाठी काम करतो', path: '/about/whom-we-work', icon: '👨‍👩‍👧‍👦' },
        { name: 'संघटनात्मक संरचना', path: '/about/organizational-structure', icon: '🏛️' },
        { name: 'जाहीरात', path: '/jahirata', icon: '📢' }
      ]
    },
    { 
      name: 'सर्व योजना', 
      icon: '📋',
      subItems: [
        { name: 'योजनांची यादी', path: '/Yojana', icon: '📑' },
        { name: 'धोरणे', path: '/dhorane', icon: '📜' }
      ]
    },
    {
      name: 'केंद्रे', 
      path: '/centers',
      icon: '🏢'
    },
    { 
      name: 'गॅलरी', 
      path: '/gallery',
      icon: '📷'
    },
    { 
      name: 'प्रगती अहवाल', 
      path: '/pragati-ahval',
      icon: '📈'
    }
  ];

  const additionalItems = [
    { 
      name: 'माहितीचा अधिकार', 
      path: '/mahiti-adhikar',
      icon: 'ℹ️'
    },
    { 
      name: 'लोकसेवा हमी कायदा', 
      path: '/lokseva-hami-kayda',
      icon: '⚖️'
    },
    { 
      name: 'संपर्क', 
      path: '/contact',
      icon: '📞'
    }
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
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  // Desktop Navigation
  const renderDesktopNav = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {navItems.map((item, index) => (
        item.subItems ? (
          <div key={index}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, index)}
              sx={{ 
                textTransform: 'none', 
                px: 2,
                fontWeight: 500,
                fontSize: '0.95rem',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {item.name}
              <ExpandMore sx={{ fontSize: '1rem', ml: 0.5 }} />
            </Button>
            <Menu
              anchorEl={anchorEl?.index === index ? anchorEl.el : null}
              open={anchorEl?.index === index}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  minWidth: 220,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  '& .MuiMenuItem-root': {
                    fontSize: '0.9rem',
                    minHeight: 40
                  }
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
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    py: 1.25,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.light,
                      color: 'white'
                    }
                  }}
                >
                  <Box sx={{ mr: 1.5, opacity: 0.8 }}>{subItem.icon}</Box>
                  {subItem.name}
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
              px: 2,
              fontWeight: 500,
              fontSize: '0.95rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            {item.name}
          </Button>
        )
      ))}
      
      <Box sx={{ display: 'flex', ml: 1, gap: 1 }}>
        {additionalItems.map((item, index) => (
          <Button
            key={index}
            component={Link}
            to={item.path}
            color="inherit"
            sx={{ 
              textTransform: 'none', 
              px: 2,
              fontWeight: 500,
              fontSize: '0.95rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  // Mobile Drawer Content
  const drawerContent = (
    <Box sx={{ width: '80vw', maxWidth: 350, height: '100vh' }}>
      <Box sx={{ 
        p: 2, 
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={icdsLogo} 
            alt="ICDS Logo"
            sx={{ width: 40, height: 40, mr: 1.5 }}
          />
          <Typography variant="h6" sx={{ 
            fontWeight: 'bold', 
            fontFamily: "'Roboto Condensed', sans-serif",
            lineHeight: 1.2
          }}>
            ICDS AUSA
          </Typography>
        </Box>
        <IconButton 
          onClick={handleDrawerToggle} 
          color="inherit"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.15)'
            }
          }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
      
      <Box sx={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
        <List sx={{ py: 0 }}>
          {[...navItems, ...additionalItems].map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                button 
                component={item.subItems ? 'div' : Link}
                to={!item.subItems ? item.path : null}
                onClick={item.subItems ? () => handleMobileMenuToggle(index) : undefined}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  '&:hover': { 
                    backgroundColor: theme.palette.action.hover 
                  }
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
                  primary={
                    <Typography sx={{ 
                      fontWeight: 600,
                      fontFamily: "'Noto Sans Devanagari', sans-serif"
                    }}>
                      {item.name}
                    </Typography>
                  }
                />
                {item.subItems && (
                  expandedMenu === index ? 
                  <ExpandLess sx={{ color: 'text.secondary' }} /> : 
                  <ExpandMore sx={{ color: 'text.secondary' }} />
                )}
              </ListItem>
              
              {item.subItems && (
                <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ 
                    bgcolor: theme.palette.background.default
                  }}>
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
                          '&:hover': { 
                            backgroundColor: theme.palette.action.hover 
                          }
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
                          primary={
                            <Typography sx={{ 
                              fontFamily: "'Noto Sans Devanagari', sans-serif"
                            }}>
                              {subItem.name}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: scrolled ? 'rgba(25, 50, 75, 0.9)' : 'primary.main',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? theme.shadows[4] : 'none',
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none'
          }}
        >
          <Toolbar sx={{ 
            minHeight: { xs: 56, sm: 70 },
            px: { xs: 2, sm: 4 },
            transition: 'all 0.3s ease'
          }}>
            <Box 
              component={Link}
              to="/"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                mr: 3
              }}
            >
              <Avatar 
                src={icdsLogo} 
                alt="ICDS Logo"
                sx={{ 
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  mr: 1.5,
                  boxShadow: theme.shadows[2]
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: { xs: '1.1rem', sm: '1.35rem' },
                  lineHeight: 1.2
                }}
              >
                ICDS AUSA
              </Typography>
            </Box>
            
            <Box sx={{ flexGrow: 1 }} />
            
            {!isMobile ? renderDesktopNav() : (
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)'
                  }
                }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '80vw',
              maxWidth: 350
            }
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      
      {/* Add padding to account for AppBar */}
      <Toolbar />
    </>
  );
};

export default Header;