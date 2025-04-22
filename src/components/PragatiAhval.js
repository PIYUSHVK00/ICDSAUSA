import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { motion } from 'framer-motion';

const PragatiAhval = () => {
  const progressData = [
    { year: '२०२३-२०२४', children: '१०,२५०', nutrition: '९,८००', healthCheckups: '९,५००', education: '८,७५०' },
    { year: '२०२२-२०२३', children: '९,८००', nutrition: '९,२००', healthCheckups: '८,९००', education: '८,२००' },
    { year: '२०२१-२०२२', children: '९,२००', nutrition: '८,७५०', healthCheckups: '८,३००', education: '७,६००' },
    { year: '२०२०-२०२१', children: '८,६००', nutrition: '८,२००', healthCheckups: '७,८००', education: '७,१००' },
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
          प्रगती अहवाल
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            mb: 2,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            औसा तालुक्यातील आयसीडीएसची प्रगती
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            एकात्मिक बाल विकास सेवा (ICDS) योजनेअंतर्गत औसा तालुक्यातील विविध सेवा आणि कार्यक्रमांचा प्रगती अहवाल खालीलप्रमाणे आहे.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 6, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ 
            mb: 3,
            fontWeight: 600,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            वार्षिक प्रगती तक्ता
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.light' }}>
                  <TableCell sx={{ fontWeight: 600 }}>वर्ष</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>सेवित मुले</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>पोषण सेवा</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>आरोग्य तपासणी</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>शिक्षण सेवा</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {progressData.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.children}</TableCell>
                    <TableCell>{row.nutrition}</TableCell>
                    <TableCell>{row.healthCheckups}</TableCell>
                    <TableCell>{row.education}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            mb: 3,
            fontFamily: "'Noto Sans Devanagari', sans-serif"
          }}>
            प्रमुख उपलब्धी
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                गेल्या ५ वर्षांत बालकांच्या पोषण स्थितीत ३०% सुधारणा
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                ९८% मुलांना लसीकरण पूर्ण
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                आंगणवाडी केंद्रांची संख्या १७५ वरून १९८ पर्यंत वाढ
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                महिला साक्षरता दर ७२% वरून ८५% पर्यंत वाढ
              </Typography>
            </li>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PragatiAhval;