import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Dialog, 
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  Paper
} from '@mui/material';
import { Close, NavigateBefore, NavigateNext, PlayCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Gallery data organized by categories
const galleryData = {
  photos: [
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386619/WhatsApp_Image_2025-04-18_at_00.43.30_7f19834b_etszix.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386619/WhatsApp_Image_2025-04-18_at_00.35.20_d10e931b_shwvpa.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386618/WhatsApp_Image_2025-04-18_at_00.35.14_a456d67d_z2c3ao.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386615/poshan_abh_uu4d2b.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386615/purva_baly_acpkyr.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386612/kishor_muli_yojna_ko3gwg.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386611/IMG-20250418-WA0031_ofqxbk.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386611/IMG-20250418-WA0030_b9fclj.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386611/IMG-20250418-WA0029_lzyteu.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386610/IMG-20250418-WA0028_u6d8na.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386608/IMG-20250418-WA0027_q4b0lg.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386608/IMG-20250418-WA0026_bx5upd.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386608/IMG-20250418-WA0025_miuu5c.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386607/IMG-20250418-WA0024_hynjwo.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386607/IMG-20250418-WA0022_fueagd.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386607/IMG-20250418-WA0023_xmzw2x.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386606/IMG-20250418-WA0021_qvxoja.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386606/IMG-20250418-WA0020_xcumrd.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386605/home_page_nld9dc.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386604/baby_care_ea50vy.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386603/angan5_zchynb.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386603/angan4_qjmr4l.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386603/angan3_yhitxt.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386603/angan2_uqazra.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386601/angan1_ts0psd.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386600/5_yaciw8.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386599/4_v3gwzq.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386599/3_qhvmja.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386599/2_mojwpt.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386598/1_wakjr5.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300923/6_cqps2n.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300923/7_uaxwep.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300923/4_kduual.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300923/2_aucutk.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300923/1_vumfzi.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300922/3_xodk1m.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300922/9_qh4r9m.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745300922/8_mpc5ed.jpg'
  ],
  videos: [
    'https://res.cloudinary.com/dn9q2qrcy/video/upload/v1745403587/vid1_fxb0c7.mp4',
    'https://res.cloudinary.com/dn9q2qrcy/video/upload/v1745403570/vid2_otczps.mp4'
  ],
  news: [
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386614/news3_mq3hq1.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386614/news4_tutbkt.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386614/news5_n3oj2v.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386613/news1_qwppsr.jpg',
    'https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386613/news2_ohqsmu.jpg'
  ]
};

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState('photos');
  const [currentItem, setCurrentItem] = useState({ type: 'photos', index: 0 });
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleNext = () => {
    const items = galleryData[currentItem.type] || [];
    if (items.length > 0) {
      setCurrentItem(prev => ({
        ...prev,
        index: (prev.index + 1) % items.length
      }));
    }
  };

  const handlePrevious = () => {
    const items = galleryData[currentItem.type] || [];
    if (items.length > 0) {
      setCurrentItem(prev => ({
        ...prev,
        index: (prev.index - 1 + items.length) % items.length
      }));
    }
  };

  const openItem = (type, index) => {
    setCurrentItem({ type, index });
    setOpen(true);
  };

  const currentItems = galleryData[currentTab] || [];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom 
        sx={{ 
          mb: 6,
          fontFamily: '"Poppins", "Arial", sans-serif',
          fontWeight: 600,
          color: '#2E7D32'
        }}
      >
        आमची गॅलरी
      </Typography>
      
      <Paper elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            '& .MuiTabs-indicator': {
              height: 4,
              borderRadius: 2
            }
          }}
        >
          <Tab 
            value="photos" 
            label="फोटो" 
            sx={{ 
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: 600 
            }} 
          />
          <Tab 
            value="videos" 
            label="व्हिडिओ" 
            sx={{ 
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: 600 
            }} 
          />
          <Tab 
            value="news" 
            label="वृत्तपत्र कटिंग" 
            sx={{ 
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: 600 
            }} 
          />
        </Tabs>
      </Paper>

      <Grid container spacing={4}>
        {currentItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                onClick={() => openItem(currentTab, index)}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 4,
                  cursor: 'pointer',
                  aspectRatio: currentTab === 'news' ? '3/4' : '4/3',
                  '&:hover .overlay': {
                    opacity: 1
                  }
                }}
              >
                {currentTab === 'videos' ? (
                  <>
                    <Box
                      component="video"
                      src={item}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      muted
                      loop
                      autoPlay
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      <PlayCircle sx={{ fontSize: 60, color: 'white' }} />
                    </Box>
                  </>
                ) : (
                  <Box
                    component="img"
                    src={item}
                    alt=""
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                )}
              </Box>
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
            position: 'relative',
            overflow: 'visible'
          }
        }}
      >
        {galleryData[currentItem.type] && galleryData[currentItem.type][currentItem.index] && (
          <>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ 
                position: 'absolute', 
                right: -16, 
                top: -16, 
                zIndex: 1,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              <Close />
            </IconButton>
            
            {currentItem.type === 'videos' ? (
              <Box
                component="video"
                src={galleryData[currentItem.type][currentItem.index]}
                controls
                autoPlay
                sx={{ 
                  width: '100%', 
                  maxHeight: '90vh', 
                  borderRadius: 2,
                  outline: 'none'
                }}
              />
            ) : (
              <>
                <IconButton
                  onClick={handlePrevious}
                  sx={{ 
                    position: 'absolute', 
                    left: -16, 
                    top: '50%', 
                    zIndex: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  <NavigateBefore />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{ 
                    position: 'absolute', 
                    right: -16, 
                    top: '50%', 
                    zIndex: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  <NavigateNext />
                </IconButton>
                <Box
                  component="img"
                  src={galleryData[currentItem.type][currentItem.index]}
                  alt=""
                  sx={{ 
                    width: '100%', 
                    maxHeight: '90vh', 
                    objectFit: 'contain',
                    borderRadius: 2
                  }}
                />
              </>
            )}
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Gallery;