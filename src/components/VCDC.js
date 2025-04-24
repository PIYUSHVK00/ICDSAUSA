import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  AccountCircle, 
  Favorite,
  LocalHospital,
  MedicalServices,
  ChildCare
} from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function VCDCYojana() {
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
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745406832/VCDC_d25aop.jpg"
            alt="ग्राम बाल विकास केंद्र (VCDC) योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            ग्राम बाल विकास केंद्र (VCDC) योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            ० ते ६ वर्षांमधील अति तीव्र कुपोषित (SAM) बालकांसाठी विशेष पोषण व आरोग्य सेवा.
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
            href="/apply-now"
          >
            अधिक माहिती
          </Button>
        </Grid>
      </Grid>

      {/* Beneficiary Section */}
      <Paper sx={{ p: 3, mt: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <AccountCircle sx={{ mr: 1 }} /> लाभार्थी
        </Typography>
        <Typography paragraph sx={{ ml: 4 }}>
          ० ते ६ वर्षांमधील अति तीव्र कुपोषित (SAM) बालके
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <ChildCare sx={{ mr: 1 }} /> योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          कुपोषणमुक्त महाराष्ट्रासाठी राज्य सरकारच्या धोरणानुसार ० ते ६ वयोगटातील तीव्र कुपोषित बालकांसाठी राज्यात 'ग्राम बाल विकास केंद्रे' स्थापन केलेली आहेत. या बालकांना अतिरिक्त आहार पुरवठा, वैद्यकीय देखरेख, पालकांचे पोषणविषयक समुपदेशन या पायाभूत गोष्टींवर भर देण्यात येतो.
        </Typography>
        <Typography paragraph>
          अंगणवाडीत ० ते ६ वयोगटांतील सर्व बालकांची वजन, उंची, दंडघेर, पायावरील सूज या निकषावर पडताळणी करण्यात येऊन त्यामध्ये तीव्र कुपोषित आढळून येणाऱ्या बालकांना ग्राम बाल विकास केंद्रात प्रवेश देण्यात येतो. प्रत्येक तीव्र कुपोषित बालक सर्वसाधारण पोषण श्रेणीत आणण्यांसाठी ग्राम बाल विकास केंद्रात सर्वकष प्रयत्न केले जातात.
        </Typography>
      </Paper>

      {/* Objectives Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Favorite sx={{ mr: 1 }} /> योजनेची उद्दीष्टे
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालकांच्या कुपोषणाच्या समस्येवर मात करण्यासाठी पूरक पोषण आहार देणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बालकांच्या कुपोषणाच्या समस्या दूर करण्यासाठी आरोग्य सेवा पुरवणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>अति तीव्र कुपोषित बालकांचे कुपोषणापासून मुक्ती करणे</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <LocalHospital sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              राज्यातील अती तीव्र कुपोषित (SAM) बालकांना कुपोषणातून बाहेर काढण्यासाठी ग्राम/अंगणवाडीस्तरावर ग्राम बाल विकास केंद्र सुरु करण्यात आलेले आहेत.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              या अंतर्गत कुपोषित बालकांना एका महिन्याकरिता अंगणवाडीत दिवसभर ठेवण्यात येते.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              अंगणवाडीत दररोज किमान ६ वेळा बालकांना पौष्टीक आहार देण्यात येतो.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              अतिरिक्त आहाराच्या स्वरूपात अती तीव्र कुपोषित (SAM) बालकांना Energy Dense Nutritious Foods (EDNF) देण्यात येतो.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>
              आठवड्यातून एकदा ए.एन.एम., १५ दिवसातून एकदा प्राथमिक आरोग्य केंद्राचे वैद्यकीय अधिकारी हे ग्राम बाल विकास केंद्राला (VCDC) भेट देउन सर्व बालकांची आरोग्य तपासणी करण्यात येते.
            </Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <MedicalServices sx={{ mr: 1 }} /> निकष / कार्यप्रणाली
        </Typography>
        <Typography paragraph>
          अंगणवाडीमधील अंगणवाडी सेविका ६ महिन्यापासून ६ वर्षापर्यंतच्या बालकांची उंची आणि वजन घेऊन अती तीव्र कुपोषित (SAM) बालकांची माहिती प्राथमिक आरोग्य केंद्रातील वैद्यकीय अधिकारी हे बालक अती तीव्र कुपोषित(SAM) श्रेणीतील (category) आहे किंवा नाही याबाबत तपासणी करून खात्री करतात आणी ग्राम बाल विकास केंद्रात (VCDC) दाखल करण्याची गरज असल्यास अती तीव्र कुपोषित (SAM) बालकाला ग्राम बाल विकास केंद्रात (VCDC) दाखल करण्यात येते.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#1565c0' }}>
          SAM बालक ओळखण्याचे निकष:
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#e3f2fd' }}>
                <TableCell>अ.क्र.</TableCell>
                <TableCell>निकष</TableCell>
                <TableCell>मापन</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>१.</TableCell>
                <TableCell>वजन/उंचीचे गुणोत्तर</TableCell>
                <TableCell>-3SD पेक्षा कमी</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>२.</TableCell>
                <TableCell>मध्यबाहू परिघ (MUAC)</TableCell>
                <TableCell>11.5 cm पेक्षा कमी</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>३.</TableCell>
                <TableCell>पायावरील सूज</TableCell>
                <TableCell>क्लिनिकल चिन्हे</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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