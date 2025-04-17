import React, { useContext } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton 
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  YouTube,
  LinkedIn,
  LocationOn,
  Phone,
  Email
} from '@mui/icons-material';
import { LanguageContext } from '../App';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    marathi: {
      title: 'आयसीडीएस औसा',
      description: 'पोषण, आरोग्य आणि शिक्षणाद्वारे औसा भागातील मुलांना आणि आईंना सक्षम करणे',
      quickLinks: 'द्रुत दुवे',
      contact: 'संपर्क माहिती',
      address: 'एकात्मिक बालविकास सेवा योजना प्रकल्प (ग्रामीण ), औसा भादा रोड, मारोती मंदिराच्या बाजूस, ता. औसा जि. लातूर- ४१३५२०',
      phone: '+९१ ९६२३८८५७१५',
      email: 'cdpoicdsausa@gmail.com',
      copyright: `© ${new Date().getFullYear()} आयसीडीएस औसा. सर्व हक्क राखीव.`,
      ministry: 'महिला व बाल विकास मंत्रालय, भारत सरकारची एक पहल'
    },
    english: {
      // ... (keep English content here)
    }
  };

  const current = content[language];

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              {current.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {current.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
              <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
              <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
              <IconButton sx={{ color: 'white' }}><YouTube /></IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {current.quickLinks}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="inherit" underline="hover" sx={{ mb: 1 }}>मुख्यपृष्ठ</Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ mb: 1 }}>आमच्याबद्दल</Link>
              <Link href="/services" color="inherit" underline="hover" sx={{ mb: 1 }}>सेवा</Link>
              <Link href="/contact" color="inherit" underline="hover">संपर्क</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {current.contact}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn />
                <Typography variant="body2">{current.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone />
                <Typography variant="body2">{current.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email />
                <Typography variant="body2">{current.email}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            {current.copyright}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {current.ministry}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;