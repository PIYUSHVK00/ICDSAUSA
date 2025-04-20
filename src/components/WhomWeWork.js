import React, { useContext, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  useTheme,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import { LanguageContext } from '../App';
import { styled } from '@mui/material/styles';

// Styled components for flip card effect
const FlipCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  perspective: '1000px',
  width: '100%',
  height: '300px',
  cursor: 'pointer',
  border: 'none',
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6]
  }
}));

const FlipCardInner = styled('div')(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'none'
}));

const FlipCardSide = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius
}));

const FlipCardFront = styled(FlipCardSide)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText
}));

const FlipCardBack = styled(FlipCardSide)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  transform: 'rotateY(180deg)',
  overflowY: 'auto'
}));

const WhomWeWork = () => {
  const theme = useTheme();
  const { language } = useContext(LanguageContext);
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const targetGroups = [
    {
      icon: '👶',
      title: '६ महिन्यांपेक्षा कमी वय असलेल्या मुलांना',
      enTitle: 'Children below 6 months',
      services: [
        { marathi: '• लसीकरण', english: '• Vaccination' }
      ]
    },
    {
      icon: '🧒',
      title: '६ ते ३ वर्षे वयोगटातील मुले',
      enTitle: 'Children (6 months to 3 years)',
      services: [
        { marathi: '• पुरवणी पोषण', english: '• Supplementary nutrition' },
        { marathi: '• लसीकरण', english: '• Vaccination' },
        { marathi: '• आरोग्य तपासणी', english: '• Health check-up' },
        { marathi: '• रेफरल सेवा', english: '• Referral services' }
      ]
    },
    {
      icon: '👦',
      title: '३ ते ६ वर्ष वयोगटातील मुले',
      enTitle: 'Children (3 to 6 years)',
      services: [
        { marathi: '• पुरवणी पोषण', english: '• Supplementary nutrition' },
        { marathi: '• लसीकरण', english: '• Vaccination' },
        { marathi: '• आरोग्य तपासणी', english: '• Health check-up' },
        { marathi: '• रेफरल सेवा', english: '• Referral services' },
        { marathi: '• अनौपचारिक शालेय शिक्षण', english: '• Informal school education' }
      ]
    },
    {
      icon: '🤰',
      title: 'अपेक्षित आणि नर्सिंग माता',
      enTitle: 'Pregnant and nursing mothers',
      services: [
        { marathi: '• आरोग्य तपासणी', english: '• Health check-up' },
        { marathi: '• धनुर्वात विरुद्ध लसीकरण', english: '• Tetanus vaccination' },
        { marathi: '• रेफरल सेवा', english: '• Referral services' },
        { marathi: '• पुरवणी पोषण', english: '• Supplementary nutrition' },
        { marathi: '• पोषण व आरोग्य शिक्षण', english: '• Nutrition and health education' }
      ]
    },
    {
      icon: '👩',
      title: 'इतर स्त्रिया (१५ ते ४५ वर्ष)',
      enTitle: 'Other women (15 to 45 years)',
      services: [
        { marathi: '• पोषण व आरोग्य शिक्षण', english: '• Nutrition and health education' }
      ]
    },
    {
      icon: '👧',
      title: 'किशोरवयीन मुली (११ ते १८ वर्ष)',
      enTitle: 'Adolescent girls (11 to 18 years)',
      services: [
        { marathi: '• पोषण व आरोग्य शिक्षण', english: '• Nutrition and health education' },
        { marathi: '• पुरवणी पोषण', english: '• Supplementary nutrition' },
        { marathi: '• महिला व मुलांचे अधिकार', english: '• Women and child rights awareness' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Page Title Only - Breadcrumbs removed */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: theme.palette.primary.main,
          mb: 4,
          textAlign: 'center'
        }}
      >
        {language === 'marathi' ? 'आम्ही कोणासाठी काम करतो' : 'Who We Serve'}
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={3}>
        {targetGroups.map((group, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard onClick={() => handleCardClick(index)}>
              <FlipCardInner flipped={flippedCards[index]}>
                <FlipCardFront>
                  <Box sx={{ fontSize: '3rem', mb: 2 }}>
                    {group.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ fontWeight: 'bold' }}
                  >
                    {language === 'marathi' ? group.title : group.enTitle}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {language === 'marathi' ? 'सेवा पाहण्यासाठी क्लिक करा' : 'Click to view services'}
                  </Typography>
                </FlipCardFront>
                <FlipCardBack>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {language === 'marathi' ? 'सेवा' : 'Services'}
                  </Typography>
                  <List dense sx={{ width: '100%', textAlign: 'left' }}>
                    {group.services.map((service, i) => (
                      <ListItem key={i} sx={{ py: 0 }}>
                        <ListItemText 
                          primary={language === 'marathi' ? service.marathi : service.english} 
                          primaryTypographyProps={{ variant: 'body1' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhomWeWork;