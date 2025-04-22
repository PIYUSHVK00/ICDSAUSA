import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Link,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Dhorane = () => {
  const policies = [
    { 
      id: 1,
      name: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY)',
      type: 'सरकारी ठराव',
      date: '02/04/2025',
      link: 'https://icds.gov.in/sites/default/files/policies-document/PMMVY_GR_1.pdf'
    },
    { 
      id: 2,
      name: 'वाढदिवस साजरा',
      type: 'चांगल्या पद्धती',
      date: '01/06/2016',
      link: 'https://icds.gov.in/sites/default/files/policies-document/ECCE_Policy_0.pdf'
    },
    { 
      id: 3,
      name: 'किचन गार्डनची अंमलबजावणी',
      type: 'चांगल्या पद्धती',
      date: '13/07/2016',
      link: 'https://icds.gov.in/sites/default/files/policies-document/ECCE_Policy_0.pdf'
    },
    { 
      id: 4,
      name: 'पुर्व बाल्यावस्थेतील संगोपन व शिक्षण (ECCE) धोरण',
      type: 'सरकारी ठराव',
      date: '11/10/2022',
      link: 'https://icds.gov.in/sites/default/files/policies-document/ECCE_Policy_0.pdf'
    },
    { 
      id: 5,
      name: 'बेटी बचाओ बेटी पढाओ योजना',
      type: 'सरकारी ठराव',
      date: '06/08/2018',
      link: 'https://icds.gov.in/sites/default/files/policies-document/VCDC_GR_Non_Tribal.pdf'
    },
    { 
      id: 6,
      name: 'बिगर आदिवासी क्षेत्रात ग्राम बाल विकास केंद्र',
      type: 'सरकारी ठराव',
      date: '26/09/2017',
      link: 'https://icds.gov.in/sites/default/files/policies-document/VCDC_GR_Non_Tribal.pdf'
    },
    { 
      id: 7,
      name: 'आकार बालशिक्षणक्रम वेळापत्रक',
      type: 'चांगल्या पद्धती',
      date: '20/07/2022',
      link: 'https://icds.gov.in/sites/default/files/policies-document/Aakar_ECCE_Calendar.pdf'
    },
    { 
      id: 8,
      name: 'राष्ट्रीय पोषण धोरण',
      type: 'धोरणे',
      date: '16/07/2021',
      link: 'https://icds.gov.in/sites/default/files/policies-document/National_Nutrition_Policy.pdf'
    },
    { 
      id: 9,
      name: 'पूर्व शालेय शिक्षण',
      type: 'चांगल्या पद्धती',
      date: '13/07/2016',
      link: 'https://icds.gov.in/sites/default/files/policies-document/pre-school-education_0.pdf'
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
          धोरणे
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            एकात्मिक बाल विकास सेवा (ICDS) योजनेअंतर्गत विविध धोरणे, सरकारी ठराव आणि चांगल्या पद्धती येथे उपलब्ध आहेत. 
            खालील तक्त्यामध्ये सर्व धोरणांची माहिती आणि संबंधित दस्तऐवज डाउनलोड लिंक दिलेली आहे.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.light' }}>
                  <TableCell sx={{ fontWeight: 600, width: '5%' }}>क्र.</TableCell>
                  <TableCell sx={{ fontWeight: 600, width: '40%' }}>धोरण/योजनेचे नाव</TableCell>
                  <TableCell sx={{ fontWeight: 600, width: '20%' }}>प्रकार</TableCell>
                  <TableCell sx={{ fontWeight: 600, width: '15%' }}>दिनांक</TableCell>
                  <TableCell sx={{ fontWeight: 600, width: '20%' }}>दस्तऐवज</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {policies.map((policy) => (
                  <TableRow key={policy.id} hover>
                    <TableCell>{policy.id}</TableCell>
                    <TableCell>
                      <Typography sx={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {policy.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {policy.type}
                      </Typography>
                    </TableCell>
                    <TableCell>{policy.date}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        component={Link}
                        href={policy.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<PictureAsPdfIcon />}
                        sx={{
                          textTransform: 'none',
                          fontFamily: "'Noto Sans Devanagari', sans-serif"
                        }}
                      >
                        डाउनलोड
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontWeight: 600,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            धोरणांसंबंधी महत्वाची सूचना
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                सर्व धोरणे भारत सरकारच्या महिला व बाल विकास मंत्रालयाद्वारे जारी केलेली आहेत.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                कोणत्याही धोरणासंबंधी अधिक माहितीसाठी संबंधित आंगणवाडी केंद्र किंवा जिल्हा कार्यालयाशी संपर्क साधावा.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                नवीन आणि अद्ययावत धोरणांच्या अपडेटसाठी हा पृष्ठ नियमितपणे तपासा.
              </Typography>
            </li>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Dhorane;