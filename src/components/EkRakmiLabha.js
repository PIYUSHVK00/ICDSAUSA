import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, AccountCircle, MonetizationOn, AssignmentInd } from '@mui/icons-material';

export default function EkRakmiLabhaYojana() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />}
        onClick={() => navigate('/Yojana')}
        sx={{ mb: 3 }}
      >
        मागे जा
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={5} md={3}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406590/favicon_e2ahxl.jpg"
            alt="एकरक्कमी लाभ योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            एकरक्कमी लाभ योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            अंगणवाडी कर्मचाऱ्यांना सेवानिवृत्ती/राजीनामा/मृत्यू नंतर एकरकमी आर्थिक सहाय्य देणारी योजना.
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
            href="/apply-now"
          >
            अर्ज करा
          </Button>
        </Grid>
      </Grid>

      {/* Beneficiary Section */}
      <Paper sx={{ p: 3, mt: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <AccountCircle sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          सेवानिवृत्त/राजीनामा/मृत्यू झालेल्या अंगणवाडी सेविका/मदतनीस/मिनी अंगणवाडी सेविका.
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          अंगणवाडी सेविका, मिनी अंगणवाडी सेविका व मदतनीस या मानधनी कर्मचाऱ्यांना सेवानिवृत्ती/राजीनामा/मृत्यु/सेवेतून काढून टाकल्यानंतर अथवा मुख्यसेविका/पर्यवेक्षिका या पदावर पदोन्नती होईपर्यंत एकरकमी लाभ देण्याबाबतची योजना शासन निर्णय दिनांक ३०/०४/२०१४ अन्वये सुरु करण्यात आली.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          उद्दिष्टे
        </Typography>
        <Typography paragraph>
          अंगणवाडी सेविका, मिनी अंगणवाडी सेविका व मदतनीस या मानधनी कर्मचाऱ्यांना सेवानिवृत्ती/राजीनामा/मृत्यु/सेवेतून काढून टाकल्यानंतर कल्याणकारी निधी म्हणून एकरकमी लाभ देणे.
        </Typography>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <MonetizationOn sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          मृत्यू/वयाच्या ६५ व्या वर्षी सेवानिवृत्त होणाऱ्या अंगणवाडी सेविका यांना रु. १,००,०००/- व अंगणवाडी मदतनीस/मिनी अंगणवाडी सेविका यांना ७५,०००/- रु एकरकमी लाभ दिला जातो.
        </Typography>
        <Typography paragraph>
          राजीनामा/सेवासमाप्ती होणाऱ्या अंगणवाडी सेविका/मदतनीस/मिनी अंगणवाडी सेविका यांना त्यांचे शेवटचे मानधन × एकूण सेवा (वर्षांमध्ये) इतकी रक्कम तथा अंगणवाडी सेविका यांना जास्तीत जास्त रु. १०००००/- व अंगणवाडी मदतनीस/मिनी अंगणवाडी सेविका यांना जास्तीत जास्त रु. ७५,०००/- एकरकमी लाभ म्हणून दिला जातो.
        </Typography>
      </Paper>

      {/* Criteria Table */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <AssignmentInd sx={{ mr: 1 }} /> निकष
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#e3f2fd' }}>
                <TableCell>अ.क्र.</TableCell>
                <TableCell>लाभाचे निकष</TableCell>
                <TableCell>अंगणवाडी सेविका</TableCell>
                <TableCell>मिनी अंगणवाडी सेविका व मदतनीस</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>१.</TableCell>
                <TableCell>वयाची ६५ वर्षे पूर्ण होऊन सेवानिवृत्त</TableCell>
                <TableCell>रु. १ लाख</TableCell>
                <TableCell>रु. ७५ हजार</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>२.</TableCell>
                <TableCell>राजीनामा/सेवेतून काढून टाकणे</TableCell>
                <TableCell>
                  प्रत्येक पूर्ण सेवा केलेल्या एका वर्षातील त्यावेळी दरमहा घेत असलेले मानधन (जास्तीत जास्त रु. १ लाख) तथापि किमान ५ वर्ष सेवा पूर्ण करणे आवश्यक
                </TableCell>
                <TableCell>
                  प्रत्येक पूर्ण सेवा केलेल्या एका वर्षातील त्यावेळी दरमहा घेत असलेले मानधन (जास्तीत जास्त रु. ७५ हजार) तथापि किमान ५ वर्ष सेवा पूर्ण करणे आवश्यक
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>३.</TableCell>
                <TableCell>सेवेत कार्यरत असताना मृत्यू पावल्यास</TableCell>
                <TableCell>रु. १ लाख त्यांच्या वैध वारसदारास</TableCell>
                <TableCell>रु. ७५ हजार त्यांच्या वैध वारसदारास</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Terms and Conditions */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
          अटी व शर्ती
        </Typography>
        <Typography paragraph>
          • किमान ५ वर्षांची सेवा पूर्ण करणे अनिवार्य<br />
          • अर्जासोबत सर्व आवश्यक दस्तऐवज सादर करणे अनिवार्य<br />
          • वारसदारांसाठी मृत्यू प्रमाणपत्र आणि वारसा दाखला आवश्यक
        </Typography>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          अधिक माहितीसाठी संपर्क करा:
        </Typography>
        <Typography>
        बाल विकास प्रकल्प अधिकारी (ग्रामीण)
        एकात्मिक बाल विकास सेवा योजना प्रकल्प, औसा<br />
        ईमेल: cdpoicdsausa@gmail.com
        </Typography>
      </Box>
    </Container>
  );
}