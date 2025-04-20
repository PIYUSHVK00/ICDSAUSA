import React, { useContext, useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  styled,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '280px',
    background: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(2),
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '8px',
  },
  marginBottom: '4px',
}));

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const navItems = [
    { name: 'मुख्यपृष्ठ', path: '/', en: 'Home' },
    { name: 'आमच्याबद्दल', path: '/about', en: 'About' },
    { 
      name: 'सेवा', 
      path: '/services', 
      en: 'Services',
      subItems: [
        { name: 'शिशुसेवा', path: '/services/childcare', en: 'Child Care' },
        { name: 'पोषण', path: '/services/nutrition', en: 'Nutrition' },
      ]
    },
    { name: 'केंद्रे', path: '/centers', en: 'Centers' },
    { name: 'गॅलरी', path: '/gallery', en: 'Gallery' },
    { name: 'संपर्क', path: '/contact', en: 'Contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'marathi' ? 'english' : 'marathi');
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            ICDS AUSA
          </Typography>
          
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    }
                  }}
                >
                  {language === 'marathi' ? item.name : item.en}
                </Button>
              ))}
              <Button 
                onClick={handleLanguageToggle}
                color="inherit"
                sx={{ 
                  ml: 2,
                  border: '1px solid white',
                  borderRadius: '20px',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  }
                }}
              >
                {language === 'marathi' ? 'English' : 'मराठी'}
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ 
                fontSize: '2rem',
                '&:hover': {
                  backgroundColor: 'primary.light',
                }
              }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={300}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <IconButton onClick={toggleDrawer(false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List>
          {navItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <StyledListItem 
                button 
                component={Link} 
                to={item.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemText 
                  primary={language === 'marathi' ? item.name : item.en} 
                  primaryTypographyProps={{ fontSize: '1.1rem' }}
                />
                {item.subItems && (
                  <IconButton 
                    edge="end" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleItemClick(index);
                    }}
                    color="inherit"
                  >
                    {expandedItem === index ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                )}
              </StyledListItem>
              
              {item.subItems && (
                <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <StyledListItem 
                        key={subItem.path}
                        button 
                        component={Link} 
                        to={subItem.path}
                        onClick={toggleDrawer(false)}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText 
                          primary={language === 'marathi' ? subItem.name : subItem.en} 
                          primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                      </StyledListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
          
          <Divider sx={{ my: 2, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          
          <StyledListItem 
            button 
            onClick={() => {
              handleLanguageToggle();
              toggleDrawer(false)();
            }}
          >
            <ListItemText 
              primary={language === 'marathi' ? 'English' : 'मराठी'} 
              primaryTypographyProps={{ fontSize: '1.1rem' }}
            />
          </StyledListItem>
        </List>
      </StyledDrawer>
    </>
  );
};

export default Header;