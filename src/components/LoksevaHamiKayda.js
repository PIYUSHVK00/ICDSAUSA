import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';

const LoksevaHamiKayda = () => {
  const services = [
    {
      name: 'आंगणवाडी प्रवेश',
      timeLimit: '७ दिवस',
      officer: 'आंगणवाडी सेविका',
      process: 'अर्ज सादर करणे → दस्तऐवज सत्यापन → प्रवेश पत्र जारी'
    },
    {
      name: 'पोषण आहार वितरण',
      timeLimit: 'महिन्याच्या पहिल्या आठवड्यात',
      officer: 'आंगणवाडी सेविका',
      process: 'नोंदणी → आहार वितरण'
    },
    {
      name: 'लसीकरण सेवा',
      timeLimit: 'निर्धारित तारखांना',
      officer: 'आरोग्य कर्मचारी',
      process: 'वेळापत्रकानुसार लसीकरण'
    },
    {
      name: 'प्री-स्कूल शिक्षण',
      timeLimit: 'शैक्षणिक वर्ष सुरू होण्यापासून',
      officer: 'आंगणवाडी शिक्षिका',
      process: 'नोंदणी → दैनंदिन शिक्षण कार्यक्रम'
    }
  ];

  const faqs = [
    {
      question: 'लोकसेवा हमी कायदा म्हणजे काय?',
      answer: 'लोकसेवा हमी कायदा हा महाराष्ट्र शासनाचा कायदा आहे जो नागरिकांना विविध सरकारी सेवा निश्चित कालावधीत मिळण्याची हमी देते.'
    },
    {
      question: 'आयसीडीएस अंतर्गत कोणत्या सेवा या कायद्याखाली येतात?',
      answer: 'आंगणवाडी प्रवेश, पोषण आहार वितरण, लसीकरण सेवा, प्री-स्कूल शिक्षण इत्यादी सेवा या कायद्याखाली येतात.'
    },
    {
      question: 'सेवा न मिळाल्यास काय करावे?',
      answer: 'सेवा न मिळाल्यास संबंधित अधिकाऱ्यांकडे तक्रार नोंदवावी किंवा जिल्हा ग्राहक सेवा केंद्र येथे अर्ज करावा.'
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
          लोकसेवा हमी कायदा
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            लोकसेवा हमी कायदा २०१५ नुसार, आयसीडीएस अंतर्गत पुरवल्या जाणाऱ्या सेवा निश्चित कालावधीत मिळण्याची हमी आहे. 
            खाली सेवांची माहिती आणि कालमर्यादा दिली आहे.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 6, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontWeight: 600,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            आयसीडीएस अंतर्गत सेवा आणि कालमर्यादा
          </Typography>
          
          <List>
            {services.map((service, index) => (
              <Paper key={index} elevation={2} sx={{ mb: 2 }}>
                <ListItem>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    <DescriptionIcon />
                  </Box>
                  <ListItemText
                    primary={
                      <Typography sx={{ 
                        fontWeight: 600,
                        fontFamily: "'Noto Sans Devanagari', sans-serif"
                      }}>
                        {service.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography component="span" sx={{ display: 'block' }}>
                          कालमर्यादा: {service.timeLimit}
                        </Typography>
                        <Typography component="span" sx={{ display: 'block' }}>
                          जबाबदार अधिकारी: {service.officer}
                        </Typography>
                        <Typography component="span" sx={{ display: 'block' }}>
                          प्रक्रिया: {service.process}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
        </Paper>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Paper elevation={3} sx={{ p: 3, flex: 1, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ 
              mb: 3,
              fontWeight: 600,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}>
              वारंवार विचारले जाणारे प्रश्न
            </Typography>
            
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ 
                    fontWeight: 500,
                    fontFamily: "'Noto Sans Devanagari', sans-serif"
                  }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ 
                    fontFamily: "'Noto Sans Devanagari', sans-serif"
                  }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>

          <Paper elevation={3} sx={{ p: 3, flex: 1, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ 
              mb: 3,
              fontWeight: 600,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}>
              तक्रार नोंदवणी प्रक्रिया
            </Typography>
            
            <Box component="ol" sx={{ pl: 2 }}>
              <li>
                <Typography paragraph>
                  तक्रार अर्ज संबंधित आंगणवाडी केंद्र किंवा जिल्हा कार्यालयात सादर करा
                </Typography>
              </li>
              <li>
                <Typography paragraph>
                  अर्जासोबत सर्व संबंधित दस्तऐवजे संलग्न करा
                </Typography>
              </li>
              <li>
                <Typography paragraph>
                  तक्रार नोंदणी क्रमांक घ्या
                </Typography>
              </li>
              <li>
                <Typography paragraph>
                  तक्रारीची निकाल कालमर्यादा: ३० दिवस
                </Typography>
              </li>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              तक्रार नोंदवा
            </Button>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default LoksevaHamiKayda;