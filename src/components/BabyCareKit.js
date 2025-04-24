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
  ListItemIcon
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  AccountCircle, 
  Favorite, 
  ChildCare,
  MedicalServices,
  Toys
} from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export default function BabyCareKitYojana() {
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
            src="https://res.cloudinary.com/dn9q2qrcy/image/upload/v1745386604/baby_care_ea50vy.jpg"
            alt="बेबी केअर किट योजना"
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1a237e' }}>
            बेबी केअर किट योजना
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.1rem' }}>
            नवजात बालकांसाठी आवश्यक वस्तूंचा संच मोफत पुरवठा करणारी योजना.
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
          अंगणवाडी केंद्रात नोंदणी केलेल्या व महाराष्ट्र राज्यातील शासकीय प्राथमिक आरोग्य केंद्र/ शासकीय रुग्णालयात गरोदरपणी नाव नोंदणी केलेल्या व त्याठिकाणी प्रसुती होण्या-या महिलांना पहिल्या प्रसुतीच्यावेळी त्यांच्या नवजात बालकांकरिता (मुलगा किंवा मुलगी) हि योजना कार्यरत आहे.
        </Typography>
      </Paper>

      {/* Description Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <ChildCare sx={{ mr: 1 }} /> योजनेचे वर्णन
        </Typography>
        <Typography paragraph>
          राज्य शासनाच्या दिलेल्या मान्यतेनुसार बेबी केअर किट योजना लागू करण्यात आली, त्यानुसार महाराष्ट्र राज्यात शासकीय प्राथमिक आरोग्य केंद्र/ शासकीय रुग्णालयात गरोदरपणी नाव नोंदणी केलेल्या व त्याठिकाणी प्रसुती होणाऱ्या नवजात बालकांना पहिल्या प्रसुतीच्या वेळी मुलगा किंवा मुलगी जन्मल्यानंतर त्यांना मोफत शासनातर्फे रुपये २०००/- इतक्या रक्कमेपर्यंत बेबी केअर कीट बॅग उपलब्ध करुन देण्यात येते.
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
            <Typography>शासकीय प्राथमिक आरोग्य केंद्र/शासकीय रुग्णालयामध्ये प्रसूती करण्यास प्रोत्साहन देणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>बाल मृत्यू दर कमी करणे</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <Typography>गरोदर माता व नवजात शिशुच्या आरोग्याची काळजी घेणे</Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Scheme Structure */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <Toys sx={{ mr: 1 }} /> योजनेचे स्वरुप
        </Typography>
        <Typography paragraph>
          प्रत्येक बेबी केअर किटमध्ये खालील वस्तूंचा समावेश आहे:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान मुलांचे कपडे</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लंगोट</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान मुलांची झोपण्याची लहान गादी</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान मुलांचे टॉवेल</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>ताप मापन यंत्र (इलेक्ट्रॉनिक थर्मामीटर)</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>मच्छरदाणी</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान मुलांसाठी गरम ब्लँकेट</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान चटई (प्लास्टिक)</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>लहान मुलांची खेळणी (खुळखुळा)</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>नेलकटर</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>हातमोजे व पायमोजे</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>बांधण्यासाठी कापड/लोकरीचे कापड</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <Typography>सर्व साहित्य ठेवण्यासाठी बॅग</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Criteria Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', display: 'flex', alignItems: 'center' }}>
          <MedicalServices sx={{ mr: 1 }} /> निकष / कार्यप्रणाली
        </Typography>
        <Typography paragraph>
          शासकीय प्राथमिक आरोग्य केंद्र/शासकीय रुग्णालयात नाव नोंदणी केलेल्या महिलेने गरोदरपणी ९ व्या महिन्यात जवळच्या अंगणवाडी केंद्रात अंगणवाडी सेविकेला माहिती/ अर्ज दिल्यानंतर अंगणवाडी सेविकेकडून संबधित लाभार्थ्यांना बेबी केअर कीट बॅग उपलब्ध करुन देण्यात येते.
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