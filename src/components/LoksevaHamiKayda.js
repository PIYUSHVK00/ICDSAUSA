import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LoksevaHamiKayda = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: 1,
      name: 'आंगणवाडीतील गरोदर मातांची नोंदणी करणे',
      timeLimit: '01 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
    },
    {
      id: 2,
      name: '06 महिने ते 03 वर्षापर्यंतच्या मुलांची आंगणवाडीत नोंदणी करणे',
      timeLimit: '01 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
    },
    {
      id: 3,
      name: '03 ते 06 वर्षापर्यंतच्या मुलांची आंगणवाडीत नोंदणी करणे',
      timeLimit: '01 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी(ग्रा)'
    },
    {
      id: 4,
      name: 'इंदिरा गांधी मातृत्व सहयोग योजनेअंतर्गत गर्भवती महिलांना आर्थिक सहाय्य',
      timeLimit: '15 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी'
    },
    {
      id: 5,
      name: 'सबली योजनेअंतर्गत विकलांग मुलींचे नोंदणीकरण',
      timeLimit: '01 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी'
    },
    {
      id: 6,
      name: 'विकलांग कन्या योजनेअंतर्गत मुलींचे नोंदणीकरण',
      timeLimit: '01 दिवस',
      officer: 'आंगणवाडी सेविका',
      firstAppeal: 'आंगणवाडी पर्यवेक्षिका',
      secondAppeal: 'बाल विकास प्रकल्प अधिकारी'
    },
    {
      id: 7,
      name: 'केंद्र सरकारच्या नोकरी करणाऱ्या महिलांसाठीच्या वसतिगृह सुविधेच्या योजनेअंतर्गत अर्ध सरकारी संस्थांच्या सूची करणे',
      timeLimit: '75 दिवस',
      officer: 'जिल्हा महिला व बाल विकास अधिकारी',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 8,
      name: 'मनोदैहिक योजनेअंतर्गत पीडितांना (महिला/बालक) आर्थिक सहाय्य देण्यासाठी पात्रता निश्चिती करणे',
      timeLimit: '36 दिवस',
      officer: 'जिल्हा महिला व बाल विकास अधिकारी',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 9,
      name: 'नैसर्गिक/अनैसर्गिक संकटात सापडलेल्या मुलांना समाजात पुनर्वसनाच्या पायावर उभे करण्यासाठी स्थापन करण्यात आलेल्या राज्यातील बालगृहात/निराकरण गृहात प्रवेश मिळण्यासाठी',
      timeLimit: '15 दिवस',
      officer: 'राज्य आधार गृह/निराकरण गृह यांचे अधिक्षक',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 10,
      name: 'नैसर्गिक/अनैसर्गिक संकटात सापडलेल्या महिलांना समाजात पुनर्वसनाच्या पायावर उभे करण्यासाठी स्थापन करण्यात आलेल्या राज्यातील आश्रयगृहात प्रवेश मिळण्यासाठी',
      timeLimit: 'तात्काळ',
      officer: 'राज्य आधार गृहाचे अधिक्षक',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 11,
      name: 'वेश्याव्यवसायी म्हणून ओळख पटलेल्या महिला/पुरुष वेश्याव्यवसायी आश्रयगृहात प्रवेश',
      timeLimit: '15 दिवस',
      officer: 'सहाय्यक आयुक्त (भिक्षा प्रतिबंधक शाखा) महिला व बाल विकास आयुक्तालय, पुणे',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 12,
      name: 'IITians PACE अॅकॅडमी सारख्या संस्थांच्या शिक्षणाने स्पर्धात्मक परीक्षांसाठी 50 मुलींकरिता मोफत वर्गणीची योजना',
      timeLimit: 'गुणवत्ता यादी जाहीर झाल्यापासून 30 दिवस',
      officer: 'सहाय्यक आयुक्त (बाल विकास) महिला व बाल विकास आयुक्तालय, पुणे',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
    },
    {
      id: 13,
      name: 'समुपदेशन केंद्र चालवण्यासाठी स्वयंसेवी संस्थांनी विनंती उपलब्ध करुन देणेबाबत',
      timeLimit: '180 दिवस',
      officer: 'जिल्हा महिला व बाल विकास अधिकारी',
      firstAppeal: 'उपआयुक्त, महिला व बाल विकास विभाग',
      secondAppeal: 'सहाय्यक आयुक्त, महिला व बाल विकास आयुक्तालय, पुणे'
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
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>क्र.</TableCell>
                  <TableCell>लोकसेवेचे नाव</TableCell>
                  <TableCell>कालमर्यादा</TableCell>
                  <TableCell>जबाबदार अधिकारी</TableCell>
                  <TableCell>प्रथम अपील अधिकारी</TableCell>
                  <TableCell>द्वितीय अपील अधिकारी</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.id}</TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.timeLimit}</TableCell>
                    <TableCell>{service.officer}</TableCell>
                    <TableCell>{service.firstAppeal}</TableCell>
                    <TableCell>{service.secondAppeal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
              onClick={() => navigate('/complaint')}
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