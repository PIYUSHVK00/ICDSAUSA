import React, { useState, useContext } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Dialog, 
  IconButton,
  useMediaQuery
} from '@mui/material';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { LanguageContext } from '../App';

// Replace these with your actual image paths
const galleryImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
];

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openImage = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
        {language === 'english' ? 'Our Gallery' : 'गॅलरी'}
      </Typography>
      
      <Grid container spacing={4}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Box
                component="img"
                src={image}
                alt={language === 'english' ? `Gallery image ${index + 1}` : `गॅलरी प्रतिमा ${index + 1}`}
                onClick={() => openImage(index)}
                sx={{
                  width: '100%',
                  height: isMobile ? 200 : 300,
                  objectFit: 'cover',
                  borderRadius: 2,
                  cursor: 'pointer',
                  boxShadow: 3
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            position: 'relative'
          }
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: 16, 
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <Close />
        </IconButton>
        <IconButton
          onClick={handlePrevious}
          sx={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: '50%', 
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <NavigateNext />
        </IconButton>
        <Box
          component="img"
          src={galleryImages[currentImageIndex]}
          alt=""
          sx={{ 
            width: '100%', 
            maxHeight: '90vh', 
            objectFit: 'contain' 
          }}
        />
      </Dialog>
    </Container>
  );
};

export default Gallery;