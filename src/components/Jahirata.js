import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';
import DownloadIcon from '@mui/icons-material/Download';

const Jahirata = () => {
  const notices = [
    {
      id: 1,
      title: 'आंगणवाडी सेविका भरती जाहीरनामा',
      date: '१५ जुलै २०२३',
      description: 'औसा तालुक्यातील ५० आंगणवाडी सेविका पदांसाठी भरती जाहीरनामा',
      pdfLink: 'https://example.com/recruitment_notice.pdf'
    },
    {
      id: 2,
      title: 'पोषण आहार वितरण कार्यक्रम',
      date: '२५ ऑगस्ट २०२३',
      description: 'सर्व आंगणवाडी केंद्रांवर पोषण आहार वितरण कार्यक्रमाची जाहिरात',
      pdfLink: 'https://example.com/nutrition_program.pdf'
    },
    {
      id: 3,
      title: 'लसीकरण मोहीम',
      date: '१० सप्टेंबर २०२३',
      description: 'सर्व बालकांसाठी लसीकरण मोहिमेचे वेळापत्रक',
      pdfLink: 'https://example.com/vaccination_schedule.pdf'
    },
    {
      id: 4,
      title: 'प्रशिक्षण कार्यशाळा',
      date: '५ ऑक्टोबर २०२३',
      description: 'आंगणवाडी कर्मचाऱ्यांसाठी प्रशिक्षण कार्यशाळेची सूचना',
      pdfLink: 'https://example.com/training_workshop.pdf'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom sx={{ 
          fontWeight: 700, 
          color: 'primary.main',
          mb: 4,
          textAlign: 'center',
          fontFamily: "'Noto Sans Devanagari', sans-serif"
        }}>
          जाहीरात
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            एकात्मिक बाल विकास सेवा (ICDS) औसा येथील सर्व अलीकडील जाहिराती येथे पहा. 
            सर्व सूचना आणि जाहिराती येथे नियमितपणे अद्ययावत केल्या जातात.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <List>
            {notices.map((notice, index) => (
              <React.Fragment key={notice.id}>
                <ListItem alignItems="flex-start" sx={{ py: 3 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    <EventIcon fontSize="large" />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Noto Sans Devanagari', sans-serif"
                        }}>
                          {notice.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                            sx={{ display: 'block', mb: 1 }}
                          >
                            {notice.description}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            तारीख: {notice.date}
                          </Typography>
                        </>
                      }
                    />
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    href={notice.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<DownloadIcon />}
                    sx={{
                      textTransform: 'none',
                      fontFamily: "'Noto Sans Devanagari', sans-serif"
                    }}
                  >
                    डाउनलोड
                  </Button>
                </ListItem>
                {index < notices.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            जाहिरातींसंबंधी अधिक माहितीसाठी आमच्या कार्यालयाशी संपर्क साधा
          </Typography>
          <Button 
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}
          >
            संपर्क करा
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Jahirata;