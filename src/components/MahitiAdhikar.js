import React from 'react';
import { Container, Typography, Box, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MahitiAdhikar = () => {
  const faqItems = [
    {
      question: 'माहितीचा अधिकार कायदा (RTI) म्हणजे काय?',
      answer: 'माहितीचा अधिकार कायदा २००५ हा भारतीय संसदेने मंजूर केलेला एक कायदा आहे जो भारताच्या सर्व नागरिकांना सरकारी यंत्रणेकडून माहिती मिळविण्याचा अधिकार देतो.'
    },
    {
      question: 'आयसीडीएस अंतर्गत माहिती कशी मिळवावी?',
      answer: 'आयसीडीएस अंतर्गत माहिती मिळविण्यासाठी आपण जिल्हा कार्यक्रम अधिकारी (DPO) किंवा संबंधित आंगणवाडी केंद्राच्या प्रमुखांकडे RTI अर्ज सादर करू शकता.'
    },
    {
      question: 'RTI अर्ज कोठे सादर करावा?',
      answer: 'RTI अर्ज आयसीडीएसच्या जिल्हा कार्यालयात किंवा संबंधित आंगणवाडी केंद्राच्या प्रमुखांकडे सादर करावा.'
    },
    {
      question: 'अर्जासाठी शुल्क किती आहे?',
      answer: 'RTI अर्जासाठी ₹१० चे शुल्क आहे. गरीब घराण्यांसाठी (BPL) हे शुल्क माफ आहे.'
    },
    {
      question: 'माहिती मिळण्यासाठी किती वेळ लागतो?',
      answer: 'सामान्यपणे RTI अर्ज दाखल झाल्यापासून ३० दिवसांच्या आत माहिती मिळणे अपेक्षित आहे.'
    }
  ];

  const contactInfo = [
    { designation: 'जिल्हा कार्यक्रम अधिकारी', phone: '०२४०-२५६७८९०', email: 'dpo-icds-ausa@gov.in' },
    { designation: 'सहाय्यक कार्यक्रम अधिकारी', phone: '०२४०-२५६७८९१', email: 'apo-icds-ausa@gov.in' },
    { designation: 'महिला व बाल विकास विभाग', phone: '०२०-२५६७८९१२', email: 'wcd-maharashtra@gov.in' }
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
          माहितीचा अधिकार
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            माहितीचा अधिकार कायदा २००५ नुसार, कोणताही नागरिक आयसीडीएस योजनेसंबंधी माहिती मिळवू शकतो. खाली RTI संबंधित सर्व माहिती उपलब्ध आहे.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 6, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontWeight: 600,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            वार че често задавани въпроси
          </Typography>
          
          {faqItems.map((item, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ 
                  fontWeight: 500,
                  fontFamily: "'Noto Sans Devanagari', sans-serif"
                }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ 
                  fontFamily: "'Noto Sans Devanagari', sans-serif"
                }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Paper elevation={3} sx={{ p: 3, flex: 1, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ 
              mb: 3,
              fontWeight: 600,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}>
              संपर्क माहिती
            </Typography>
            
            <Box component="ul" sx={{ pl: 0 }}>
              {contactInfo.map((contact, index) => (
                <Box component="li" key={index} sx={{ 
                  listStyle: 'none', 
                  mb: 2,
                  p: 2,
                  bgcolor: 'background.default',
                  borderRadius: 1
                }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{contact.designation}</Typography>
                  <Typography>फोन: {contact.phone}</Typography>
                  <Typography>ईमेल: {contact.email}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, flex: 1, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ 
              mb: 3,
              fontWeight: 600,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}>
              RTI अर्ज नमुना
            </Typography>
            
            <Typography variant="body1" paragraph>
              आयसीडीएस संबंधित माहितीसाठी RTI अर्जाचा नमुना खालीलप्रमाणे:
            </Typography>
            
            <Box sx={{ 
              p: 3, 
              bgcolor: 'background.default',
              borderRadius: 1,
              fontFamily: "'Noto Sans Devanagari', sans-serif"
            }}>
              <Typography paragraph>प्रति,</Typography>
              <Typography paragraph>जिल्हा कार्यक्रम अधिकारी,</Typography>
              <Typography paragraph>एकात्मिक बाल विकास सेवा,</Typography>
              <Typography paragraph>औसा, जिल्हा लातूर.</Typography>
              <Typography paragraph sx={{ mt: 2 }}>विषय: माहितीचा अधिकार अंतर्गत माहिती मिळविणे बाबत.</Typography>
              <Typography paragraph sx={{ mt: 2 }}>महोदय/महोदया,</Typography>
              <Typography paragraph>माहितीचा अधिकार कायदा २००५ च्या कलम ६(१) अंतर्गत मी खालील माहिती मिळवू इच्छितो/इच्छिते:</Typography>
              <Typography paragraph sx={{ mt: 2 }}>१. [इच्छित माहितीचे तपशीलवार वर्णन]</Typography>
              <Typography paragraph>२. [इच्छित माहितीचे तपशीलवार वर्णन]</Typography>
              <Typography paragraph sx={{ mt: 2 }}>भवदीय,</Typography>
              <Typography paragraph>[तुमचे नाव]</Typography>
              <Typography paragraph>[पत्ता]</Typography>
              <Typography paragraph>[संपर्क नंबर]</Typography>
            </Box>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default MahitiAdhikar;